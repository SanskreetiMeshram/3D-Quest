import * as THREE from 'three';
import { GameState, GAME_MODES } from './GameState.js';
import { SaveSystem } from '../systems/SaveSystem.js';
import { AudioManager } from '../systems/AudioManager.js';
import { AssetManager } from '../systems/AssetManager.js';
import { CollisionSystem } from '../systems/CollisionSystem.js';
import { World } from '../world/World.js';
import { Player } from '../player/Player.js';
import { PlayerController } from '../player/PlayerController.js';
import { ThirdPersonCamera } from '../camera/ThirdPersonCamera.js';
import { InteractionManager } from '../interaction/InteractionManager.js';
import { QuestionManager } from '../questions/QuestionManager.js';
import { ChallengeManager } from '../challenges/ChallengeManager.js';

import { MainMenu } from '../ui/MainMenu.js';
import { HUD } from '../ui/HUD.js';
import { TopicMenu } from '../ui/TopicMenu.js';
import { DialogueBox } from '../ui/DialogueBox.js';
import { QuizScreen } from '../ui/QuizScreen.js';
import { ResultsScreen } from '../ui/ResultsScreen.js';
import { PauseMenu } from '../ui/PauseMenu.js';
import { SettingsScreen } from '../ui/SettingsScreen.js';

/**
 * Game.js
 * Master game engine orchestrating 3D rendering, simulation, and all game subsystems.
 */
export class Game {
  constructor() {
    this.container = document.getElementById('game-container');
    this.clock = new THREE.Clock();
    this.prevTime = performance.now();

    // Core Systems
    this.gameState = new GameState();
    this.saveSystem = new SaveSystem(this.gameState);
    this.audioManager = new AudioManager(this.gameState);
    this.assetManager = new AssetManager();
    this.collisionSystem = new CollisionSystem();
    this.questionManager = new QuestionManager();
    this.challengeManager = new ChallengeManager(this.questionManager, this.gameState, this.audioManager);

    // Three.js Foundation
    this.initThree();
  }

