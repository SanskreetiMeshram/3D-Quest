/**
 * HUD.js
 * Manages the Heads Up Display shown during 3D exploration and challenges.
 */
export class HUD {
  constructor(gameState, audioManager, onAction) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onAction = onAction;

    this.hudEl = document.getElementById('hud');
    this.levelBadge = document.getElementById('hud-level-badge');
    this.titleBadge = document.getElementById('hud-title-badge');
    this.xpBar = document.getElementById('hud-xp-bar');
    this.xpText = document.getElementById('hud-xp-text');
    this.tokensCount = document.getElementById('hud-tokens-count');
    this.scoreCount = document.getElementById('hud-score-count');
    this.locationName = document.getElementById('hud-location-name');
    this.objectiveText = document.getElementById('hud-objective-text');

    this.toastEl = document.getElementById('toast');
    this.toastMsg = document.getElementById('toast-msg');

    this.btnTopics = document.getElementById('btn-hud-topics');
    this.btnPause = document.getElementById('btn-hud-pause');

    this.init();
  }

  init() {
    this.btnTopics?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('topics');
    });

    this.btnPause?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('pause');
    });

    this.gameState.on('xpChanged', (data) => {
      this.updateXP(data.xp, data.xpToNextLevel, data.level);
    });

    this.gameState.on('levelUp', (data) => {
      this.showToast(`🎉 Level Up! You reached Level ${data.level}!`);
      this.audioManager.playLevelUp();
    });

    this.gameState.on('tokensChanged', (data) => {
      if (this.tokensCount) this.tokensCount.textContent = data.tokens;
    });

    this.gameState.on('scoreChanged', (data) => {
      if (this.scoreCount) this.scoreCount.textContent = data.totalScore;
    });

    this.updateAll();
  }

  getTitleForLevel(lvl) {
    if (lvl >= 10) return 'Archimedes Grand Master';
    if (lvl >= 8) return 'Supreme Dimensionalist';
    if (lvl >= 6) return 'Euclidean Scholar';
    if (lvl >= 4) return 'Pythagorean Adept';
    if (lvl >= 2) return 'Junior Geometer';
    return 'Novice Geometer';
  }

  updateXP(xp, xpToNext, lvl) {
    if (this.levelBadge) this.levelBadge.textContent = `LVL ${lvl}`;
    if (this.titleBadge) this.titleBadge.textContent = this.getTitleForLevel(lvl);
    if (this.xpText) this.xpText.textContent = `${xp} / ${xpToNext} XP`;
    if (this.xpBar) {
      const pct = Math.min(100, Math.round((xp / xpToNext) * 100));
      this.xpBar.style.width = `${pct}%`;
    }
  }

  updateAll() {
    this.updateXP(this.gameState.xp, this.gameState.xpToNextLevel, this.gameState.level);
    if (this.tokensCount) this.tokensCount.textContent = this.gameState.tokens;
    if (this.scoreCount) this.scoreCount.textContent = this.gameState.totalScore;
    if (this.locationName) this.locationName.textContent = this.gameState.currentRoom;
  }

  setLocation(name) {
    if (this.locationName) this.locationName.textContent = name;
  }

  setObjective(text) {
    if (this.objectiveText) this.objectiveText.textContent = text;
  }

  showToast(msg) {
    if (!this.toastEl || !this.toastMsg) return;
    this.toastMsg.textContent = msg;
    this.toastEl.classList.remove('hidden');
    setTimeout(() => {
      this.toastEl.classList.add('hidden');
    }, 3500);
  }

  show() {
    this.updateAll();
    this.hudEl?.classList.remove('hidden');
  }

  hide() {
    this.hudEl?.classList.add('hidden');
  }
}
