/**
 * MainMenu.js
 * Controls the primary launch menu, buttons, and high-level navigation.
 */
export class MainMenu {
  constructor(gameState, audioManager, onAction) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onAction = onAction;

    this.screenEl = document.getElementById('main-menu-screen');
    this.btnPlay = document.getElementById('btn-menu-play');
    this.btnContinue = document.getElementById('btn-menu-continue');
    this.btnTopics = document.getElementById('btn-menu-topics');
    this.btnHowToPlay = document.getElementById('btn-menu-howtoplay');
    this.btnSettings = document.getElementById('btn-menu-settings');

    this.starsEl = document.getElementById('menu-total-stars');
    this.levelEl = document.getElementById('menu-player-lvl');
    this.tokensEl = document.getElementById('menu-total-tokens');
    this.continueInfoEl = document.getElementById('continue-info');

    this.init();
  }

  init() {
    this.btnPlay?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('play');
    });

    this.btnContinue?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('continue');
    });

    this.btnTopics?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('topics');
    });

    this.btnHowToPlay?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('howtoplay');
    });

    this.btnSettings?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('settings');
    });

    this.updateStats();
    this.gameState.on('stateLoaded', () => this.updateStats());
    this.gameState.on('progressUpdated', () => this.updateStats());
    this.gameState.on('xpChanged', () => this.updateStats());
    this.gameState.on('tokensChanged', () => this.updateStats());
  }

  updateStats() {
    if (this.starsEl) this.starsEl.textContent = `⭐ ${this.gameState.totalStars} / 39 Stars`;
    if (this.levelEl) this.levelEl.textContent = `🏆 Level ${this.gameState.level}`;
    if (this.tokensEl) this.tokensEl.textContent = `🪙 ${this.gameState.tokens} Tokens`;
    if (this.continueInfoEl) this.continueInfoEl.textContent = `Level ${this.gameState.level} • Courtyard`;
  }

  show() {
    this.updateStats();
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
