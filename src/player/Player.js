import * as THREE from 'three';
import { PlayerController } from './PlayerController.js';
import { PlayerAnimation } from './PlayerAnimation.js';

/**
 * Player.js
 * Represents the 3D player entity with physics, controller, collision response, and visual mesh.
 */
export class Player {
  constructor(scene, assetManager, collisionSystem, audioManager) {
    this.scene = scene;
    this.assetManager = assetManager;
    this.collisionSystem = collisionSystem;
    this.audioManager = audioManager;

    this.position = new THREE.Vector3(0, 0, 15); // Spawn in Courtyard
    this.velocity = new THREE.Vector3(0, 0, 0);
    this.targetRotationY = 0;
    this.currentRotationY = 0;

    // Movement tuning
    this.walkSpeed = 7.5;
    this.runSpeed = 12.5;
    this.jumpForce = 9.5;
    this.gravity = -24.0;
    this.isGrounded = true;

    // Setup Mesh & Animation
    this.group = new THREE.Group();
    this.group.position.copy(this.position);
    this.scene.add(this.group);

    this.initMesh();
  }

  initMesh() {
    const glbModel = this.assetManager.getModel('player');
    if (glbModel && glbModel.scene) {
      this.mesh = glbModel.scene;
      this.mesh.scale.set(1, 1, 1);
      this.mesh.traverse(child => {
        if (child.isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
      this.group.add(this.mesh);
      this.animation = new PlayerAnimation(this.mesh, glbModel);
    } else {
      // Create high-detail procedural student character
      this.mesh = this.assetManager.createProceduralPlayer();
      this.group.add(this.mesh);
      this.animation = new PlayerAnimation(this.mesh, null);
    }
  }

  setController(controller) {
    this.controller = controller;
  }

  teleport(pos, rotationY = 0) {
    this.position.copy(pos);
    this.velocity.set(0, 0, 0);
    this.group.position.copy(this.position);
    this.currentRotationY = rotationY;
    this.targetRotationY = rotationY;
    this.group.rotation.y = rotationY;
  }

  update(delta, camera) {
    if (!this.controller) return;

    const moveDir = this.controller.getMoveDirection(camera);
    const isMoving = moveDir.lengthSq() > 0.001;
    const isRunning = this.controller.keys.sprint && isMoving;
    const speed = isRunning ? this.runSpeed : this.walkSpeed;

    // Horizontal Movement
    const deltaPos = new THREE.Vector3();
    if (isMoving) {
      deltaPos.x = moveDir.x * speed * delta;
      deltaPos.z = moveDir.z * speed * delta;

      // Smoothly rotate character mesh towards movement direction
      this.targetRotationY = Math.atan2(moveDir.x, moveDir.z);
    }

    // Smooth rotation interpolation
    let rotDiff = this.targetRotationY - this.currentRotationY;
    // Normalize angle to -PI to PI
    while (rotDiff > Math.PI) rotDiff -= Math.PI * 2;
    while (rotDiff < -Math.PI) rotDiff += Math.PI * 2;
    this.currentRotationY += rotDiff * Math.min(1.0, delta * 14);
    this.group.rotation.y = this.currentRotationY;

    // Jumping & Gravity
    if (this.isGrounded && this.controller.keys.jump) {
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
      if (this.audioManager) {
        this.audioManager.playJump();
      }
    }

    if (!this.isGrounded) {
      this.velocity.y += this.gravity * delta;
    }

    deltaPos.y = this.velocity.y * delta;

    // Resolve wall & floor collisions
    const newPos = this.collisionSystem.resolveMovement(this.position, deltaPos);

    // Ground check
    if (newPos.y <= 0.001) {
      newPos.y = 0;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else {
      this.isGrounded = false;
    }

    this.position.copy(newPos);
    this.group.position.copy(this.position);

    // Update animations
    if (this.animation) {
      this.animation.update(delta, isMoving, isRunning, this.isGrounded);
    }
  }
}
