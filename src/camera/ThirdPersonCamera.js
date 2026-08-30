import * as THREE from 'three';

/**
 * ThirdPersonCamera.js
 * Implements a modern third-person adventure camera with orbit controls, wall clipping avoidance, and smooth damping.
 */
export class ThirdPersonCamera {
  constructor(camera, target, domElement) {
    this.camera = camera;
    this.target = target; // Player entity
    this.domElement = domElement;

    // Orbit parameters
    this.yaw = 0; // Horizontal rotation
    this.pitch = 0.28; // Vertical elevation angle (~16 degrees)
    this.distance = 6.0;
    this.minDistance = 2.0;
    this.maxDistance = 11.0;
    this.targetDistance = 6.0;

    // Pitch limits (radians)
    this.minPitch = -0.1; // Don't look too far under ground
    this.maxPitch = 1.1; // ~63 degrees max top-down

    // Smoothing & interpolation
    this.currentPosition = new THREE.Vector3();
    this.currentLookAt = new THREE.Vector3();
    this.heightOffset = 1.4; // Target shoulder/head height

    // Mouse drag state
    this.isDragging = false;
    this.prevMouseX = 0;
    this.prevMouseY = 0;

    this.initControls();
  }

  initControls() {
    // Mouse drag orbit
    this.domElement.addEventListener('mousedown', (e) => {
      // Allow left click or right click drag to orbit
      this.isDragging = true;
      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mousemove', (e) => {
      if (!this.isDragging) return;
      const dx = e.clientX - this.prevMouseX;
      const dy = e.clientY - this.prevMouseY;

      this.yaw -= dx * 0.005;
      this.pitch += dy * 0.005;

      this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));

      this.prevMouseX = e.clientX;
      this.prevMouseY = e.clientY;
    });

    window.addEventListener('mouseup', () => {
      this.isDragging = false;
    });

    // Touch orbit for mobile devices
    let touchStartX = 0;
    let touchStartY = 0;
    this.domElement.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    this.domElement.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1) {
        const dx = e.touches[0].clientX - touchStartX;
        const dy = e.touches[0].clientY - touchStartY;

        // Orbit if touch is on right half of screen
        if (touchStartX > window.innerWidth * 0.35) {
          this.yaw -= dx * 0.006;
          this.pitch += dy * 0.006;
          this.pitch = Math.max(this.minPitch, Math.min(this.maxPitch, this.pitch));
        }

        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    }, { passive: true });

    // Mouse wheel zoom
    this.domElement.addEventListener('wheel', (e) => {
      this.targetDistance += e.deltaY * 0.005;
      this.targetDistance = Math.max(this.minDistance, Math.min(this.maxDistance, this.targetDistance));
    }, { passive: true });
  }

  reset() {
    this.yaw = 0;
    this.pitch = 0.28;
    this.targetDistance = 6.0;
  }

  update(delta, colliders = []) {
    if (!this.target || !this.target.position) return;

    // Smooth zoom interpolation
    this.distance += (this.targetDistance - this.distance) * Math.min(1.0, delta * 8.0);

    const targetPos = this.target.position.clone();
    const lookAtTarget = new THREE.Vector3(
      targetPos.x,
      targetPos.y + this.heightOffset,
      targetPos.z
    );

    // Calculate ideal camera offset based on spherical coordinates
    const horizontalDist = this.distance * Math.cos(this.pitch);
    const verticalDist = this.distance * Math.sin(this.pitch);

    const idealCamPos = new THREE.Vector3(
      targetPos.x + horizontalDist * Math.sin(this.yaw),
      targetPos.y + this.heightOffset + verticalDist,
      targetPos.z + horizontalDist * Math.cos(this.yaw)
    );

    // Prevent camera from clipping through ground
    if (idealCamPos.y < 0.6) {
      idealCamPos.y = 0.6;
    }

    // Raycast / sphere collision check to prevent clipping into walls
    let actualDistance = this.distance;
    const rayDir = idealCamPos.clone().sub(lookAtTarget).normalize();
    const ray = new THREE.Ray(lookAtTarget, rayDir);

    if (colliders && colliders.length > 0) {
      for (const box of colliders) {
        const intersection = new THREE.Vector3();
        if (ray.intersectBox(box, intersection)) {
          const hitDist = lookAtTarget.distanceTo(intersection) - 0.4;
          if (hitDist > 0.5 && hitDist < actualDistance) {
            actualDistance = hitDist;
          }
        }
      }
    }

    const resolvedCamPos = new THREE.Vector3(
      targetPos.x + (actualDistance * Math.cos(this.pitch)) * Math.sin(this.yaw),
      targetPos.y + this.heightOffset + (actualDistance * Math.sin(this.pitch)),
      targetPos.z + (actualDistance * Math.cos(this.pitch)) * Math.cos(this.yaw)
    );
    if (resolvedCamPos.y < 0.6) resolvedCamPos.y = 0.6;

    // Smooth camera damping
    this.currentPosition.lerp(resolvedCamPos, Math.min(1.0, delta * 12.0));
    this.currentLookAt.lerp(lookAtTarget, Math.min(1.0, delta * 12.0));

    this.camera.position.copy(this.currentPosition);
    this.camera.lookAt(this.currentLookAt);
  }
}