  initThree() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0f1423);
    this.scene.fog = new THREE.FogExp2(0x0f1423, 0.009);

    this.camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      300
    );
    this.camera.position.set(0, 5, 20);

    this.renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.container.appendChild(this.renderer.domElement);

    window.addEventListener('resize', () => this.onWindowResize());
  }

  async start() {
    // 1. Initialize Save System
    this.saveSystem.init();

    // 2. Load Assets with Progress Screen
    const loadingScreen = document.getElementById('loading-screen');
    const progressBar = document.getElementById('loading-progress-bar');
    const percentText = document.getElementById('loading-percent-text');
    const statusText = document.getElementById('loading-status-text');
    const btnStartLoaded = document.getElementById('btn-start-loaded');

    await this.assetManager.loadAll((percent, msg) => {
      if (progressBar) progressBar.style.width = `${percent}%`;
      if (percentText) percentText.textContent = `${percent}%`;
      if (statusText) statusText.textContent = msg;
    });

    // 3. Build 3D World & Entities
    this.world = new World(this.scene, this.collisionSystem, this.assetManager, this.audioManager);
    this.player = new Player(this.scene, this.assetManager, this.collisionSystem, this.audioManager);
    this.controller = new PlayerController(this.camera);
    this.player.setController(this.controller);
    this.tpsCamera = new ThirdPersonCamera(this.camera, this.player, this.renderer.domElement);
    this.interactionManager = new InteractionManager(this.world, this.gameState, this.audioManager);

    // 4. Initialize UI Subsystems
    this.initUI();

    // 5. Connect Controller Event Hooks
    this.controller.onInteractCallback = () => this.interactionManager.triggerInteraction();
    this.controller.onPauseCallback = () => this.togglePause();
    this.controller.onTopicsCallback = () => this.openTopicMenu();

    // 6. Transition from Loading to Menu
    if (statusText) statusText.textContent = 'Academy Ready!';
    if (btnStartLoaded) {
      btnStartLoaded.classList.remove('hidden');
      btnStartLoaded.addEventListener('click', () => {
        this.audioManager.resume();
        this.audioManager.startAmbientBgm();
        loadingScreen.classList.add('hidden');
        this.mainMenu.show();
        this.gameState.setMode(GAME_MODES.MAIN_MENU);
      });
    }

    // 7. Start Animation Loop
    this.animate();
  }

  initUI() {
    // Main Menu
    this.mainMenu = new MainMenu(this.gameState, this.audioManager, (action) => {
      if (action === 'play' || action === 'continue') {
        this.enterExploration();
      } else if (action === 'topics') {
        this.openTopicMenu();
      } else if (action === 'howtoplay') {
        document.getElementById('howtoplay-screen')?.classList.remove('hidden');
      } else if (action === 'settings') {
        this.settingsScreen.show();
      }
    });

    // How to play close button
    document.getElementById('btn-close-howtoplay')?.addEventListener('click', () => {
      this.audioManager.playClick();
      document.getElementById('howtoplay-screen')?.classList.add('hidden');
    });
    document.getElementById('btn-back-howtoplay')?.addEventListener('click', () => {
      this.audioManager.playClick();
      document.getElementById('howtoplay-screen')?.classList.add('hidden');
    });

    // HUD
    this.hud = new HUD(this.gameState, this.audioManager, (action) => {
      if (action === 'topics') this.openTopicMenu();
      else if (action === 'pause') this.togglePause();
    });

    // Topic Menu
    this.topicMenu = new TopicMenu(
      this.questionManager,
      this.gameState,
      this.audioManager,
      (topicId) => {
        this.topicMenu.hide();
        this.teleportToTopicRoom(topicId);
        this.challengeManager.startChallenge(topicId);
      },
      () => {
        if (this.gameState.mode === GAME_MODES.MAIN_MENU) {
          this.mainMenu.show();
        } else {
          this.enterExploration();
        }
      }
    );

    // Dialogue Box
    this.dialogueBox = new DialogueBox(this.gameState, this.audioManager, () => {
      this.enterExploration();
    });

    // Quiz Screen
    this.quizScreen = new QuizScreen(this.challengeManager.quizEngine, this.gameState, this.audioManager);

    // Results Screen
    this.resultsScreen = new ResultsScreen(this.gameState, this.audioManager, (action, topicId) => {
      this.resultsScreen.hide();
      if (action === 'retry') {
        this.challengeManager.startChallenge(topicId || 'triangles');
      } else if (action === 'topics') {
        this.openTopicMenu();
      } else {
        this.enterExploration();
      }
    });

    // Pause Menu
    this.pauseMenu = new PauseMenu(this.gameState, this.audioManager, (action) => {
      this.pauseMenu.hide();
      if (action === 'resume') {
        this.enterExploration();
      } else if (action === 'topics') {
        this.openTopicMenu();
      } else if (action === 'settings') {
        this.settingsScreen.show();
      } else if (action === 'mainmenu') {
        this.hud.hide();
        this.mainMenu.show();
        this.gameState.setMode(GAME_MODES.MAIN_MENU);
      }
    });

    // Settings Screen
    this.settingsScreen = new SettingsScreen(this.gameState, this.audioManager, this.saveSystem, () => {
      if (this.gameState.mode === GAME_MODES.PAUSED) {
        this.pauseMenu.show();
      } else if (this.gameState.mode === GAME_MODES.MAIN_MENU) {
        this.mainMenu.show();
      }
    });

    // Wire Interaction Trigger
    this.interactionManager.onInteractTriggered = (interactable) => {
      if (interactable.type === 'npc') {
        this.hud.hide();
        this.dialogueBox.startDialogue();
      } else if (interactable.type === 'terminal') {
        if (interactable.isUnlocked) {
          this.hud.hide();
          this.challengeManager.startChallenge(interactable.topicId);
        } else {
          this.hud.showToast(`🔒 ${interactable.topicName} is locked! Raise your level to unlock.`);
          this.audioManager.playWrong();
        }
      }
    };

    // Wire Challenge Events to UI
    const qEngine = this.challengeManager.quizEngine;
    qEngine.onChallengeComplete = (data) => {
      this.quizScreen.hide();
      this.resultsScreen.showResults(data, false);
    };
    qEngine.onGameOver = (data) => {
      this.quizScreen.hide();
      this.resultsScreen.showResults(data, true);
    };

    this.gameState.on('modeChanged', ({ newMode }) => {
      if (newMode === GAME_MODES.CHALLENGE) {
        this.hud.hide();
        this.quizScreen.show();
      }
    });
  }

  enterExploration() {
    this.mainMenu.hide();
    this.pauseMenu.hide();
    this.resultsScreen.hide();
    this.topicMenu.hide();
    this.quizScreen.hide();
    this.dialogueBox.hide();
    this.hud.show();
    this.gameState.setMode(GAME_MODES.EXPLORATION);
  }

  togglePause() {
    if (this.gameState.mode === GAME_MODES.EXPLORATION) {
      this.gameState.setMode(GAME_MODES.PAUSED);
      this.pauseMenu.show();
    } else if (this.gameState.mode === GAME_MODES.PAUSED) {
      this.pauseMenu.hide();
      this.enterExploration();
    }
  }

  openTopicMenu() {
    this.mainMenu.hide();
    this.pauseMenu.hide();
    this.hud.hide();
    this.topicMenu.show();
    this.gameState.setMode(GAME_MODES.TOPIC_SELECT);
  }

  teleportToTopicRoom(topicId) {
    const roomPositions = {
      lines_angles: { x: -36, z: -26 },
      triangles: { x: 0, z: -42 },
      quadrilaterals: { x: 36, z: -26 },
      circles: { x: 44, z: 0 },
      perimeter: { x: -44, z: 0 },
      area: { x: -44, z: 32 },
      surface_area: { x: -68, z: -18 },
      volume: { x: -68, z: 18 },
      pythagoras: { x: -25, z: 24 },
      coordinates: { x: 44, z: -32 },
      symmetry: { x: 44, z: 32 },
      shapes_3d: { x: 68, z: 0 },
      mixed: { x: 0, z: -76 }
    };

    const target = roomPositions[topicId] || { x: 0, z: 10 };
    this.player.teleport(new THREE.Vector3(target.x, 0, target.z));
    this.tpsCamera.reset();
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = Math.min(this.clock.getDelta(), 0.1);
    const time = this.clock.getElapsedTime();

    if (this.gameState.mode === GAME_MODES.EXPLORATION) {
      this.player.update(delta, this.camera);
      this.tpsCamera.update(delta, this.collisionSystem.colliders);
      this.world.update(delta, time);
      this.interactionManager.update(this.player.position);

      // Check collectible pickup
      this.world.checkCollectibles(this.player.position, (item) => {
        this.gameState.addTokens(1);
        this.gameState.addXP(item.score);
        this.gameState.addScore(item.score * 2);
        this.hud.showToast(`+1 Token! (+${item.score} XP)`);
      });

      // Update location banner based on player coordinates
      this.updatePlayerLocationBanner();
    } else {
      // In menus/dialogue, keep subtle environmental animation alive
      this.world.update(delta, time);
    }

    this.renderer.render(this.scene, this.camera);
  }

  updatePlayerLocationBanner() {
    const pos = this.player.position;
    let room = 'Central Courtyard';

    if (pos.z < -65) room = 'Grand Master Arena';
    else if (pos.z < -35 && Math.abs(pos.x) < 14) room = 'Triangle Domain';
    else if (pos.x < -20 && pos.z < -18) room = 'Lines & Angles Pavilion';
    else if (pos.x > 20 && pos.z < -18) room = 'Quadrilateral Hall';
    else if (pos.x > 38 && Math.abs(pos.z) < 18) room = 'Circle Sanctuary';
    else if (pos.x < -38 && Math.abs(pos.z) < 18) room = 'Perimeter Chamber';
    else if (pos.x < -38 && pos.z > 18) room = 'Area Laboratory';
    else if (pos.x < -15 && pos.z > 18) room = 'Pythagorean Temple';
    else if (pos.x > 15 && pos.z > 18) room = 'Geometry Classroom';
    else if (pos.z > 40) room = 'Main Entrance Arch';

    if (this.gameState.currentRoom !== room) {
      this.gameState.currentRoom = room;
      this.hud.setLocation(room);
    }
  }
}
