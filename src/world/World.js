import * as THREE from 'three';
import { Environment } from './Environment.js';
import { Building } from './Building.js';

/**
 * World.js
 * Master world manager orchestrating the 3D Geometry Academy architecture, Teacher NPC, and collectibles.
 */
export class World {
  constructor(scene, collisionSystem, assetManager, audioManager) {
    this.scene = scene;
    this.collisionSystem = collisionSystem;
    this.assetManager = assetManager;
    this.audioManager = audioManager;

    this.collectibles = [];
    this.terminals = [];
    this.teacherNPC = null;
    this.animatedObjects = [];

    this.init();
  }

  init() {
    this.environment = new Environment(this.scene, this.collisionSystem);
    this.building = new Building(this.scene, this.collisionSystem);

    this.constructAcademyWings();
    this.spawnTeacherNPC();
    this.spawnCollectibles();
  }

  constructAcademyWings() {
    // 1. Entrance Arch (South)
    this.building.createEntranceArch(0, 50);

    // 2. Geometry Classroom (South-East courtyard)
    this.building.createClassroom(25, 32);

    // 3. Themed Challenge Rooms Layout in Academy radial wings
    const roomConfigs = [
      {
        id: 'lines_angles',
        name: 'Lines & Angles Pavilion',
        x: -36,
        z: -32,
        floorColor: 0x1e3a8a,
        symbol: 'octahedron',
        pedestalColor: 0x38bdf8,
        doorSide: 'south'
      },
      {
        id: 'triangles',
        name: 'Triangle Domain',
        x: 0,
        z: -48,
        floorColor: 0x831843,
        symbol: 'triangle',
        pedestalColor: 0xf43f5e,
        doorSide: 'south'
      },
      {
        id: 'quadrilaterals',
        name: 'Quadrilateral Hall',
        x: 36,
        z: -32,
        floorColor: 0x14532d,
        symbol: 'quadrilateral',
        pedestalColor: 0x22c55e,
        doorSide: 'south'
      },
      {
        id: 'circles',
        name: 'Circle Sanctuary',
        x: 52,
        z: 0,
        floorColor: 0x701a75,
        symbol: 'circle',
        pedestalColor: 0xd946ef,
        doorSide: 'west'
      },
      {
        id: 'perimeter',
        name: 'Perimeter Chamber',
        x: -52,
        z: 0,
        floorColor: 0x7c2d12,
        symbol: 'octahedron',
        pedestalColor: 0xf97316,
        doorSide: 'east'
      },
      {
        id: 'area',
        name: 'Area Laboratory',
        x: -52,
        z: 32,
        floorColor: 0x365314,
        symbol: 'quadrilateral',
        pedestalColor: 0x84cc16,
        doorSide: 'east'
      },
      {
        id: 'surface_area',
        name: 'Surface Area Vault',
        x: -76,
        z: -18,
        floorColor: 0x134e4a,
        symbol: 'shapes_3d',
        pedestalColor: 0x14b8a6,
        doorSide: 'east'
      },
      {
        id: 'volume',
        name: 'Volume Dimension',
        x: -76,
        z: 18,
        floorColor: 0x172554,
        symbol: 'shapes_3d',
        pedestalColor: 0x3b82f6,
        doorSide: 'east'
      },
      {
        id: 'pythagoras',
        name: 'Pythagorean Temple',
        x: -25,
        z: 32,
        floorColor: 0x713f12,
        symbol: 'pythagoras',
        pedestalColor: 0xeab308,
        doorSide: 'north'
      },
      {
        id: 'coordinates',
        name: 'Cartesian Coordinate Observatory',
        x: 52,
        z: -32,
        floorColor: 0x312e81,
        symbol: 'octahedron',
        pedestalColor: 0x6366f1,
        doorSide: 'west'
      },
      {
        id: 'symmetry',
        name: 'Symmetry Mirror Wing',
        x: 52,
        z: 32,
        floorColor: 0x4c1d95,
        symbol: 'circle',
        pedestalColor: 0xa855f7,
        doorSide: 'west'
      },
      {
        id: 'shapes_3d',
        name: '3D Polyhedra Lab',
        x: 76,
        z: 0,
        floorColor: 0x064e3b,
        symbol: 'shapes_3d',
        pedestalColor: 0x10b981,
        doorSide: 'west'
      },
      {
        id: 'mixed',
        name: 'Grand Master Geometry Arena',
        x: 0,
        z: -84,
        width: 24,
        depth: 24,
        height: 10,
        floorColor: 0x450a0a,
        symbol: 'mixed',
        pedestalColor: 0xffb703,
        doorSide: 'south'
      }
    ];

    roomConfigs.forEach((cfg) => {
      this.building.createThemedRoom(cfg);
    });

    this.terminals = this.building.terminals;
  }

