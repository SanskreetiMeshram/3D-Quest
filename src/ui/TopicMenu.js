/**
 * TopicMenu.js
 * Renders the 13 topic cards, unlock states, stars, and direct fast-travel / challenge launch.
 */
export class TopicMenu {
  constructor(questionManager, gameState, audioManager, onSelectTopic, onClose) {
    this.questionManager = questionManager;
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onSelectTopic = onSelectTopic;
    this.onClose = onClose;

    this.screenEl = document.getElementById('topic-menu-screen');
    this.gridEl = document.getElementById('topics-grid');
    this.btnClose = document.getElementById('btn-close-topics');
    this.btnBack = document.getElementById('btn-back-from-topics');

    this.init();
  }

  init() {
    this.btnClose?.addEventListener('click', () => {
      this.audioManager.playClick();
      if (this.onClose) this.onClose();
    });

    this.btnBack?.addEventListener('click', () => {
      this.audioManager.playClick();
      if (this.onClose) this.onClose();
    });
  }

  render() {
    if (!this.gridEl) return;
    this.gridEl.innerHTML = '';

    const topics = this.questionManager.getAllTopics();

    topics.forEach((topic) => {
      const stats = this.gameState.topicStats[topic.id] || { unlocked: false, stars: 0, bestScore: 0 };
      const isUnlocked = stats.unlocked;

      const card = document.createElement('div');
      card.className = `topic-card ${isUnlocked ? '' : 'locked'}`;

      let starIcons = '';
      for (let i = 1; i <= 3; i++) {
        starIcons += i <= stats.stars ? '⭐' : '☆';
      }

      card.innerHTML = `
        <div class="topic-card-header">
          <span class="topic-icon">${topic.icon}</span>
          <span class="topic-stars">${isUnlocked ? starIcons : '🔒'}</span>
        </div>
        <h4 class="topic-title">${topic.name}</h4>
        <p style="font-size: 0.8rem; color: var(--text-muted);">${topic.desc}</p>
        <div class="topic-meta">
          <span>${isUnlocked ? `Best: ${stats.bestScore}` : 'Locked'}</span>
          <span>${isUnlocked ? `${topic.questions.length} Qs` : `Req: Level ${this.getUnlockLevel(topic.id)}`}</span>
        </div>
      `;

      if (isUnlocked) {
        card.addEventListener('click', () => {
          this.audioManager.playClick();
          if (this.onSelectTopic) {
            this.onSelectTopic(topic.id);
          }
        });
      }

      this.gridEl.appendChild(card);
    });
  }

  getUnlockLevel(id) {
    switch (id) {
      case 'surface_area': return 2;
      case 'volume': return 3;
      case 'pythagoras': return 4;
      case 'coordinates': return 5;
      case 'symmetry': return 6;
      case 'shapes_3d': return 7;
      case 'mixed': return 8;
      default: return 1;
    }
  }

  show() {
    this.render();
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
