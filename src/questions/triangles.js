/**
 * triangles.js
 * 20 verified questions on Triangles covering classification, angle sums, properties, and area.
 */
export const trianglesQuestions = [
  {
    id: 'tri_1',
    topic: 'triangles',
    difficulty: 'easy',
    question: 'What is the sum of interior angles in any triangle?',
    options: ['180°', '360°', '90°', '270°'],
    correctAnswer: '180°',
    explanation: 'In Euclidean geometry, the three interior angles of any triangle always add up to exactly 180°.',
    xp: 20,
    diagram: { type: 'triangle', a: 60, b: 60, c: 60, label: 'Equilateral' }
  },
  {
    id: 'tri_2',
    topic: 'triangles',
    difficulty: 'easy',
    question: 'A triangle with three equal sides and three equal angles is called:',
    options: ['Equilateral triangle', 'Isosceles triangle', 'Scalene triangle', 'Right triangle'],
    correctAnswer: 'Equilateral triangle',
    explanation: 'An equilateral triangle has 3 congruent sides and 3 equal interior angles of 60° each.',
    xp: 20,
    diagram: { type: 'triangle', a: 60, b: 60, c: 60, label: 'a = b = c' }
  },
  {
    id: 'tri_3',
    topic: 'triangles',
    difficulty: 'easy',
    question: 'A triangle with at least two equal sides is called:',
    options: ['Isosceles triangle', 'Scalene triangle', 'Equilateral triangle', 'Obtuse triangle'],
    correctAnswer: 'Isosceles triangle',
    explanation: 'An isosceles triangle has two sides of equal length and the angles opposite those sides are equal.',
    xp: 20,
    diagram: { type: 'triangle', a: 70, b: 70, c: 40, label: 'Isosceles' }
  },
  {
    id: 'tri_4',
    topic: 'triangles',
    difficulty: 'easy',
    question: 'A triangle where all three sides have different lengths is called:',
    options: ['Scalene triangle', 'Isosceles triangle', 'Equilateral triangle', 'Right triangle'],
    correctAnswer: 'Scalene triangle',
    explanation: 'A scalene triangle has three sides of completely different lengths and all angles are different.',
    xp: 20
  },
  {
    id: 'tri_5',
    topic: 'triangles',
    difficulty: 'easy',
    question: 'What is the formula for the area of a triangle?',
    options: ['(1/2) × base × height', 'base × height', '2 × (base + height)', 'side²'],
    correctAnswer: '(1/2) × base × height',
    explanation: 'The area of any triangle is half the product of its base and perpendicular height: Area = (1/2) * b * h.',
    xp: 20
  },
  {
    id: 'tri_6',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'If two angles of a triangle are 45° and 65°, what is the third angle?',
    options: ['70°', '80°', '60°', '90°'],
    correctAnswer: '70°',
    explanation: 'Angles sum to 180°. Third angle = 180° - (45° + 65°) = 180° - 110° = 70°.',
    xp: 25,
    diagram: { type: 'triangle', a: 45, b: 65, c: 70 }
  },
  {
    id: 'tri_7',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'In an isosceles triangle, the vertex angle is 40°. What is the measure of each base angle?',
    options: ['70°', '80°', '60°', '50°'],
    correctAnswer: '70°',
    explanation: 'Remaining angle sum = 180° - 40° = 140°. Since base angles are equal: 140° / 2 = 70° each.',
    xp: 25
  },
  {
    id: 'tri_8',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'A right-angled triangle has one angle measuring 35°. What is the other acute angle?',
    options: ['55°', '45°', '65°', '35°'],
    correctAnswer: '55°',
    explanation: 'In a right triangle, the two acute angles are complementary (sum to 90°). 90° - 35° = 55°.',
    xp: 25,
    diagram: { type: 'right_triangle', a: 35, b: 55 }
  },
  {
    id: 'tri_9',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'What is the area of a triangle with base 12 cm and height 8 cm?',
    options: ['48 cm²', '96 cm²', '20 cm²', '24 cm²'],
    correctAnswer: '48 cm²',
    explanation: 'Area = (1/2) * base * height = (1/2) * 12 * 8 = 48 cm².',
    xp: 25
  },
  {
    id: 'tri_10',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'According to the Triangle Inequality Theorem, the sum of lengths of any two sides must be:',
    options: ['Greater than the third side', 'Equal to the third side', 'Less than the third side', 'Half the third side'],
    correctAnswer: 'Greater than the third side',
    explanation: 'For any valid triangle with sides a, b, c: a + b > c, a + c > b, and b + c > a.',
    xp: 25
  },
  {
    id: 'tri_11',
    topic: 'triangles',
    difficulty: 'medium',
    question: 'Which of the following sets of side lengths CAN form a valid triangle?',
    options: ['5 cm, 7 cm, 10 cm', '3 cm, 4 cm, 8 cm', '2 cm, 3 cm, 6 cm', '1 cm, 2 cm, 3 cm'],
    correctAnswer: '5 cm, 7 cm, 10 cm',
    explanation: 'Check triangle inequality: 5 + 7 = 12 > 10. For 3,4,8: 3+4=7 < 8 (invalid). For 1,2,3: 1+2=3 not > 3 (degenerate).',
    xp: 25
  },
  {
    id: 'tri_12',
    topic: 'triangles',
    difficulty: 'hard',
    question: 'An exterior angle of a triangle is 115°. If one opposite interior angle is 45°, what is the other opposite interior angle?',
    options: ['70°', '65°', '80°', '55°'],
    correctAnswer: '70°',
    explanation: 'Exterior Angle Theorem states that the exterior angle equals the sum of two opposite interior angles: 115° = 45° + x => x = 70°.',
    xp: 35
  },
  {
    id: 'tri_13',
    topic: 'triangles',
    difficulty: 'hard',
    question: 'What is the area of an equilateral triangle with side length 6 cm?',
    options: ['9√3 cm²', '18√3 cm²', '36√3 cm²', '9 cm²'],
    correctAnswer: '9√3 cm²',
    explanation: 'Area of equilateral triangle = (√3 / 4) * s² = (√3 / 4) * 36 = 9√3 cm² (~15.59 cm²).',
    xp: 35
  },
  {
    id: 'tri_14',
    topic: 'triangles',
    difficulty: 'hard',
    question: 'The angles of a triangle are in the ratio 2 : 3 : 4. What is the measure of the largest angle?',
    options: ['80°', '60°', '40°', '90°'],
    correctAnswer: '80°',
    explanation: '2x + 3x + 4x = 9x = 180° => x = 20°. Largest angle = 4 * 20° = 80°.',
    xp: 35
  },
  {
    id: 'tri_15',
    topic: 'triangles',
    difficulty: 'hard',
    question: 'The point where the three medians of a triangle intersect is called the:',
    options: ['Centroid', 'Incenter', 'Circumcenter', 'Orthocenter'],
    correctAnswer: 'Centroid',
    explanation: 'The Centroid is the point of concurrency of the three medians. It divides each median in a 2:1 ratio.',
    xp: 35
  },
  {
    id: 'tri_16',
    topic: 'triangles',
    difficulty: 'expert',
    question: 'The point of concurrency of the three altitudes of a triangle is called the:',
    options: ['Orthocenter', 'Centroid', 'Circumcenter', 'Incenter'],
    correctAnswer: 'Orthocenter',
    explanation: 'The Orthocenter is the intersection point of all three perpendicular altitudes drawn from vertices to opposite sides.',
    xp: 45
  },
  {
    id: 'tri_17',
    topic: 'triangles',
    difficulty: 'expert',
    question: 'Using Heron\'s formula, what is the area of a triangle with sides 7 cm, 8 cm, and 9 cm?',
    options: ['12√5 cm²', '6√5 cm²', '24 cm²', '14√3 cm²'],
    correctAnswer: '12√5 cm²',
    explanation: 'Semi-perimeter s = (7+8+9)/2 = 12. Area = √(12 * (12-7) * (12-8) * (12-9)) = √(12 * 5 * 4 * 3) = √720 = 12√5 cm².',
    xp: 45
  },
  {
    id: 'tri_18',
    topic: 'triangles',
    difficulty: 'expert',
    question: 'In any triangle, the side opposite the largest angle is always:',
    options: ['The longest side', 'The shortest side', 'Equal to half perimeter', 'Perpendicular'],
    correctAnswer: 'The longest side',
    explanation: 'In any triangle, larger angles are always opposite longer sides, and conversely.',
    xp: 45
  },
  {
    id: 'tri_19',
    topic: 'triangles',
    difficulty: 'expert',
    question: 'If the sides of a triangle are 6, 8, and 10, what type of triangle is it?',
    options: ['Right-angled triangle', 'Acute triangle', 'Obtuse triangle', 'Equilateral triangle'],
    correctAnswer: 'Right-angled triangle',
    explanation: 'Check Pythagorean theorem: 6² + 8² = 36 + 64 = 100 = 10². Thus it is exactly a right-angled triangle.',
    xp: 45
  },
  {
    id: 'tri_20',
    topic: 'triangles',
    difficulty: 'expert',
    question: 'The circumcenter of a right-angled triangle lies:',
    options: ['At the midpoint of the hypotenuse', 'Inside the triangle', 'At the right angle vertex', 'Outside the triangle'],
    correctAnswer: 'At the midpoint of the hypotenuse',
    explanation: 'By Thales\' theorem, the circumcenter of every right triangle is located exactly at the midpoint of its hypotenuse.',
    xp: 45
  }
];
