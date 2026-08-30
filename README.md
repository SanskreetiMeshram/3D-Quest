# 📐 GEOMETRY QUEST 3D

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Three.js](https://img.shields.io/badge/Three.js-0.170.0-black?logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite)](https://vitejs.dev/)

An interactive, browser-based 3D educational adventure game built with vanilla JavaScript, Three.js, and Vite. Explore the stylized 3D Geometry Academy, converse with Teacher Archimedes, discover 10 specialized mathematical wings, solve 260+ geometry challenges with dynamic diagrams, collect glowing geometric tokens, level up, and conquer the Grand Master Arena!

---

## 🌟 Key Features

- **🏛️ 3D Geometry Academy**: Explore a rich campus featuring a central fountain plaza, student classroom, entrance arch, and 10 themed challenge pavilions with unique lighting and architectural monuments.
- **🏃‍♂️ Third-Person Player Controller**: Smooth physics-based movement, sprinting, jumping, wall collision resolution, dynamic camera orbit with wall-clipping avoidance, and touch joystick support.
- **👨‍🏫 Interactive Teacher NPC**: Meet Teacher Archimedes in the courtyard and engage in interactive dialogue.
- **📚 13 Comprehensive Geometry Modules (260+ Verified Questions)**:
  1. Lines & Angles
  2. Triangles
  3. Quadrilaterals
  4. Circles
  5. Perimeter
  6. Area
  7. Surface Area
  8. Volume
  9. Pythagoras Theorem
  10. Coordinate Geometry
  11. Symmetry
  12. 3D Polyhedra
  13. Grand Master Arena (Mixed Geometry)
- **📊 Dynamic Visual Diagrams**: Instant high-clarity SVG illustrations for triangles, angles, quadrilaterals, circles, coordinate grids, and 3D solids.
- **⏳ Engaging Quiz Gameplay**: 30-second timers, 3-heart lives system, combo streak multipliers (x2, x3), speed bonuses, and instant step-by-step mathematical explanations.
- **⭐ XP, Levels & Star Rating**: Earn 1-3 stars per challenge, gain XP to level up from *Novice Geometer* to *Archimedes Grand Master*, and unlock advanced wings.
- **🪙 3D Geometric Collectibles**: Collect floating, rotating polyhedral tokens scattered around the campus.
- **🎵 Built-in Web Audio Synthesizer**: Procedural chime synthesizer for clicks, correct/wrong answers, coins, jumps, level-ups, and ambient background music without requiring external audio files.
- **💾 Automatic Save System**: Automatically saves progress, stars, best scores, tokens, and settings to `localStorage` with corrupted data auto-recovery.
- **📱 Fully Responsive Design**: Seamlessly plays on Desktops, Laptops, Tablets, and Mobile phones.

---

## 🎮 Controls

| Action | Keyboard | Touch / Mobile |
| :--- | :--- | :--- |
| **Move** | <kbd>W</kbd> <kbd>A</kbd> <kbd>S</kbd> <kbd>D</kbd> or Arrow Keys | On-screen Joystick |
| **Sprint / Run** | <kbd>Shift</kbd> + Move | Auto-boost |
| **Jump** | <kbd>Space</kbd> | Jump Button |
| **Interact** | <kbd>E</kbd> | Action Button / Tap Prompt |
| **Camera Orbit** | Mouse Drag / Move | Touch Drag (Right Screen) |
| **Camera Zoom** | Mouse Scroll Wheel | Pinch |
| **Topic Selection** | <kbd>M</kbd> | HUD Topic Icon |
| **Pause Menu** | <kbd>Esc</kbd> | HUD Pause Icon |
| **Answer Options** | <kbd>1</kbd> <kbd>2</kbd> <kbd>3</kbd> <kbd>4</kbd> or <kbd>A</kbd> <kbd>B</kbd> <kbd>C</kbd> <kbd>D</kbd> | Tap Option Card |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18+ recommended)
- `npm` (bundled with Node)

### Installation
```bash
# Clone repository
git clone https://github.com/SanskreetiMeshram/Geometry-Quest-3D.git
cd Geometry-Quest-3D

# Install dependencies
npm install
```

### Running Locally in Development
```bash
npm run dev
```
Open your browser at `http://localhost:5173/Geometry-Quest-3D/` to enter the Academy!

### Building for Production
```bash
npm run build
```
The optimized production bundle will be generated in the `dist/` directory.

### Previewing the Production Build
```bash
npm run preview
```

---

## 📁 Project Architecture

