import * as THREE from 'three';

/**
 * Environment.js
 * Builds the sky, lighting, ground, pathways, trees, fountain, and courtyard monuments.
 */
export class Environment {
  constructor(scene, collisionSystem) {
    this.scene = scene;
    this.collisionSystem = collisionSystem;
    this.animatedObjects = [];

    this.initLighting();
    this.initSky();
    this.initGround();
    this.initCourtyardFountain();
    this.initFoliageAndDecorations();
  }

  initLighting() {
    // Ambient Light
    const hemiLight = new THREE.HemisphereLight(0xdce7ff, 0x1f293d, 0.75);
    hemiLight.position.set(0, 50, 0);
    this.scene.add(hemiLight);

    // Directional Sun Light
    const sunLight = new THREE.DirectionalLight(0xfff3d6, 1.25);
    sunLight.position.set(45, 60, 35);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.near = 0.5;
    sunLight.shadow.camera.far = 160;
    const d = 65;
    sunLight.shadow.camera.left = -d;
    sunLight.shadow.camera.right = d;
    sunLight.shadow.camera.top = d;
    sunLight.shadow.camera.bottom = -d;
    sunLight.shadow.bias = -0.0005;
    this.scene.add(sunLight);

    // Courtyard accent point lights
    const colors = [0x4cc9f0, 0xf72585, 0xffb703];
    [
      { x: -12, z: -12, color: colors[0] },
      { x: 12, z: -12, color: colors[1] },
      { x: 0, z: 12, color: colors[2] }
    ].forEach((pt) => {
      const light = new THREE.PointLight(pt.color, 1.2, 18, 1.5);
      light.position.set(pt.x, 3.5, pt.z);
      this.scene.add(light);
    });
  }

