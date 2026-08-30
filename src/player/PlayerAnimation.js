import * as THREE from 'three';

/**
 * PlayerAnimation.js
 * Controls character animation blending between Idle, Walk, Run, and Jump for both GLTF and procedural characters.
 */
export class PlayerAnimation {
  constructor(mesh, gltfData = null) {
    this.mesh = mesh;
    this.gltfData = gltfData;
    this.mixer = null;
    this.actions = {};
    this.currentAction = null;
    this.state = 'idle'; // 'idle' | 'walk' | 'run' | 'jump'
    this.animTime = 0;

    if (gltfData && gltfData.animations && gltfData.animations.length > 0) {
      this.initGltfAnimations();
    }
  }

  initGltfAnimations() {
    this.mixer = new THREE.AnimationMixer(this.mesh);
    this.gltfData.animations.forEach((clip) => {
      const name = clip.name.toLowerCase();
      const action = this.mixer.clipAction(clip);
      if (name.includes('idle')) this.actions.idle = action;
      else if (name.includes('run')) this.actions.run = action;
      else if (name.includes('walk')) this.actions.walk = action;
      else if (name.includes('jump')) this.actions.jump = action;
      else {
        // Fallback mapping
        if (!this.actions.idle) this.actions.idle = action;
      }
    });

    if (this.actions.idle) {
      this.actions.idle.play();
      this.currentAction = this.actions.idle;
    }
  }

  setState(newState) {
    if (this.state === newState) return;
    this.state = newState;

    if (this.mixer) {
      const targetAction = this.actions[newState] || this.actions.idle;
      if (targetAction && targetAction !== this.currentAction) {
        if (this.currentAction) {
          this.currentAction.fadeOut(0.2);
        }
        targetAction.reset().fadeIn(0.2).play();
        this.currentAction = targetAction;
      }
    }
  }

  update(delta, isMoving, isRunning, isGrounded) {
    if (this.mixer) {
      this.mixer.update(delta);
    }

    // Determine state
    if (!isGrounded) {
      this.setState('jump');
    } else if (isMoving) {
      this.setState(isRunning ? 'run' : 'walk');
    } else {
      this.setState('idle');
    }

    // Procedural animation for fallback character mesh
    if (this.mesh.leftArm && this.mesh.rightArm && this.mesh.leftLeg && this.mesh.rightLeg) {
      this.updateProceduralBones(delta, isMoving, isRunning, isGrounded);
    }
  }

  updateProceduralBones(delta, isMoving, isRunning, isGrounded) {
    const speedMultiplier = isRunning ? 16 : 10;

    if (isMoving && isGrounded) {
      this.animTime += delta * speedMultiplier;
      const swing = Math.sin(this.animTime);

      // Swing limbs in counter-phase
      this.mesh.leftLeg.rotation.x = swing * (isRunning ? 0.8 : 0.5);
      this.mesh.rightLeg.rotation.x = -swing * (isRunning ? 0.8 : 0.5);

      this.mesh.leftArm.rotation.x = -swing * (isRunning ? 0.8 : 0.5);
      this.mesh.rightArm.rotation.x = swing * (isRunning ? 0.8 : 0.5);

      // Slight body bounce & tilt
      this.mesh.position.y = Math.abs(Math.sin(this.animTime * 2)) * (isRunning ? 0.08 : 0.04);
      this.mesh.rotation.z = Math.sin(this.animTime) * 0.04;
    } else if (!isGrounded) {
      // Jump pose
      this.mesh.leftLeg.rotation.x = 0.5;
      this.mesh.rightLeg.rotation.x = -0.3;
      this.mesh.leftArm.rotation.x = -0.9;
      this.mesh.rightArm.rotation.x = -0.9;
      this.mesh.rotation.z = 0;
    } else {
      // Idle breathing oscillation
      this.animTime += delta * 2.5;
      const breathe = Math.sin(this.animTime);
      this.mesh.leftArm.rotation.x = breathe * 0.05;
      this.mesh.rightArm.rotation.x = -breathe * 0.05;
      this.mesh.leftLeg.rotation.x = 0;
      this.mesh.rightLeg.rotation.x = 0;
      this.mesh.position.y = breathe * 0.02;
      this.mesh.rotation.z = 0;
    }
  }
}
