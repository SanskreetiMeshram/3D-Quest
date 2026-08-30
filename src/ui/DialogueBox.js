/**
 * DialogueBox.js
 * Controls teacher NPC interactive dialogue sequences with typewriter text and E-key advancement.
 */
export class DialogueBox {
  constructor(gameState, audioManager, onComplete) {
    this.gameState = gameState;
    this.audioManager = audioManager;
    this.onComplete = onComplete;

    this.boxEl = document.getElementById('dialogue-box');
    this.textEl = document.getElementById('dialogue-text');
    this.btnNext = document.getElementById('btn-dialogue-next');

    this.dialogueList = [];
    this.currentIndex = 0;
    this.isTyping = false;
    this.typeInterval = null;

    this.init();
  }

  init() {
    this.btnNext?.addEventListener('click', () => {
      this.advance();
    });

    window.addEventListener('keydown', (e) => {
      if (this.gameState.mode === 'DIALOGUE' && e.code === 'KeyE') {
        this.advance();
      }
    });
  }

  startDialogue(dialogueLines) {
    this.dialogueList = dialogueLines || [
      "Welcome to Geometry Academy, young apprentice!",
      "I am Teacher Archimedes. Throughout this campus, you will find 10 specialized Geometry wings.",
      "Step onto the glowing room pedestals to test your knowledge, earn XP, and unlock high-dimensional arenas!",
      "Collect the golden geometric polyhedra scattered around the courtyard for extra bonus tokens.",
      "Explore the grounds, learn the ancient theorems, and become a Master of Geometry Quest 3D!"
    ];

    this.currentIndex = 0;
    this.gameState.setMode('DIALOGUE');
    this.show();
    this.showLine(this.dialogueList[this.currentIndex]);
  }

  showLine(line) {
    if (!this.textEl) return;
    clearInterval(this.typeInterval);
    this.textEl.textContent = '';
    this.isTyping = true;
    let charIdx = 0;

    this.typeInterval = setInterval(() => {
      if (charIdx < line.length) {
        this.textEl.textContent += line[charIdx];
        charIdx++;
      } else {
        clearInterval(this.typeInterval);
        this.isTyping = false;
      }
    }, 20);
  }

  advance() {
    if (this.isTyping) {
      // Instant reveal
      clearInterval(this.typeInterval);
      this.textEl.textContent = this.dialogueList[this.currentIndex];
      this.isTyping = false;
      return;
    }

    this.audioManager.playClick();
    this.currentIndex++;

    if (this.currentIndex < this.dialogueList.length) {
      this.showLine(this.dialogueList[this.currentIndex]);
    } else {
      this.hide();
      this.gameState.setMode('EXPLORATION');
      if (this.onComplete) this.onComplete();
    }
  }

  show() {
    this.boxEl?.classList.remove('hidden');
  }

  hide() {
    clearInterval(this.typeInterval);
    this.boxEl?.classList.add('hidden');
  }
}
