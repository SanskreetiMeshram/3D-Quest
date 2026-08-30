/**
 * coordinateGeometry.js
 * 20 verified questions on Cartesian Plane, Quadrants, Midpoint, Slope, Distance, and Collinearity.
 */
export const coordinateGeometryQuestions = [
  {
    id: 'coord_1',
    topic: 'coordinates',
    difficulty: 'easy',
    question: 'The point (0, 0) where the X and Y axes intersect is called the:',
    options: ['Origin', 'Quadrant', 'Intercept', 'Vertex'],
    correctAnswer: 'Origin',
    explanation: 'The origin (0, 0) is the central reference point of the 2D Cartesian coordinate plane.',
    xp: 20,
    diagram: { type: 'grid', points: [{ x: 0, y: 0, label: 'Origin (0,0)' }] }
  },
  {
    id: 'coord_2',
    topic: 'coordinates',
    difficulty: 'easy',
    question: 'In which quadrant does the point (-3, 5) lie?',
    options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'],
    correctAnswer: 'Quadrant II',
    explanation: 'Quadrant II contains points where x < 0 (negative) and y > 0 (positive).',
    xp: 20
  },
  {
    id: 'coord_3',
    topic: 'coordinates',
    difficulty: 'easy',
    question: 'In which quadrant does the point (4, -6) lie?',
    options: ['Quadrant IV', 'Quadrant I', 'Quadrant II', 'Quadrant III'],
    correctAnswer: 'Quadrant IV',
    explanation: 'Quadrant IV has positive x and negative y coordinates (x > 0, y < 0).',
    xp: 20
  },
  {
    id: 'coord_4',
    topic: 'coordinates',
    difficulty: 'easy',
    question: 'What is the y-coordinate (ordinate) of any point lying on the X-axis?',
    options: ['0', '1', '-1', 'Infinity'],
    correctAnswer: '0',
    explanation: 'All points lying directly on the X-axis have a y-coordinate of exactly 0 (e.g. (x, 0)).',
    xp: 20
  },
  {
    id: 'coord_5',
    topic: 'coordinates',
    difficulty: 'easy',
    question: 'What is the formula for the distance between two points (x₁, y₁) and (x₂, y₂)?',
    options: ['√((x₂ - x₁)² + (y₂ - y₁)²)', '(x₂ - x₁) + (y₂ - y₁)', '(x₂ - x₁)² + (y₂ - y₁)²', '√((x₂ + x₁)² + (y₂ + y₁))'],
    correctAnswer: '√((x₂ - x₁)² + (y₂ - y₁)²)',
    explanation: 'Derived from Pythagoras theorem: Distance d = √((x₂ - x₁)² + (y₂ - y₁)²).',
    xp: 20
  },
  {
    id: 'coord_6',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'What is the midpoint between the points (2, 4) and (6, 10)?',
    options: ['(4, 7)', '(8, 14)', '(3, 5)', '(4, 6)'],
    correctAnswer: '(4, 7)',
    explanation: 'Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2) = ((2+6)/2, (4+10)/2) = (4, 7).',
    xp: 25
  },
  {
    id: 'coord_7',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'What is the slope (gradient m) of the line passing through (1, 2) and (3, 8)?',
    options: ['3', '4', '2', '6'],
    correctAnswer: '3',
    explanation: 'Slope m = (y₂ - y₁) / (x₂ - x₁) = (8 - 2) / (3 - 1) = 6 / 2 = 3.',
    xp: 25
  },
  {
    id: 'coord_8',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'What is the distance between the points (0, 0) and (-6, 8)?',
    options: ['10', '14', '2', '100'],
    correctAnswer: '10',
    explanation: 'Distance = √((-6)² + 8²) = √(36 + 64) = √100 = 10.',
    xp: 25
  },
  {
    id: 'coord_9',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'What is the slope of any horizontal line parallel to the X-axis?',
    options: ['0', '1', 'Undefined', 'Infinity'],
    correctAnswer: '0',
    explanation: 'A horizontal line has zero vertical change (Δy = 0), so its slope m = 0.',
    xp: 25
  },
  {
    id: 'coord_10',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'What is the slope of any vertical line parallel to the Y-axis?',
    options: ['Undefined', '0', '1', '-1'],
    correctAnswer: 'Undefined',
    explanation: 'A vertical line has zero horizontal change (Δx = 0), resulting in division by zero, so its slope is undefined.',
    xp: 25
  },
  {
    id: 'coord_11',
    topic: 'coordinates',
    difficulty: 'medium',
    question: 'If two lines are parallel, what is true about their slopes m₁ and m₂?',
    options: ['m₁ = m₂', 'm₁ × m₂ = -1', 'm₁ + m₂ = 0', 'm₁ = -m₂'],
    correctAnswer: 'm₁ = m₂',
    explanation: 'Parallel lines have the exact same steepness and direction, so their slopes are identical: m₁ = m₂.',
    xp: 25
  },
  {
    id: 'coord_12',
    topic: 'coordinates',
    difficulty: 'hard',
    question: 'If two perpendicular non-vertical lines have slopes m₁ and m₂, what is their relationship?',
    options: ['m₁ × m₂ = -1', 'm₁ = m₂', 'm₁ + m₂ = 1', 'm₁ - m₂ = 0'],
    correctAnswer: 'm₁ × m₂ = -1',
    explanation: 'The slopes of perpendicular lines are negative reciprocals of each other: m₁ × m₂ = -1.',
    xp: 35
  },
  {
    id: 'coord_13',
    topic: 'coordinates',
    difficulty: 'hard',
    question: 'What is the equation of a line with slope 2 and y-intercept -5 in slope-intercept form?',
    options: ['y = 2x - 5', 'y = -5x + 2', '2x + y = -5', 'y = 2x + 5'],
    correctAnswer: 'y = 2x - 5',
    explanation: 'Slope-intercept form is y = mx + c. With m = 2 and c = -5: y = 2x - 5.',
    xp: 35
  },
  {
    id: 'coord_14',
    topic: 'coordinates',
    difficulty: 'hard',
    question: 'What are the coordinates of the centroid of a triangle with vertices at (1, 2), (4, 6), and (7, 1)?',
    options: ['(4, 3)', '(6, 4.5)', '(3, 3)', '(4, 4)'],
    correctAnswer: '(4, 3)',
    explanation: 'Centroid = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) = ((1+4+7)/3, (2+6+1)/3) = (12/3, 9/3) = (4, 3).',
    xp: 35
  },
  {
    id: 'coord_15',
    topic: 'coordinates',
    difficulty: 'hard',
    question: 'Three points A, B, and C are collinear if and only if the area of triangle ABC is:',
    options: ['0', '1', 'Positive', 'Infinite'],
    correctAnswer: '0',
    explanation: 'If three points lie on the exact same straight line, they enclose zero area.',
    xp: 35
  },
  {
    id: 'coord_16',
    topic: 'coordinates',
    difficulty: 'expert',
    question: 'What is the equation of a circle centered at (h, k) with radius r?',
    options: ['(x - h)² + (y - k)² = r²', '(x + h)² + (y + k)² = r²', '(x - h) + (y - k) = r²', 'x² + y² = r'],
    correctAnswer: '(x - h)² + (y - k)² = r²',
    explanation: 'Standard Cartesian circle equation is (x - h)² + (y - k)² = r².',
    xp: 45
  },
  {
    id: 'coord_17',
    topic: 'coordinates',
    difficulty: 'expert',
    question: 'What is the perpendicular distance from the point (2, 3) to the line 3x + 4y - 8 = 0?',
    options: ['2 units', '3 units', '1.5 units', '4 units'],
    correctAnswer: '2 units',
    explanation: 'Distance = |Ax₀ + By₀ + C| / √(A² + B²) = |3(2) + 4(3) - 8| / √(3² + 4²) = |6 + 12 - 8| / 5 = 10 / 5 = 2 units.',
    xp: 45
  },
  {
    id: 'coord_18',
    topic: 'coordinates',
    difficulty: 'expert',
    question: 'Point P divides the line segment joining A(1, 3) and B(4, 6) in the ratio 2 : 1. What are the coordinates of P?',
    options: ['(3, 5)', '(2.5, 4.5)', '(3.5, 5.5)', '(2, 4)'],
    correctAnswer: '(3, 5)',
    explanation: 'Section formula: x = (2×4 + 1×1)/(2+1) = 9/3 = 3. y = (2×6 + 1×3)/(2+1) = 15/3 = 5. P = (3, 5).',
    xp: 45
  },
  {
    id: 'coord_19',
    topic: 'coordinates',
    difficulty: 'expert',
    question: 'What is the area of a triangle with vertices at (0, 0), (4, 0), and (0, 6)?',
    options: ['12 sq units', '24 sq units', '6 sq units', '10 sq units'],
    correctAnswer: '12 sq units',
    explanation: 'Area = (1/2) |x₁(y₂ - y₃) + x₂(y₃ - y₁) + x₃(y₁ - y₂)| = (1/2) |4(6)| = 12 sq units.',
    xp: 45
  },
  {
    id: 'coord_20',
    topic: 'coordinates',
    difficulty: 'expert',
    question: 'What is the reflection of the point (5, -3) across the Y-axis?',
    options: ['(-5, -3)', '(5, 3)', '(-5, 3)', '(3, -5)'],
    correctAnswer: '(-5, -3)',
    explanation: 'Reflecting across the Y-axis negates the x-coordinate while preserving y: (x, y) -> (-x, y) => (-5, -3).',
    xp: 45
  }
];
