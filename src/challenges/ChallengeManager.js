import { QuizEngine } from './QuizEngine.js';

/**
 * ChallengeManager.js
 * Coordinates challenge sessions between 3D world interaction, quiz UI, and game state.
 */
export class ChallengeManager {
  constructor(questionManager, gameState, audioManager) {
    this.questionManager = questionManager;
    this.gameState = gameState;
    this.audioManager = audioManager;

    this.quizEngine = new QuizEngine(this.questionManager, this.gameState, this.audioManager);
  }

  startChallenge(topicId) {
    const topic = this.questionManager.getTopic(topicId);
    if (!topic) return;

    this.gameState.setMode('CHALLENGE');
    this.quizEngine.startQuiz(topicId, 10);
  }
}
