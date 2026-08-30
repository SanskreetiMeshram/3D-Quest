/**
 * area.js
 * 20 verified questions on Area of 2D Polygons, Composite Figures, and Shaded Regions.
 */
export const areaQuestions = [
  {
    id: 'area_1',
    topic: 'area',
    difficulty: 'easy',
    question: 'What is the formula for the area of a rectangle with length L and width W?',
    options: ['L × W', '2(L + W)', 'L² + W²', '(1/2) L × W'],
    correctAnswer: 'L × W',
    explanation: 'The area of a rectangle is the product of its length and width (A = L × W).',
    xp: 20
  },
  {
    id: 'area_2',
    topic: 'area',
    difficulty: 'easy',
    question: 'What is the area of a square with side length 9 cm?',
    options: ['81 cm²', '36 cm²', '18 cm²', '72 cm²'],
    correctAnswer: '81 cm²',
    explanation: 'Area of square = side² = 9² = 81 cm².',
    xp: 20
  },
  {
    id: 'area_3',
    topic: 'area',
    difficulty: 'easy',
    question: 'What is the formula for the area of a parallelogram with base b and vertical height h?',
    options: ['b × h', '(1/2) × b × h', '2(b + h)', 'b² × h'],
    correctAnswer: 'b × h',
    explanation: 'The area of a parallelogram is simply base multiplied by perpendicular height (A = b × h).',
    xp: 20
  },
  {
    id: 'area_4',
    topic: 'area',
    difficulty: 'easy',
    question: 'What is the area of a triangle with base 10 cm and height 6 cm?',
    options: ['30 cm²', '60 cm²', '16 cm²', '20 cm²'],
    correctAnswer: '30 cm²',
    explanation: 'Area = (1/2) × 10 × 6 = 30 cm².',
    xp: 20
  },
  {
    id: 'area_5',
    topic: 'area',
    difficulty: 'easy',
    question: 'What is the standard unit of measurement for area in the metric system?',
    options: ['Square meters (m²)', 'Cubic meters (m³)', 'Meters (m)', 'Liters (L)'],
    correctAnswer: 'Square meters (m²)',
    explanation: 'Area measures two-dimensional surface space and is always expressed in square units such as m², cm², etc.',
    xp: 20
  },
  {
    id: 'area_6',
    topic: 'area',
    difficulty: 'medium',
    question: 'A trapezoid has parallel bases of 12 cm and 18 cm, and height 8 cm. What is its area?',
    options: ['120 cm²', '240 cm²', '60 cm²', '144 cm²'],
    correctAnswer: '120 cm²',
    explanation: 'Area = ((a + b) / 2) × h = ((12 + 18) / 2) × 8 = 15 × 8 = 120 cm².',
    xp: 25
  },
  {
    id: 'area_7',
    topic: 'area',
    difficulty: 'medium',
    question: 'A rhombus has diagonals of length 14 cm and 20 cm. What is its area?',
    options: ['140 cm²', '280 cm²', '70 cm²', '68 cm²'],
    correctAnswer: '140 cm²',
    explanation: 'Area = (1/2) × d₁ × d₂ = (1/2) × 14 × 20 = 140 cm².',
    xp: 25
  },
  {
    id: 'area_8',
    topic: 'area',
    difficulty: 'medium',
    question: 'A rectangle has an area of 96 cm² and a width of 8 cm. What is its length?',
    options: ['12 cm', '10 cm', '14 cm', '16 cm'],
    correctAnswer: '12 cm',
    explanation: 'Length = Area / Width = 96 / 8 = 12 cm.',
    xp: 25
  },
  {
    id: 'area_9',
    topic: 'area',
    difficulty: 'medium',
    question: 'What is the area of a semicircle with radius 14 cm? (Take π = 22/7)',
    options: ['308 cm²', '616 cm²', '154 cm²', '44 cm²'],
    correctAnswer: '308 cm²',
    explanation: 'Full circle area = πr² = (22/7) × 196 = 616 cm². Semicircle area = 616 / 2 = 308 cm².',
    xp: 25
  },
  {
    id: 'area_10',
    topic: 'area',
    difficulty: 'medium',
    question: 'If the side length of a square is doubled, by what factor does its area increase?',
    options: ['4 times', '2 times', '8 times', '16 times'],
    correctAnswer: '4 times',
    explanation: 'New Area = (2s)² = 4s², which is 4 times the original area.',
    xp: 25
  },
  {
    id: 'area_11',
    topic: 'area',
    difficulty: 'medium',
    question: 'A parallelogram has a base of 15 cm and an area of 105 cm². What is its corresponding height?',
    options: ['7 cm', '6 cm', '8 cm', '9 cm'],
    correctAnswer: '7 cm',
    explanation: 'Height = Area / Base = 105 / 15 = 7 cm.',
    xp: 25
  },
  {
    id: 'area_12',
    topic: 'area',
    difficulty: 'hard',
    question: 'A circle of radius 7 cm is inscribed inside a square of side 14 cm. What is the area of the shaded region outside the circle? (π = 22/7)',
    options: ['42 cm²', '154 cm²', '196 cm²', '32 cm²'],
    correctAnswer: '42 cm²',
    explanation: 'Area of square = 14² = 196 cm². Area of circle = (22/7) × 7² = 154 cm². Shaded region = 196 - 154 = 42 cm².',
    xp: 35
  },
  {
    id: 'area_13',
    topic: 'area',
    difficulty: 'hard',
    question: 'What is the area of a regular hexagon with side length 6 cm?',
    options: ['54√3 cm²', '36√3 cm²', '18√3 cm²', '108 cm²'],
    correctAnswer: '54√3 cm²',
    explanation: 'A regular hexagon comprises 6 equilateral triangles: Area = 6 × ((√3 / 4) × 6²) = 6 × 9√3 = 54√3 cm² (~93.53 cm²).',
    xp: 35
  },
  {
    id: 'area_14',
    topic: 'area',
    difficulty: 'hard',
    question: 'The ratio of the areas of two similar triangles is 49 : 81. What is the ratio of their corresponding side lengths?',
    options: ['7 : 9', '49 : 81', '√7 : 9', '14 : 18'],
    correctAnswer: '7 : 9',
    explanation: 'Ratio of areas = (Ratio of sides)². Thus, ratio of sides = √(49/81) = 7/9.',
    xp: 35
  },
  {
    id: 'area_15',
    topic: 'area',
    difficulty: 'hard',
    question: 'What is the area of a right-angled isosceles triangle with hypotenuse 10 cm?',
    options: ['25 cm²', '50 cm²', '12.5 cm²', '100 cm²'],
    correctAnswer: '25 cm²',
    explanation: 'For right isosceles triangle: a² + a² = c² => 2a² = 100 => a² = 50. Area = (1/2) a² = (1/2) × 50 = 25 cm².',
    xp: 35
  },
  {
    id: 'area_16',
    topic: 'area',
    difficulty: 'expert',
    question: 'A pathway 2 meters wide runs around the outside of a rectangular lawn 20 m by 15 m. What is the area of the path alone?',
    options: ['156 m²', '300 m²', '456 m²', '140 m²'],
    correctAnswer: '156 m²',
    explanation: 'Lawn area = 20 × 15 = 300 m². Outer rectangle = (20+4) × (15+4) = 24 × 19 = 456 m². Path area = 456 - 300 = 156 m².',
    xp: 45
  },
  {
    id: 'area_17',
    topic: 'area',
    difficulty: 'expert',
    question: 'What is the area of an equilateral triangle inscribed inside a circle of radius R?',
    options: ['(3√3 / 4) R²', '(√3 / 4) R²', '3√3 R²', '(3 / 2) R²'],
    correctAnswer: '(3√3 / 4) R²',
    explanation: 'Side length s = R√3. Area = (√3 / 4) s² = (√3 / 4) (3R²) = (3√3 / 4) R².',
    xp: 45
  },
  {
    id: 'area_18',
    topic: 'area',
    difficulty: 'expert',
    question: 'Find the area of a sector with radius 12 cm and arc length 10 cm.',
    options: ['60 cm²', '120 cm²', '30 cm²', '72 cm²'],
    correctAnswer: '60 cm²',
    explanation: 'Area of sector = (1/2) × arc length × radius = (1/2) × 10 × 12 = 60 cm².',
    xp: 45
  },
  {
    id: 'area_19',
    topic: 'area',
    difficulty: 'expert',
    question: 'The diagonals of a rhombus are in the ratio 3 : 4 and its area is 216 cm². What is the length of the longer diagonal?',
    options: ['24 cm', '18 cm', '12 cm', '36 cm'],
    correctAnswer: '24 cm',
    explanation: 'Area = (1/2)(3x)(4x) = 6x² = 216 => x² = 36 => x = 6. Longer diagonal = 4 × 6 = 24 cm.',
    xp: 45
  },
  {
    id: 'area_20',
    topic: 'area',
    difficulty: 'expert',
    question: 'If the radius of a circle increases by 50%, by what percentage does its area increase?',
    options: ['125%', '50%', '100%', '225%'],
    correctAnswer: '125%',
    explanation: 'New Area = π(1.5r)² = 2.25 πr² = 225% of original area. Increase = 225% - 100% = 125%.',
    xp: 45
  }
];
