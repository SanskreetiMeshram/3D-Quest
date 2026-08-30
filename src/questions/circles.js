/**
 * circles.js
 * 20 verified questions on Circles (Radius, Diameter, Circumference, Area, Chords, Tangents, Arcs, Sectors).
 */
export const circlesQuestions = [
  {
    id: 'circ_1',
    topic: 'circles',
    difficulty: 'easy',
    question: 'What is the relationship between the radius (r) and diameter (d) of a circle?',
    options: ['d = 2r', 'd = r / 2', 'd = r²', 'd = πr'],
    correctAnswer: 'd = 2r',
    explanation: 'The diameter passes through the center and connects two opposite points on the boundary, so d = 2 × r.',
    xp: 20,
    diagram: { type: 'circle', r: 50, label: 'd = 2r' }
  },
  {
    id: 'circ_2',
    topic: 'circles',
    difficulty: 'easy',
    question: 'What is the mathematical constant π (pi) approximately equal to?',
    options: ['3.14159', '2.71828', '1.61803', '1.41421'],
    correctAnswer: '3.14159',
    explanation: 'Pi (π) is the ratio of circumference to diameter, approximately 3.14159 or 22/7.',
    xp: 20
  },
  {
    id: 'circ_3',
    topic: 'circles',
    difficulty: 'easy',
    question: 'What is the formula for the circumference (perimeter) of a circle with radius r?',
    options: ['2πr', 'πr²', '4πr', 'πd²'],
    correctAnswer: '2πr',
    explanation: 'Circumference = 2 × π × r (or C = π × d).',
    xp: 20
  },
  {
    id: 'circ_4',
    topic: 'circles',
    difficulty: 'easy',
    question: 'What is the formula for the area of a circle with radius r?',
    options: ['πr²', '2πr', '4πr²', '(1/2)πr'],
    correctAnswer: 'πr²',
    explanation: 'The area enclosed by a circle is given by Area = π × r².',
    xp: 20
  },
  {
    id: 'circ_5',
    topic: 'circles',
    difficulty: 'easy',
    question: 'A straight line segment connecting any two points on a circle is called a:',
    options: ['Chord', 'Tangent', 'Secant', 'Radius'],
    correctAnswer: 'Chord',
    explanation: 'A chord is a straight line segment whose endpoints both lie on the circular boundary.',
    xp: 20
  },
  {
    id: 'circ_6',
    topic: 'circles',
    difficulty: 'medium',
    question: 'What is the longest possible chord in any circle?',
    options: ['Diameter', 'Radius', 'Tangent', 'Arc'],
    correctAnswer: 'Diameter',
    explanation: 'The diameter is the longest chord because it passes directly through the circle\'s center.',
    xp: 25
  },
  {
    id: 'circ_7',
    topic: 'circles',
    difficulty: 'medium',
    question: 'If a circle has a radius of 7 cm, what is its circumference? (Take π = 22/7)',
    options: ['44 cm', '22 cm', '154 cm', '88 cm'],
    correctAnswer: '44 cm',
    explanation: 'Circumference = 2 × π × r = 2 × (22/7) × 7 = 44 cm.',
    xp: 25
  },
  {
    id: 'circ_8',
    topic: 'circles',
    difficulty: 'medium',
    question: 'If a circle has a radius of 7 cm, what is its area? (Take π = 22/7)',
    options: ['154 cm²', '44 cm²', '308 cm²', '77 cm²'],
    correctAnswer: '154 cm²',
    explanation: 'Area = π × r² = (22/7) × 7² = (22/7) × 49 = 154 cm².',
    xp: 25
  },
  {
    id: 'circ_9',
    topic: 'circles',
    difficulty: 'medium',
    question: 'A line that touches a circle at exactly one point without intersecting is a:',
    options: ['Tangent', 'Secant', 'Chord', 'Diameter'],
    correctAnswer: 'Tangent',
    explanation: 'A tangent touches the circle at exactly one point (point of contact) and is perpendicular to the radius at that point.',
    xp: 25
  },
  {
    id: 'circ_10',
    topic: 'circles',
    difficulty: 'medium',
    question: 'What is the angle between a tangent to a circle and the radius drawn to the point of contact?',
    options: ['90°', '45°', '180°', '60°'],
    correctAnswer: '90°',
    explanation: 'The radius meeting a tangent line at the point of contact is always perpendicular (90°).',
    xp: 25
  },
  {
    id: 'circ_11',
    topic: 'circles',
    difficulty: 'medium',
    question: 'A portion of the circumference of a circle between two points is called an:',
    options: ['Arc', 'Sector', 'Segment', 'Chord'],
    correctAnswer: 'Arc',
    explanation: 'An arc is a curved portion or continuous piece of a circle\'s circumference.',
    xp: 25
  },
  {
    id: 'circ_12',
    topic: 'circles',
    difficulty: 'hard',
    question: 'What is the region bounded by two radii and the intercepted arc called?',
    options: ['Sector', 'Segment', 'Chord', 'Annulus'],
    correctAnswer: 'Sector',
    explanation: 'A sector is like a "pie slice" bounded by two radii from the center and an arc.',
    xp: 35
  },
  {
    id: 'circ_13',
    topic: 'circles',
    difficulty: 'hard',
    question: 'What is the formula for the area of a sector with central angle θ (in degrees) and radius r?',
    options: ['(θ / 360) × πr²', '(θ / 180) × πr²', '(θ / 360) × 2πr', 'θ × r²'],
    correctAnswer: '(θ / 360) × πr²',
    explanation: 'A sector\'s area is proportional to its central angle: Area = (θ / 360°) × πr².',
    xp: 35
  },
  {
    id: 'circ_14',
    topic: 'circles',
    difficulty: 'hard',
    question: 'What is the angle subtended by a semicircle at any point on the circle?',
    options: ['90°', '180°', '60°', '45°'],
    correctAnswer: '90°',
    explanation: 'By Thales\' theorem, any angle inscribed in a semicircle is always a right angle (90°).',
    xp: 35
  },
  {
    id: 'circ_15',
    topic: 'circles',
    difficulty: 'hard',
    question: 'If the area of a circle is 36π cm², what is its circumference in terms of π?',
    options: ['12π cm', '6π cm', '18π cm', '24π cm'],
    correctAnswer: '12π cm',
    explanation: 'πr² = 36π => r² = 36 => r = 6 cm. Circumference = 2πr = 2π(6) = 12π cm.',
    xp: 35
  },
  {
    id: 'circ_16',
    topic: 'circles',
    difficulty: 'expert',
    question: 'The angle subtended by an arc at the center is ____ the angle subtended by it at any point on the circumference.',
    options: ['Double', 'Equal to', 'Half', 'Triple'],
    correctAnswer: 'Double',
    explanation: 'The Inscribed Angle Theorem proves that the central angle is twice the measure of the inscribed angle subtending the same arc.',
    xp: 45
  },
  {
    id: 'circ_17',
    topic: 'circles',
    difficulty: 'expert',
    question: 'If two circles share the same center point but have different radii, they are called:',
    options: ['Concentric circles', 'Congruent circles', 'Orthogonal circles', 'Eccentric circles'],
    correctAnswer: 'Concentric circles',
    explanation: 'Concentric circles are circles of different sizes with a common center.',
    xp: 45
  },
  {
    id: 'circ_18',
    topic: 'circles',
    difficulty: 'expert',
    question: 'What is the length of an arc with central angle 60° in a circle of radius 6 cm?',
    options: ['2π cm', '6π cm', 'π cm', '4π cm'],
    correctAnswer: '2π cm',
    explanation: 'Arc length = (θ / 360) × 2πr = (60 / 360) × 2π(6) = (1/6) × 12π = 2π cm (~6.28 cm).',
    xp: 45
  },
  {
    id: 'circ_19',
    topic: 'circles',
    difficulty: 'expert',
    question: 'From an external point P, how many tangents can be drawn to a circle?',
    options: ['Exactly 2', 'Exactly 1', 'Infinite', '0'],
    correctAnswer: 'Exactly 2',
    explanation: 'From any point outside a circle, exactly two tangents can be drawn, and their lengths from P to the points of tangency are equal.',
    xp: 45
  },
  {
    id: 'circ_20',
    topic: 'circles',
    difficulty: 'expert',
    question: 'What is the area of an annulus (ring) with outer radius R = 10 cm and inner radius r = 6 cm?',
    options: ['64π cm²', '36π cm²', '100π cm²', '16π cm²'],
    correctAnswer: '64π cm²',
    explanation: 'Area of annulus = π(R² - r²) = π(100 - 36) = 64π cm².',
    xp: 45
  }
];