  initSky() {
    // Sky Dome with subtle gradient
    const skyGeo = new THREE.SphereGeometry(150, 32, 24);
    const vertexShader = `
      varying vec3 vWorldPosition;
      void main() {
        vec4 worldPosition = modelMatrix * vec4(position, 1.0);
        vWorldPosition = worldPosition.xyz;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `;
    const fragmentShader = `
      uniform vec3 topColor;
      uniform vec3 bottomColor;
      uniform float offset;
      uniform float exponent;
      varying vec3 vWorldPosition;
      void main() {
        float h = normalize(vWorldPosition + offset).y;
        gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
      }
    `;
    const uniforms = {
      topColor: { value: new THREE.Color(0x0f1d40) }, // Deep twilight blue
      bottomColor: { value: new THREE.Color(0x283b6b) },
      offset: { value: 33 },
      exponent: { value: 0.6 }
    };
    const skyMat = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      uniforms,
      side: THREE.BackSide
    });
    const skyMesh = new THREE.Mesh(skyGeo, skyMat);
    this.scene.add(skyMesh);
  }

  initGround() {
    // Main Grass Field
    const groundGeo = new THREE.PlaneGeometry(240, 240);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x1a3325 }); // Deep lush academy lawn
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    this.scene.add(ground);

    // Stone Courtyard Center Plaza
    const plazaGeo = new THREE.CircleGeometry(26, 48);
    const plazaMat = new THREE.MeshLambertMaterial({ color: 0xd8e2dc }); // Polished marble
    const plaza = new THREE.Mesh(plazaGeo, plazaMat);
    plaza.rotation.x = -Math.PI / 2;
    plaza.position.set(0, 0.02, 0);
    plaza.receiveShadow = true;
    this.scene.add(plaza);

    // Radiating Paver Paths leading to room wings
    const angles = [0, Math.PI / 3, 2 * Math.PI / 3, Math.PI, 4 * Math.PI / 3, 5 * Math.PI / 3];
    const pathMat = new THREE.MeshLambertMaterial({ color: 0xb5c9c3 });

    angles.forEach((ang) => {
      const pathGeo = new THREE.PlaneGeometry(6, 45);
      const path = new THREE.Mesh(pathGeo, pathMat);
      path.rotation.x = -Math.PI / 2;
      path.rotation.z = ang;
      path.position.set(Math.sin(ang) * 35, 0.03, Math.cos(ang) * 35);
      path.receiveShadow = true;
      this.scene.add(path);
    });

    // Academy Outer Boundary Walls
    const wallMat = new THREE.MeshLambertMaterial({ color: 0x3d5a80 });
    const wallGeoX = new THREE.BoxGeometry(240, 6, 2);
    const wallGeoZ = new THREE.BoxGeometry(2, 6, 240);

    const wallNorth = new THREE.Mesh(wallGeoX, wallMat);
    wallNorth.position.set(0, 3, -118);
    this.scene.add(wallNorth);
    this.collisionSystem.addMeshCollider(wallNorth);

    const wallSouth = new THREE.Mesh(wallGeoX, wallMat);
    wallSouth.position.set(0, 3, 118);
    this.scene.add(wallSouth);
    this.collisionSystem.addMeshCollider(wallSouth);

    const wallWest = new THREE.Mesh(wallGeoZ, wallMat);
    wallWest.position.set(-118, 3, 0);
    this.scene.add(wallWest);
    this.collisionSystem.addMeshCollider(wallWest);

    const wallEast = new THREE.Mesh(wallGeoZ, wallMat);
    wallEast.position.set(118, 3, 0);
    this.scene.add(wallEast);
    this.collisionSystem.addMeshCollider(wallEast);
  }

  initCourtyardFountain() {
    const fountainGroup = new THREE.Group();
    fountainGroup.position.set(0, 0, 0);

    // Basin Outer Rim
    const basinGeo = new THREE.CylinderGeometry(5.2, 5.5, 0.8, 24);
    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x475569 });
    const basin = new THREE.Mesh(basinGeo, stoneMat);
    basin.position.y = 0.4;
    basin.castShadow = true;
    basin.receiveShadow = true;
    fountainGroup.add(basin);
    this.collisionSystem.addMeshCollider(basin);

    // Water Surface
    const waterGeo = new THREE.CircleGeometry(4.8, 24);
    const waterMat = new THREE.MeshBasicMaterial({ color: 0x48cae4, transparent: true, opacity: 0.85 });
    const water = new THREE.Mesh(waterGeo, waterMat);
    water.rotation.x = -Math.PI / 2;
    water.position.y = 0.78;
    fountainGroup.add(water);

    // Center Pedestal
    const centerGeo = new THREE.CylinderGeometry(1.2, 1.4, 2.2, 16);
    const centerCol = new THREE.Mesh(centerGeo, stoneMat);
    centerCol.position.y = 1.1;
    fountainGroup.add(centerCol);

    // Floating Rotating Golden Polyhedron / Icosahedron Monument
    const icoGeo = new THREE.IcosahedronGeometry(1.2, 0);
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xffb703,
      metalness: 0.8,
      roughness: 0.2,
      emissive: 0xffa200,
      emissiveIntensity: 0.25
    });
    const ico = new THREE.Mesh(icoGeo, icoMat);
    ico.position.y = 3.2;
    ico.castShadow = true;
    fountainGroup.add(ico);

    // Outer Orbiting Crystal Rings
    const ringGeo = new THREE.TorusGeometry(1.8, 0.08, 12, 32);
    const ringMat = new THREE.MeshBasicMaterial({ color: 0x4cc9f0 });
    const ring1 = new THREE.Mesh(ringGeo, ringMat);
    const ring2 = new THREE.Mesh(ringGeo, ringMat);
    ring1.position.y = 3.2;
    ring2.position.y = 3.2;
    fountainGroup.add(ring1);
    fountainGroup.add(ring2);

    this.scene.add(fountainGroup);

    this.animatedObjects.push((time) => {
      ico.rotation.y = time * 0.8;
      ico.rotation.x = Math.sin(time * 0.5) * 0.4;
      ico.position.y = 3.2 + Math.sin(time * 2) * 0.15;

      ring1.rotation.x = time * 1.2;
      ring1.rotation.y = time * 0.6;
      ring2.rotation.z = time * 1.0;
      ring2.rotation.y = -time * 0.8;
    });
  }

  initFoliageAndDecorations() {
    // Stylized Low Poly Trees
    const treePositions = [
      { x: -18, z: 18 }, { x: 18, z: 18 }, { x: -18, z: -18 }, { x: 18, z: -18 },
      { x: -38, z: 8 }, { x: 38, z: 8 }, { x: -38, z: -8 }, { x: 38, z: -8 },
      { x: 0, z: 38 }, { x: -28, z: 45 }, { x: 28, z: 45 }
    ];

    treePositions.forEach((pos) => {
      this.createTree(pos.x, pos.z);
    });

    // Courtyard Stone Benches
    const benchPositions = [
      { x: -9, z: 0, rot: Math.PI / 2 },
      { x: 9, z: 0, rot: -Math.PI / 2 },
      { x: 0, z: -9, rot: 0 }
    ];

    benchPositions.forEach((b) => {
      this.createBench(b.x, b.z, b.rot);
    });
  }

  createTree(x, z) {
    const treeGroup = new THREE.Group();
    treeGroup.position.set(x, 0, z);

    // Trunk
    const trunkGeo = new THREE.CylinderGeometry(0.3, 0.45, 2.5, 8);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x5c4033 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.y = 1.25;
    trunk.castShadow = true;
    treeGroup.add(trunk);
    this.collisionSystem.addMeshCollider(trunk);

    // Foliage layers (Cone / Icosahedron)
    const foliageMat = new THREE.MeshLambertMaterial({ color: 0x2d6a4f });
    const foliageMat2 = new THREE.MeshLambertMaterial({ color: 0x40916c });

    const f1 = new THREE.Mesh(new THREE.ConeGeometry(2.4, 2.8, 7), foliageMat);
    f1.position.y = 3.2;
    f1.castShadow = true;
    treeGroup.add(f1);

    const f2 = new THREE.Mesh(new THREE.ConeGeometry(1.8, 2.4, 7), foliageMat2);
    f2.position.y = 4.6;
    f2.castShadow = true;
    treeGroup.add(f2);

    this.scene.add(treeGroup);
  }

  createBench(x, z, rot) {
    const benchGroup = new THREE.Group();
    benchGroup.position.set(x, 0, z);
    benchGroup.rotation.y = rot;

    const stoneMat = new THREE.MeshLambertMaterial({ color: 0x94a3b8 });
    const seat = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.2, 0.7), stoneMat);
    seat.position.y = 0.5;
    seat.castShadow = true;
    benchGroup.add(seat);

    const leg1 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.6), stoneMat);
    leg1.position.set(-0.9, 0.2, 0);
    benchGroup.add(leg1);

    const leg2 = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.4, 0.6), stoneMat);
    leg2.position.set(0.9, 0.2, 0);
    benchGroup.add(leg2);

    this.scene.add(benchGroup);
    this.collisionSystem.addMeshCollider(seat);
  }

  update(delta, time) {
    this.animatedObjects.forEach((fn) => fn(time));
  }
}
