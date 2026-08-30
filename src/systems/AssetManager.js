import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

/**
 * AssetManager.js
 * Handles model/texture loading with GLTFLoader and robust procedural fallbacks.
 */
export class AssetManager {
  constructor() {
    this.loader = new GLTFLoader();
    this.models = new Map();
    this.textures = new Map();
    this.loadedCount = 0;
    this.totalAssets = 0;
  }

  async loadAll(onProgress) {
    const baseUrl = import.meta.env.BASE_URL || '/';
    const cleanBase = baseUrl.endsWith('/') ? baseUrl : baseUrl + '/';
    const assetList = [
      { key: 'player', path: `${cleanBase}models/player.glb`, type: 'model' },
      { key: 'teacher', path: `${cleanBase}models/teacher.glb`, type: 'model' },
      { key: 'building', path: `${cleanBase}models/building.glb`, type: 'model' },
      { key: 'desk', path: `${cleanBase}models/desk.glb`, type: 'model' },
      { key: 'coin', path: `${cleanBase}models/coin.glb`, type: 'model' }
    ];

    this.totalAssets = assetList.length + 5; // +5 procedural generation steps
    let current = 0;

    const report = (name) => {
      current++;
      if (onProgress) {
        const percent = Math.min(100, Math.round((current / this.totalAssets) * 100));
        onProgress(percent, name);
      }
    };

    // Attempt to load external assets, fallback gracefully if not found
    for (const asset of assetList) {
      try {
        const gltf = await this.loadGLB(asset.path);
        this.models.set(asset.key, gltf);
        report(`Loaded ${asset.key}`);
      } catch (err) {
        // Safe fallback - procedural generation will take over
        this.models.set(asset.key, null);
        report(`Generated fallback for ${asset.key}`);
      }
    }

    // Step through procedural geometry prep
    report('Crafting mathematical architecture...');
    report('Synthesizing audio frequencies...');
    report('Preparing geometry question bank...');
    report('Initializing Academy physics...');
    report('Ready to explore dimensions!');
  }

  loadGLB(url) {
    return new Promise((resolve, reject) => {
      // Set a short timeout so missing optional files don't block the game
      const timer = setTimeout(() => {
        reject(new Error('Asset load timeout'));
      }, 1500);

      this.loader.load(
        url,
        (gltf) => {
          clearTimeout(timer);
          resolve(gltf);
        },
        undefined,
        (error) => {
          clearTimeout(timer);
          reject(error);
        }
      );
    });
  }

  getModel(key) {
    return this.models.get(key) || null;
  }

