/**
 * pythagoras.js
 * 20 verified questions on Pythagorean Theorem, Triples, Distance, and 3D Diagonal calculations.
 */
export const pythagorasQuestions = [
  {
    id: 'pyth_1',
    topic: 'pythagoras',
    difficulty: 'easy',
    question: 'The Pythagorean theorem applies only to which type of triangle?',
    options: ['Right-angled triangle', 'Equilateral triangle', 'Isosceles triangle', 'Scalene acute triangle'],
    correctAnswer: 'Right-angled triangle',
    explanation: 'The Pythagorean theorem (a² + b² = c²) strictly holds for all right-angled triangles.',
    xp: 20,
    diagram: { type: 'pythagoras', a: 3, b: 4, c: 5 }
  },
  {
    id: 'pyth_2',
    topic: 'pythagoras',
    difficulty: 'easy',
    question: 'What is the Pythagorean equation for a right triangle with legs a, b and hypotenuse c?',
    options: ['a² + b² = c²', 'a + b = c', 'a² - b² = c²', 'ab = c²'],
    correctAnswer: 'a² + b² = c²',
    explanation: 'In any right triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.',
    xp: 20
  },
  {
    id: 'pyth_3',
    topic: 'pythagoras',
    difficulty: 'easy',
    question: 'In a right triangle with legs 3 cm and 4 cm, what is the length of the hypotenuse?',
    options: ['5 cm', '7 cm', '6 cm', '25 cm'],
    correctAnswer: '5 cm',
    explanation: 'c = √(3² + 4²) = √(9 + 16) = √25 = 5 cm.',
    xp: 20
  },
  {
    id: 'pyth_4',
    topic: 'pythagoras',
    difficulty: 'easy',
    question: 'Which of the following is a classic Pythagorean triple?',
    options: ['3, 4, 5', '2, 3, 4', '4, 5, 6', '1, 2, 3'],
    correctAnswer: '3, 4, 5',
    explanation: '3² + 4² = 9 + 16 = 25 = 5².',
    xp: 20
  },
  {
    id: 'pyth_5',
    topic: 'pythagoras',
    difficulty: 'easy',
    question: 'In a right triangle, which side is always the longest side?',
    options: ['Hypotenuse', 'Adjacent leg', 'Opposite leg', 'Altitude'],
    correctAnswer: 'Hypotenuse',
    explanation: 'The hypotenuse is opposite the 90° right angle, making it the longest side.',
    xp: 20
  },
  {
    id: 'pyth_6',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'In a right triangle with hypotenuse 13 cm and one leg 5 cm, what is the length of the other leg?',
    options: ['12 cm', '8 cm', '10 cm', '11 cm'],
    correctAnswer: '12 cm',
    explanation: 'b = √(13² - 5²) = √(169 - 25) = √144 = 12 cm.',
    xp: 25
  },
  {
    id: 'pyth_7',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'Which of the following sets of numbers forms a Pythagorean triple?',
    options: ['5, 12, 13', '6, 8, 11', '7, 9, 12', '8, 10, 14'],
    correctAnswer: '5, 12, 13',
    explanation: '5² + 12² = 25 + 144 = 169 = 13².',
    xp: 25
  },
  {
    id: 'pyth_8',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'A 10-meter ladder leans against a vertical wall with its foot 6 meters away from the base. How high up the wall does it reach?',
    options: ['8 meters', '4 meters', '7 meters', '9 meters'],
    correctAnswer: '8 meters',
    explanation: 'Height = √(10² - 6²) = √(100 - 36) = √64 = 8 meters.',
    xp: 25
  },
  {
    id: 'pyth_9',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'What is the length of the diagonal of a square with side length 7 cm?',
    options: ['7√2 cm', '14 cm', '7√3 cm', '49 cm'],
    correctAnswer: '7√2 cm',
    explanation: 'Diagonal = √(s² + s²) = √(2s²) = s√2 = 7√2 cm (~9.9 cm).',
    xp: 25
  },
  {
    id: 'pyth_10',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'What is the length of the diagonal of a rectangle measuring 8 cm by 15 cm?',
    options: ['17 cm', '23 cm', '19 cm', '16 cm'],
    correctAnswer: '17 cm',
    explanation: 'Diagonal = √(8² + 15²) = √(64 + 225) = √289 = 17 cm.',
    xp: 25
  },
  {
    id: 'pyth_11',
    topic: 'pythagoras',
    difficulty: 'medium',
    question: 'If the sides of a triangle are 9, 40, and 41, is this a right triangle?',
    options: ['Yes, because 9² + 40² = 41²', 'No, 9² + 40² ≠ 41²', 'Only if equilateral', 'Cannot be determined'],
    correctAnswer: 'Yes, because 9² + 40² = 41²',
    explanation: '9² + 40² = 81 + 1600 = 1681 = 41². It satisfies the converse of the Pythagorean theorem.',
    xp: 25
  },
  {
    id: 'pyth_12',
    topic: 'pythagoras',
    difficulty: 'hard',
    question: 'What is the length of the space diagonal of a cube with edge length 5 cm?',
    options: ['5√3 cm', '5√2 cm', '10 cm', '15 cm'],
    correctAnswer: '5√3 cm',
    explanation: '3D space diagonal = √(a² + a² + a²) = a√3 = 5√3 cm (~8.66 cm).',
    xp: 35
  },
  {
    id: 'pyth_13',
    topic: 'pythagoras',
    difficulty: 'hard',
    question: 'What is the distance between the points (1, 2) and (4, 6) in the Cartesian plane?',
    options: ['5 units', '7 units', '6 units', '25 units'],
    correctAnswer: '5 units',
    explanation: 'd = √((4-1)² + (6-2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5 units.',
    xp: 35
  },
  {
    id: 'pyth_14',
    topic: 'pythagoras',
    difficulty: 'hard',
    question: 'In an equilateral triangle of side 10 cm, what is its perpendicular altitude?',
    options: ['5√3 cm', '5√2 cm', '5 cm', '10√3 cm'],
    correctAnswer: '5√3 cm',
    explanation: 'Altitude splits base into two 5 cm halves. h = √(10² - 5²) = √(100 - 25) = √75 = 5√3 cm.',
    xp: 35
  },
  {
    id: 'pyth_15',
    topic: 'pythagoras',
    difficulty: 'hard',
    question: 'A ship sails 24 km North, then turns and sails 10 km East. How far is the ship from its starting point?',
    options: ['26 km', '34 km', '28 km', '25 km'],
    correctAnswer: '26 km',
    explanation: 'Distance = √(24² + 10²) = √(576 + 100) = √676 = 26 km.',
    xp: 35
  },
  {
    id: 'pyth_16',
    topic: 'pythagoras',
    difficulty: 'expert',
    question: 'In a rectangular prism with dimensions 3 cm, 4 cm, and 12 cm, what is the length of its longest internal space diagonal?',
    options: ['13 cm', '15 cm', '19 cm', '14 cm'],
    correctAnswer: '13 cm',
    explanation: 'Space diagonal = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm.',
    xp: 45
  },
  {
    id: 'pyth_17',
    topic: 'pythagoras',
    difficulty: 'expert',
    question: 'Which of the following generates a primitive Pythagorean triple for any integers m > n > 0 of opposite parity?',
    options: ['(m² - n²), 2mn, (m² + n²)', '(m - n), 2mn, (m + n)', '(m² + n²), mn, (m² - n²)', '2m, 2n, 2(m+n)'],
    correctAnswer: '(m² - n²), 2mn, (m² + n²)',
    explanation: 'Euclid\'s formula states that a = m² - n², b = 2mn, and c = m² + n² always forms a valid Pythagorean triple since (m² - n²)² + (2mn)² = (m² + n²)².',
    xp: 45
  },
  {
    id: 'pyth_18',
    topic: 'pythagoras',
    difficulty: 'expert',
    question: 'If a triangle has sides 7, 24, and 25, what is the radius of its inscribed circle (inradius)?',
    options: ['3', '4', '2', '3.5'],
    correctAnswer: '3',
    explanation: 'For a right triangle: inradius r = (a + b - c) / 2 = (7 + 24 - 25) / 2 = 6 / 2 = 3.',
    xp: 45
  },
  {
    id: 'pyth_19',
    topic: 'pythagoras',
    difficulty: 'expert',
    question: 'In a right triangle with legs a and b and hypotenuse c, the altitude h drawn to the hypotenuse satisfies:',
    options: ['h = (a × b) / c', 'h = (a + b) / c', 'h = c / (a × b)', 'h = √(a + b)'],
    correctAnswer: 'h = (a × b) / c',
    explanation: 'Equating triangle area in two ways: (1/2) a b = (1/2) c h => h = (a × b) / c.',
    xp: 45
  },
  {
    id: 'pyth_20',
    topic: 'pythagoras',
    difficulty: 'expert',
    question: 'A guy wire connects the top of a 24-meter tower to a point on the ground 18 meters from the base. What is the wire\'s length?',
    options: ['30 meters', '32 meters', '28 meters', '42 meters'],
    correctAnswer: '30 meters',
    explanation: 'Wire length = √(24² + 18²) = √(576 + 324) = √900 = 30 meters.',
    xp: 45
  }
];
