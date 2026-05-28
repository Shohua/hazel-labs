/* ═══════════════════════════════════════════════════════════════
   HAZEL LABS — animations.js
   Hero canvas · Problem convergence · PIML neural network
═══════════════════════════════════════════════════════════════ */

/* ─── UTILITY ─────────────────────────────────────────────── */
function dpr() { return Math.min(window.devicePixelRatio || 1, 2); }

function resizeHD(canvas) {
  const d = dpr();
  const w = canvas.offsetWidth;
  const h = canvas.offsetHeight;
  if (canvas.width !== w * d || canvas.height !== h * d) {
    canvas.width  = w * d;
    canvas.height = h * d;
    const ctx = canvas.getContext('2d');
    ctx.scale(d, d);
    return true;
  }
  return false;
}

/* ═══════════════════════════════════════════════════════════
   HERO CANVAS
═══════════════════════════════════════════════════════════ */
(function initHero() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, particles, frame = 0, animId;

  function makeParticles() {
    particles = Array.from({ length: 80 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.25,
      r:  Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.25 + 0.05,
      pulse: Math.random() * Math.PI * 2,
    }));
  }

  function resize() {
    const d = dpr();
    W = canvas.offsetWidth;
    H = canvas.offsetHeight;
    canvas.width  = W * d;
    canvas.height = H * d;
    ctx.scale(d, d);
    makeParticles();
  }

  function draw() {
    animId = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    frame += 0.006;

    particles.forEach((p, i) => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

      const pulse = (Math.sin(frame * 1.2 + p.pulse) + 1) / 2;

      // Connection lines
      for (let j = i + 1; j < particles.length; j++) {
        const q = particles[j];
        const dx = q.x - p.x, dy = q.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          const a = (1 - dist / 120) * 0.08;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(79,201,232,${a})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }

      // Particle dot
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r * (0.8 + pulse * 0.4), 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79,201,232,${p.alpha * (0.5 + pulse * 0.5)})`;
      ctx.fill();
    });

    // Subtle center glow
    const grad = ctx.createRadialGradient(W * 0.35, H * 0.45, 0, W * 0.35, H * 0.45, Math.min(W, H) * 0.5);
    grad.addColorStop(0, `rgba(59,124,244,0.04)`);
    grad.addColorStop(1, 'rgba(0,0,0,0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
})();

/* ═══════════════════════════════════════════════════════════
   PROBLEM CANVAS — Convergence Map
   Visualizes:
   - Traditional: erratic, looping, high error paths
   - ML: smoother but bouncing around
   - PIML: rapid convergence with physics filtering
═══════════════════════════════════════════════════════════ */
(function initProblem() {
  const canvas = document.getElementById('problem-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, frame = 0, animId;

  /* Paths: each path is a series of [x,y] in 0–1 coords */
  const TRAD_COLOR = 'rgba(245,158,11,';
  const ML_COLOR   = 'rgba(59,124,244,';
  const PIML_COLOR = 'rgba(79,201,232,';

  // Traditional: many iterations, erratic
  function makeTradPath() {
    const pts = [[0.05, 0.9]];
    let x = 0.05, y = 0.9;
    for (let i = 0; i < 60; i++) {
      const progress = i / 60;
      x = Math.min(0.95, x + 0.008 + Math.random() * 0.018);
      // erratic y — fails to converge
      y = y + (Math.random() - 0.5) * 0.18 - progress * 0.003;
      y = Math.max(0.05, Math.min(0.95, y));
      pts.push([x, y]);
    }
    // End up NOT converging cleanly
    return pts;
  }

  // ML: smoother but still needs many iterations
  function makeMLPath() {
    const pts = [[0.05, 0.85]];
    let x = 0.05, y = 0.85;
    for (let i = 0; i < 45; i++) {
      const progress = i / 45;
      x = Math.min(0.95, x + 0.012 + Math.random() * 0.012);
      y = y + (0.15 - y) * 0.06 + (Math.random() - 0.5) * 0.08;
      y = Math.max(0.05, Math.min(0.95, y));
      pts.push([x, y]);
    }
    return pts;
  }

  // PIML: quick direct convergence
  function makePIMLPath() {
    const pts = [[0.05, 0.8]];
    let x = 0.05, y = 0.8;
    for (let i = 0; i < 20; i++) {
      const progress = i / 20;
      x = Math.min(0.95, x + 0.045 + Math.random() * 0.008);
      y = y + (0.15 - y) * 0.35 + (Math.random() - 0.5) * 0.02;
      y = Math.max(0.08, Math.min(0.9, y));
      pts.push([x, y]);
    }
    return pts;
  }

  const TRAD_PATHS = Array.from({ length: 3 }, makeTradPath);
  const ML_PATHS   = Array.from({ length: 2 }, makeMLPath);
  const PIML_PATHS = Array.from({ length: 2 }, makePIMLPath);

  const TARGET = { x: 0.88, y: 0.15 }; // convergence goal

  function resize() {
    const d = dpr();
    W = canvas.offsetWidth;
    H = canvas.offsetHeight || 440;
    canvas.style.height = H + 'px';
    canvas.width  = W * d;
    canvas.height = H * d;
    ctx.scale(d, d);
  }

  function drawPath(pts, color, progress, lineW = 1.2) {
    const len = Math.floor(pts.length * progress);
    if (len < 2) return;
    ctx.beginPath();
    ctx.moveTo(pts[0][0] * W, pts[0][1] * H);
    for (let i = 1; i < len; i++) {
      ctx.lineTo(pts[i][0] * W, pts[i][1] * H);
    }
    ctx.strokeStyle = color + '0.6)';
    ctx.lineWidth = lineW;
    ctx.stroke();

    // Dot at front
    if (len > 0) {
      const p = pts[len - 1];
      ctx.beginPath();
      ctx.arc(p[0] * W, p[1] * H, 3, 0, Math.PI * 2);
      ctx.fillStyle = color + '1)';
      ctx.fill();
    }
  }

  function draw() {
    animId = requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    frame += 0.004;
    const t = frame % 1; // 0..1 loop

    // Target zone
    const tx = TARGET.x * W, ty = TARGET.y * H;
    const outerR = 36;
    const pulse = (Math.sin(frame * 3) + 1) / 2;
    ctx.beginPath();
    ctx.arc(tx, ty, outerR + pulse * 8, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(52,199,123,0.12)';
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(tx, ty, 18, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(52,199,123,${0.3 + pulse * 0.3})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(tx, ty, 6, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(52,199,123,${0.6 + pulse * 0.3})`;
    ctx.fill();

    // Grid lines (very subtle)
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 1; i < 5; i++) {
      ctx.beginPath(); ctx.moveTo(W * i / 5, 0); ctx.lineTo(W * i / 5, H); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(0, H * i / 5); ctx.lineTo(W, H * i / 5); ctx.stroke();
    }

    // Axis label
    ctx.fillStyle = 'rgba(79,80,106,0.6)';
    ctx.font = `9px DM Mono, monospace`;
    ctx.textAlign = 'left';
    ctx.fillText('ERROR', 8, H - 8);
    ctx.save(); ctx.translate(8, H * 0.6); ctx.rotate(-Math.PI / 2);
    ctx.fillText('ITERACIONES', 0, 0); ctx.restore();

    // Progress for each type
    const progTrad = Math.min(1, t * 1.0);
    const progML   = Math.min(1, t * 1.2);
    const progPIML = Math.min(1, t * 2.0);

    // Draw paths
    TRAD_PATHS.forEach((p, i) => drawPath(p, TRAD_COLOR, progTrad));
    ML_PATHS  .forEach((p, i) => drawPath(p, ML_COLOR,   progML,   1.4));
    PIML_PATHS.forEach((p, i) => drawPath(p, PIML_COLOR, progPIML, 1.8));

    // Legend
    const legendX = 14, legendY = 16;
    const items = [
      { color: TRAD_COLOR, label: 'Tradicional', lw: 1.2 },
      { color: ML_COLOR,   label: 'ML puro',     lw: 1.4 },
      { color: PIML_COLOR, label: 'PIML',         lw: 1.8 },
    ];
    items.forEach(({ color, label, lw }, i) => {
      const ly = legendY + i * 18;
      ctx.beginPath();
      ctx.moveTo(legendX, ly + 4);
      ctx.lineTo(legendX + 22, ly + 4);
      ctx.strokeStyle = color + '0.9)';
      ctx.lineWidth = lw;
      ctx.stroke();
      ctx.fillStyle = 'rgba(139,150,168,0.7)';
      ctx.font = '9px DM Mono, monospace';
      ctx.textAlign = 'left';
      ctx.fillText(label, legendX + 28, ly + 8);
    });

    // Target label
    ctx.fillStyle = 'rgba(52,199,123,0.7)';
    ctx.font = '9px DM Mono, monospace';
    ctx.textAlign = 'left';
    ctx.fillText('SOLUCIÓN ÓPTIMA', tx + 12, ty - 4);
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
})();

