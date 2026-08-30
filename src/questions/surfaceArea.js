/**
 * surfaceArea.js
 * 20 verified questions on Total and Lateral Surface Area of 3D solids (Cubes, Cuboids, Cylinders, Cones, Spheres, Pyramids).
 */
export const surfaceAreaQuestions = [
  {
    id: 'sa_1',
    topic: 'surface_area',
    difficulty: 'easy',
    question: 'What is the formula for the total surface area of a cube with side length a?',
    options: ['6a²', 'a³', '4a²', '12a'],
    correctAnswer: '6a²',
    explanation: 'A cube has 6 identical square faces, each having area a², so Total Surface Area = 6a².',
    xp: 20
  },
  {
    id: 'sa_2',
    topic: 'surface_area',
    difficulty: 'easy',
    question: 'What is the total surface area of a cube with side length 5 cm?',
    options: ['150 cm²', '125 cm²', '100 cm²', '75 cm²'],
    correctAnswer: '150 cm²',
    explanation: 'TSA = 6 × (5)² = 6 × 25 = 150 cm².',
    xp: 20
  },
  {
    id: 'sa_3',
    topic: 'surface_area',
    difficulty: 'easy',
    question: 'What is the formula for the total surface area of a rectangular cuboid with dimensions l, w, and h?',
    options: ['2(lw + wh + hl)', 'l × w × h', '4(l + w + h)', 'lw + wh + hl'],
    correctAnswer: '2(lw + wh + hl)',
    explanation: 'A cuboid has 3 pairs of identical opposite faces: TSA = 2(lw + wh + hl).',
    xp: 20
  },
  {
    id: 'sa_4',
    topic: 'surface_area',
    difficulty: 'easy',
    question: 'What is the curved (lateral) surface area formula for a cylinder with radius r and height h?',
    options: ['2πrh', 'πr²h', '2πr(r + h)', '4πr²'],
    correctAnswer: '2πrh',
    explanation: 'The curved surface unfolds into a rectangle of length 2πr and width h, so CSA = 2πrh.',
    xp: 20
  },
  {
    id: 'sa_5',
    topic: 'surface_area',
    difficulty: 'easy',
    question: 'What is the formula for the total surface area of a sphere with radius r?',
    options: ['4πr²', '(4/3)πr³', '2πr²', '3πr²'],
    correctAnswer: '4πr²',
    explanation: 'Archimedes proved that the surface area of a sphere is exactly equal to 4 times the area of its great circle: TSA = 4πr².',
    xp: 20
  },
  {
    id: 'sa_6',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the total surface area of a cuboid measuring 4 cm × 3 cm × 2 cm?',
    options: ['52 cm²', '24 cm²', '48 cm²', '26 cm²'],
    correctAnswer: '52 cm²',
    explanation: 'TSA = 2(4×3 + 3×2 + 2×4) = 2(12 + 6 + 8) = 2(26) = 52 cm².',
    xp: 25
  },
  {
    id: 'sa_7',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the total surface area of a closed cylinder with radius 7 cm and height 10 cm? (Take π = 22/7)',
    options: ['748 cm²', '440 cm²', '308 cm²', '880 cm²'],
    correctAnswer: '748 cm²',
    explanation: 'TSA = 2πr(r + h) = 2 × (22/7) × 7 × (7 + 10) = 44 × 17 = 748 cm².',
    xp: 25
  },
  {
    id: 'sa_8',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the curved surface area of a cone with radius 7 cm and slant height 10 cm? (π = 22/7)',
    options: ['220 cm²', '440 cm²', '154 cm²', '374 cm²'],
    correctAnswer: '220 cm²',
    explanation: 'CSA of a cone = πrl = (22/7) × 7 × 10 = 220 cm².',
    xp: 25
  },
  {
    id: 'sa_9',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the surface area of a sphere with radius 7 cm? (Take π = 22/7)',
    options: ['616 cm²', '154 cm²', '308 cm²', '1232 cm²'],
    correctAnswer: '616 cm²',
    explanation: 'Surface Area = 4πr² = 4 × (22/7) × 49 = 4 × 154 = 616 cm².',
    xp: 25
  },
  {
    id: 'sa_10',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the total surface area of a solid hemisphere with radius r?',
    options: ['3πr²', '2πr²', '4πr²', '(2/3)πr³'],
    correctAnswer: '3πr²',
    explanation: 'A solid hemisphere has a curved surface of 2πr² plus a circular flat base of πr², giving 2πr² + πr² = 3πr².',
    xp: 25
  },
  {
    id: 'sa_11',
    topic: 'surface_area',
    difficulty: 'medium',
    question: 'What is the lateral surface area of a cube with edge length 6 cm?',
    options: ['144 cm²', '216 cm²', '36 cm²', '96 cm²'],
    correctAnswer: '144 cm²',
    explanation: 'Lateral surface area consists of the 4 vertical side faces: LSA = 4a² = 4 × 36 = 144 cm².',
    xp: 25
  },
  {
    id: 'sa_12',
    topic: 'surface_area',
    difficulty: 'hard',
    question: 'A cone has base radius 6 cm and perpendicular height 8 cm. What is its total surface area in terms of π?',
    options: ['96π cm²', '60π cm²', '36π cm²', '120π cm²'],
    correctAnswer: '96π cm²',
    explanation: 'Slant height l = √(r² + h²) = √(6² + 8²) = 10 cm. TSA = πr(l + r) = π(6)(10 + 6) = 96π cm².',
    xp: 35
  },
  {
    id: 'sa_13',
    topic: 'surface_area',
    difficulty: 'hard',
    question: 'If the total surface area of a cube is 294 cm², what is the length of one edge?',
    options: ['7 cm', '6 cm', '8 cm', '9 cm'],
    correctAnswer: '7 cm',
    explanation: '6a² = 294 => a² = 49 => a = 7 cm.',
    xp: 35
  },
  {
    id: 'sa_14',
    topic: 'surface_area',
    difficulty: 'hard',
    question: 'What is the lateral surface area (area of 4 walls) of a room of length 8 m, width 6 m, and height 3 m?',
    options: ['84 m²', '48 m²', '96 m²', '144 m²'],
    correctAnswer: '84 m²',
    explanation: 'Area of 4 walls = 2(l + w) × h = 2(8 + 6) × 3 = 2(14) × 3 = 84 m².',
    xp: 35
  },
  {
    id: 'sa_15',
    topic: 'surface_area',
    difficulty: 'hard',
    question: 'If the radius of a sphere is tripled, by what factor does its surface area increase?',
    options: ['9 times', '3 times', '6 times', '27 times'],
    correctAnswer: '9 times',
    explanation: 'Surface area scales with the square of linear dimensions: (3)² = 9 times.',
    xp: 35
  },
  {
    id: 'sa_16',
    topic: 'surface_area',
    difficulty: 'expert',
    question: 'Two cubes each of volume 64 cm³ are joined end to end. What is the surface area of the resulting cuboid?',
    options: ['160 cm²', '192 cm²', '128 cm²', '144 cm²'],
    correctAnswer: '160 cm²',
    explanation: 'Cube edge = ∛64 = 4 cm. Cuboid dimensions: 8 cm × 4 cm × 4 cm. TSA = 2(8×4 + 4×4 + 4×8) = 2(32 + 16 + 32) = 160 cm².',
    xp: 45
  },
  {
    id: 'sa_17',
    topic: 'surface_area',
    difficulty: 'expert',
    question: 'What is the total surface area of a square pyramid with base side 10 cm and slant height 13 cm?',
    options: ['360 cm²', '260 cm²', '100 cm²', '460 cm²'],
    correctAnswer: '360 cm²',
    explanation: 'Base area = 10² = 100 cm². Four triangular faces = 4 × ((1/2) × 10 × 13) = 260 cm². Total = 100 + 260 = 360 cm².',
    xp: 45
  },
  {
    id: 'sa_18',
    topic: 'surface_area',
    difficulty: 'expert',
    question: 'A hollow pipe of length 20 cm has an outer radius of 5 cm and inner radius of 4 cm. What is its total surface area? (Take π ≈ 3.14)',
    options: ['1186.92 cm²', '1130.4 cm²', '565.2 cm²', '1256 cm²'],
    correctAnswer: '1186.92 cm²',
    explanation: 'Outer CSA = 2π(5)(20) = 200π. Inner CSA = 2π(4)(20) = 160π. Two ring bases = 2 × π(5² - 4²) = 18π. Total = 378π ≈ 1186.92 cm².',
    xp: 45
  },
  {
    id: 'sa_19',
    topic: 'surface_area',
    difficulty: 'expert',
    question: 'What is the surface area of a right triangular prism with base triangle legs 3 cm and 4 cm (hypotenuse 5 cm) and prism length 10 cm?',
    options: ['132 cm²', '120 cm²', '144 cm²', '96 cm²'],
    correctAnswer: '132 cm²',
    explanation: 'Two base triangles = 2 × ((1/2) × 3 × 4) = 12 cm². Three rectangular faces = (3 + 4 + 5) × 10 = 120 cm². Total = 132 cm².',
    xp: 45
  },
  {
    id: 'sa_20',
    topic: 'surface_area',
    difficulty: 'expert',
    question: 'If the surface area of a sphere is equal to the curved surface area of a cylinder of height 8 cm and radius 4 cm, what is the radius of the sphere?',
    options: ['4 cm', '2 cm', '8 cm', '√8 cm'],
    correctAnswer: '4 cm',
    explanation: 'Cylinder CSA = 2π(4)(8) = 64π. Sphere Area: 4πR² = 64π => R² = 16 => R = 4 cm.',
    xp: 45
  }
];