```text
├── index.html                  # HTML5 Game canvas container & UI screen templates
├── vite.config.js              # Vite configuration with GitHub Pages base path
├── package.json                # Project dependencies and build scripts
├── README.md                   # Comprehensive project documentation
├── .gitignore                  # Git ignore rules
├── .github/
│   └── workflows/
│       └── deploy.yml          # Automated GitHub Pages CI/CD workflow
├── public/
│   ├── models/                 # Optional GLB character and building models
│   ├── textures/               # Optional environment textures
│   └── sounds/                 # Optional sound effect audio files
└── src/
    ├── main.js                 # Application bootstrap entry point
    ├── style.css               # Modern glassmorphism responsive styling
    ├── game/
    │   ├── Game.js             # Master game orchestration & animation loop
    │   └── GameState.js        # Reactive state manager (progression, score, modes)
    ├── player/
    │   ├── Player.js           # Player physics, ground check, jump & rotation
    │   ├── PlayerController.js # Keyboard, mouse, and touch joystick inputs
    │   └── PlayerAnimation.js  # Procedural limb oscillation & GLTF clip mixer
    ├── camera/
    │   └── ThirdPersonCamera.js# Orbit camera with wall collision avoidance
    ├── world/
    │   ├── World.js            # Academy world builder, NPC spawner & tokens
    │   ├── Environment.js      # Lighting, sky gradient dome, fountain & trees
    │   └── Building.js         # Themed room architecture & challenge pedestals
    ├── interaction/
    │   └── InteractionManager.js# Proximity detection & E-key interaction dispatch
    ├── challenges/
    │   ├── ChallengeManager.js # Session coordinator between 3D world & quiz UI
    │   ├── QuizEngine.js       # Timer, lives, combos, and answer validation
    │   └── ScoringSystem.js    # Transparent score calculations & star ratings
    ├── questions/
    │   ├── QuestionManager.js  # Question bank repository & shuffler
    │   ├── linesAngles.js      # 20 questions on Lines & Angles
    │   ├── triangles.js        # 20 questions on Triangles
    │   ├── quadrilaterals.js   # 20 questions on Quadrilaterals
    │   ├── circles.js          # 20 questions on Circles
    │   ├── perimeter.js        # 20 questions on Perimeter
    │   ├── area.js             # 20 questions on Area & Shaded regions
    │   ├── surfaceArea.js      # 20 questions on Surface Area of 3D solids
    │   ├── volume.js           # 20 questions on Volume & Capacity
    │   ├── pythagoras.js       # 20 questions on Pythagorean Theorem
    │   ├── coordinateGeometry.js# 20 questions on Cartesian Coordinates
    │   ├── symmetry.js         # 20 questions on Reflection & Rotational Symmetry
    │   ├── threeDShapes.js     # 20 questions on 3D Polyhedra & Euler Formula
    │   └── mixedGeometry.js    # 20 questions for the Grand Master Arena
    ├── ui/
    │   ├── MainMenu.js         # Play, continue, topics, settings navigation
    │   ├── HUD.js              # Real-time player level, XP bar, tokens & banners
    │   ├── TopicMenu.js        # 13 topic challenge cards & unlock states
    │   ├── DialogueBox.js      # Typewriter dialogue box for Teacher Archimedes
    │   ├── QuizScreen.js       # Question layout, option buttons & feedback
    │   ├── ResultsScreen.js    # Challenge summary, star animation & rewards
    │   ├── PauseMenu.js        # Resume, restart, and fast-travel overlay
    │   ├── SettingsScreen.js   # Audio sliders, graphics presets & data reset
    │   └── DiagramRenderer.js  # Dynamic SVG geometry diagram renderer
    └── systems/
        ├── AssetManager.js     # GLTF model loader with procedural fallbacks
        ├── CollisionSystem.js  # AABB & capsule 3D collision resolution
        ├── AudioManager.js     # Web Audio API synthesizer for all sounds & BGM
        └── SaveSystem.js       # LocalStorage persistence & corruption recovery
```

---

## 🛠️ Customization & Extensibility

### Adding New Questions
Open any file in `src/questions/` and append a question object:
```javascript
{
  id: 'tri_custom_1',
  topic: 'triangles',
  difficulty: 'medium', // 'easy' | 'medium' | 'hard' | 'expert'
  question: 'What is the sum of angles in a triangle?',
  options: ['180°', '360°', '90°', '270°'],
  correctAnswer: '180°',
  explanation: 'Interior angles always sum to 180° in Euclidean geometry.',
  xp: 25,
  diagram: { type: 'triangle', a: 60, b: 60, c: 60, label: 'Equilateral' }
}
```

### Adding Custom 3D Models (`.glb`)
Place `.glb` files into `public/models/`:
- `public/models/player.glb` (supports animations: `Idle`, `Walk`, `Run`, `Jump`)
- `public/models/teacher.glb`
- `public/models/desk.glb`

*If a model file is missing or fails to load, the engine automatically falls back to procedural 3D models with zero runtime errors.*

---

## 🌐 GitHub Pages Deployment

1. Push your repository to GitHub (`main` branch):
   ```bash
   git remote add origin https://github.com/SanskreetiMeshram/Geometry-Quest-3D.git
   git branch -M main
   git push -u origin main
   ```
2. Navigate to your repository **Settings > Pages**.
3. Under **Build and deployment > Source**, select **GitHub Actions**.
4. The `.github/workflows/deploy.yml` workflow will automatically build and publish your game to `https://SanskreetiMeshram.github.io/Geometry-Quest-3D/`!

---

## 📄 License
This project is open source and available under the [MIT License](LICENSE).