/* ═══════════════════════════════════════════════════════════
   CONVERGENCE CANVAS (Section 02)
   Animated error reduction chart for the comparison section
═══════════════════════════════════════════════════════════ */
(function initConvergence() {
  const canvas = document.getElementById('convergence-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, frame = 0;

  // Error functions over iterations 0..1
  function errTrad(x)  { return 0.95 - 0.4 * x + 0.25 * Math.sin(x * Math.PI * 6) * (1 - x * 0.5); }
  function errML(x)    { return 0.85 - 0.55 * x + 0.1 * Math.sin(x * Math.PI * 3) * (1 - x * 0.7); }
  function errPIML(x)  { return 0.88 * Math.exp(-x * 5) + 0.04 + 0.02 * Math.sin(x * 10) * Math.exp(-x * 6); }

  function resize() {
    const d = dpr();
    W = canvas.offsetWidth;
    H = 260;
    canvas.style.height = H + 'px';
    canvas.width  = W * d;
    canvas.height = H * d;
    ctx.scale(d, d);
  }

  function drawCurve(fn, color, animProgress, lineW = 1.5, fill = false) {
    const PAD = 40;
    const IW = W - PAD * 2, IH = H - PAD * 2;
    const N = 120;

    ctx.beginPath();
    for (let i = 0; i <= N * animProgress; i++) {
      const t = i / N;
      const x = PAD + t * IW;
      const y = PAD + (1 - fn(t)) * IH;
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    if (fill) {
      const t2 = N * animProgress / N;
      ctx.lineTo(PAD + t2 * IW, PAD + IH);
      ctx.lineTo(PAD, PAD + IH);
      ctx.closePath();
      ctx.fillStyle = color.replace('1)', '0.04)');
      ctx.fill();
      ctx.beginPath();
      for (let i = 0; i <= N * animProgress; i++) {
        const t = i / N;
        const x = PAD + t * IW;
        const y = PAD + (1 - fn(t)) * IH;
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
    }

    ctx.strokeStyle = color;
    ctx.lineWidth = lineW;
    ctx.lineJoin = 'round';
    ctx.stroke();
  }

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    frame += 0.004;

    const PAD = 40;
    const IW = W - PAD * 2, IH = H - PAD * 2;

    // Grid
    ctx.strokeStyle = 'rgba(255,255,255,0.03)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = PAD + (i / 4) * IH;
      ctx.beginPath(); ctx.moveTo(PAD, y); ctx.lineTo(PAD + IW, y); ctx.stroke();
    }
    for (let i = 0; i <= 5; i++) {
      const x = PAD + (i / 5) * IW;
      ctx.beginPath(); ctx.moveTo(x, PAD); ctx.lineTo(x, PAD + IH); ctx.stroke();
    }

    // Axes labels
    ctx.fillStyle = 'rgba(79,80,106,0.5)';
    ctx.font = '9px DM Mono, monospace';
    ctx.textAlign = 'right';
    ['HIGH', '', '', '', 'LOW'].forEach((l, i) => {
      ctx.fillText(l, PAD - 6, PAD + (i / 4) * IH + 4);
    });
    ctx.textAlign = 'center';
    ['0', '20', '40', '60', '80', '100'].forEach((l, i) => {
      ctx.fillText(l, PAD + (i / 5) * IW, PAD + IH + 14);
    });

    // Axis lines
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(PAD, PAD); ctx.lineTo(PAD, PAD + IH); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(PAD, PAD + IH); ctx.lineTo(PAD + IW, PAD + IH); ctx.stroke();

    const anim = Math.min(1, (frame % 2) / 1.2);

    drawCurve(errTrad, 'rgba(245,158,11,0.7)',  anim, 1.5, true);
    drawCurve(errML,   'rgba(59,124,244,0.8)',   anim, 1.8, true);
    drawCurve(errPIML, 'rgba(79,201,232,0.95)',  anim, 2.2, true);

    // Axis titles
    ctx.fillStyle = 'rgba(139,150,168,0.4)';
    ctx.font = '9px DM Mono, monospace';
    ctx.textAlign = 'center';
    ctx.fillText('ITERACIONES', PAD + IW / 2, H - 4);
    ctx.save();
    ctx.translate(10, PAD + IH / 2);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('ERROR', 0, 0);
    ctx.restore();
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
})();

/* ═══════════════════════════════════════════════════════════
   PIML CANVAS — Neural Network with Physics Nodes
═══════════════════════════════════════════════════════════ */
(function initPIML() {
  const canvas = document.getElementById('piml-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, frame = 0;

  function resize() {
    const d = dpr();
    W = canvas.offsetWidth;
    H = canvas.offsetHeight || 520;
    canvas.style.height = H + 'px';
    canvas.width  = W * d;
    canvas.height = H * d;
    ctx.scale(d, d);
  }

  // Build network layout
  function buildNet() {
    const layerDef = [3, 5, 3, 5, 2]; // neurons per layer
    const physLayerIdx = 2;
    const PAD = 0.12;
    const layerXs = layerDef.map((_, i) => PAD + (i / (layerDef.length - 1)) * (1 - PAD * 2));

    const layers = layerDef.map((count, li) => {
      return Array.from({ length: count }, (_, ni) => ({
        x: layerXs[li],
        y: 0.15 + (ni / (count - 1 || 1)) * 0.7,
        layer: li,
        isPhys: li === physLayerIdx,
      }));
    });

    const edges = [];
    for (let li = 0; li < layers.length - 1; li++) {
      layers[li].forEach(a => {
        layers[li + 1].forEach(b => edges.push({ a, b }));
      });
    }

    const physNodes = [
      { label: '∇T', x: 0.12, y: 0.22 },
      { label: 'ΔH', x: 0.12, y: 0.5 },
      { label: 'σ', x:  0.12, y: 0.78 },
    ];

    return { layers, edges, physNodes };
  }

  const { layers, edges, physNodes } = buildNet();

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    frame += 0.012;

    // Edges
    edges.forEach(({ a, b }) => {
      const ax = a.x * W, ay = a.y * H;
      const bx = b.x * W, by = b.y * H;
      const pulse = (Math.sin(frame * 1.5 + ax * 0.01 + by * 0.01) + 1) / 2;

      const grad = ctx.createLinearGradient(ax, ay, bx, by);
      const alpha = 0.06 + pulse * 0.1;
      grad.addColorStop(0, `rgba(79,201,232,${alpha})`);
      grad.addColorStop(0.5, `rgba(59,124,244,${alpha * 1.6})`);
      grad.addColorStop(1, `rgba(79,201,232,${alpha})`);

      ctx.beginPath();
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.strokeStyle = grad;
      ctx.lineWidth = 0.8;
      ctx.stroke();

      // Signal dot
      const t = ((frame * 0.3 + ax * 0.002 + by * 0.002) % 1);
      const tx = ax + (bx - ax) * t;
      const ty2 = ay + (by - ay) * t;
      ctx.beginPath();
      ctx.arc(tx, ty2, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79,201,232,${0.3 + pulse * 0.4})`;
      ctx.fill();
    });

    // Neurons
    layers.forEach((layer, li) => {
      layer.forEach((n, ni) => {
        const nx = n.x * W, ny = n.y * H;
        const pulse = (Math.sin(frame * 2 + li * 0.5 + ni * 0.9) + 1) / 2;
        const r = n.isPhys ? 9 : 7;

        // Glow
        const glow = ctx.createRadialGradient(nx, ny, 0, nx, ny, r * 3.5);
        const glowAlpha = n.isPhys ? 0.18 : 0.08;
        const glowColor = n.isPhys ? '79,201,232' : '59,124,244';
        glow.addColorStop(0, `rgba(${glowColor},${glowAlpha * (0.6 + pulse * 0.4)})`);
        glow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(nx, ny, r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // Node
        ctx.beginPath();
        ctx.arc(nx, ny, r, 0, Math.PI * 2);
        const fillAlpha = n.isPhys ? 0.35 + pulse * 0.35 : 0.25 + pulse * 0.3;
        const stroke    = n.isPhys ? `rgba(79,201,232,${0.5 + pulse * 0.3})` : `rgba(59,124,244,${0.4 + pulse * 0.3})`;
        ctx.fillStyle   = n.isPhys ? `rgba(79,201,232,${fillAlpha * 0.5})` : `rgba(59,124,244,${fillAlpha * 0.5})`;
        ctx.fill();
        ctx.strokeStyle = stroke;
        ctx.lineWidth   = n.isPhys ? 1.5 : 1;
        ctx.stroke();
      });
    });

    // Physics constraint nodes on left
    physNodes.forEach(pn => {
      const nx = (pn.x + 0.04) * W, ny = pn.y * H;
      const pulse = (Math.sin(frame * 2.2 + ny * 0.01) + 1) / 2;

      ctx.beginPath();
      ctx.arc(nx, ny, 20, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(79,201,232,${0.25 + pulse * 0.35})`;
      ctx.lineWidth = 1.2;
      ctx.stroke();
      ctx.fillStyle = `rgba(5,20,35,0.92)`;
      ctx.fill();

      ctx.fillStyle = `rgba(79,201,232,${0.8 + pulse * 0.2})`;
      ctx.font = 'bold 13px DM Mono, monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(pn.label, nx, ny);
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'left';

      // Connector line to first layer
      const firstLayer0 = layers[0][0];
      ctx.beginPath();
      ctx.moveTo(nx + 20, ny);
      ctx.lineTo(firstLayer0.x * W - 8, firstLayer0.y * H);
      ctx.strokeStyle = `rgba(79,201,232,${0.08 + pulse * 0.07})`;
      ctx.lineWidth = 0.8;
      ctx.setLineDash([3, 5]);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // Layer labels
    const labels = ['INPUT', 'HIDDEN', 'PHYS', 'HIDDEN', 'OUTPUT'];
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';
    layers.forEach((layer, li) => {
      const lx = layer[0].x * W;
      ctx.fillStyle = li === 2 ? 'rgba(79,201,232,0.35)' : 'rgba(255,255,255,0.15)';
      ctx.font = '8px DM Mono, monospace';
      ctx.fillText(labels[li] || '', lx, H - 8);
    });
    ctx.textAlign = 'left';
    ctx.textBaseline = 'alphabetic';
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
})();
