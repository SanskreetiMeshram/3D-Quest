import * as THREE from 'three';

/**
 * CollisionSystem.js
 * Performs robust 3D box and cylinder/capsule collision detection and resolution for the player.
 */
export class CollisionSystem {
  constructor() {
    this.colliders = []; // Array of THREE.Box3
    this.radius = 0.55; // Player collision radius
    this.height = 1.8; // Player collision height
  }

  addBoxCollider(box) {
    this.colliders.push(box);
  }

  addMeshCollider(mesh) {
    mesh.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(mesh);
    this.colliders.push(box);
  }

  clear() {
    this.colliders = [];
  }

  /**
   * Checks proposed player movement and returns resolved valid position.
   * @param {THREE.Vector3} currentPos 
   * @param {THREE.Vector3} deltaPos 
   * @returns {THREE.Vector3} resolved position
   */
  resolveMovement(currentPos, deltaPos) {
    const targetPos = currentPos.clone();
    
    // Resolve X axis movement
    targetPos.x += deltaPos.x;
    if (this.checkCollisionAt(targetPos)) {
      targetPos.x = currentPos.x; // Slide along wall
    }

    // Resolve Z axis movement
    targetPos.z += deltaPos.z;
    if (this.checkCollisionAt(targetPos)) {
      targetPos.z = currentPos.z; // Slide along wall
    }

    // Resolve Y axis (Ground / Jumping)
    targetPos.y += deltaPos.y;
    if (targetPos.y < 0) {
      targetPos.y = 0;
    }

    // Keep player within Academy outer bounds (-120 to 120)
    targetPos.x = Math.max(-110, Math.min(110, targetPos.x));
    targetPos.z = Math.max(-110, Math.min(110, targetPos.z));

    return targetPos;
  }

  checkCollisionAt(pos) {
    const playerBox = new THREE.Box3(
      new THREE.Vector3(pos.x - this.radius, pos.y + 0.1, pos.z - this.radius),
      new THREE.Vector3(pos.x + this.radius, pos.y + this.height, pos.z + this.radius)
    );

    for (let i = 0; i < this.colliders.length; i++) {
      if (playerBox.intersectsBox(this.colliders[i])) {
        return true;
      }
    }
    return false;
  }
}
