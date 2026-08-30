/**
 * ResultsScreen.js
 * Shows the completion summary, earned stars, accuracy, XP, tokens, and navigation buttons.
 */
export class ResultsScreen {
  constructor(gameState, audioManager, onAction) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onAction = onAction;

    this.screenEl = document.getElementById('results-screen');
    this.titleEl = document.getElementById('results-title');
    this.subtitleEl = document.getElementById('results-subtitle');
    this.starsRow = document.getElementById('results-stars-row');

    this.scoreVal = document.getElementById('res-score-value');
    this.accuracyVal = document.getElementById('res-accuracy-value');
    this.correctVal = document.getElementById('res-correct-value');
    this.xpVal = document.getElementById('res-xp-value');
    this.tokensVal = document.getElementById('res-tokens-value');
    this.timeVal = document.getElementById('res-time-value');

    this.btnRetry = document.getElementById('btn-res-retry');
    this.btnTopics = document.getElementById('btn-res-topics');
    this.btnContinue = document.getElementById('btn-res-continue');

    this.lastResultData = null;

    this.init();
  }

  init() {
    this.btnRetry?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('retry', this.lastResultData?.topicId);
    });

    this.btnTopics?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('topics');
    });

    this.btnContinue?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.onAction('explore');
    });
  }

  showResults(data, isGameOver = false) {
    this.lastResultData = data;

    if (isGameOver) {
      if (this.titleEl) {
        this.titleEl.textContent = 'CHALLENGE FAILED';
        this.titleEl.style.color = '#e63946';
      }
      if (this.subtitleEl) this.subtitleEl.textContent = 'You ran out of lives! Review the theorems and try again.';
      if (this.starsRow) {
        this.starsRow.innerHTML = `
          <span class="star-big star-empty">⭐</span>
          <span class="star-big star-empty">⭐</span>
          <span class="star-big star-empty">⭐</span>
        `;
      }
      if (this.tokensVal) this.tokensVal.textContent = '+0 🪙';
    } else {
      if (this.titleEl) {
        this.titleEl.textContent = 'CHALLENGE COMPLETE!';
        this.titleEl.style.color = '#ffffff';
      }
      if (this.subtitleEl) this.subtitleEl.textContent = `You completed the ${data.topicId.replace('_', ' ')} challenge!`;

      // Render Stars
      if (this.starsRow) {
        let starsHtml = '';
        for (let i = 1; i <= 3; i++) {
          starsHtml += `<span class="star-big ${i <= data.stars ? 'star-gold' : 'star-empty'}">⭐</span>`;
        }
        this.starsRow.innerHTML = starsHtml;
      }
      if (this.tokensVal) this.tokensVal.textContent = `+${data.tokensEarned} 🪙`;
    }

    if (this.scoreVal) this.scoreVal.textContent = data.score.toLocaleString();
    if (this.accuracyVal) this.accuracyVal.textContent = `${data.accuracy}%`;
    if (this.correctVal) this.correctVal.textContent = `${data.correctCount} / ${data.totalQuestions}`;
    if (this.xpVal) this.xpVal.textContent = `+${data.xpEarned} XP`;
    if (this.timeVal) this.timeVal.textContent = `Combo x${data.maxCombo || 1}`;

    this.show();
  }

  show() {
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
