/**
 * PauseMenu.js
 * Controls the pause menu overlay during gameplay.
 */
export class PauseMenu {
  constructor(gameState, audioManager, onAction) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onAction = onAction;

    this.screenEl = document.getElementById('pause-screen');
    this.btnResume = document.getElementById('btn-pause-resume');
    this.btnTopics = document.getElementById('btn-pause-topics');
    this.btnSettings = document.getElementById('btn-pause-settings');
    this.btnMainMenu = document.getElementById('btn-pause-mainmenu');

    this.init();
  }

  init() {
    this.btnResume?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('resume');
    });

    this.btnTopics?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('topics');
    });

    this.btnSettings?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('settings');
    });

    this.btnMainMenu?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('mainmenu');
    });
  }

  show() {
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
