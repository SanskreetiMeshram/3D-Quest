import * as THREE from 'three';

/**
 * Building.js
 * Generates modular 3D Academy rooms, classroom interiors, challenge pedestals, and architectural portals.
 */
export class Building {
  constructor(scene, collisionSystem) {
    this.scene = scene;
    this.collisionSystem = collisionSystem;
    this.terminals = []; // Interactive challenge pedestals
    this.animatedProps = [];

    // Shared Palette Materials
    this.wallMat = new THREE.MeshLambertMaterial({ color: 0x243b55 });
    this.wallTrimMat = new THREE.MeshLambertMaterial({ color: 0x4cc9f0 });
    this.pedestalMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });
    this.goldMat = new THREE.MeshStandardMaterial({ color: 0xffb703, metalness: 0.7, roughness: 0.3 });
    this.woodMat = new THREE.MeshLambertMaterial({ color: 0x78350f });
    this.blackboardMat = new THREE.MeshLambertMaterial({ color: 0x1e3a2f });
  }

  /**
   * Creates a complete themed room with walls, doorway, floor, signage, and interactive challenge pedestal.
   */
  createThemedRoom(config) {
    const {
      id,
      name,
      x,
      z,
      width = 16,
      depth = 16,
      height = 7,
      floorColor = 0x1e293b,
      symbol = 'triangle',
      pedestalColor = 0x4361ee,
      doorSide = 'south' // 'north' | 'south' | 'east' | 'west'
    } = config;

    const roomGroup = new THREE.Group();
    roomGroup.position.set(x, 0, z);

    // Floor
    const floorGeo = new THREE.PlaneGeometry(width - 0.4, depth - 0.4);
    const floorMat = new THREE.MeshLambertMaterial({ color: floorColor });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.05;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Build 4 Walls with doorway opening
    const wallThick = 0.8;
    const halfW = width / 2;
    const halfD = depth / 2;
    const doorWidth = 4.2;
    const doorHeight = 4.5;

    // Helper to create solid wall
    const createSolidWall = (w, d, px, pz) => {
      const geo = new THREE.BoxGeometry(w, height, d);
      const mesh = new THREE.Mesh(geo, this.wallMat);
      mesh.position.set(px, height / 2, pz);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      roomGroup.add(mesh);
      this.collisionSystem.addMeshCollider(mesh);
    };

    // Helper to create wall with centered doorway
    const createDoorWall = (isXAxis, px, pz) => {
      const totalLen = isXAxis ? width : depth;
      const sideLen = (totalLen - doorWidth) / 2;

      // Left segment
      const sideGeo = isXAxis 
        ? new THREE.BoxGeometry(sideLen, height, wallThick)
        : new THREE.BoxGeometry(wallThick, height, sideLen);

      const side1 = new THREE.Mesh(sideGeo, this.wallMat);
      const side2 = new THREE.Mesh(sideGeo, this.wallMat);

      if (isXAxis) {
        side1.position.set(px - (doorWidth + sideLen) / 2, height / 2, pz);
        side2.position.set(px + (doorWidth + sideLen) / 2, height / 2, pz);
      } else {
        side1.position.set(px, height / 2, pz - (doorWidth + sideLen) / 2);
        side2.position.set(px, height / 2, pz + (doorWidth + sideLen) / 2);
      }

      side1.castShadow = true;
      side2.castShadow = true;
      roomGroup.add(side1);
      roomGroup.add(side2);
      this.collisionSystem.addMeshCollider(side1);
      this.collisionSystem.addMeshCollider(side2);

      // Top lintel over door
      const lintelH = height - doorHeight;
      const lintelGeo = isXAxis
        ? new THREE.BoxGeometry(doorWidth, lintelH, wallThick)
        : new THREE.BoxGeometry(wallThick, lintelH, doorWidth);
      const lintel = new THREE.Mesh(lintelGeo, this.wallMat);
      lintel.position.set(px, doorHeight + lintelH / 2, pz);
      roomGroup.add(lintel);

      // Glowing Door Arch Trim
      const archMat = new THREE.MeshBasicMaterial({ color: pedestalColor });
      const archGeo = isXAxis
        ? new THREE.BoxGeometry(doorWidth + 0.3, 0.2, wallThick + 0.2)
        : new THREE.BoxGeometry(wallThick + 0.2, 0.2, doorWidth + 0.3);
      const arch = new THREE.Mesh(archGeo, archMat);
      arch.position.set(px, doorHeight, pz);
      roomGroup.add(arch);
    };

    // Construct 4 walls based on doorSide
    if (doorSide === 'south') {
      createDoorWall(true, 0, halfD);
      createSolidWall(width, wallThick, 0, -halfD);
      createSolidWall(wallThick, depth, -halfW, 0);
      createSolidWall(wallThick, depth, halfW, 0);
    } else if (doorSide === 'north') {
      createDoorWall(true, 0, -halfD);
      createSolidWall(width, wallThick, 0, halfD);
      createSolidWall(wallThick, depth, -halfW, 0);
      createSolidWall(wallThick, depth, halfW, 0);
    } else if (doorSide === 'west') {
      createDoorWall(false, -halfW, 0);
      createSolidWall(wallThick, depth, halfW, 0);
      createSolidWall(width, wallThick, 0, -halfD);
      createSolidWall(width, wallThick, 0, halfD);
    } else {
      createDoorWall(false, halfW, 0);
      createSolidWall(wallThick, depth, -halfW, 0);
      createSolidWall(width, wallThick, 0, -halfD);
      createSolidWall(width, wallThick, 0, halfD);
    }

    // Room Signage Header
    const signGeo = new THREE.BoxGeometry(6, 1.2, 0.3);
    const signMat = new THREE.MeshLambertMaterial({ color: 0x0f172a });
    const sign = new THREE.Mesh(signGeo, signMat);
    sign.position.set(0, doorHeight + 1.2, doorSide === 'south' ? halfD + 0.2 : -halfD - 0.2);
    roomGroup.add(sign);

    // Glowing Interactive Terminal Pedestal
    const terminal = this.createPedestal(roomGroup, 0, 0, name, id, symbol, pedestalColor);
    this.terminals.push(terminal);

    // Interior Room Props & Geometric Monuments
    this.addRoomDecorations(roomGroup, symbol, width, depth, pedestalColor);

    this.scene.add(roomGroup);
    return roomGroup;
  }

  createPedestal(parentGroup, px, pz, topicName, topicId, symbolType, glowColor) {
    const group = new THREE.Group();
    group.position.set(px, 0, pz);

    // Octagonal / Cylindrical Base
    const baseGeo = new THREE.CylinderGeometry(1.3, 1.6, 0.4, 8);
    const base = new THREE.Mesh(baseGeo, this.pedestalMat);
    base.position.y = 0.2;
    base.castShadow = true;
    group.add(base);

    // Pillar Column
    const colGeo = new THREE.CylinderGeometry(0.7, 0.9, 1.1, 8);
    const col = new THREE.Mesh(colGeo, this.pedestalMat);
    col.position.y = 0.95;
    col.castShadow = true;
    group.add(col);

    // Glowing Neon Ring
    const ringGeo = new THREE.TorusGeometry(1.2, 0.08, 12, 24);
    const ringMat = new THREE.MeshBasicMaterial({ color: glowColor });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2;
    ring.position.y = 0.42;
    group.add(ring);

    // Floating 3D Geometric Emblem
    const emblemMat = new THREE.MeshStandardMaterial({
      color: glowColor,
      emissive: glowColor,
      emissiveIntensity: 0.4,
      metalness: 0.5,
      roughness: 0.2
    });

    let emblemGeo;
    switch (symbolType) {
      case 'triangle':
        emblemGeo = new THREE.ConeGeometry(0.7, 1.0, 3);
        break;
      case 'quadrilateral':
        emblemGeo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        break;
      case 'circle':
        emblemGeo = new THREE.TorusGeometry(0.55, 0.18, 16, 32);
        break;
      case 'pythagoras':
        emblemGeo = new THREE.TetrahedronGeometry(0.8);
        break;
      case 'shapes_3d':
        emblemGeo = new THREE.DodecahedronGeometry(0.75);
        break;
      case 'mixed':
        emblemGeo = new THREE.IcosahedronGeometry(0.8);
        break;
      default:
        emblemGeo = new THREE.OctahedronGeometry(0.75);
        break;
    }

    const emblem = new THREE.Mesh(emblemGeo, emblemMat);
    emblem.position.y = 2.1;
    emblem.castShadow = true;
    group.add(emblem);

    // Ambient beacon point light
    const beacon = new THREE.PointLight(glowColor, 1.5, 8, 2);
    beacon.position.set(0, 2.1, 0);
    group.add(beacon);

    parentGroup.add(group);

    // Animation hook
    this.animatedProps.push((time) => {
      emblem.rotation.y = time * 1.5;
      emblem.rotation.x = Math.sin(time * 2) * 0.2;
      emblem.position.y = 2.1 + Math.sin(time * 2.5) * 0.12;
      ring.rotation.z = time * 0.8;
    });

    // Interaction data
    return {
      topicId,
      topicName,
      worldPosition: new THREE.Vector3().setFromMatrixPosition(group.matrixWorld),
      group,
      radius: 2.8
    };
  }

  addRoomDecorations(group, symbol, width, depth, themeColor) {
    const halfW = width / 2;
    const halfD = depth / 2;

    // Corner decorative pillars
    const pillarGeo = new THREE.CylinderGeometry(0.4, 0.4, 6.5, 8);
    const corners = [
      { x: -halfW + 1.2, z: -halfD + 1.2 },
      { x: halfW - 1.2, z: -halfD + 1.2 },
      { x: -halfW + 1.2, z: halfD - 1.2 },
      { x: halfW - 1.2, z: halfD - 1.2 }
    ];

    corners.forEach((c) => {
      const pillar = new THREE.Mesh(pillarGeo, this.pedestalMat);
      pillar.position.set(c.x, 3.25, c.z);
      group.add(pillar);
      this.collisionSystem.addMeshCollider(pillar);
    });

    // Wall Geometry Boards / Posters
    const boardGeo = new THREE.BoxGeometry(4.5, 2.5, 0.1);
    const board = new THREE.Mesh(boardGeo, this.blackboardMat);
    board.position.set(0, 3.6, -halfD + 0.45);
    group.add(board);

    // Decorative 3D Wireframe Shape in Room corner
    const wireGeo = new THREE.IcosahedronGeometry(1.4, 1);
    const wireMat = new THREE.MeshBasicMaterial({ color: themeColor, wireframe: true });
    const wireMesh = new THREE.Mesh(wireGeo, wireMat);
    wireMesh.position.set(-halfW + 3.2, 3.2, -halfD + 3.2);
    group.add(wireMesh);

    this.animatedProps.push((time) => {
      wireMesh.rotation.x = time * 0.6;
      wireMesh.rotation.y = time * 0.9;
    });
  }

  /**
   * Builds the central Geometry Classroom with student desks, chairs, teacher lectern and blackboard.
   */
  createClassroom(x, z) {
    const roomGroup = new THREE.Group();
    roomGroup.position.set(x, 0, z);

    const w = 20, d = 18, h = 7;
    const floorGeo = new THREE.PlaneGeometry(w - 0.4, d - 0.4);
    const floorMat = new THREE.MeshLambertMaterial({ color: 0x334155 });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0.05;
    floor.receiveShadow = true;
    roomGroup.add(floor);

    // Classroom Desks & Chairs grid
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const dx = (col - 1) * 4.8;
        const dz = (row - 1) * 3.8 + 2.0;

        // Desk
        const desk = new THREE.Mesh(new THREE.BoxGeometry(2.4, 1.2, 1.1), this.woodMat);
        desk.position.set(dx, 0.6, dz);
        desk.castShadow = true;
        roomGroup.add(desk);
        this.collisionSystem.addMeshCollider(desk);

        // Chair
        const chair = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.8, 0.8), this.woodMat);
        chair.position.set(dx, 0.4, dz + 1.1);
        roomGroup.add(chair);
      }
    }

    // Teacher Lectern Podium
    const lectern = new THREE.Mesh(new THREE.BoxGeometry(2.2, 1.4, 1.2), this.woodMat);
    lectern.position.set(0, 0.7, -5.5);
    lectern.castShadow = true;
    roomGroup.add(lectern);
    this.collisionSystem.addMeshCollider(lectern);

    // Large Chalkboard on Front Wall
    const board = new THREE.Mesh(new THREE.BoxGeometry(10, 3.2, 0.15), this.blackboardMat);
    board.position.set(0, 3.8, -8.6);
    roomGroup.add(board);

    this.scene.add(roomGroup);
  }

  /**
   * Builds the Grand Entrance Archway.
   */
  createEntranceArch(x, z) {
    const archGroup = new THREE.Group();
    archGroup.position.set(x, 0, z);

    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x1e293b });
    const goldTrim = new THREE.MeshStandardMaterial({ color: 0xffb703, metalness: 0.8 });

    // Left Pillar
    const p1 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 9, 2.2), stoneMat);
    p1.position.set(-6, 4.5, 0);
    p1.castShadow = true;
    archGroup.add(p1);
    this.collisionSystem.addMeshCollider(p1);

    // Right Pillar
    const p2 = new THREE.Mesh(new THREE.BoxGeometry(2.2, 9, 2.2), stoneMat);
    p2.position.set(6, 4.5, 0);
    p2.castShadow = true;
    archGroup.add(p2);
    this.collisionSystem.addMeshCollider(p2);

    // Top Header Arch Beam
    const beam = new THREE.Mesh(new THREE.BoxGeometry(15, 2.2, 2.6), stoneMat);
    beam.position.set(0, 9.6, 0);
    beam.castShadow = true;
    archGroup.add(beam);

    // Academy Golden Crest Emblem
    const crest = new THREE.Mesh(new THREE.OctahedronGeometry(1.2), goldTrim);
    crest.position.set(0, 11.5, 0);
    archGroup.add(crest);

    this.scene.add(archGroup);
  }

  update(delta, time) {
    this.animatedProps.forEach((fn) => fn(time));
  }
}
