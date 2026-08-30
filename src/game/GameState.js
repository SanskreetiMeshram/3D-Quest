/**
 * GameState.js
 * Central reactive game state container for Geometry Quest 3D.
 */

export const GAME_MODES = {
  LOADING: 'LOADING',
  MAIN_MENU: 'MAIN_MENU',
  EXPLORATION: 'EXPLORATION',
  DIALOGUE: 'DIALOGUE',
  CHALLENGE: 'CHALLENGE',
  RESULTS: 'RESULTS',
  PAUSED: 'PAUSED',
  SETTINGS: 'SETTINGS',
  TOPIC_SELECT: 'TOPIC_SELECT',
  HOW_TO_PLAY: 'HOW_TO_PLAY'
};

export class GameState {
  constructor() {
    this.mode = GAME_MODES.LOADING;
    this.listeners = new Map();

    // Player Progression
    this.level = 1;
    this.xp = 0;
    this.xpToNextLevel = 100;
    this.tokens = 0;
    this.totalScore = 0;
    this.totalStars = 0;
    this.unlockedRooms = ['lines_angles', 'triangles', 'quadrilaterals', 'circles', 'perimeter', 'area'];

    // Topic Masteries & High Scores
    // Topics: lines_angles, triangles, quadrilaterals, circles, perimeter, area, surface_area, volume, pythagoras, coordinates, symmetry, shapes_3d, mixed
    this.topicStats = {};
    this.initDefaultTopicStats();

    // Current Session / Challenge State
    this.currentTopic = null;
    this.currentRoom = 'Central Courtyard';
    this.challengeScore = 0;
    this.challengeLives = 3;
    this.challengeCombo = 0;
    this.challengeMaxCombo = 0;
    this.challengeCorrectCount = 0;
    this.challengeTotalQuestions = 10;
    this.challengeTimeRemaining = 30;
    this.isTimerRunning = false;

    // Settings
    this.settings = {
      bgmVolume: 0.6,
      sfxVolume: 0.8,
      graphicsQuality: 'medium',
      showHints: true
    };
  }

  initDefaultTopicStats() {
    const topics = [
      'lines_angles', 'triangles', 'quadrilaterals', 'circles',
      'perimeter', 'area', 'surface_area', 'volume',
      'pythagoras', 'coordinates', 'symmetry', 'shapes_3d', 'mixed'
    ];

    topics.forEach((t, idx) => {
      if (!this.topicStats[t]) {
        this.topicStats[t] = {
          unlocked: idx < 6, // First 6 unlocked by default
          stars: 0,
          bestScore: 0,
          timesCompleted: 0,
          accuracy: 0
        };
      }
    });
  }

  setMode(newMode) {
    const oldMode = this.mode;
    this.mode = newMode;
    this.emit('modeChanged', { newMode, oldMode });
  }

  addXP(amount) {
    this.xp += amount;
    let leveledUp = false;
    while (this.xp >= this.xpToNextLevel) {
      this.xp -= this.xpToNextLevel;
      this.level += 1;
      this.xpToNextLevel = Math.round(100 * Math.pow(1.25, this.level - 1));
      leveledUp = true;
      this.checkLevelUnlocks();
    }
    this.emit('xpChanged', { xp: this.xp, xpToNextLevel: this.xpToNextLevel, level: this.level, leveledUp, added: amount });
    if (leveledUp) {
      this.emit('levelUp', { level: this.level });
    }
  }

  addTokens(amount) {
    this.tokens += amount;
    this.emit('tokensChanged', { tokens: this.tokens, added: amount });
  }

  addScore(amount) {
    this.totalScore += amount;
    this.emit('scoreChanged', { totalScore: this.totalScore });
  }

  checkLevelUnlocks() {
    // Unlock advanced topics as level rises
    if (this.level >= 2 && this.topicStats['surface_area']) this.topicStats['surface_area'].unlocked = true;
    if (this.level >= 3 && this.topicStats['volume']) this.topicStats['volume'].unlocked = true;
    if (this.level >= 4 && this.topicStats['pythagoras']) this.topicStats['pythagoras'].unlocked = true;
    if (this.level >= 5 && this.topicStats['coordinates']) this.topicStats['coordinates'].unlocked = true;
    if (this.level >= 6 && this.topicStats['symmetry']) this.topicStats['symmetry'].unlocked = true;
    if (this.level >= 7 && this.topicStats['shapes_3d']) this.topicStats['shapes_3d'].unlocked = true;
    if (this.level >= 8 && this.topicStats['mixed']) this.topicStats['mixed'].unlocked = true;
  }

  updateTopicProgress(topicId, stars, score, accuracy) {
    if (!this.topicStats[topicId]) {
      this.topicStats[topicId] = { unlocked: true, stars: 0, bestScore: 0, timesCompleted: 0, accuracy: 0 };
    }
    const current = this.topicStats[topicId];
    current.timesCompleted += 1;
    if (stars > current.stars) current.stars = stars;
    if (score > current.bestScore) current.bestScore = score;
    if (accuracy > current.accuracy) current.accuracy = accuracy;

    // Recalculate total stars
    this.totalStars = Object.values(this.topicStats).reduce((acc, curr) => acc + (curr.stars || 0), 0);
    this.emit('progressUpdated', { topicId, stats: current, totalStars: this.totalStars });
  }

  on(event, callback) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }
    this.listeners.get(event).push(callback);
  }

  off(event, callback) {
    if (!this.listeners.has(event)) return;
    const list = this.listeners.get(event).filter(cb => cb !== callback);
    this.listeners.set(event, list);
  }

  emit(event, data) {
    if (this.listeners.has(event)) {
      this.listeners.get(event).forEach(cb => {
        try {
          cb(data);
        } catch (e) {
          console.error(`Error in GameState event listener '${event}':`, e);
        }
      });
    }
  }

  exportSaveData() {
    return {
      version: 1,
      level: this.level,
      xp: this.xp,
      xpToNextLevel: this.xpToNextLevel,
      tokens: this.tokens,
      totalScore: this.totalScore,
      totalStars: this.totalStars,
      topicStats: this.topicStats,
      settings: this.settings
    };
  }

  importSaveData(data) {
    if (!data || typeof data !== 'object') return false;
    this.level = data.level || 1;
    this.xp = data.xp || 0;
    this.xpToNextLevel = data.xpToNextLevel || 100;
    this.tokens = data.tokens || 0;
    this.totalScore = data.totalScore || 0;
    this.totalStars = data.totalStars || 0;
    if (data.topicStats) {
      this.topicStats = Object.assign(this.topicStats, data.topicStats);
    }
    if (data.settings) {
      this.settings = Object.assign(this.settings, data.settings);
    }
    this.checkLevelUnlocks();
    this.emit('stateLoaded', this.exportSaveData());
    return true;
  }
}
