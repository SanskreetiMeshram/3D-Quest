/**
 * threeDShapes.js
 * 20 verified questions on 3D Polyhedra, Euler's Formula (F + V - E = 2), Platonic Solids, and Nets.
 */
export const threeDShapesQuestions = [
  {
    id: 'shape3d_1',
    topic: 'shapes_3d',
    difficulty: 'easy',
    question: 'How many faces (F), vertices (V), and edges (E) does a cube have?',
    options: ['6 Faces, 8 Vertices, 12 Edges', '8 Faces, 6 Vertices, 12 Edges', '6 Faces, 12 Vertices, 8 Edges', '4 Faces, 4 Vertices, 6 Edges'],
    correctAnswer: '6 Faces, 8 Vertices, 12 Edges',
    explanation: 'A cube has 6 square faces, 8 corner vertices, and 12 straight edges.',
    xp: 20,
    diagram: { type: 'solid', shape: 'cube' }
  },
  {
    id: 'shape3d_2',
    topic: 'shapes_3d',
    difficulty: 'easy',
    question: 'What is Euler\'s formula relating Faces (F), Vertices (V), and Edges (E) for any convex polyhedron?',
    options: ['F + V - E = 2', 'F + E - V = 2', 'F + V + E = 2', 'F × V = E + 2'],
    correctAnswer: 'F + V - E = 2',
    explanation: 'Euler\'s characteristic formula for convex polyhedra states F + V - E = 2 (or F + V = E + 2).',
    xp: 20
  },
  {
    id: 'shape3d_3',
    topic: 'shapes_3d',
    difficulty: 'easy',
    question: 'How many vertices does a sphere have?',
    options: ['0', '1', '2', 'Infinite'],
    correctAnswer: '0',
    explanation: 'A sphere is a perfectly smooth continuous curved surface with 0 vertices and 0 edges.',
    xp: 20,
    diagram: { type: 'solid', shape: 'sphere' }
  },
  {
    id: 'shape3d_4',
    topic: 'shapes_3d',
    difficulty: 'easy',
    question: 'A 3D shape with 2 parallel circular bases connected by a curved surface is a:',
    options: ['Cylinder', 'Cone', 'Prism', 'Sphere'],
    correctAnswer: 'Cylinder',
    explanation: 'A cylinder has 2 flat circular faces and 1 curved continuous surface.',
    xp: 20,
    diagram: { type: 'solid', shape: 'cylinder' }
  },
  {
    id: 'shape3d_5',
    topic: 'shapes_3d',
    difficulty: 'easy',
    question: 'How many vertices does a cone have?',
    options: ['1 (apex)', '0', '2', '3'],
    correctAnswer: '1 (apex)',
    explanation: 'A cone has 1 vertex (the apex at the top) and 1 circular edge at the bottom base.',
    xp: 20,
    diagram: { type: 'solid', shape: 'cone' }
  },
  {
    id: 'shape3d_6',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'How many total Platonic solids (regular convex polyhedra) exist in 3D Euclidean space?',
    options: ['5', '6', '4', '8'],
    correctAnswer: '5',
    explanation: 'There are exactly 5 Platonic solids: Tetrahedron, Cube (Hexahedron), Octahedron, Dodecahedron, and Icosahedron.',
    xp: 25
  },
  {
    id: 'shape3d_7',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'A triangular pyramid (tetrahedron) has how many faces and edges?',
    options: ['4 Faces, 6 Edges', '4 Faces, 4 Edges', '5 Faces, 8 Edges', '6 Faces, 8 Edges'],
    correctAnswer: '4 Faces, 6 Edges',
    explanation: 'A tetrahedron has 4 triangular faces, 4 vertices, and 6 edges (4 + 4 - 6 = 2).',
    xp: 25
  },
  {
    id: 'shape3d_8',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'A polyhedron has 12 vertices and 30 edges. Using Euler\'s formula, how many faces does it have?',
    options: ['20', '18', '22', '16'],
    correctAnswer: '20',
    explanation: 'F + V - E = 2 => F + 12 - 30 = 2 => F - 18 = 2 => F = 20 (an Icosahedron).',
    xp: 25
  },
  {
    id: 'shape3d_9',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'How many rectangular faces and triangular faces does a triangular prism have?',
    options: ['3 Rectangular faces, 2 Triangular faces', '2 Rectangular, 3 Triangular', '4 Rectangular, 1 Triangular', '5 Rectangular, 0 Triangular'],
    correctAnswer: '3 Rectangular faces, 2 Triangular faces',
    explanation: 'A triangular prism has 2 parallel triangular bases joined by 3 rectangular lateral faces.',
    xp: 25
  },
  {
    id: 'shape3d_10',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'What is the shape of each face of a regular dodecahedron?',
    options: ['Regular pentagon', 'Equilateral triangle', 'Square', 'Regular hexagon'],
    correctAnswer: 'Regular pentagon',
    explanation: 'A regular dodecahedron has 12 identical regular pentagonal faces.',
    xp: 25
  },
  {
    id: 'shape3d_11',
    topic: 'shapes_3d',
    difficulty: 'medium',
    question: 'How many faces does a regular icosahedron have?',
    options: ['20', '12', '8', '30'],
    correctAnswer: '20',
    explanation: 'An icosahedron has 20 equilateral triangular faces and 12 vertices.',
    xp: 25
  },
  {
    id: 'shape3d_12',
    topic: 'shapes_3d',
    difficulty: 'hard',
    question: 'What is the dual polyhedron of a regular cube?',
    options: ['Regular Octahedron', 'Regular Tetrahedron', 'Regular Dodecahedron', 'Regular Icosahedron'],
    correctAnswer: 'Regular Octahedron',
    explanation: 'Connecting the centers of the 6 faces of a cube forms an octahedron with 8 faces and 6 vertices.',
    xp: 35
  },
  {
    id: 'shape3d_13',
    topic: 'shapes_3d',
    difficulty: 'hard',
    question: 'How many edges does a square pyramid have?',
    options: ['8', '6', '10', '5'],
    correctAnswer: '8',
    explanation: '4 base edges + 4 slant edges connecting to the apex = 8 edges total.',
    xp: 35
  },
  {
    id: 'shape3d_14',
    topic: 'shapes_3d',
    difficulty: 'hard',
    question: 'How many edges does a pentagonal prism have?',
    options: ['15', '10', '12', '20'],
    correctAnswer: '15',
    explanation: 'For any n-gonal prism: Edges = 3n. For n = 5: 3 × 5 = 15 edges.',
    xp: 35
  },
  {
    id: 'shape3d_15',
    topic: 'shapes_3d',
    difficulty: 'hard',
    question: 'A flat pattern that can be folded to form a 3D solid is called a:',
    options: ['Net', 'Cross-section', 'Isometric projection', 'Tessellation'],
    correctAnswer: 'Net',
    explanation: 'A geometric net is a two-dimensional unfolding that can be folded into a polyhedral 3D shape.',
    xp: 35
  },
  {
    id: 'shape3d_16',
    topic: 'shapes_3d',
    difficulty: 'expert',
    question: 'What 2D shape is formed by the cross-section of a cylinder sliced parallel to its base?',
    options: ['Circle', 'Rectangle', 'Oval / Ellipse', 'Triangle'],
    correctAnswer: 'Circle',
    explanation: 'A cross-section cut parallel to the cylinder\'s circular base produces an identical circle.',
    xp: 45
  },
  {
    id: 'shape3d_17',
    topic: 'shapes_3d',
    difficulty: 'expert',
    question: 'How many vertices does a regular dodecahedron have?',
    options: ['20', '12', '30', '24'],
    correctAnswer: '20',
    explanation: 'A dodecahedron has 12 faces, 30 edges, and 20 vertices (12 + 20 - 30 = 2).',
    xp: 45
  },
  {
    id: 'shape3d_18',
    topic: 'shapes_3d',
    difficulty: 'expert',
    question: 'Which Platonic solid is self-dual (its dual is identical to itself)?',
    options: ['Regular Tetrahedron', 'Cube', 'Octahedron', 'Icosahedron'],
    correctAnswer: 'Regular Tetrahedron',
    explanation: 'Connecting the face centers of a 4-faced tetrahedron produces another 4-faced tetrahedron.',
    xp: 45
  },
  {
    id: 'shape3d_19',
    topic: 'shapes_3d',
    difficulty: 'expert',
    question: 'What is the sum of all face angles around a vertex in any convex polyhedron?',
    options: ['Strictly less than 360°', 'Equal to 360°', 'Greater than 360°', 'Always 180°'],
    correctAnswer: 'Strictly less than 360°',
    explanation: 'Descartes\' angle defect theorem: for a vertex to poke out in 3D, the sum of face angles must be strictly less than 360°.',
    xp: 45
  },
  {
    id: 'shape3d_20',
    topic: 'shapes_3d',
    difficulty: 'expert',
    question: 'How many edges does a hexagonal pyramid have?',
    options: ['12', '6', '18', '8'],
    correctAnswer: '12',
    explanation: 'For any n-gonal pyramid: Edges = 2n. For n = 6: 2 × 6 = 12 edges.',
    xp: 45
  }
];
