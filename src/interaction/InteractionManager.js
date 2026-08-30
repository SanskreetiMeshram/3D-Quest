import * as THREE from 'three';

/**
 * InteractionManager.js
 * Evaluates player proximity to NPCs, terminals, and doors, rendering UI prompts and dispatching interactions.
 */
export class InteractionManager {
  constructor(world, gameState, audioManager) {
    this.world = world;
    this.gameState = gameState;
    this.audioManager = audioManager;

    this.promptEl = document.getElementById('interaction-prompt');
    this.promptTextEl = document.getElementById('interaction-text');

    this.currentInteractable = null;
    this.onInteractTriggered = null;

    if (this.promptEl) {
      this.promptEl.addEventListener('click', () => {
        this.triggerInteraction();
      });
    }
  }

  update(playerPos) {
    if (this.gameState.mode !== 'EXPLORATION') {
      this.hidePrompt();
      this.currentInteractable = null;
      return;
    }

    let nearest = null;
    let minDist = Infinity;

    // Check Teacher NPC proximity
    if (this.world.teacherNPC) {
      const dist = playerPos.distanceTo(this.world.teacherNPC.position);
      if (dist < this.world.teacherNPC.radius && dist < minDist) {
        minDist = dist;
        nearest = {
          type: 'npc',
          name: this.world.teacherNPC.name,
          label: 'TALK TO TEACHER ARCHIMEDES',
          target: this.world.teacherNPC
        };
      }
    }

    // Check Room Challenge Terminals proximity
    if (this.world.terminals && this.world.terminals.length > 0) {
      this.world.terminals.forEach((term) => {
        // Calculate world position
        const termPos = new THREE.Vector3();
        term.group.getWorldPosition(termPos);
        const dist = playerPos.distanceTo(termPos);

        if (dist < term.radius && dist < minDist) {
          minDist = dist;
          const isUnlocked = this.gameState.topicStats[term.topicId]?.unlocked;
          nearest = {
            type: 'terminal',
            topicId: term.topicId,
            topicName: term.topicName,
            isUnlocked,
            label: isUnlocked ? `ENTER ${term.topicName.toUpperCase()}` : `LOCKED (${term.topicName})`,
            target: term
          };
        }
      });
    }

    if (nearest) {
      this.currentInteractable = nearest;
      this.showPrompt(nearest.label);
    } else {
      this.currentInteractable = null;
      this.hidePrompt();
    }
  }

  showPrompt(text) {
    if (this.promptTextEl) this.promptTextEl.textContent = text;
    if (this.promptEl) this.promptEl.classList.remove('hidden');
  }

  hidePrompt() {
    if (this.promptEl) this.promptEl.classList.add('hidden');
  }

  triggerInteraction() {
    if (!this.currentInteractable) return;

    if (this.audioManager) {
      this.audioManager.playClick();
    }

    if (this.onInteractTriggered) {
      this.onInteractTriggered(this.currentInteractable);
    }
  }
}
