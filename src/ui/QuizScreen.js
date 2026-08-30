import { DiagramRenderer } from './DiagramRenderer.js';

/**
 * QuizScreen.js
 * Controls the active quiz question interface, visual diagrams, option buttons, timer bar, and feedback panel.
 */
export class QuizScreen {
  constructor(quizEngine, gameState, audioManager) {
    this.quizEngine = quizEngine;
    this.gameState = gameState;
    this.audioManager = audioManager;

    this.screenEl = document.getElementById('quiz-screen');
    this.topicBadge = document.getElementById('quiz-topic-badge');
    this.counterEl = document.getElementById('quiz-question-counter');
    this.timerText = document.getElementById('quiz-timer-text');
    this.timerBar = document.getElementById('quiz-timer-bar');
    this.livesContainer = document.getElementById('quiz-lives-container');
    this.comboBadge = document.getElementById('quiz-combo-badge');
    this.questionText = document.getElementById('quiz-question-text');
    this.diagramContainer = document.getElementById('quiz-diagram-container');
    this.optionsGrid = document.getElementById('quiz-options-grid');

    this.feedbackBar = document.getElementById('quiz-feedback-bar');
    this.feedbackIcon = document.getElementById('feedback-icon');
    this.feedbackTitle = document.getElementById('feedback-title');
    this.feedbackExplanation = document.getElementById('feedback-explanation');
    this.btnContinue = document.getElementById('btn-quiz-continue');

    this.init();
  }

  init() {
    this.btnContinue?.addEventListener('click', () => {
      this.audioManager.playClick();
      this.feedbackBar.classList.add('hidden');
      this.quizEngine.advanceNext();
    });

    // Keyboard support for options (1,2,3,4 or A,B,C,D or Space to continue)
    window.addEventListener('keydown', (e) => {
      if (this.gameState.mode !== 'CHALLENGE') return;

      if (!this.feedbackBar.classList.contains('hidden')) {
        if (e.code === 'Space' || e.code === 'Enter') {
          this.btnContinue?.click();
        }
        return;
      }

      const key = e.key.toUpperCase();
      if (['1', 'A'].includes(key)) this.selectOption(0);
      else if (['2', 'B'].includes(key)) this.selectOption(1);
      else if (['3', 'C'].includes(key)) this.selectOption(2);
      else if (['4', 'D'].includes(key)) this.selectOption(3);
    });

    // Wire up QuizEngine callbacks
    this.quizEngine.onQuestionChange = (data) => this.renderQuestion(data);
    this.quizEngine.onTick = (timeRem, totalTime) => this.updateTimer(timeRem, totalTime);
    this.quizEngine.onAnswerFeedback = (data) => this.renderFeedback(data);
  }

  renderQuestion(data) {
    const q = data.question;
    if (this.topicBadge) this.topicBadge.textContent = q.topic.replace('_', ' ').toUpperCase();
    if (this.counterEl) this.counterEl.textContent = `Question ${data.index + 1} / ${data.total}`;
    if (this.questionText) this.questionText.textContent = q.question;

    // Render Diagram
    if (this.diagramContainer) {
      if (q.diagram) {
        this.diagramContainer.innerHTML = DiagramRenderer.render(q.diagram);
        this.diagramContainer.classList.remove('hidden');
      } else {
        this.diagramContainer.innerHTML = '';
        this.diagramContainer.classList.add('hidden');
      }
    }

    // Render Lives
    this.renderLives(data.lives);

    // Combo badge
    if (this.comboBadge) {
      if (data.combo >= 2) {
        this.comboBadge.textContent = `COMBO x${data.combo >= 5 ? 3 : 2}! 🔥`;
        this.comboBadge.classList.remove('hidden');
      } else {
        this.comboBadge.classList.add('hidden');
      }
    }

    // Options
    if (this.optionsGrid) {
      this.optionsGrid.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.dataset.index = idx;
        btn.innerHTML = `
          <span class="opt-letter">${letters[idx]}</span>
          <span class="opt-text">${optText}</span>
        `;

        btn.addEventListener('click', () => {
          this.selectOption(idx);
        });

        this.optionsGrid.appendChild(btn);
      });
    }

    this.feedbackBar?.classList.add('hidden');
    this.updateTimer(30, 30);
  }

  selectOption(idx) {
    if (this.quizEngine.isAnswered) return;
    this.quizEngine.submitAnswer(idx);
  }

  renderFeedback(data) {
    const optionButtons = this.optionsGrid?.querySelectorAll('.option-btn');
    if (optionButtons) {
      optionButtons.forEach((btn, idx) => {
        btn.disabled = true;
        if (idx === data.correctIndex) {
          btn.classList.add('correct');
        } else if (idx === data.selectedIndex) {
          btn.classList.add('incorrect');
        }
      });
    }

    this.renderLives(data.livesRemaining);

    if (this.feedbackIcon) this.feedbackIcon.textContent = data.isCorrect ? '✅' : '❌';
    if (this.feedbackTitle) {
      this.feedbackTitle.textContent = data.isCorrect 
        ? `CORRECT! +${data.earnedPoints} pts (+${data.xpEarned} XP)` 
        : data.isTimeout ? 'TIME OUT!' : 'INCORRECT!';
      this.feedbackTitle.style.color = data.isCorrect ? '#2ec4b6' : '#e63946';
    }
    if (this.feedbackExplanation) this.feedbackExplanation.textContent = data.explanation;

    this.feedbackBar?.classList.remove('hidden');
  }

  renderLives(lives) {
    if (!this.livesContainer) return;
    let html = '';
    for (let i = 0; i < 3; i++) {
      html += i < lives ? '<span class="heart full">❤️</span>' : '<span class="heart empty" style="filter: grayscale(1) opacity(0.35);">🖤</span>';
    }
    this.livesContainer.innerHTML = html;
  }

  updateTimer(rem, total) {
    if (this.timerText) this.timerText.textContent = `${rem}s`;
    if (this.timerBar) {
      const pct = Math.max(0, Math.round((rem / total) * 100));
      this.timerBar.style.width = `${pct}%`;
    }
  }

  show() {
    this.screenEl?.classList.remove('hidden');
  }

  hide() {
    this.screenEl?.classList.add('hidden');
  }
}
