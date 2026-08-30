import { QuestionManager } from './src/questions/QuestionManager.js';
import { ScoringSystem } from './src/challenges/ScoringSystem.js';

console.log('=== VERIFYING GEOMETRY QUEST 3D QUESTION BANK & LOGIC ===');

const qm = new QuestionManager();
const topics = qm.getAllTopics();
console.log(`Total Topics Registered: ${topics.length}`);

let totalQuestions = 0;
let errors = [];

topics.forEach((topic) => {
  console.log(`- Topic [${topic.id}]: "${topic.name}" has ${topic.questions.length} questions`);
  if (topic.questions.length < 20) {
    errors.push(`Topic ${topic.id} has less than 20 questions (${topic.questions.length})`);
  }
  totalQuestions += topic.questions.length;

  topic.questions.forEach((q, idx) => {
    if (!q.id) errors.push(`Question #${idx} in ${topic.id} missing id`);
    if (!q.question) errors.push(`Question ${q.id} missing question text`);
    if (!Array.isArray(q.options) || q.options.length !== 4) {
      errors.push(`Question ${q.id} must have exactly 4 options, found: ${q.options?.length}`);
    }
    if (!q.options.includes(q.correctAnswer)) {
      errors.push(`Question ${q.id} correctAnswer "${q.correctAnswer}" not found in options: [${q.options.join(', ')}]`);
    }
    if (!q.explanation) errors.push(`Question ${q.id} missing explanation`);
    if (!q.xp || q.xp <= 0) errors.push(`Question ${q.id} invalid xp: ${q.xp}`);
  });
});

console.log(`\nTotal Questions in Bank: ${totalQuestions}`);

// Test Scoring
const score1 = ScoringSystem.calculatePoints('easy', 25, 30, 0);
const score2 = ScoringSystem.calculatePoints('expert', 20, 30, 5);
console.log('Sample score (easy, 25s left, no combo):', score1.total);
console.log('Sample score (expert, 20s left, 5x combo):', score2.total);

const stars3 = ScoringSystem.calculateStars(10, 10, 3);
const stars2 = ScoringSystem.calculateStars(7, 10, 2);
const stars1 = ScoringSystem.calculateStars(4, 10, 1);
console.log(`Star calculations: 10/10 => ${stars3} stars, 7/10 => ${stars2} stars, 4/10 => ${stars1} stars`);

// Test Quiz Set Generation & Option Shuffling
const sampleQuiz = qm.getQuizSet('triangles', 10);
console.log(`Generated quiz set of ${sampleQuiz.length} questions.`);
sampleQuiz.forEach((sq, i) => {
  if (sq.options[sq.correctIndex] !== sq.correctAnswer) {
    errors.push(`Quiz shuffler error in Q#${i}: correctIndex does not match correctAnswer`);
  }
});

if (errors.length === 0) {
  console.log('\n✅ ALL VERIFICATION CHECKS PASSED PERFECTLY WITH ZERO ERRORS!');
  process.exit(0);
} else {
  console.error('\n❌ Verification errors found:', errors);
  process.exit(1);
}
