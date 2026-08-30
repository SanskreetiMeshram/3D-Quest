/**
 * DiagramRenderer.js
 * Generates dynamic, high-clarity SVG visual geometry diagrams for quiz questions.
 */
export class DiagramRenderer {
  static render(diagramSpec) {
    if (!diagramSpec || !diagramSpec.type) return '';

    switch (diagramSpec.type) {
      case 'angle':
        return DiagramRenderer.renderAngle(diagramSpec.value || 90, diagramSpec.label || '');
      case 'triangle':
        return DiagramRenderer.renderTriangle(diagramSpec);
      case 'right_triangle':
      case 'pythagoras':
        return DiagramRenderer.renderRightTriangle(diagramSpec);
      case 'rectangle':
        return DiagramRenderer.renderRectangle(diagramSpec);
      case 'circle':
        return DiagramRenderer.renderCircle(diagramSpec);
      case 'grid':
        return DiagramRenderer.renderCoordinateGrid(diagramSpec);
      case 'solid':
        return DiagramRenderer.render3DSolid(diagramSpec.shape || 'cube');
      case 'complementary':
        return DiagramRenderer.renderComplementary(diagramSpec);
      case 'supplementary':
        return DiagramRenderer.renderSupplementary(diagramSpec);
      default:
        return '';
    }
  }

  static renderAngle(deg, label) {
    const rad = (deg * Math.PI) / 180;
    const r = 80;
    const cx = 80, cy = 130;
    const x2 = cx + r * Math.cos(rad);
    const y2 = cy - r * Math.sin(rad);

    return `
      <svg viewBox="0 0 260 160" width="220" height="130" xmlns="http://www.w3.org/2000/svg">
        <line x1="${cx}" y1="${cy}" x2="${cx + 120}" y2="${cy}" stroke="#4cc9f0" stroke-width="4" stroke-linecap="round" />
        <line x1="${cx}" y1="${cy}" x2="${x2}" y2="${y2}" stroke="#f72585" stroke-width="4" stroke-linecap="round" />
        <circle cx="${cx}" cy="${cy}" r="5" fill="#ffb703" />
        ${deg === 90 
          ? `<polyline points="${cx},${cy - 20} ${cx + 20},${cy - 20} ${cx + 20},${cy}" fill="none" stroke="#2ec4b6" stroke-width="3" />`
          : `<path d="M ${cx + 30} ${cy} A 30 30 0 0 0 ${cx + 30 * Math.cos(rad)} ${cy - 30 * Math.sin(rad)}" fill="none" stroke="#ffb703" stroke-width="3" />`
        }
        <text x="${cx + 40}" y="${cy - 35}" fill="#f8f9fa" font-size="16" font-weight="bold" font-family="sans-serif">${label || deg + '°'}</text>
      </svg>
    `;
  }

  static renderTriangle(spec) {
    return `
      <svg viewBox="0 0 240 160" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="120,25 35,135 205,135" fill="rgba(67, 97, 238, 0.25)" stroke="#4cc9f0" stroke-width="4" stroke-linejoin="round" />
        <circle cx="120" cy="25" r="4" fill="#ffb703" />
        <circle cx="35" cy="135" r="4" fill="#ffb703" />
        <circle cx="205" cy="135" r="4" fill="#ffb703" />
        <text x="120" y="18" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">${spec.label || 'A'}</text>
        <text x="20" y="145" fill="#f8f9fa" font-size="14" font-weight="bold">B</text>
        <text x="215" y="145" fill="#f8f9fa" font-size="14" font-weight="bold">C</text>
      </svg>
    `;
  }

  static renderRightTriangle(spec) {
    const a = spec.a || 3;
    const b = spec.b || 4;
    const c = spec.c || 5;

    return `
      <svg viewBox="0 0 240 160" width="220" height="140" xmlns="http://www.w3.org/2000/svg">
        <polygon points="50,30 50,135 190,135" fill="rgba(247, 37, 133, 0.25)" stroke="#f72585" stroke-width="4" stroke-linejoin="round" />
        <!-- Right angle square -->
        <polyline points="50,115 70,115 70,135" fill="none" stroke="#2ec4b6" stroke-width="3" />
        <text x="25" y="85" fill="#4cc9f0" font-size="15" font-weight="bold">${a}</text>
        <text x="115" y="152" fill="#4cc9f0" font-size="15" font-weight="bold">${b}</text>
        <text x="130" y="75" fill="#ffb703" font-size="16" font-weight="bold">c = ${c}</text>
      </svg>
    `;
  }

  static renderRectangle(spec) {
    return `
      <svg viewBox="0 0 240 150" width="220" height="130" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="30" width="160" height="85" rx="4" fill="rgba(46, 196, 182, 0.2)" stroke="#2ec4b6" stroke-width="4" />
        <polyline points="40,45 55,45 55,30" fill="none" stroke="#ffb703" stroke-width="2" />
        <text x="120" y="22" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">Length (L)</text>
        <text x="208" y="78" fill="#f8f9fa" font-size="14" font-weight="bold">Width (W)</text>
      </svg>
    `;
  }

