/* ═══════════════════════════════════════════════════════════════
   HAZEL LABS — network.js
   Validation network canvas — Section 05
═══════════════════════════════════════════════════════════════ */
(function initNetwork() {
  const canvas = document.getElementById('network-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let W, H, frame = 0;

  /* Updated partner list per brief */
  const NODES = [
    { id: 0,  label: 'HAZEL LABS',   sub: 'Motor PIML',            x: 0.50, y: 0.50, r: 34, color: '#4fc9e8', main: true },
    { id: 1,  label: 'DICTUC',       sub: 'NCh146 · NCh853',       x: 0.20, y: 0.22, r: 19, color: '#3b7cf4' },
    { id: 2,  label: 'IDIEM',        sub: 'Ensayos físicos',        x: 0.78, y: 0.20, r: 19, color: '#3b7cf4' },
    { id: 3,  label: 'INN',          sub: 'Normalización',          x: 0.82, y: 0.60, r: 17, color: '#3b7cf4' },
    { id: 4,  label: 'Startup Lab 01', sub: 'Prototipado · Pilotaje', x: 0.18, y: 0.72, r: 17, color: '#3b7cf4' },
    { id: 5,  label: 'CChC',         sub: 'Cámara Construcción',    x: 0.50, y: 0.12, r: 15, color: '#34c77b' },
    { id: 6,  label: 'SOVIQUIM',     sub: 'Distribuidor',           x: 0.14, y: 0.44, r: 14, color: '#34c77b' },
    { id: 7,  label: 'Knauf Chile',  sub: 'Cliente piloto activo',  x: 0.68, y: 0.82, r: 14, color: '#34c77b' },
    { id: 8,  label: 'Cementeras',   sub: 'Cbb · Melón · Polpaico', x: 0.35, y: 0.84, r: 13, color: '#f59e0b' },
    { id: 9,  label: 'Net Zero 2050',sub: 'Hoja Ruta Chile',        x: 0.86, y: 0.40, r: 12, color: '#34c77b' },
    { id: 10, label: 'ASTM C-518',   sub: 'Norma térmica',          x: 0.64, y: 0.08, r: 10, color: '#8b96a8' },
  ];

  const EDGES = [
    [0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],
    [1,4],[1,5],[2,3],[2,10],[5,8],[5,10],[6,8],[7,8],[3,9],
  ];

  function resize() {
    const d = Math.min(window.devicePixelRatio || 1, 2);
    W = canvas.offsetWidth;
    H = canvas.offsetHeight || 520;
    canvas.style.height = H + 'px';
    canvas.width  = W * d;
    canvas.height = H * d;
    ctx.scale(d, d);
  }

  function draw() {
    requestAnimationFrame(draw);
    ctx.clearRect(0, 0, W, H);
    frame += 0.007;

    // Edges
    EDGES.forEach(([ai, bi]) => {
      const a = NODES[ai], b = NODES[bi];
      const ax = a.x * W, ay = a.y * H;
      const bx = b.x * W, by = b.y * H;
      const pulse = (Math.sin(frame * 1.8 + ai * 0.4 + bi * 0.3) + 1) / 2;
      const alpha = 0.06 + pulse * 0.10;

      const grad = ctx.createLinearGradient(ax, ay, bx, by);
      grad.addColorStop(0, `rgba(79,201,232,${alpha})`);
      grad.addColorStop(0.5, `rgba(59,124,244,${alpha * 1.5})`);
      grad.addColorStop(1, `rgba(79,201,232,${alpha})`);
      ctx.beginPath();
      ctx.moveTo(ax, ay); ctx.lineTo(bx, by);
      ctx.strokeStyle = grad;
      ctx.lineWidth = a.main || b.main ? 1.2 : 0.7;
      ctx.stroke();

      // Traveling signal
      const t = ((frame * 0.28 + ai * 0.09 + bi * 0.07) % 1);
      ctx.beginPath();
      ctx.arc(ax + (bx - ax) * t, ay + (by - ay) * t, 2, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(79,201,232,${0.35 + pulse * 0.4})`;
      ctx.fill();
    });

    // Nodes
    NODES.forEach(n => {
      const nx = n.x * W, ny = n.y * H;
      const pulse = (Math.sin(frame * 1.4 + n.id * 0.8) + 1) / 2;

      // Outer aura ring
      ctx.beginPath();
      ctx.arc(nx, ny, n.r + 10 + pulse * 5, 0, Math.PI * 2);
      ctx.strokeStyle = n.color + '18';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Node fill
      const grd = ctx.createRadialGradient(nx, ny, 0, nx, ny, n.r);
      grd.addColorStop(0, n.color + '44');
      grd.addColorStop(1, n.color + '0c');
      ctx.beginPath();
      ctx.arc(nx, ny, n.r, 0, Math.PI * 2);
      ctx.fillStyle = grd;
      ctx.fill();
      ctx.strokeStyle = n.color + (n.main ? 'cc' : '55');
      ctx.lineWidth = n.main ? 1.6 : 1;
      ctx.stroke();

      // Label inside
      ctx.fillStyle = n.main ? 'rgba(255,255,255,0.95)' : 'rgba(255,255,255,0.75)';
      ctx.font = `${n.main ? 400 : 300} ${n.main ? 11 : 10}px DM Sans, sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(n.label, nx, ny - (n.sub ? 2 : 0));

      // Sub-label below node
      if (n.sub) {
        ctx.fillStyle = 'rgba(255,255,255,0.28)';
        ctx.font = '8px DM Mono, monospace';
        ctx.fillText(n.sub, nx, ny + n.r + 13);
      }

      ctx.textAlign = 'left';
      ctx.textBaseline = 'alphabetic';
    });
  }

  resize();
  draw();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 120);
  });
})();
