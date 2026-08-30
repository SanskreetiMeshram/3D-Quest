/**
 * SettingsScreen.js
 * Controls audio sliders, graphics presets, help toggle, and safe save reset.
 */
export class SettingsScreen {
  constructor(gameState, audioManager, saveSystem, onClose) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.saveSystem = saveSystem;
    this.onClose = onClose;

    this.screenEl = document.getElementById('settings-screen');
    this.btnClose = document.getElementById('btn-close-settings');
    this.btnSave = document.getElementById('btn-save-settings');
    this.btnReset = document.getElementById('btn-reset-save');

    this.sliderBgm = document.getElementById('setting-bgm-volume');
    this.sliderSfx = document.getElementById('setting-sfx-volume');
    this.selectGraphics = document.getElementById('setting-graphics');
    this.toggleHints = document.getElementById('setting-hints');

    this.init();
  }

  init() {
    this.btnClose?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.close();
    });

    this.btnSave?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.close();
    });

    this.sliderBgm?.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) / 100;
      this.audioManager.setBgmVolume(val);
    });

    this.sliderSfx?.addEventListener('input', (e) => {
      const val = parseFloat(e.target.value) / 100;
      this.audioManager.setSfxVolume(val);
    });

    this.selectGraphics?.addEventListener('change', (e) => {
      this.gameState.settings.graphicsQuality = e.target.value;
    });

    this.toggleHints?.addEventListener('change', (e) => {
      this.gameState.settings.showHints = e.target.checked;
      const helper = document.querySelector('.hud-controls-helper');
      if (helper) {
        helper.style.display = e.target.checked ? 'flex' : 'none';
      }
    });

    this.btnReset?.addEventListener('click', () => {
      if (window.confirm('Are you sure you want to reset all your stars, high scores, and progress?')) {
        this.saveSystem.reset();
        window.location.reload();
      }
    });
  }

  syncUI() {
    if (this.sliderBgm) this.sliderBgm.value = Math.round(this.gameState.settings.bgmVolume * 100);
    if (this.sliderSfx) this.sliderSfx.value = Math.round(this.gameState.settings.sfxVolume * 100);
    if (this.selectGraphics) this.selectGraphics.value = this.gameState.settings.graphicsQuality || 'medium';
    if (this.toggleHints) this.toggleHints.checked = this.gameState.settings.showHints !== false;
  }

  close() {
    this.hide();
    if (this.onClose) this.onClose();
  }

  show() {
    this.syncUI();
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
