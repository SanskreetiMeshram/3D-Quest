import { ScoringSystem } from './ScoringSystem.js';

/**
 * QuizEngine.js
 * Controls active quiz session flow, timers, answer validation, lives, and scoring.
 */
export class QuizEngine {
  constructor(questionManager, gameState, audioManager) {
    this.questionManager = questionManager;
    this.gameState = gameState;
    this.audioManager = audioManager;

    this.questions = [];
    this.currentIndex = 0;
    this.timeLimit = 30;
    this.timeRemaining = 30;
    this.timerInterval = null;
    this.isAnswered = false;

    this.lives = 3;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.totalXpEarned = 0;

    // Callbacks
    this.onTick = null;
    this.onQuestionChange = null;
    this.onAnswerFeedback = null;
    this.onChallengeComplete = null;
    this.onGameOver = null;
  }

  startQuiz(topicId, questionCount = 10) {
    this.currentTopicId = topicId;
    this.questions = this.questionManager.getQuizSet(topicId, questionCount);
    this.currentIndex = 0;
    this.lives = 3;
    this.score = 0;
    this.combo = 0;
    this.maxCombo = 0;
    this.correctCount = 0;
    this.totalXpEarned = 0;

    this.gameState.challengeScore = 0;
    this.gameState.challengeLives = 3;
    this.gameState.challengeCombo = 0;
    this.gameState.challengeTotalQuestions = this.questions.length;
    this.gameState.currentTopic = topicId;

    this.loadQuestion(this.currentIndex);
  }

  loadQuestion(index) {
    if (index >= this.questions.length) {
      this.finishChallenge();
      return;
    }

    this.currentIndex = index;
    this.isAnswered = false;
    this.timeRemaining = this.timeLimit;
    this.currentQuestion = this.questions[index];

    this.startTimer();

    if (this.onQuestionChange) {
      this.onQuestionChange({
        question: this.currentQuestion,
        index: this.currentIndex,
        total: this.questions.length,
        lives: this.lives,
        score: this.score,
        combo: this.combo
      });
    }
  }

  startTimer() {
    this.stopTimer();
    this.timerInterval = setInterval(() => {
      this.timeRemaining -= 1;
      if (this.onTick) {
        this.onTick(this.timeRemaining, this.timeLimit);
      }

      if (this.timeRemaining <= 0) {
        this.handleTimeout();
      }
    }, 1000);
  }

  stopTimer() {
    if (this.timerInterval) {
      clearInterval(this.timerInterval);
      this.timerInterval = null;
    }
  }

  submitAnswer(selectedIndex) {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.stopTimer();

    const isCorrect = selectedIndex === this.currentQuestion.correctIndex;
    let earnedPoints = 0;
    let xpEarned = 0;

    if (isCorrect) {
      this.combo += 1;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;
      this.correctCount += 1;

      const calc = ScoringSystem.calculatePoints(
        this.currentQuestion.difficulty,
        this.timeRemaining,
        this.timeLimit,
        this.combo
      );
      earnedPoints = calc.total;
      this.score += earnedPoints;
      xpEarned = this.currentQuestion.xp || 25;
      this.totalXpEarned += xpEarned;

      this.gameState.addXP(xpEarned);
      this.gameState.addScore(earnedPoints);

      if (this.audioManager) {
        this.audioManager.playCorrect();
      }
    } else {
      this.combo = 0;
      this.lives -= 1;
      if (this.audioManager) {
        this.audioManager.playWrong();
      }
    }

    if (this.onAnswerFeedback) {
      this.onAnswerFeedback({
        isCorrect,
        selectedIndex,
        correctIndex: this.currentQuestion.correctIndex,
        explanation: this.currentQuestion.explanation,
        earnedPoints,
        xpEarned,
        livesRemaining: this.lives,
        combo: this.combo
      });
    }
  }

  handleTimeout() {
    if (this.isAnswered) return;
    this.isAnswered = true;
    this.stopTimer();

    this.combo = 0;
    this.lives -= 1;

    if (this.audioManager) {
      this.audioManager.playWrong();
    }

    if (this.onAnswerFeedback) {
      this.onAnswerFeedback({
        isCorrect: false,
        isTimeout: true,
        selectedIndex: -1,
        correctIndex: this.currentQuestion.correctIndex,
        explanation: `Time expired! ` + this.currentQuestion.explanation,
        earnedPoints: 0,
        xpEarned: 0,
        livesRemaining: this.lives,
        combo: this.combo
      });
    }
  }

  advanceNext() {
    if (this.lives <= 0) {
      this.triggerGameOver();
      return;
    }

    this.loadQuestion(this.currentIndex + 1);
  }

  finishChallenge() {
    this.stopTimer();
    const stars = ScoringSystem.calculateStars(this.correctCount, this.questions.length, this.lives);
    const accuracy = Math.round((this.correctCount / this.questions.length) * 100);

    // Completion bonus
    const completionBonusXP = 100 + stars * 50;
    const completionTokens = stars > 0 ? 2 + stars : 1;

    this.gameState.addXP(completionBonusXP);
    this.gameState.addTokens(completionTokens);
    this.gameState.updateTopicProgress(this.currentTopicId, stars, this.score, accuracy);

    if (this.audioManager) {
      this.audioManager.playChallengeComplete();
    }

    if (this.onChallengeComplete) {
      this.onChallengeComplete({
        topicId: this.currentTopicId,
        score: this.score,
        correctCount: this.correctCount,
        totalQuestions: this.questions.length,
        accuracy,
        stars,
        xpEarned: this.totalXpEarned + completionBonusXP,
        tokensEarned: completionTokens,
        maxCombo: this.maxCombo
      });
    }
  }

  triggerGameOver() {
    this.stopTimer();
    if (this.audioManager) {
      this.audioManager.playGameOver();
    }

    if (this.onGameOver) {
      this.onGameOver({
        topicId: this.currentTopicId,
        score: this.score,
        correctCount: this.correctCount,
        totalQuestions: this.questions.length,
        accuracy: Math.round((this.correctCount / (this.currentIndex + 1)) * 100),
        xpEarned: this.totalXpEarned
      });
    }
  }
}
