/**
 * SaveSystem.js
 * Handles saving and loading player progress to LocalStorage with data validation and corruption recovery.
 */

export class SaveSystem {
  constructor(gameState) {
    this.gameState = gameState;
    this.storageKey = 'GEOMETRY_QUEST_3D_SAVE_V1';
    this.autoSaveInterval = null;
  }

  init() {
    this.load();
    // Auto-save on state events
    this.gameState.on('xpChanged', () => this.save());
    this.gameState.on('tokensChanged', () => this.save());
    this.gameState.on('progressUpdated', () => this.save());
    this.gameState.on('scoreChanged', () => this.save());

    // Auto-save every 30 seconds as safeguard
    this.autoSaveInterval = setInterval(() => {
      this.save();
    }, 30000);
  }

  save() {
    try {
      const data = this.gameState.exportSaveData();
      const serialized = JSON.stringify(data);
      localStorage.setItem(this.storageKey, serialized);
      return true;
    } catch (err) {
      console.warn('Failed to save game data to localStorage:', err);
      return false;
    }
  }

  load() {
    try {
      const serialized = localStorage.getItem(this.storageKey);
      if (!serialized) {
        // First time playing - start fresh
        return false;
      }
      const data = JSON.parse(serialized);
      if (data && typeof data === 'object') {
        const success = this.gameState.importSaveData(data);
        if (success) {
          console.log('Progress successfully loaded from save.');
          return true;
        }
      }
    } catch (err) {
      console.error('Save data corrupted, resetting to safe defaults:', err);
      this.reset();
    }
    return false;
  }

  reset() {
    try {
      localStorage.removeItem(this.storageKey);
      console.log('Save data wiped.');
    } catch (err) {
      console.warn('Error clearing localStorage:', err);
    }
  }
}
