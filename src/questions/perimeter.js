/**
 * perimeter.js
 * 20 verified questions on Perimeter of 2D Polygons and Composite Shapes.
 */
export const perimeterQuestions = [
  {
    id: 'perim_1',
    topic: 'perimeter',
    difficulty: 'easy',
    question: 'Perimeter is defined as the total distance:',
    options: ['Around the outside edge of a 2D shape', 'Enclosed inside a shape', 'Across the center', 'Of three dimensions'],
    correctAnswer: 'Around the outside edge of a 2D shape',
    explanation: 'Perimeter is the one-dimensional total path length that surrounds a two-dimensional closed shape.',
    xp: 20
  },
  {
    id: 'perim_2',
    topic: 'perimeter',
    difficulty: 'easy',
    question: 'What is the formula for the perimeter of a rectangle with length L and width W?',
    options: ['2 × (L + W)', 'L × W', '4 × L × W', 'L + W'],
    correctAnswer: '2 × (L + W)',
    explanation: 'A rectangle has two pairs of equal sides: Perimeter = L + W + L + W = 2(L + W).',
    xp: 20
  },
  {
    id: 'perim_3',
    topic: 'perimeter',
    difficulty: 'easy',
    question: 'What is the perimeter of a square with side length 8 cm?',
    options: ['32 cm', '64 cm', '16 cm', '24 cm'],
    correctAnswer: '32 cm',
    explanation: 'Perimeter of a square = 4 × side = 4 × 8 = 32 cm.',
    xp: 20
  },
  {
    id: 'perim_4',
    topic: 'perimeter',
    difficulty: 'easy',
    question: 'What is the perimeter of an equilateral triangle with side length 9 cm?',
    options: ['27 cm', '18 cm', '81 cm', '36 cm'],
    correctAnswer: '27 cm',
    explanation: 'Perimeter = 3 × side = 3 × 9 = 27 cm.',
    xp: 20
  },
  {
    id: 'perim_5',
    topic: 'perimeter',
    difficulty: 'easy',
    question: 'A regular pentagon has 5 equal sides of 7 cm each. What is its perimeter?',
    options: ['35 cm', '42 cm', '49 cm', '28 cm'],
    correctAnswer: '35 cm',
    explanation: 'Perimeter = 5 × 7 cm = 35 cm.',
    xp: 20
  },
  {
    id: 'perim_6',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'A rectangle has a length of 14 cm and a perimeter of 48 cm. What is its width?',
    options: ['10 cm', '20 cm', '12 cm', '14 cm'],
    correctAnswer: '10 cm',
    explanation: '2(L + W) = 48 => L + W = 24 => 14 + W = 24 => W = 10 cm.',
    xp: 25
  },
  {
    id: 'perim_7',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'A regular hexagon has a perimeter of 54 cm. What is the length of each side?',
    options: ['9 cm', '8 cm', '6 cm', '12 cm'],
    correctAnswer: '9 cm',
    explanation: 'A regular hexagon has 6 equal sides. Side = 54 / 6 = 9 cm.',
    xp: 25
  },
  {
    id: 'perim_8',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'What is the perimeter of a right triangle with legs 6 cm and 8 cm?',
    options: ['24 cm', '48 cm', '20 cm', '28 cm'],
    correctAnswer: '24 cm',
    explanation: 'Hypotenuse c = √(6² + 8²) = √(36 + 64) = 10 cm. Perimeter = 6 + 8 + 10 = 24 cm.',
    xp: 25
  },
  {
    id: 'perim_9',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'What is the perimeter of a regular octagon with side length 4.5 cm?',
    options: ['36 cm', '32 cm', '40.5 cm', '45 cm'],
    correctAnswer: '36 cm',
    explanation: 'An octagon has 8 sides: 8 × 4.5 = 36 cm.',
    xp: 25
  },
  {
    id: 'perim_10',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'What is the perimeter of a semicircle with radius 7 cm (including the straight diameter base)? (Take π = 22/7)',
    options: ['36 cm', '22 cm', '44 cm', '29 cm'],
    correctAnswer: '36 cm',
    explanation: 'Curved arc = πr = (22/7) × 7 = 22 cm. Diameter = 2r = 14 cm. Total perimeter = 22 + 14 = 36 cm.',
    xp: 25
  },
  {
    id: 'perim_11',
    topic: 'perimeter',
    difficulty: 'medium',
    question: 'A rhombus has a perimeter of 60 cm. What is the length of one side?',
    options: ['15 cm', '30 cm', '20 cm', '10 cm'],
    correctAnswer: '15 cm',
    explanation: 'All 4 sides of a rhombus are equal: Side = 60 / 4 = 15 cm.',
    xp: 25
  },
  {
    id: 'perim_12',
    topic: 'perimeter',
    difficulty: 'hard',
    question: 'An isosceles triangle has a perimeter of 32 cm and a base of 12 cm. What is the length of each equal leg?',
    options: ['10 cm', '8 cm', '12 cm', '14 cm'],
    correctAnswer: '10 cm',
    explanation: 'Remaining perimeter = 32 - 12 = 20 cm. Equal sides = 20 / 2 = 10 cm each.',
    xp: 35
  },
  {
    id: 'perim_13',
    topic: 'perimeter',
    difficulty: 'hard',
    question: 'A rectangular garden is 25 m long and 15 m wide. If fencing costs $8 per meter, what is the total cost to enclose it?',
    options: ['$640', '$320', '$3,000', '$800'],
    correctAnswer: '$640',
    explanation: 'Perimeter = 2 × (25 + 15) = 2 × 40 = 80 m. Cost = 80 m × $8/m = $640.',
    xp: 35
  },
  {
    id: 'perim_14',
    topic: 'perimeter',
    difficulty: 'hard',
    question: 'A square has an area of 144 cm². What is its perimeter?',
    options: ['48 cm', '36 cm', '24 cm', '72 cm'],
    correctAnswer: '48 cm',
    explanation: 'Side = √144 = 12 cm. Perimeter = 4 × 12 = 48 cm.',
    xp: 35
  },
  {
    id: 'perim_15',
    topic: 'perimeter',
    difficulty: 'hard',
    question: 'If the length of a rectangle is tripled and its width is doubled, what happens to its perimeter?',
    options: ['It depends on the original dimensions', 'It increases 5 times', 'It increases 6 times', 'It quadruples'],
    correctAnswer: 'It depends on the original dimensions',
    explanation: 'Original P = 2(L + W). New P = 2(3L + 2W) = 6L + 4W, which depends on the ratio of L to W.',
    xp: 35
  },
  {
    id: 'perim_16',
    topic: 'perimeter',
    difficulty: 'expert',
    question: 'A wire in the shape of a circle of radius 14 cm is bent into a square. What is the side length of the square? (π = 22/7)',
    options: ['22 cm', '44 cm', '11 cm', '28 cm'],
    correctAnswer: '22 cm',
    explanation: 'Wire length = circumference = 2 × (22/7) × 14 = 88 cm. Square side = 88 / 4 = 22 cm.',
    xp: 45
  },
  {
    id: 'perim_17',
    topic: 'perimeter',
    difficulty: 'expert',
    question: 'A running track consists of a rectangle 100 m by 64 m with semicircular ends on the two shorter sides. What is the total inside perimeter of the track? (Take π ≈ 3.1416)',
    options: ['401.06 m', '328 m', '500 m', '452.16 m'],
    correctAnswer: '401.06 m',
    explanation: 'Straight sides = 2 × 100 = 200 m. Two semicircles = full circle with diameter 64 m => C = π × 64 ≈ 201.06 m. Total = 200 + 201.06 = 401.06 m.',
    xp: 45
  },
  {
    id: 'perim_18',
    topic: 'perimeter',
    difficulty: 'expert',
    question: 'Two identical squares of perimeter 24 cm each are joined side-by-side to form a rectangle. What is the perimeter of this new rectangle?',
    options: ['36 cm', '48 cm', '30 cm', '42 cm'],
    correctAnswer: '36 cm',
    explanation: 'Square side = 24 / 4 = 6 cm. New rectangle is 12 cm by 6 cm. Perimeter = 2 × (12 + 6) = 36 cm.',
    xp: 45
  },
  {
    id: 'perim_19',
    topic: 'perimeter',
    difficulty: 'expert',
    question: 'An equilateral triangle and a square have the same perimeter. If the side of the triangle is 12 cm, what is the side of the square?',
    options: ['9 cm', '8 cm', '6 cm', '10 cm'],
    correctAnswer: '9 cm',
    explanation: 'Perimeter = 3 × 12 = 36 cm. Square side = 36 / 4 = 9 cm.',
    xp: 45
  },
  {
    id: 'perim_20',
    topic: 'perimeter',
    difficulty: 'expert',
    question: 'What is the perimeter of a regular decagon (10-sided polygon) with side length 3.8 cm?',
    options: ['38 cm', '36 cm', '40 cm', '19 cm'],
    correctAnswer: '38 cm',
    explanation: 'Perimeter = 10 × 3.8 = 38 cm.',
    xp: 45
  }
];
