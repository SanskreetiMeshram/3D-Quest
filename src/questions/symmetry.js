/**
 * symmetry.js
 * 20 verified questions on Line Symmetry, Rotational Symmetry, Order, and Transformations.
 */
export const symmetryQuestions = [
  {
    id: 'sym_1',
    topic: 'symmetry',
    difficulty: 'easy',
    question: 'How many lines of symmetry does a square have?',
    options: ['4', '2', '8', '1'],
    correctAnswer: '4',
    explanation: 'A square has 4 lines of symmetry: 2 through the opposite midpoints and 2 along the diagonals.',
    xp: 20
  },
  {
    id: 'sym_2',
    topic: 'symmetry',
    difficulty: 'easy',
    question: 'How many lines of symmetry does an equilateral triangle have?',
    options: ['3', '1', '6', '0'],
    correctAnswer: '3',
    explanation: 'An equilateral triangle has 3 lines of symmetry passing from each vertex to the opposite side\'s midpoint.',
    xp: 20
  },
  {
    id: 'sym_3',
    topic: 'symmetry',
    difficulty: 'easy',
    question: 'How many lines of symmetry does a rectangle (non-square) have?',
    options: ['2', '4', '1', '0'],
    correctAnswer: '2',
    explanation: 'A rectangle has 2 lines of symmetry connecting midpoints of opposite sides. Diagonals are NOT lines of reflection for a non-square rectangle.',
    xp: 20
  },
  {
    id: 'sym_4',
    topic: 'symmetry',
    difficulty: 'easy',
    question: 'How many lines of symmetry does a circle have?',
    options: ['Infinitely many', '360', '100', '4'],
    correctAnswer: 'Infinitely many',
    explanation: 'Every line passing through the center of a circle is a valid line of reflectional symmetry.',
    xp: 20
  },
  {
    id: 'sym_5',
    topic: 'symmetry',
    difficulty: 'easy',
    question: 'How many lines of symmetry does a scalene triangle have?',
    options: ['0', '1', '2', '3'],
    correctAnswer: '0',
    explanation: 'A scalene triangle has sides of unequal length and lacks any line of symmetry.',
    xp: 20
  },
  {
    id: 'sym_6',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'What is the order of rotational symmetry of a square?',
    options: ['4', '2', '8', '1'],
    correctAnswer: '4',
    explanation: 'A square matches its original orientation 4 times during a full 360° turn (at 90°, 180°, 270°, 360°).',
    xp: 25
  },
  {
    id: 'sym_7',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'What is the angle of rotational symmetry for a regular hexagon?',
    options: ['60°', '45°', '90°', '120°'],
    correctAnswer: '60°',
    explanation: 'Angle of rotation = 360° / number of sides = 360° / 6 = 60°.',
    xp: 25
  },
  {
    id: 'sym_8',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'How many lines of symmetry does a regular pentagon have?',
    options: ['5', '10', '1', '0'],
    correctAnswer: '5',
    explanation: 'Every regular n-gon has exactly n lines of reflectional symmetry. For a pentagon, n = 5.',
    xp: 25
  },
  {
    id: 'sym_9',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'Which of the following English capital letters has both vertical and horizontal line symmetry?',
    options: ['H', 'A', 'B', 'P'],
    correctAnswer: 'H',
    explanation: 'The letter "H" is symmetrical across both a vertical midline and a horizontal midline.',
    xp: 25
  },
  {
    id: 'sym_10',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'What is the order of rotational symmetry of a regular octagon?',
    options: ['8', '4', '6', '16'],
    correctAnswer: '8',
    explanation: 'A regular 8-sided octagon has an order of rotational symmetry equal to 8.',
    xp: 25
  },
  {
    id: 'sym_11',
    topic: 'symmetry',
    difficulty: 'medium',
    question: 'How many lines of symmetry does a general parallelogram (non-rhombus, non-rectangle) have?',
    options: ['0', '2', '1', '4'],
    correctAnswer: '0',
    explanation: 'A general slanted parallelogram has rotational symmetry of order 2, but 0 lines of reflectional symmetry.',
    xp: 25
  },
  {
    id: 'sym_12',
    topic: 'symmetry',
    difficulty: 'hard',
    question: 'What is the minimum angle of rotation required for an equilateral triangle to map onto itself?',
    options: ['120°', '60°', '180°', '90°'],
    correctAnswer: '120°',
    explanation: '360° / 3 = 120° rotation around the centroid.',
    xp: 35
  },
  {
    id: 'sym_13',
    topic: 'symmetry',
    difficulty: 'hard',
    question: 'How many lines of symmetry does a rhombus have?',
    options: ['2', '4', '1', '0'],
    correctAnswer: '2',
    explanation: 'A rhombus has 2 lines of symmetry along its two perpendicular diagonals.',
    xp: 35
  },
  {
    id: 'sym_14',
    topic: 'symmetry',
    difficulty: 'hard',
    question: 'How many lines of symmetry does an isosceles trapezoid have?',
    options: ['1', '2', '0', '4'],
    correctAnswer: '1',
    explanation: 'An isosceles trapezoid has 1 vertical line of symmetry passing through the midpoints of its parallel bases.',
    xp: 35
  },
  {
    id: 'sym_15',
    topic: 'symmetry',
    difficulty: 'hard',
    question: 'Which geometric transformation creates a mirror image across a given line?',
    options: ['Reflection', 'Translation', 'Rotation', 'Dilation'],
    correctAnswer: 'Reflection',
    explanation: 'Reflection produces a mirror image of an object flipped across the line of reflection.',
    xp: 35
  },
  {
    id: 'sym_16',
    topic: 'symmetry',
    difficulty: 'expert',
    question: 'A figure that has rotational symmetry of order 1 is considered to have:',
    options: ['No rotational symmetry', 'Half-turn symmetry', 'Bilateral symmetry', 'Point symmetry'],
    correctAnswer: 'No rotational symmetry',
    explanation: 'An order of 1 means the figure only matches itself after a full 360° revolution, which is trivial.',
    xp: 45
  },
  {
    id: 'sym_17',
    topic: 'symmetry',
    difficulty: 'expert',
    question: 'Point symmetry around the origin is equivalent to a rotation of what angle?',
    options: ['180°', '90°', '270°', '360°'],
    correctAnswer: '180°',
    explanation: 'Point reflection in 2D (mapping (x, y) -> (-x, -y)) is identical to a 180° rotation.',
    xp: 45
  },
  {
    id: 'sym_18',
    topic: 'symmetry',
    difficulty: 'expert',
    question: 'How many planes of symmetry does a regular tetrahedron have?',
    options: ['6', '3', '4', '12'],
    correctAnswer: '6',
    explanation: 'A regular tetrahedron possesses exactly 6 planes of reflective symmetry (one for each of its 6 edges).',
    xp: 45
  },
  {
    id: 'sym_19',
    topic: 'symmetry',
    difficulty: 'expert',
    question: 'How many planes of symmetry does a cube have?',
    options: ['9', '6', '12', '4'],
    correctAnswer: '9',
    explanation: 'A cube has 9 planes of symmetry: 3 parallel to pairs of faces and 6 passing through opposite diagonal edges.',
    xp: 45
  },
  {
    id: 'sym_20',
    topic: 'symmetry',
    difficulty: 'expert',
    question: 'What is the order of rotational symmetry of a regular decagon?',
    options: ['10', '5', '20', '8'],
    correctAnswer: '10',
    explanation: 'A regular decagon has 10 rotational positions that map onto itself (36° increments).',
    xp: 45
  }
];