  spawnTeacherNPC() {
    const glbModel = this.assetManager.getModel('teacher');
    let teacherMesh;

    if (glbModel && glbModel.scene) {
      teacherMesh = glbModel.scene;
      teacherMesh.scale.set(1.1, 1.1, 1.1);
    } else {
      teacherMesh = this.assetManager.createProceduralTeacher();
    }

    const teacherGroup = new THREE.Group();
    teacherGroup.position.set(0, 0, 7.5); // Beside Courtyard Fountain
    teacherGroup.rotation.y = Math.PI; // Face incoming students
    teacherGroup.add(teacherMesh);
    this.scene.add(teacherGroup);

    this.collisionSystem.addMeshCollider(teacherMesh);

    // Floating speech bubble / halo icon over Teacher
    const iconGeo = new THREE.OctahedronGeometry(0.35);
    const iconMat = new THREE.MeshBasicMaterial({ color: 0xffb703 });
    const iconMesh = new THREE.Mesh(iconGeo, iconMat);
    iconMesh.position.set(0, 2.5, 0);
    teacherGroup.add(iconMesh);

    this.teacherNPC = {
      name: 'Teacher Archimedes',
      position: new THREE.Vector3(0, 0, 7.5),
      radius: 3.5,
      group: teacherGroup,
      icon: iconMesh
    };

    this.animatedObjects.push((time) => {
      iconMesh.rotation.y = time * 2;
      iconMesh.position.y = 2.5 + Math.sin(time * 3) * 0.1;
    });
  }

  spawnCollectibles() {
    const tokenTypes = [
      { type: 'triangle', color: 0xf72585, geo: new THREE.ConeGeometry(0.45, 0.7, 3), score: 25 },
      { type: 'circle', color: 0x4cc9f0, geo: new THREE.TorusGeometry(0.35, 0.1, 12, 24), score: 25 },
      { type: 'cube', color: 0x2ec4b6, geo: new THREE.BoxGeometry(0.55, 0.55, 0.55), score: 50 },
      { type: 'star', color: 0xffb703, geo: new THREE.IcosahedronGeometry(0.4), score: 100 }
    ];

    const tokenCoords = [
      { x: -7, z: 7 }, { x: 7, z: 7 }, { x: -7, z: -7 }, { x: 7, z: -7 },
      { x: 0, z: 22 }, { x: 0, z: -22 }, { x: -22, z: 0 }, { x: 22, z: 0 },
      { x: -18, z: -18 }, { x: 18, z: -18 }, { x: -18, z: 18 }, { x: 18, z: 18 },
      { x: -30, z: 12 }, { x: 30, z: 12 }, { x: -30, z: -12 }, { x: 30, z: -12 },
      { x: 0, z: 35 }, { x: -12, z: 42 }, { x: 12, z: 42 }, { x: 0, z: -65 }
    ];

    tokenCoords.forEach((coord, idx) => {
      const spec = tokenTypes[idx % tokenTypes.length];
      const mat = new THREE.MeshStandardMaterial({
        color: spec.color,
        emissive: spec.color,
        emissiveIntensity: 0.5,
        metalness: 0.6,
        roughness: 0.3
      });

      const mesh = new THREE.Mesh(spec.geo, mat);
      mesh.position.set(coord.x, 1.2, coord.z);
      mesh.castShadow = true;
      this.scene.add(mesh);

      // Point light for extra shine
      const pLight = new THREE.PointLight(spec.color, 0.8, 4);
      pLight.position.set(coord.x, 1.2, coord.z);
      this.scene.add(pLight);

      this.collectibles.push({
        id: `token_${idx}`,
        type: spec.type,
        score: spec.score,
        mesh,
        light: pLight,
        collected: false,
        pos: new THREE.Vector3(coord.x, 1.2, coord.z)
      });
    });
  }

  checkCollectibles(playerPos, onCollect) {
    this.collectibles.forEach((item) => {
      if (!item.collected && item.pos.distanceTo(playerPos) < 1.6) {
        item.collected = true;
        item.mesh.visible = false;
        item.light.visible = false;
        if (this.audioManager) {
          this.audioManager.playToken();
        }
        if (onCollect) {
          onCollect(item);
        }
      }
    });
  }

  update(delta, time) {
    this.environment.update(delta, time);
    this.building.update(delta, time);
    this.animatedObjects.forEach((fn) => fn(time));

    // Animate floating rotating collectibles
    this.collectibles.forEach((item, idx) => {
      if (!item.collected) {
        item.mesh.rotation.y = time * 2.0 + idx;
        item.mesh.rotation.x = Math.sin(time * 2.0 + idx) * 0.3;
        item.mesh.position.y = 1.2 + Math.sin(time * 3.0 + idx) * 0.2;
      }
    });
  }
}
