import * as THREE from 'three';

/**
 * PlayerController.js
 * Captures keyboard inputs, gamepad, and touch controls for third-person player navigation.
 */
export class PlayerController {
  constructor(camera) {
    this.camera = camera;
    this.keys = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      sprint: false,
      jump: false,
      interact: false
    };

    this.touchVector = new THREE.Vector2(0, 0);
    this.isTouchActive = false;

    this.onInteractCallback = null;
    this.onPauseCallback = null;
    this.onTopicsCallback = null;

    this.initListeners();
    this.initTouchControls();
  }

  initListeners() {
    window.addEventListener('keydown', (e) => {
      this.handleKeyDown(e);
    });

    window.addEventListener('keyup', (e) => {
      this.handleKeyUp(e);
    });
  }

  handleKeyDown(e) {
    // Prevent default scroll behavior for arrow keys & space
    if (['Space', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.code)) {
      e.preventDefault();
    }

    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = true;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = true;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = true;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = true;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.sprint = true;
        break;
      case 'Space':
        this.keys.jump = true;
        break;
      case 'KeyE':
        if (!this.keys.interact && this.onInteractCallback) {
          this.onInteractCallback();
        }
        this.keys.interact = true;
        break;
      case 'Escape':
        if (this.onPauseCallback) {
          this.onPauseCallback();
        }
        break;
      case 'KeyM':
        if (this.onTopicsCallback) {
          this.onTopicsCallback();
        }
        break;
    }
  }

  handleKeyUp(e) {
    switch (e.code) {
      case 'KeyW':
      case 'ArrowUp':
        this.keys.forward = false;
        break;
      case 'KeyS':
      case 'ArrowDown':
        this.keys.backward = false;
        break;
      case 'KeyA':
      case 'ArrowLeft':
        this.keys.left = false;
        break;
      case 'KeyD':
      case 'ArrowRight':
        this.keys.right = false;
        break;
      case 'ShiftLeft':
      case 'ShiftRight':
        this.keys.sprint = false;
        break;
      case 'Space':
        this.keys.jump = false;
        break;
      case 'KeyE':
        this.keys.interact = false;
        break;
    }
  }

  initTouchControls() {
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    const mobileUI = document.getElementById('mobile-controls');
    if (isTouch && mobileUI) {
      mobileUI.classList.remove('hidden');
      const joystickZone = document.getElementById('joystick-zone');
      const joystickThumb = document.getElementById('joystick-thumb');

      let startX = 0, startY = 0;
      const maxRadius = 40;

      joystickZone.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const rect = joystickZone.getBoundingClientRect();
        startX = rect.left + rect.width / 2;
        startY = rect.top + rect.height / 2;
        this.isTouchActive = true;
      }, { passive: false });

      joystickZone.addEventListener('touchmove', (e) => {
        if (!this.isTouchActive) return;
        const touch = e.touches[0];
        let dx = touch.clientX - startX;
        let dy = touch.clientY - startY;
        const dist = Math.hypot(dx, dy);

        if (dist > maxRadius) {
          dx = (dx / dist) * maxRadius;
          dy = (dy / dist) * maxRadius;
        }

        joystickThumb.style.transform = `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))`;
        this.touchVector.set(dx / maxRadius, dy / maxRadius);
        e.preventDefault();
      }, { passive: false });

      const resetJoystick = () => {
        this.isTouchActive = false;
        this.touchVector.set(0, 0);
        joystickThumb.style.transform = 'translate(-50%, -50%)';
      };

      joystickZone.addEventListener('touchend', resetJoystick);
      joystickZone.addEventListener('touchcancel', resetJoystick);

      const btnJump = document.getElementById('btn-mobile-jump');
      const btnInteract = document.getElementById('btn-mobile-interact');

      if (btnJump) {
        btnJump.addEventListener('touchstart', () => { this.keys.jump = true; });
        btnJump.addEventListener('touchend', () => { this.keys.jump = false; });
      }
      if (btnInteract) {
        btnInteract.addEventListener('touchstart', () => {
          if (this.onInteractCallback) this.onInteractCallback();
        });
      }
    }
  }

  /**
   * Returns a normalized move direction vector in world space, calculated relative to camera angle.
   * @param {THREE.Camera} camera 
   * @returns {THREE.Vector3}
   */
  getMoveDirection(camera) {
    const moveDir = new THREE.Vector3();
    let moveForward = 0;
    let moveRight = 0;

    if (this.keys.forward) moveForward += 1;
    if (this.keys.backward) moveForward -= 1;
    if (this.keys.right) moveRight += 1;
    if (this.keys.left) moveRight -= 1;

    // Add touch joystick input
    if (this.isTouchActive) {
      moveRight += this.touchVector.x;
      moveForward -= this.touchVector.y;
    }

    if (moveForward === 0 && moveRight === 0) {
      return moveDir;
    }

    // Get camera horizontal forward & right vectors
    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(camera.up, forward).negate().normalize();

    moveDir.addScaledVector(forward, moveForward);
    moveDir.addScaledVector(right, moveRight);
    moveDir.normalize();

    return moveDir;
  }
}
