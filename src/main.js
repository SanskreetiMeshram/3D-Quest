import './style.css';
import { Game } from './game/Game.js';

/**
 * main.js
 * Application entry point for Geometry Quest 3D.
 */
window.addEventListener('DOMContentLoaded', () => {
  const game = new Game();
  game.start().catch((err) => {
    console.error('Fatal initialization error in Geometry Quest 3D:', err);
  });
});
