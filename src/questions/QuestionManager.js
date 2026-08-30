import { linesAnglesQuestions } from './linesAngles.js';
import { trianglesQuestions } from './triangles.js';
import { quadrilateralsQuestions } from './quadrilaterals.js';
import { circlesQuestions } from './circles.js';
import { perimeterQuestions } from './perimeter.js';
import { areaQuestions } from './area.js';
import { surfaceAreaQuestions } from './surfaceArea.js';
import { volumeQuestions } from './volume.js';
import { pythagorasQuestions } from './pythagoras.js';
import { coordinateGeometryQuestions } from './coordinateGeometry.js';
import { symmetryQuestions } from './symmetry.js';
import { threeDShapesQuestions } from './threeDShapes.js';
import { mixedGeometryQuestions } from './mixedGeometry.js';

/**
 * QuestionManager.js
 * Central question bank repository managing 260+ questions across 13 geometry modules.
 */
export class QuestionManager {
  constructor() {
    this.topics = {
      lines_angles: {
        id: 'lines_angles',
        name: 'Lines & Angles',
        icon: '📐',
        desc: 'Angles, Parallel lines, Complementary & Supplementary angles',
        questions: linesAnglesQuestions
      },
      triangles: {
        id: 'triangles',
        name: 'Triangles',
        icon: '🔺',
        desc: 'Types, Angle sum, Centers, Heron\'s formula & properties',
        questions: trianglesQuestions
      },
      quadrilaterals: {
        id: 'quadrilaterals',
        name: 'Quadrilaterals',
        icon: '🔷',
        desc: 'Parallelograms, Squares, Rhombuses, Trapezoids & cyclic quads',
        questions: quadrilateralsQuestions
      },
      circles: {
        id: 'circles',
        name: 'Circles',
        icon: '⭕',
        desc: 'Radius, Tangents, Chords, Inscribed angles, Arcs & Sectors',
        questions: circlesQuestions
      },
      perimeter: {
        id: 'perimeter',
        name: 'Perimeter',
        icon: '📏',
        desc: 'Boundary distance of regular & composite 2D figures',
        questions: perimeterQuestions
      },
      area: {
        id: 'area',
        name: 'Area',
        icon: '🟩',
        desc: '2D surface space, Shaded regions, Hero formulas & ratios',
        questions: areaQuestions
      },
      surface_area: {
        id: 'surface_area',
        name: 'Surface Area',
        icon: '📦',
        desc: 'Lateral and total surface areas of 3D polyhedra & curves',
        questions: surfaceAreaQuestions
      },
      volume: {
        id: 'volume',
        name: 'Volume',
        icon: '🧊',
        desc: 'Cubic capacities of prisms, cones, cylinders, & spheres',
        questions: volumeQuestions
      },
      pythagoras: {
        id: 'pythagoras',
        name: 'Pythagoras Theorem',
        icon: '📐',
        desc: 'Hypotenuse, Triples, 2D/3D space diagonals & inradius',
        questions: pythagorasQuestions
      },
      coordinates: {
        id: 'coordinates',
        name: 'Coordinate Geometry',
        icon: '📈',
        desc: 'Cartesian plane, Slope, Distance, Midpoints & Circles',
        questions: coordinateGeometryQuestions
      },
      symmetry: {
        id: 'symmetry',
        name: 'Symmetry',
        icon: '🪞',
        desc: 'Reflection lines, Rotational order, Planes of symmetry',
        questions: symmetryQuestions
      },
      shapes_3d: {
        id: 'shapes_3d',
        name: '3D Polyhedra',
        icon: '🎲',
        desc: 'Euler\'s formula, Platonic solids, Vertices, Nets & duals',
        questions: threeDShapesQuestions
      },
      mixed: {
        id: 'mixed',
        name: 'Grand Master Arena',
        icon: '🏆',
        desc: 'Comprehensive multi-disciplinary geometry challenges',
        questions: mixedGeometryQuestions
      }
    };
  }

  getTopic(topicId) {
    return this.topics[topicId] || null;
  }

  getAllTopics() {
    return Object.values(this.topics);
  }

  /**
   * Generates a randomized quiz set (default 10 questions) for a topic.
   */
  getQuizSet(topicId, count = 10) {
    const topic = this.getTopic(topicId);
    if (!topic || !topic.questions || topic.questions.length === 0) {
      // Fallback to mixed if topic not found
      return this.shuffleArray([...this.topics.mixed.questions]).slice(0, count);
    }

    const shuffled = this.shuffleArray([...topic.questions]);
    const selected = shuffled.slice(0, Math.min(count, shuffled.length));

    // Shuffle options for each question while maintaining correctness
    return selected.map((q) => {
      const shuffledOptions = this.shuffleArray([...q.options]);
      return {
        ...q,
        options: shuffledOptions,
        correctIndex: shuffledOptions.indexOf(q.correctAnswer)
      };
    });
  }

  shuffleArray(arr) {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }
}
