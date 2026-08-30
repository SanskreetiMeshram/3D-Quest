/**
 * mixedGeometry.js
 * 20 verified challenging questions synthesizing all geometry topics for the Grand Master Arena.
 */
export const mixedGeometryQuestions = [
  {
    id: 'mix_1',
    topic: 'mixed',
    difficulty: 'medium',
    question: 'A right triangle has hypotenuse 10 cm and perimeter 24 cm. What is its area?',
    options: ['24 cm²', '48 cm²', '20 cm²', '30 cm²'],
    correctAnswer: '24 cm²',
    explanation: 'a + b + 10 = 24 => a + b = 14. (a + b)² = a² + 2ab + b² => 14² = 10² + 2ab => 196 = 100 + 2ab => 2ab = 96 => ab = 48. Area = (1/2) ab = 24 cm².',
    xp: 30
  },
  {
    id: 'mix_2',
    topic: 'mixed',
    difficulty: 'medium',
    question: 'What is the sum of interior angles of a convex polygon with 7 sides (heptagon)?',
    options: ['900°', '720°', '1080°', '540°'],
    correctAnswer: '900°',
    explanation: 'Sum = (n - 2) × 180° = (7 - 2) × 180° = 5 × 180° = 900°.',
    xp: 30
  },
  {
    id: 'mix_3',
    topic: 'mixed',
    difficulty: 'medium',
    question: 'What is the volume of a cylinder whose height equals its diameter, with radius 3 cm in terms of π?',
    options: ['54π cm³', '18π cm³', '36π cm³', '27π cm³'],
    correctAnswer: '54π cm³',
    explanation: 'Radius = 3 cm => Diameter = Height = 6 cm. Volume = πr²h = π(3²)(6) = 54π cm³.',
    xp: 30
  },
  {
    id: 'mix_4',
    topic: 'mixed',
    difficulty: 'medium',
    question: 'If the circumference of a circle is numerically equal to its area, what is the circle\'s radius?',
    options: ['2 units', '1 unit', '4 units', 'π units'],
    correctAnswer: '2 units',
    explanation: '2πr = πr² => 2 = r => r = 2 units.',
    xp: 30
  },
  {
    id: 'mix_5',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'What is the distance between the parallel lines 3x + 4y = 10 and 3x + 4y = 25?',
    options: ['3 units', '15 units', '5 units', '2.5 units'],
    correctAnswer: '3 units',
    explanation: 'Distance = |c₂ - c₁| / √(A² + B²) = |25 - 10| / √(3² + 4²) = 15 / 5 = 3 units.',
    xp: 35
  },
  {
    id: 'mix_6',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'A sphere is inscribed inside a cube of side 6 cm. What is the volume of the sphere in terms of π?',
    options: ['36π cm³', '72π cm³', '288π cm³', '18π cm³'],
    correctAnswer: '36π cm³',
    explanation: 'Diameter = 6 cm => Radius r = 3 cm. Volume = (4/3)π(3³) = (4/3)π(27) = 36π cm³.',
    xp: 35
  },
  {
    id: 'mix_7',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'How many diagonals does a regular nonagon (9-sided polygon) have?',
    options: ['27', '36', '18', '24'],
    correctAnswer: '27',
    explanation: 'Formula for diagonals in an n-gon: D = n(n - 3) / 2. For n = 9: 9(6) / 2 = 27 diagonals.',
    xp: 35
  },
  {
    id: 'mix_8',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'What is the measure of each interior angle in a regular octagon?',
    options: ['135°', '120°', '140°', '108°'],
    correctAnswer: '135°',
    explanation: 'Interior angle = ((n - 2) × 180°) / n = (6 × 180°) / 8 = 1080° / 8 = 135°.',
    xp: 35
  },
  {
    id: 'mix_9',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'In a right circular cone, the radius is 5 cm and the volume is 100π cm³. What is its perpendicular height?',
    options: ['12 cm', '15 cm', '10 cm', '8 cm'],
    correctAnswer: '12 cm',
    explanation: 'V = (1/3)πr²h => 100π = (1/3)π(25)h => 100 = (25/3)h => h = 12 cm.',
    xp: 35
  },
  {
    id: 'mix_10',
    topic: 'mixed',
    difficulty: 'hard',
    question: 'What is the area of a square inscribed inside a circle of radius 5 cm?',
    options: ['50 cm²', '25 cm²', '100 cm²', '50√2 cm²'],
    correctAnswer: '50 cm²',
    explanation: 'The diagonal of the inscribed square equals the diameter: d = 10 cm. Area = d² / 2 = 100 / 2 = 50 cm².',
    xp: 35
  },
  {
    id: 'mix_11',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'If the surface area of a sphere is 144π cm², what is its volume in terms of π?',
    options: ['288π cm³', '144π cm³', '576π cm³', '216π cm³'],
    correctAnswer: '288π cm³',
    explanation: '4πr² = 144π => r² = 36 => r = 6 cm. Volume = (4/3)π(6³) = (4/3)π(216) = 288π cm³.',
    xp: 45
  },
  {
    id: 'mix_12',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'What is the ratio of the volume of a sphere to the volume of its circumscribed cylinder?',
    options: ['2 : 3', '1 : 2', '3 : 4', '1 : 3'],
    correctAnswer: '2 : 3',
    explanation: 'Sphere volume = (4/3)πr³, Cylinder volume = πr²(2r) = 2πr³. Ratio = (4/3) / 2 = 2/3 (Archimedes\' famous result).',
    xp: 45
  },
  {
    id: 'mix_13',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'A wire forming an equilateral triangle of side 88 cm is rebent into a circle. What is the circle\'s radius? (Take π = 22/7)',
    options: ['42 cm', '28 cm', '21 cm', '35 cm'],
    correctAnswer: '42 cm',
    explanation: 'Perimeter = 3 × 88 = 264 cm. Circumference = 2 × (22/7) × r = 264 => (44/7)r = 264 => r = 42 cm.',
    xp: 45
  },
  {
    id: 'mix_14',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'What is the radius of the incircle of a right triangle with legs 9 cm and 12 cm (hypotenuse 15 cm)?',
    options: ['3 cm', '4 cm', '2 cm', '3.5 cm'],
    correctAnswer: '3 cm',
    explanation: 'Inradius r = (a + b - c)/2 = (9 + 12 - 15)/2 = 6/2 = 3 cm.',
    xp: 45
  },
  {
    id: 'mix_15',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'The lengths of two parallel chords in a circle of radius 10 cm are 12 cm and 16 cm on the same side of center. What is the distance between them?',
    options: ['2 cm', '4 cm', '3 cm', '1 cm'],
    correctAnswer: '2 cm',
    explanation: 'Distance to 16 cm chord = √(10² - 8²) = 6 cm. Distance to 12 cm chord = √(10² - 6²) = 8 cm. Distance between = 8 - 6 = 2 cm.',
    xp: 45
  },
  {
    id: 'mix_16',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'What is the volume of a regular tetrahedron with edge length 6 cm?',
    options: ['18√2 cm³', '36√2 cm³', '9√2 cm³', '24√3 cm³'],
    correctAnswer: '18√2 cm³',
    explanation: 'Tetrahedron volume = (a³ / (6√2)) = 216 / (6√2) = 36 / √2 = 18√2 cm³ (~25.46 cm³).',
    xp: 45
  },
  {
    id: 'mix_17',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'The sum of interior angles of a polygon is 1440°. How many sides does it have?',
    options: ['10 sides', '12 sides', '8 sides', '9 sides'],
    correctAnswer: '10 sides',
    explanation: '(n - 2) × 180° = 1440° => n - 2 = 8 => n = 10 sides (a decagon).',
    xp: 45
  },
  {
    id: 'mix_18',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'If a cone is cut horizontally at half its height, what fraction of the original volume is the smaller top cone?',
    options: ['1 / 8', '1 / 4', '1 / 2', '1 / 16'],
    correctAnswer: '1 / 8',
    explanation: 'Volume scales with the cube of the scale factor: (1/2)³ = 1/8.',
    xp: 45
  },
  {
    id: 'mix_19',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'A circle is inscribed in a square, which is itself inscribed in a larger circle. What is the ratio of the area of the smaller circle to the larger circle?',
    options: ['1 : 2', '1 : 4', '1 : √2', '2 : 3'],
    correctAnswer: '1 : 2',
    explanation: 'Let square side = 2r. Smaller circle radius = r (Area = πr²). Larger circle radius = r√2 (Area = 2πr²). Ratio = 1 : 2.',
    xp: 45
  },
  {
    id: 'mix_20',
    topic: 'mixed',
    difficulty: 'expert',
    question: 'What is the length of the diagonal of a rectangular box measuring 2 cm × 3 cm × 6 cm?',
    options: ['7 cm', '6.5 cm', '8 cm', '9 cm'],
    correctAnswer: '7 cm',
    explanation: 'Diagonal = √(2² + 3² + 6²) = √(4 + 9 + 36) = √49 = 7 cm.',
    xp: 45
  }
];
