/**
 * volume.js
 * 20 verified questions on Volume and Capacity of 3D solids.
 */
export const volumeQuestions = [
  {
    id: 'vol_1',
    topic: 'volume',
    difficulty: 'easy',
    question: 'What is the formula for the volume of a cube with side length a?',
    options: ['a³', '6a²', '3a', 'a²'],
    correctAnswer: 'a³',
    explanation: 'The volume of a cube is the cube of its side length (V = a × a × a = a³).',
    xp: 20
  },
  {
    id: 'vol_2',
    topic: 'volume',
    difficulty: 'easy',
    question: 'What is the volume of a cube with edge length 4 cm?',
    options: ['64 cm³', '16 cm³', '96 cm³', '48 cm³'],
    correctAnswer: '64 cm³',
    explanation: 'Volume = 4³ = 64 cm³.',
    xp: 20
  },
  {
    id: 'vol_3',
    topic: 'volume',
    difficulty: 'easy',
    question: 'What is the formula for the volume of a rectangular cuboid with length l, width w, and height h?',
    options: ['l × w × h', '2(lw + wh + hl)', 'l + w + h', '(1/3) l × w × h'],
    correctAnswer: 'l × w × h',
    explanation: 'Volume of cuboid = length × width × height.',
    xp: 20
  },
  {
    id: 'vol_4',
    topic: 'volume',
    difficulty: 'easy',
    question: 'What is the formula for the volume of a cylinder with radius r and height h?',
    options: ['πr²h', '2πrh', '(1/3)πr²h', '(4/3)πr³'],
    correctAnswer: 'πr²h',
    explanation: 'Volume of cylinder = Base area × height = πr² × h.',
    xp: 20
  },
  {
    id: 'vol_5',
    topic: 'volume',
    difficulty: 'easy',
    question: 'What is the formula for the volume of a cone with radius r and height h?',
    options: ['(1/3)πr²h', 'πr²h', '(4/3)πr³', 'πrl'],
    correctAnswer: '(1/3)πr²h',
    explanation: 'The volume of a cone is exactly one-third that of a cylinder with the same base and height.',
    xp: 20
  },
  {
    id: 'vol_6',
    topic: 'volume',
    difficulty: 'medium',
    question: 'What is the volume of a cuboid measuring 8 cm by 5 cm by 3 cm?',
    options: ['120 cm³', '80 cm³', '158 cm³', '240 cm³'],
    correctAnswer: '120 cm³',
    explanation: 'Volume = 8 × 5 × 3 = 120 cm³.',
    xp: 25
  },
  {
    id: 'vol_7',
    topic: 'volume',
    difficulty: 'medium',
    question: 'What is the volume of a cylinder with radius 7 cm and height 10 cm? (Take π = 22/7)',
    options: ['1540 cm³', '770 cm³', '440 cm³', '3080 cm³'],
    correctAnswer: '1540 cm³',
    explanation: 'Volume = πr²h = (22/7) × 7² × 10 = (22/7) × 49 × 10 = 154 × 10 = 1540 cm³.',
    xp: 25
  },
  {
    id: 'vol_8',
    topic: 'volume',
    difficulty: 'medium',
    question: 'What is the volume of a sphere with radius r?',
    options: ['(4/3)πr³', '4πr²', '(2/3)πr³', 'πr³'],
    correctAnswer: '(4/3)πr³',
    explanation: 'Volume of a sphere = (4/3)πr³.',
    xp: 25
  },
  {
    id: 'vol_9',
    topic: 'volume',
    difficulty: 'medium',
    question: 'What is the volume of a cone with radius 6 cm and height 7 cm? (Take π = 22/7)',
    options: ['264 cm³', '792 cm³', '132 cm³', '528 cm³'],
    correctAnswer: '264 cm³',
    explanation: 'V = (1/3)πr²h = (1/3) × (22/7) × 36 × 7 = (1/3) × 22 × 36 = 22 × 12 = 264 cm³.',
    xp: 25
  },
  {
    id: 'vol_10',
    topic: 'volume',
    difficulty: 'medium',
    question: 'How many liters are equal to 1 cubic meter (1 m³)?',
    options: ['1,000 Liters', '100 Liters', '10 Liters', '10,000 Liters'],
    correctAnswer: '1,000 Liters',
    explanation: '1 m³ = 1000 dm³ = 1,000 Liters.',
    xp: 25
  },
  {
    id: 'vol_11',
    topic: 'volume',
    difficulty: 'medium',
    question: 'What is the volume of a hemisphere with radius 3 cm in terms of π?',
    options: ['18π cm³', '36π cm³', '9π cm³', '27π cm³'],
    correctAnswer: '18π cm³',
    explanation: 'Hemisphere volume = (2/3)πr³ = (2/3)π(27) = 18π cm³.',
    xp: 25
  },
  {
    id: 'vol_12',
    topic: 'volume',
    difficulty: 'hard',
    question: 'If the side length of a cube is doubled, by what factor does its volume increase?',
    options: ['8 times', '4 times', '2 times', '16 times'],
    correctAnswer: '8 times',
    explanation: 'New Volume = (2a)³ = 8a³, which is 8 times the original volume.',
    xp: 35
  },
  {
    id: 'vol_13',
    topic: 'volume',
    difficulty: 'hard',
    question: 'A right square pyramid has base side 6 cm and height 10 cm. What is its volume?',
    options: ['120 cm³', '360 cm³', '60 cm³', '180 cm³'],
    correctAnswer: '120 cm³',
    explanation: 'Volume of pyramid = (1/3) × Base Area × Height = (1/3) × (6 × 6) × 10 = (1/3) × 36 × 10 = 120 cm³.',
    xp: 35
  },
  {
    id: 'vol_14',
    topic: 'volume',
    difficulty: 'hard',
    question: 'A cylindrical water tank has diameter 4 m and height 7 m. What is its capacity in liters? (π = 22/7)',
    options: ['88,000 Liters', '44,000 Liters', '176,000 Liters', '22,000 Liters'],
    correctAnswer: '88,000 Liters',
    explanation: 'Radius = 2 m. Volume = (22/7) × 2² × 7 = 88 m³ = 88,000 Liters.',
    xp: 35
  },
  {
    id: 'vol_15',
    topic: 'volume',
    difficulty: 'hard',
    question: 'Three solid metal cubes with sides 3 cm, 4 cm, and 5 cm are melted to form a single new cube. What is the side length of the new cube?',
    options: ['6 cm', '7 cm', '8 cm', '5.5 cm'],
    correctAnswer: '6 cm',
    explanation: 'Total volume = 3³ + 4³ + 5³ = 27 + 64 + 125 = 216 cm³. New side = ∛216 = 6 cm.',
    xp: 35
  },
  {
    id: 'vol_16',
    topic: 'volume',
    difficulty: 'expert',
    question: 'What is the volume of a triangular prism with equilateral triangle base of side 4 cm and prism height 10 cm?',
    options: ['40√3 cm³', '20√3 cm³', '80√3 cm³', '60 cm³'],
    correctAnswer: '40√3 cm³',
    explanation: 'Base area = (√3 / 4) × 4² = 4√3 cm². Volume = Base area × height = 4√3 × 10 = 40√3 cm³ (~69.28 cm³).',
    xp: 45
  },
  {
    id: 'vol_17',
    topic: 'volume',
    difficulty: 'expert',
    question: 'A solid metal sphere of radius 6 cm is melted and recast into smaller spheres of radius 2 cm each. How many small spheres are formed?',
    options: ['27', '9', '18', '3'],
    correctAnswer: '27',
    explanation: 'Number of spheres = (R / r)³ = (6 / 2)³ = 3³ = 27.',
    xp: 45
  },
  {
    id: 'vol_18',
    topic: 'volume',
    difficulty: 'expert',
    question: 'A cone and a cylinder have the same radius and the same height. What is the ratio of their volumes?',
    options: ['1 : 3', '3 : 1', '1 : 2', '1 : 4'],
    correctAnswer: '1 : 3',
    explanation: 'Volume of cone is (1/3)πr²h, volume of cylinder is πr²h. Ratio = 1 : 3.',
    xp: 45
  },
  {
    id: 'vol_19',
    topic: 'volume',
    difficulty: 'expert',
    question: 'What is the volume of a regular octahedron with edge length a?',
    options: ['(√2 / 3) a³', '(√3 / 3) a³', '(1 / 3) a³', '√2 a³'],
    correctAnswer: '(√2 / 3) a³',
    explanation: 'An octahedron consists of two square pyramids of base side a and height a/√2: Volume = 2 × ((1/3) a² (a/√2)) = (√2 / 3) a³.',
    xp: 45
  },
  {
    id: 'vol_20',
    topic: 'volume',
    difficulty: 'expert',
    question: 'If the radius of a cylinder is doubled and its height is halved, its volume will:',
    options: ['Double', 'Remain unchanged', 'Halve', 'Quadruple'],
    correctAnswer: 'Double',
    explanation: 'New Volume = π (2r)² (h/2) = π (4r²) (h/2) = 2πr²h = 2 × original volume.',
    xp: 45
  }
];
