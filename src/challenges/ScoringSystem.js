/**
 * ScoringSystem.js
 * Calculates transparent scores, difficulty multipliers, speed bonuses, combos, and 1-3 star ratings.
 */
export class ScoringSystem {
  static calculatePoints(difficulty, timeRemaining, maxTime = 30, comboCount = 0) {
    const basePoints = 100;

    let diffMultiplier = 1.0;
    switch (difficulty) {
      case 'medium': diffMultiplier = 1.5; break;
      case 'hard': diffMultiplier = 2.0; break;
      case 'expert': diffMultiplier = 3.0; break;
      default: diffMultiplier = 1.0; break;
    }

    // Speed bonus: up to 50 extra points for fast answers
    const speedRatio = Math.max(0, Math.min(1, timeRemaining / maxTime));
    const speedBonus = Math.round(speedRatio * 50);

    // Combo streak multiplier
    let comboMultiplier = 1.0;
    if (comboCount >= 5) {
      comboMultiplier = 3.0;
    } else if (comboCount >= 3) {
      comboMultiplier = 2.0;
    }

    const total = Math.round((basePoints * diffMultiplier + speedBonus) * comboMultiplier);
    return {
      total,
      basePoints,
      diffMultiplier,
      speedBonus,
      comboMultiplier
    };
  }

  static calculateStars(correctCount, totalQuestions, livesRemaining) {
    const accuracy = (correctCount / totalQuestions) * 100;
    if (accuracy >= 90 && livesRemaining >= 2) {
      return 3;
    } else if (accuracy >= 65 && livesRemaining >= 1) {
      return 2;
    } else if (correctCount >= 1) {
      return 1;
    }
    return 0;
  }
}