  static renderCircle(spec) {
    return `
      <svg viewBox="0 0 220 160" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
        <circle cx="110" cy="80" r="55" fill="rgba(217, 70, 239, 0.2)" stroke="#d946ef" stroke-width="4" />
        <circle cx="110" cy="80" r="4" fill="#ffb703" />
        <line x1="110" y1="80" x2="165" y2="80" stroke="#ffb703" stroke-width="3" stroke-dasharray="4,2" />
        <text x="135" y="74" fill="#ffb703" font-size="14" font-weight="bold">r</text>
        <text x="110" y="152" fill="#f8f9fa" font-size="13" text-anchor="middle" font-weight="bold">${spec.label || 'Circumference = 2πr'}</text>
      </svg>
    `;
  }

  static renderCoordinateGrid(spec) {
    return `
      <svg viewBox="0 0 220 160" width="200" height="140" xmlns="http://www.w3.org/2000/svg">
        <!-- Grid lines -->
        <line x1="110" y1="10" x2="110" y2="150" stroke="#64748b" stroke-width="3" />
        <line x1="10" y1="80" x2="210" y2="80" stroke="#64748b" stroke-width="3" />
        <!-- Arrows -->
        <polygon points="110,6 106,14 114,14" fill="#64748b" />
        <polygon points="214,80 206,76 206,84" fill="#64748b" />
        <!-- Plotted point -->
        <circle cx="150" cy="45" r="5" fill="#f72585" />
        <text x="156" y="42" fill="#ffb703" font-size="13" font-weight="bold">P(x, y)</text>
        <text x="200" y="96" fill="#94a3b8" font-size="12">X</text>
        <text x="116" y="20" fill="#94a3b8" font-size="12">Y</text>
        <text x="96" y="96" fill="#94a3b8" font-size="12">(0,0)</text>
      </svg>
    `;
  }

  static renderComplementary(spec) {
    return `
      <svg viewBox="0 0 220 150" width="200" height="130" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="120" x2="180" y2="120" stroke="#4cc9f0" stroke-width="4" />
        <line x1="60" y1="120" x2="60" y2="20" stroke="#4cc9f0" stroke-width="4" />
        <line x1="60" y1="120" x2="135" y2="45" stroke="#f72585" stroke-width="3" />
        <polyline points="60,105 75,105 75,120" fill="none" stroke="#2ec4b6" stroke-width="2" />
        <text x="95" y="110" fill="#ffb703" font-size="13" font-weight="bold">∠a</text>
        <text x="70" y="70" fill="#ffb703" font-size="13" font-weight="bold">∠b</text>
        <text x="120" y="20" fill="#f8f9fa" font-size="13" font-weight="bold">a + b = 90°</text>
      </svg>
    `;
  }

  static renderSupplementary(spec) {
    return `
      <svg viewBox="0 0 240 140" width="220" height="120" xmlns="http://www.w3.org/2000/svg">
        <line x1="30" y1="100" x2="210" y2="100" stroke="#4cc9f0" stroke-width="4" />
        <line x1="120" y1="100" x2="80" y2="30" stroke="#f72585" stroke-width="4" />
        <circle cx="120" cy="100" r="4" fill="#ffb703" />
        <text x="65" y="90" fill="#ffb703" font-size="14" font-weight="bold">∠a</text>
        <text x="145" y="90" fill="#2ec4b6" font-size="14" font-weight="bold">∠b</text>
        <text x="120" y="20" fill="#f8f9fa" font-size="14" text-anchor="middle" font-weight="bold">a + b = 180°</text>
      </svg>
    `;
  }

  static render3DSolid(shape) {
    if (shape === 'cylinder') {
      return `
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="100" cy="35" rx="50" ry="18" fill="rgba(59, 130, 246, 0.3)" stroke="#3b82f6" stroke-width="3" />
          <path d="M 50 35 L 50 115 A 50 18 0 0 0 150 115 L 150 35" fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" stroke-width="3" />
          <ellipse cx="100" cy="115" rx="50" ry="18" fill="none" stroke="#3b82f6" stroke-width="2" stroke-dasharray="4,3" />
          <text x="100" y="80" fill="#ffb703" font-size="14" text-anchor="middle" font-weight="bold">V = πr²h</text>
        </svg>
      `;
    } else if (shape === 'cone') {
      return `
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 50,120 150,120" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="3" />
          <ellipse cx="100" cy="120" rx="50" ry="16" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" stroke-width="3" />
          <text x="100" y="85" fill="#ffb703" font-size="13" text-anchor="middle" font-weight="bold">V = (1/3)πr²h</text>
        </svg>
      `;
    } else {
      // Cube isometric wireframe
      return `
        <svg viewBox="0 0 200 160" width="180" height="140" xmlns="http://www.w3.org/2000/svg">
          <polygon points="100,20 155,50 100,80 45,50" fill="rgba(16, 185, 129, 0.3)" stroke="#10b981" stroke-width="3" />
          <polygon points="45,50 100,80 100,140 45,110" fill="rgba(16, 185, 129, 0.2)" stroke="#10b981" stroke-width="3" />
          <polygon points="155,50 100,80 100,140 155,110" fill="rgba(16, 185, 129, 0.4)" stroke="#10b981" stroke-width="3" />
          <text x="100" y="155" fill="#f8f9fa" font-size="13" text-anchor="middle" font-weight="bold">F:6, V:8, E:12</text>
        </svg>
      `;
    }
  }
}
