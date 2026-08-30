/**
 * linesAngles.js
 * 20 verified questions on Lines and Angles with educational explanations and diagram specifications.
 */
export const linesAnglesQuestions = [
  {
    id: 'la_1',
    topic: 'lines_angles',
    difficulty: 'easy',
    question: 'What type of angle measures exactly 90 degrees?',
    options: ['Acute angle', 'Right angle', 'Obtuse angle', 'Straight angle'],
    correctAnswer: 'Right angle',
    explanation: 'A right angle measures exactly 90°. It forms a square corner where two perpendicular lines meet.',
    xp: 20,
    diagram: { type: 'angle', value: 90, label: '90°' }
  },
  {
    id: 'la_2',
    topic: 'lines_angles',
    difficulty: 'easy',
    question: 'An angle measuring less than 90 degrees is called what?',
    options: ['Acute angle', 'Obtuse angle', 'Reflex angle', 'Right angle'],
    correctAnswer: 'Acute angle',
    explanation: 'Any angle between 0° and 90° is defined as an acute angle.',
    xp: 20,
    diagram: { type: 'angle', value: 45, label: '45°' }
  },
  {
    id: 'la_3',
    topic: 'lines_angles',
    difficulty: 'easy',
    question: 'What is the sum of two complementary angles?',
    options: ['90 degrees', '180 degrees', '270 degrees', '360 degrees'],
    correctAnswer: '90 degrees',
    explanation: 'Complementary angles always add up to 90° (a right angle).',
    xp: 20,
    diagram: { type: 'complementary', a: 35, b: 55 }
  },
  {
    id: 'la_4',
    topic: 'lines_angles',
    difficulty: 'easy',
    question: 'What is the sum of two supplementary angles on a straight line?',
    options: ['90 degrees', '180 degrees', '360 degrees', '100 degrees'],
    correctAnswer: '180 degrees',
    explanation: 'Supplementary angles form a straight line and always sum to 180°.',
    xp: 20,
    diagram: { type: 'supplementary', a: 110, b: 70 }
  },
  {
    id: 'la_5',
    topic: 'lines_angles',
    difficulty: 'easy',
    question: 'Two lines that never intersect and remain equidistant are called:',
    options: ['Parallel lines', 'Perpendicular lines', 'Intersecting lines', 'Skew lines'],
    correctAnswer: 'Parallel lines',
    explanation: 'Parallel lines lie in the same plane and never meet, no matter how far extended.',
    xp: 20,
    diagram: { type: 'parallel_lines' }
  },
  {
    id: 'la_6',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'If angle A and angle B are complementary, and angle A is 38°, what is angle B?',
    options: ['52°', '62°', '142°', '42°'],
    correctAnswer: '52°',
    explanation: 'Complementary angles add to 90°. Angle B = 90° - 38° = 52°.',
    xp: 25,
    diagram: { type: 'complementary', a: 38, b: 52 }
  },
  {
    id: 'la_7',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'If two lines intersect, what is true about the vertically opposite angles?',
    options: ['They are equal', 'They sum to 90°', 'They sum to 180°', 'They are always acute'],
    correctAnswer: 'They are equal',
    explanation: 'Vertically opposite (vertical) angles created by two intersecting straight lines are always equal in measure.',
    xp: 25,
    diagram: { type: 'vertical_angles', angle: 65 }
  },
  {
    id: 'la_8',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'An angle measuring 135 degrees is classified as:',
    options: ['Obtuse angle', 'Acute angle', 'Reflex angle', 'Straight angle'],
    correctAnswer: 'Obtuse angle',
    explanation: 'An obtuse angle is greater than 90° and less than 180°. 135° falls strictly in this range.',
    xp: 25,
    diagram: { type: 'angle', value: 135, label: '135°' }
  },
  {
    id: 'la_9',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'An angle measuring 240 degrees is classified as:',
    options: ['Reflex angle', 'Obtuse angle', 'Straight angle', 'Full rotation'],
    correctAnswer: 'Reflex angle',
    explanation: 'A reflex angle measures strictly between 180° and 360°.',
    xp: 25,
    diagram: { type: 'angle', value: 240, label: '240°' }
  },
  {
    id: 'la_10',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'Two lines that intersect at an angle of 90 degrees are called:',
    options: ['Perpendicular lines', 'Parallel lines', 'Collinear lines', 'Concurrent lines'],
    correctAnswer: 'Perpendicular lines',
    explanation: 'Perpendicular lines meet or intersect at exactly 90 degrees (right angles).',
    xp: 25,
    diagram: { type: 'perpendicular' }
  },
  {
    id: 'la_11',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'If one angle on a straight line is 74°, what is its supplementary adjacent angle?',
    options: ['106°', '116°', '16°', '96°'],
    correctAnswer: '106°',
    explanation: 'Straight line angles sum to 180°. 180° - 74° = 106°.',
    xp: 25,
    diagram: { type: 'supplementary', a: 74, b: 106 }
  },
  {
    id: 'la_12',
    topic: 'lines_angles',
    difficulty: 'medium',
    question: 'When a transversal cuts two parallel lines, alternate interior angles are:',
    options: ['Equal', 'Supplementary', 'Complementary', 'Unequal'],
    correctAnswer: 'Equal',
    explanation: 'Alternate interior angles formed by a transversal cutting two parallel lines are always congruent (equal).',
    xp: 25,
    diagram: { type: 'transversal', angle: 50 }
  },
  {
    id: 'la_13',
    topic: 'lines_angles',
    difficulty: 'hard',
    question: 'When a transversal intersects two parallel lines, consecutive (co-interior) interior angles are:',
    options: ['Supplementary (sum to 180°)', 'Equal', 'Complementary (sum to 90°)', 'Sum to 360°'],
    correctAnswer: 'Supplementary (sum to 180°)',
    explanation: 'Consecutive interior angles on the same side of a transversal between parallel lines sum to 180°.',
    xp: 35,
    diagram: { type: 'transversal_cointerior', angle: 60 }
  },
  {
    id: 'la_14',
    topic: 'lines_angles',
    difficulty: 'hard',
    question: 'What is the sum of angles around a single point on a 2D plane?',
    options: ['360 degrees', '180 degrees', '270 degrees', '720 degrees'],
    correctAnswer: '360 degrees',
    explanation: 'A complete rotation around a point in a plane is always equal to 360° (or 2π radians).',
    xp: 35,
    diagram: { type: 'point_angles' }
  },
  {
    id: 'la_15',
    topic: 'lines_angles',
    difficulty: 'hard',
    question: 'If two supplementary angles are in the ratio 2 : 3, what is the measure of the smaller angle?',
    options: ['72°', '108°', '36°', '60°'],
    correctAnswer: '72°',
    explanation: '2x + 3x = 180° => 5x = 180° => x = 36°. Smaller angle = 2 * 36° = 72°.',
    xp: 35
  },
  {
    id: 'la_16',
    topic: 'lines_angles',
    difficulty: 'hard',
    question: 'An angle is 24° more than its complement. What is the measure of the angle?',
    options: ['57°', '33°', '66°', '48°'],
    correctAnswer: '57°',
    explanation: 'Let angle be x. x + (x - 24°) = 90° => 2x = 114° => x = 57°. (Complement is 33°).',
    xp: 35
  },
  {
    id: 'la_17',
    topic: 'lines_angles',
    difficulty: 'expert',
    question: 'If an angle is equal to one-fifth of its supplement, what is the angle measure?',
    options: ['30°', '36°', '150°', '25°'],
    correctAnswer: '30°',
    explanation: 'Let angle be x. Supplement = 180 - x. x = (180 - x)/5 => 5x = 180 - x => 6x = 180° => x = 30°.',
    xp: 45
  },
  {
    id: 'la_18',
    topic: 'lines_angles',
    difficulty: 'expert',
    question: 'A line segment has how many endpoints?',
    options: ['2 endpoints', '1 endpoint', '0 endpoints', 'Infinite endpoints'],
    correctAnswer: '2 endpoints',
    explanation: 'A line segment is bounded by exactly 2 distinct endpoints, whereas a ray has 1 endpoint and a line has none.',
    xp: 45
  },
  {
    id: 'la_19',
    topic: 'lines_angles',
    difficulty: 'expert',
    question: 'What is the measure of the angle formed by the hands of a clock at exactly 3:30?',
    options: ['75°', '90°', '60°', '85°'],
    correctAnswer: '75°',
    explanation: 'At 3:30, minute hand is at 6 (180°), hour hand is halfway between 3 and 4 (90° + 15° = 105°). Difference = 180° - 105° = 75°.',
    xp: 45
  },
  {
    id: 'la_20',
    topic: 'lines_angles',
    difficulty: 'expert',
    question: 'If three angles around a point are (2x)°, (3x)°, and (4x)°, what is the value of x?',
    options: ['40°', '36°', '45°', '30°'],
    correctAnswer: '40°',
    explanation: 'Angles around a point sum to 360°. 2x + 3x + 4x = 9x = 360° => x = 40°.',
    xp: 45
  }
];
