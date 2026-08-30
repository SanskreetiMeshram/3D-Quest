/**
 * quadrilaterals.js
 * 20 verified questions on Quadrilaterals (Squares, Rectangles, Parallelograms, Rhombuses, Trapezoids, Kites).
 */
export const quadrilateralsQuestions = [
  {
    id: 'quad_1',
    topic: 'quadrilaterals',
    difficulty: 'easy',
    question: 'What is the sum of interior angles in any four-sided polygon (quadrilateral)?',
    options: ['360°', '180°', '540°', '720°'],
    correctAnswer: '360°',
    explanation: 'Any quadrilateral can be split into 2 triangles, giving an interior angle sum of 2 × 180° = 360°.',
    xp: 20
  },
  {
    id: 'quad_2',
    topic: 'quadrilaterals',
    difficulty: 'easy',
    question: 'A quadrilateral with 4 equal sides and 4 right angles is a:',
    options: ['Square', 'Rectangle', 'Rhombus', 'Trapezoid'],
    correctAnswer: 'Square',
    explanation: 'A square is a regular quadrilateral with four equal sides and four 90° interior angles.',
    xp: 20,
    diagram: { type: 'rectangle', w: 80, h: 80, label: 'Square (s=s)' }
  },
  {
    id: 'quad_3',
    topic: 'quadrilaterals',
    difficulty: 'easy',
    question: 'A quadrilateral with opposite sides equal and 4 right angles is a:',
    options: ['Rectangle', 'Trapezoid', 'Kite', 'Rhombus'],
    correctAnswer: 'Rectangle',
    explanation: 'A rectangle has opposite sides equal and parallel with four 90° interior angles.',
    xp: 20,
    diagram: { type: 'rectangle', w: 120, h: 70, label: 'Rectangle (L, W)' }
  },
  {
    id: 'quad_4',
    topic: 'quadrilaterals',
    difficulty: 'easy',
    question: 'A parallelogram with all 4 sides equal in length is called a:',
    options: ['Rhombus', 'Rectangle', 'Trapezoid', 'Scalene quad'],
    correctAnswer: 'Rhombus',
    explanation: 'A rhombus is an equilateral parallelogram where all four sides have equal length.',
    xp: 20
  },
  {
    id: 'quad_5',
    topic: 'quadrilaterals',
    difficulty: 'easy',
    question: 'A quadrilateral with exactly one pair of parallel sides is called a:',
    options: ['Trapezoid (Trapezium)', 'Parallelogram', 'Kite', 'Rectangle'],
    correctAnswer: 'Trapezoid (Trapezium)',
    explanation: 'A trapezoid (or trapezium) is defined by having at least (or exactly) one pair of opposite parallel sides.',
    xp: 20
  },
  {
    id: 'quad_6',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'What is true about the diagonals of a rectangle?',
    options: ['They are equal in length and bisect each other', 'They are perpendicular', 'They are unequal', 'They bisect the angles'],
    correctAnswer: 'They are equal in length and bisect each other',
    explanation: 'The diagonals of a rectangle are equal in length and cut each other into equal halves (bisect).',
    xp: 25
  },
  {
    id: 'quad_7',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'What is true about the diagonals of a rhombus?',
    options: ['They bisect each other perpendicularly at 90°', 'They are always equal in length', 'They never intersect', 'They sum to 360°'],
    correctAnswer: 'They bisect each other perpendicularly at 90°',
    explanation: 'A key property of a rhombus is that its diagonals are perpendicular bisectors of each other.',
    xp: 25
  },
  {
    id: 'quad_8',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'If three angles of a quadrilateral are 90°, 85°, and 75°, what is the fourth angle?',
    options: ['110°', '100°', '120°', '115°'],
    correctAnswer: '110°',
    explanation: 'Sum = 360°. Fourth angle = 360° - (90° + 85° + 75°) = 360° - 250° = 110°.',
    xp: 25
  },
  {
    id: 'quad_9',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'In a parallelogram, consecutive (adjacent) angles are always:',
    options: ['Supplementary (sum to 180°)', 'Equal', 'Complementary (sum to 90°)', 'Sum to 360°'],
    correctAnswer: 'Supplementary (sum to 180°)',
    explanation: 'Because opposite sides are parallel, consecutive interior angles are co-interior and sum to 180°.',
    xp: 25
  },
  {
    id: 'quad_10',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'If one angle of a parallelogram is 65°, what are the measures of the other three angles?',
    options: ['115°, 65°, 115°', '65°, 65°, 65°', '125°, 65°, 125°', '90°, 90°, 115°'],
    correctAnswer: '115°, 65°, 115°',
    explanation: 'Opposite angles are equal (65°). Adjacent angles are supplementary (180° - 65° = 115°).',
    xp: 25
  },
  {
    id: 'quad_11',
    topic: 'quadrilaterals',
    difficulty: 'medium',
    question: 'What is the formula for the area of a trapezoid with parallel bases a and b, and height h?',
    options: ['(1/2) × (a + b) × h', '(a + b) × h', 'a × b × h', '(1/2) × a × b'],
    correctAnswer: '(1/2) × (a + b) × h',
    explanation: 'The area of a trapezoid is the average of the two parallel bases multiplied by height: Area = ((a + b) / 2) * h.',
    xp: 25
  },
  {
    id: 'quad_12',
    topic: 'quadrilaterals',
    difficulty: 'hard',
    question: 'What is the formula for the area of a rhombus with diagonals d₁ and d₂?',
    options: ['(1/2) × d₁ × d₂', 'd₁ × d₂', '2 × (d₁ + d₂)', '(d₁ + d₂)²'],
    correctAnswer: '(1/2) × d₁ × d₂',
    explanation: 'Area of a rhombus = (1/2) * d₁ * d₂ because the diagonals split it into four congruent right-angled triangles.',
    xp: 35
  },
  {
    id: 'quad_13',
    topic: 'quadrilaterals',
    difficulty: 'hard',
    question: 'A kite has diagonals measuring 10 cm and 16 cm. What is its area?',
    options: ['80 cm²', '160 cm²', '40 cm²', '52 cm²'],
    correctAnswer: '80 cm²',
    explanation: 'For a kite with perpendicular diagonals: Area = (1/2) * d₁ * d₂ = (1/2) * 10 * 16 = 80 cm².',
    xp: 35
  },
  {
    id: 'quad_14',
    topic: 'quadrilaterals',
    difficulty: 'hard',
    question: 'The angles of a quadrilateral are in the ratio 3 : 4 : 5 : 6. What is the smallest angle?',
    options: ['60°', '80°', '100°', '45°'],
    correctAnswer: '60°',
    explanation: '3x + 4x + 5x + 6x = 18x = 360° => x = 20°. Smallest angle = 3 * 20° = 60°.',
    xp: 35
  },
  {
    id: 'quad_15',
    topic: 'quadrilaterals',
    difficulty: 'hard',
    question: 'In an isosceles trapezoid, which of the following is always true?',
    options: ['The non-parallel sides are equal', 'All four sides are equal', 'The diagonals are perpendicular', 'The opposite angles are equal'],
    correctAnswer: 'The non-parallel sides are equal',
    explanation: 'An isosceles trapezoid has congruent non-parallel legs, equal base angles, and congruent diagonals.',
    xp: 35
  },
  {
    id: 'quad_16',
    topic: 'quadrilaterals',
    difficulty: 'expert',
    question: 'A cyclic quadrilateral is a four-sided shape whose vertices all lie on a circle. What is the sum of its opposite angles?',
    options: ['180°', '360°', '90°', '270°'],
    correctAnswer: '180°',
    explanation: 'Opposite angles of any cyclic quadrilateral inscribed in a circle are always supplementary (sum to 180°).',
    xp: 45
  },
  {
    id: 'quad_17',
    topic: 'quadrilaterals',
    difficulty: 'expert',
    question: 'If the diagonals of a parallelogram are equal and perpendicular, the quadrilateral must be a:',
    options: ['Square', 'Rectangle', 'Rhombus', 'Kite'],
    correctAnswer: 'Square',
    explanation: 'Equal diagonals make it a rectangle; perpendicular diagonals make it a rhombus; combining both makes it a square.',
    xp: 45
  },
  {
    id: 'quad_18',
    topic: 'quadrilaterals',
    difficulty: 'expert',
    question: 'If a rhombus has side length 10 cm and one diagonal of 12 cm, what is the length of the other diagonal?',
    options: ['16 cm', '14 cm', '8 cm', '18 cm'],
    correctAnswer: '16 cm',
    explanation: 'Diagonals bisect at 90°. Half diagonal = 6. By Pythagoras: 6² + (d₂/2)² = 10² => 36 + (d₂/2)² = 100 => (d₂/2)² = 64 => d₂/2 = 8 => d₂ = 16 cm.',
    xp: 45
  },
  {
    id: 'quad_19',
    topic: 'quadrilaterals',
    difficulty: 'expert',
    question: 'What is the sum of the exterior angles of any convex quadrilateral?',
    options: ['360°', '180°', '720°', '540°'],
    correctAnswer: '360°',
    explanation: 'The sum of exterior angles of any convex polygon (including quadrilaterals) taken one at each vertex is always 360°.',
    xp: 45
  },
  {
    id: 'quad_20',
    topic: 'quadrilaterals',
    difficulty: 'expert',
    question: 'Ptolemy\'s Theorem for a cyclic quadrilateral with sides a, b, c, d and diagonals p, q states that:',
    options: ['p × q = a × c + b × d', 'p + q = a + b + c + d', 'p² + q² = a² + b² + c² + d²', 'p / q = (a + c) / (b + d)'],
    correctAnswer: 'p × q = a × c + b × d',
    explanation: 'Ptolemy\'s theorem states that the product of the diagonals of a cyclic quadrilateral equals the sum of the products of opposite sides.',
    xp: 45
  }
];