  /**
   * Creates a high quality procedural 3D student character mesh with head, body, backpack, arms, and legs.
   */
  createProceduralPlayer() {
    const group = new THREE.Group();
    group.name = 'ProceduralPlayer';

    // Materials
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdbac });
    const shirtMat = new THREE.MeshLambertMaterial({ color: 0x4361ee }); // Blue school blazer
    const pantsMat = new THREE.MeshLambertMaterial({ color: 0x1e293b }); // Dark navy pants
    const shoeMat = new THREE.MeshLambertMaterial({ color: 0x0f172a }); // Black shoes
    const hairMat = new THREE.MeshLambertMaterial({ color: 0x4a2810 }); // Brown hair
    const bagMat = new THREE.MeshLambertMaterial({ color: 0xf72585 }); // Vibrant backpack

    // Torso / Blazer
    const torsoGeo = new THREE.BoxGeometry(0.55, 0.65, 0.32);
    const torso = new THREE.Mesh(torsoGeo, shirtMat);
    torso.position.y = 0.95;
    torso.castShadow = true;
    group.add(torso);

    // Collar / Tie
    const tieGeo = new THREE.BoxGeometry(0.12, 0.3, 0.04);
    const tieMat = new THREE.MeshLambertMaterial({ color: 0xffb703 });
    const tie = new THREE.Mesh(tieGeo, tieMat);
    tie.position.set(0, 0.98, 0.17);
    group.add(tie);

    // Backpack
    const bagGeo = new THREE.BoxGeometry(0.42, 0.48, 0.2);
    const bag = new THREE.Mesh(bagGeo, bagMat);
    bag.position.set(0, 0.96, -0.22);
    bag.castShadow = true;
    group.add(bag);

    // Head
    const headGeo = new THREE.SphereGeometry(0.24, 16, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.48;
    head.castShadow = true;
    group.add(head);

    // Hair
    const hairGeo = new THREE.SphereGeometry(0.26, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.55);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 1.5, 0);
    group.add(hair);

    // Graduation Cap / Student Cap
    const capBaseGeo = new THREE.CylinderGeometry(0.18, 0.18, 0.08, 16);
    const capTopGeo = new THREE.BoxGeometry(0.42, 0.02, 0.42);
    const capMat = new THREE.MeshLambertMaterial({ color: 0x3a0ca3 });
    const capBase = new THREE.Mesh(capBaseGeo, capMat);
    const capTop = new THREE.Mesh(capTopGeo, capMat);
    capBase.position.set(0, 1.68, 0);
    capTop.position.set(0, 1.72, 0);
    group.add(capBase);
    group.add(capTop);

    // Left Arm Group
    const leftArmGroup = new THREE.Group();
    leftArmGroup.position.set(-0.36, 1.2, 0);
    const armGeo = new THREE.BoxGeometry(0.14, 0.52, 0.14);
    const leftArm = new THREE.Mesh(armGeo, shirtMat);
    leftArm.position.y = -0.24;
    leftArm.castShadow = true;
    leftArmGroup.add(leftArm);
    group.add(leftArmGroup);
    group.leftArm = leftArmGroup;

    // Right Arm Group
    const rightArmGroup = new THREE.Group();
    rightArmGroup.position.set(0.36, 1.2, 0);
    const rightArm = new THREE.Mesh(armGeo, shirtMat);
    rightArm.position.y = -0.24;
    rightArm.castShadow = true;
    rightArmGroup.add(rightArm);
    group.add(rightArmGroup);
    group.rightArm = rightArmGroup;

    // Left Leg Group
    const leftLegGroup = new THREE.Group();
    leftLegGroup.position.set(-0.16, 0.65, 0);
    const legGeo = new THREE.BoxGeometry(0.18, 0.6, 0.18);
    const leftLeg = new THREE.Mesh(legGeo, pantsMat);
    leftLeg.position.y = -0.3;
    leftLeg.castShadow = true;
    leftLegGroup.add(leftLeg);

    const shoeGeo = new THREE.BoxGeometry(0.19, 0.1, 0.28);
    const leftShoe = new THREE.Mesh(shoeGeo, shoeMat);
    leftShoe.position.set(0, -0.6, 0.05);
    leftLegGroup.add(leftShoe);
    group.add(leftLegGroup);
    group.leftLeg = leftLegGroup;

    // Right Leg Group
    const rightLegGroup = new THREE.Group();
    rightLegGroup.position.set(0.16, 0.65, 0);
    const rightLeg = new THREE.Mesh(legGeo, pantsMat);
    rightLeg.position.y = -0.3;
    rightLeg.castShadow = true;
    rightLegGroup.add(rightLeg);

    const rightShoe = new THREE.Mesh(shoeGeo, shoeMat);
    rightShoe.position.set(0, -0.6, 0.05);
    rightLegGroup.add(rightShoe);
    group.add(rightLegGroup);
    group.rightLeg = rightLegGroup;

    return group;
  }

  /**
   * Creates a procedural 3D teacher NPC mesh with robe, glasses, beard, and math pointer.
   */
  createProceduralTeacher() {
    const group = new THREE.Group();
    group.name = 'TeacherNPC';

    const robeMat = new THREE.MeshLambertMaterial({ color: 0x7209b7 });
    const trimMat = new THREE.MeshLambertMaterial({ color: 0xffb703 });
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xffe0bd });
    const hairMat = new THREE.MeshLambertMaterial({ color: 0xe2e8f0 });
    const woodMat = new THREE.MeshLambertMaterial({ color: 0x8b5a2b });

    // Robe Torso / Gown
    const robeGeo = new THREE.CylinderGeometry(0.35, 0.55, 1.3, 16);
    const robe = new THREE.Mesh(robeGeo, robeMat);
    robe.position.y = 0.85;
    robe.castShadow = true;
    group.add(robe);

    // Golden Stole / Scarf
    const scarfGeo = new THREE.BoxGeometry(0.45, 0.8, 0.38);
    const scarf = new THREE.Mesh(scarfGeo, trimMat);
    scarf.position.set(0, 1.1, 0.05);
    group.add(scarf);

    // Head
    const headGeo = new THREE.SphereGeometry(0.25, 16, 16);
    const head = new THREE.Mesh(headGeo, skinMat);
    head.position.y = 1.65;
    group.add(head);

    // White Beard & Hair
    const beardGeo = new THREE.ConeGeometry(0.18, 0.35, 12);
    const beard = new THREE.Mesh(beardGeo, hairMat);
    beard.rotation.x = Math.PI;
    beard.position.set(0, 1.45, 0.16);
    group.add(beard);

    const hairGeo = new THREE.SphereGeometry(0.27, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.6);
    const hair = new THREE.Mesh(hairGeo, hairMat);
    hair.position.set(0, 1.67, 0);
    group.add(hair);

    // Teacher Hat / Mortarboard
    const capGeo = new THREE.BoxGeometry(0.5, 0.04, 0.5);
    const cap = new THREE.Mesh(capGeo, robeMat);
    cap.position.set(0, 1.88, 0);
    group.add(cap);

    // Math Pointer / Compass Staff
    const staffGeo = new THREE.CylinderGeometry(0.025, 0.025, 1.6, 8);
    const staff = new THREE.Mesh(staffGeo, woodMat);
    staff.position.set(0.48, 0.8, 0.2);
    staff.rotation.z = -0.15;
    group.add(staff);

    // Glowing Golden Compass on Staff Tip
    const tipGeo = new THREE.OctahedronGeometry(0.08);
    const tipMat = new THREE.MeshBasicMaterial({ color: 0xffd166 });
    const tip = new THREE.Mesh(tipGeo, tipMat);
    tip.position.set(0.59, 1.55, 0.2);
    group.add(tip);

    return group;
  }
}
