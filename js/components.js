/* ============================================
SiteForge - Scripts de componentes (generado automáticamente)
============================================ */

/* Scripts de componentes (index.html) */
try {
var items = document.querySelectorAll('#ivua0k');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){

        (function() {
          var header = this;
          if (header && header.classList && header.classList.contains('sticky')) {
            window.addEventListener('scroll', function() {
              header.classList.toggle('header-scrolled', window.scrollY > 50);
            });
          }
        })();
      
}.bind(items[i]))();
          }
          var items = document.querySelectorAll('#it8sk');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){

  var root = this;
  var win = (root.ownerDocument && root.ownerDocument.defaultView) || window;
  if (root.__sfHP && root.__sfHP.destroy) root.__sfHP.destroy();
  var cv = root.querySelector('canvas');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d');

  var reduced = !!(win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches);
  var fine = !!(win.matchMedia && win.matchMedia('(pointer: fine)').matches);

  function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
  function rnd(a, b) { return a + Math.random() * (b - a); }
  function ease(p) { return 1 - Math.pow(1 - p, 3); }
  function attr(name, def, a, b) {
    var v = parseFloat(root.getAttribute(name));
    if (isNaN(v)) v = def;
    return clamp(v, a, b);
  }

  // Convierte cualquier color CSS valido (#abc, #aabbcc, rgb(), nombre) a [r,g,b]
  // usando un canvas auxiliar: si el valor es invalido se queda el por defecto.
  var pcx = root.ownerDocument.createElement('canvas').getContext('2d');
  function parseCol(str, def) {
    pcx.fillStyle = def;
    pcx.fillStyle = str || def;
    var v = String(pcx.fillStyle);
    if (v.charAt(0) === '#') {
      return [parseInt(v.slice(1, 3), 16), parseInt(v.slice(3, 5), 16), parseInt(v.slice(5, 7), 16)];
    }
    var a = v.slice(v.indexOf('(') + 1, v.indexOf(')')).split(',');
    return [parseFloat(a[0]), parseFloat(a[1]), parseFloat(a[2])];
  }
  function rgba(c, a) { return 'rgba(' + Math.round(c[0]) + ',' + Math.round(c[1]) + ',' + Math.round(c[2]) + ',' + a + ')'; }
  function mixCol(a, b, t) { return [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t, a[2] + (b[2] - a[2]) * t]; }

  // Linea de tiempo (segundos): la 1a palabra se forma hasta ~2.6 s; luego
  // cada ciclo = pausa (hold) + escalonado (stagger) + viaje (morph).
  var INTRO_END = 2.6;

  var W = 800, H = 600, dpr = 1, cy = 216, N = 0, nW = 1;
  var glow = 1, hold = 2.4, morph = 1.1, stagger = 0.7, loopOn = true;
  var mix = 0.38, size = 1, arcK = 1, repel = 1, radius = 80, parK = 1, twk = 1, starK = 1;
  var col1s = '#a9a2ff', col2s = '#62e9e0', starCol = '#a8c4ff', haloC = [110, 100, 255];
  var bgA = '', bgB = '', bgC = '', blend = 'lighter';
  var parts = [], stars = [], lod = 0, slow = 0, nfr = 0;
  var mx = 0, my = 0, tx = 0, ty = 0, px = -9999, py = -9999;
  // reduced-motion: tiempo fijo y grande para que el cuadro quede en la 1a palabra ya formada
  var el = reduced ? 60 : 0, last = 0, raf = 0, visible = true, dead = false;
  // Forma 3D de apertura (ver makeShape/drawShape)
  var shapeId = 'none', shapeT = 4, spinK = 1, aberK = 1, edgeK = 1, gridK = 1, depthK = 0.18;
  var wordsOn = true;
  var sv = null, se = null, sf = null, scap = null, sCum = null, sTot = 0, spx = null, spy = null, spz = null;
  var c1v = [169, 162, 255], c2v = [98, 233, 224], ecol = [225, 240, 255], dark = true;
  var camS = { a: 1, b: 0, c: 1, d: 0 }, camG = { a: 1, b: 0, c: 1, d: 0 };
  var scaleS = 160, pj = [0, 0, 1, 0], pj2 = [0, 0, 1, 0], pp = [0, 0, 1, 0];

  // Lee los parametros "en caliente" (no reconstruye ni reinicia nada).
  function readParams() {
    glow = attr('data-glow', 1, 0, 2);
    hold = attr('data-hold', 2.4, 0.5, 10);
    morph = attr('data-morph', 1.1, 0.3, 4);
    stagger = attr('data-stagger', 0.7, 0, 2);
    loopOn = root.getAttribute('data-loop') !== '0';
    mix = attr('data-mix', 0.38, 0, 1);
    size = attr('data-size', 1, 0.4, 3);
    arcK = attr('data-arc', 1, 0, 2);
    repel = attr('data-repel', 1, 0, 3);
    radius = attr('data-radius', 80, 30, 200);
    parK = attr('data-parallax', 1, 0, 3);
    twk = attr('data-twinkle', 1, 0, 2);
    starK = attr('data-stars', 1, 0, 2);
    var shp = String(root.getAttribute('data-shape') || 'none').trim();
    shapeId = (shp === 'x' || shp === 'cube' || shp === 'ring' || shp === 'image') ? shp : 'none';
    shapeT = attr('data-shape-time', 4, 3, 12);
    spinK = attr('data-spin', 1, 0, 3);
    aberK = attr('data-aberr', 1, 0, 2);
    edgeK = attr('data-edge', 1, 0, 2);
    gridK = attr('data-grid', 1, 0, 2);
    depthK = attr('data-depth', 0.18, 0.05, 0.6);
    var c1 = parseCol(root.getAttribute('data-color1'), '#a9a2ff');
    var c2 = parseCol(root.getAttribute('data-color2'), '#62e9e0');
    var b1 = parseCol(root.getAttribute('data-bg1'), '#1a1648');
    var b2 = parseCol(root.getAttribute('data-bg2'), '#04040c');
    haloC = parseCol(root.getAttribute('data-halo'), '#6e64ff');
    col1s = rgba(c1, 1); col2s = rgba(c2, 1);
    c1v = c1; c2v = c2;
    bgA = rgba(b1, 0.95); bgB = rgba(mixCol(b1, b2, 0.8), 0.98); bgC = rgba(b2, 1);
    // fondo claro: la mezcla aditiva ('lighter') no se veria, se usa la normal
    var lum = (0.299 * (b1[0] + b2[0]) + 0.587 * (b1[1] + b2[1]) + 0.114 * (b1[2] + b2[2])) / 510;
    blend = lum > 0.55 ? 'source-over' : 'lighter';
    starCol = lum > 0.55 ? col1s : '#a8c4ff';
    dark = lum <= 0.55;
    // aristas: casi blancas sobre fondo oscuro; oscuras sobre fondo claro (si no, no se verian)
    ecol = dark ? mixCol(c1, [255, 255, 255], 0.8) : mixCol(c1, [0, 0, 0], 0.55);
  }

  // ---- Tipo de letra ----
  // La palabra se dibuja en un canvas y se leen sus pixeles: si la fuente elegida
  // aun no esta cargada en ESTE documento, el navegador dibuja con la de respaldo y
  // las particulas formarian otra letra. Por eso se espera a que cargue antes de
  // construir. El @font-face lo aporta el CSS (pagina exportada) o el editor
  // (inyectado al cargar el canvas, ver heroFonts.ts), asi que en el editor puede
  // tardar unos ms en existir: si fonts.load() no encuentra la familia, se reintenta.
  var SYS_FAM = '"Segoe UI", system-ui, -apple-system, Arial, sans-serif';
  var fontDone = '', fseq = 0;
  function fontName() {
    return String(root.getAttribute('data-font') || '').replace(/["']/g, '').trim().slice(0, 40);
  }
  function famStack() { var f = fontName(); return f ? '"' + f + '", ' + SYS_FAM : SYS_FAM; }
  function ensureFont(cb) {
    var f = fontName(), doc = root.ownerDocument, mine = ++fseq;
    if (!f || !doc.fonts || !doc.fonts.load || fontDone === f) { cb(false); return; }
    var spec = '800 100px "' + f + '"', tries = 0, done = false;
    // Si la fuente tarda mas de 3 s se construye con la de respaldo para no dejar el
    // hero vacio, pero se SIGUE esperando: cuando llegue se reconstruye (ver 'late').
    var tm = win.setTimeout(finish, 3000);
    function finish() {
      if (done) return;
      done = true;
      win.clearTimeout(tm);
      if (mine !== fseq || dead) return;
      cb(true);
    }
    function late() {
      build();
      if (reduced) frame(0); else replay();
    }
    function attempt() {
      if (mine !== fseq || dead) return;
      doc.fonts.load(spec, 'ABCÁÉÑ').then(function (list) {
        if (mine !== fseq || dead) return;
        if (list && list.length) { fontDone = f; if (done) late(); else finish(); }
        else if (++tries < 8) win.setTimeout(attempt, 350);
        else finish();
      }, function () { finish(); });
    }
    attempt();
  }
  // Reconstruye los destinos cuando la fuente este lista (waited = hubo que esperarla).
  function rebuildThen(fn) {
    ensureFont(function (waited) { build(); fn(waited); });
  }

  // ---- Forma 3D de apertura ----
  // Geometria propia (sin librerias ni WebGL): vertices en 3D, rotacion + perspectiva a
  // mano y dibujo con canvas 2D. Las aristas se pintan 3 veces: una copia desplazada a
  // la izquierda en rojo, otra a la derecha en cian (aberracion cromatica, que crece al
  // mover el mouse) y la principal blanca con halo.
  function setCam(c, yw, pt) { c.a = Math.cos(yw); c.b = Math.sin(yw); c.c = Math.cos(pt); c.d = Math.sin(pt); }
  function project(c, x, y, z, o) {
    var x1 = x * c.a + z * c.b, z1 = -x * c.b + z * c.a;
    var y1 = y * c.c - z1 * c.d, z2 = y * c.d + z1 * c.c;
    var k = 3.1 / (3.1 + z2);
    o[0] = W / 2 + x1 * k * scaleS; o[1] = cy + y1 * k * scaleS; o[2] = k; o[3] = z2;
  }
  // Topologia de un paralelepipedo: el bit (4|2|1) de cada indice dice de que lado va
  function cubeTopo(v) {
    var e = [], f = [], i, j, bits = [4, 2, 1];
    for (i = 0; i < 8; i++) for (j = i + 1; j < 8; j++) { var df = i ^ j; if (df === 1 || df === 2 || df === 4) e.push([i, j]); }
    for (var b = 0; b < 3; b++) for (var val = 0; val < 2; val++) {
      var o1 = bits[(b + 1) % 3], o2 = bits[(b + 2) % 3], base = val ? bits[b] : 0;
      f.push([base, base | o1, base | o1 | o2, base | o2]);
    }
    return { v: v, e: e, f: f };
  }
  function addSolid(S, t) {
    var off = S.v.length, i;
    for (i = 0; i < t.v.length; i++) S.v.push(t.v[i]);
    for (i = 0; i < t.e.length; i++) S.e.push([t.e[i][0] + off, t.e[i][1] + off]);
    for (i = 0; i < t.f.length; i++) S.f.push([t.f[i][0] + off, t.f[i][1] + off, t.f[i][2] + off, t.f[i][3] + off]);
    return off;
  }
  function boxSolid(S, ux, uy, hl, hw, ht) {
    var n = Math.sqrt(ux * ux + uy * uy), v = [], i;
    ux /= n; uy /= n;
    for (i = 0; i < 8; i++) {
      var sa = (i & 4) ? 1 : -1, sb = (i & 2) ? 1 : -1, sc = (i & 1) ? 1 : -1;
      v.push([ux * hl * sa - uy * hw * sb, uy * hl * sa + ux * hw * sb, ht * sc]);
    }
    addSolid(S, cubeTopo(v));
  }
  function cubeVerts(h) {
    var v = [], i;
    for (i = 0; i < 8; i++) v.push([(i & 4) ? h : -h, (i & 2) ? h : -h, (i & 1) ? h : -h]);
    return v;
  }
  // data-shape-path: bucles separados por | y puntos por espacio, cada uno x,y (enteros en
  // [-500, 500]). Sin regex a proposito (este codigo vive dentro de un template literal).
  function parsePath() {
    var raw = String(root.getAttribute('data-shape-path') || '').trim();
    if (!raw || raw.length > 20000) return null;
    var lps = raw.split('|'), out = [], total = 0;
    for (var a = 0; a < lps.length && out.length < 16; a++) {
      var ps = lps[a].trim().split(' '), pts = [];
      for (var b = 0; b < ps.length; b++) {
        var xy = ps[b].split(',');
        var x = parseInt(xy[0], 10), y = parseInt(xy[1], 10);
        if (isNaN(x) || isNaN(y)) continue;
        pts.push([clamp(x, -600, 600) / 500, clamp(y, -600, 600) / 500]);
      }
      if (pts.length >= 3) { out.push(pts); total += pts.length; }
      if (total > 700) break;
    }
    return out.length ? out : null;
  }
  function makeShape(id) {
    var S = { v: [], e: [], f: [] }, i, j;
    if (id === 'x') {
      boxSolid(S, 1, 1, 1.12, 0.09, 0.09);
      boxSolid(S, 1, -1, 1.12, 0.09, 0.09);
    } else if (id === 'cube') {
      var o = addSolid(S, cubeTopo(cubeVerts(0.62)));
      var q = addSolid(S, cubeTopo(cubeVerts(0.3)));
      for (i = 0; i < 8; i++) S.e.push([o + i, q + i]);
    } else if (id === 'ring') {
      var M = 28, K = 8, R = 0.85, rr = 0.3, m, k;
      for (m = 0; m < M; m++) for (k = 0; k < K; k++) {
        var th = m / M * 6.2832, ph = k / K * 6.2832;
        S.v.push([(R + rr * Math.cos(ph)) * Math.cos(th), (R + rr * Math.cos(ph)) * Math.sin(th), rr * Math.sin(ph)]);
      }
      for (m = 0; m < M; m++) for (k = 0; k < K; k++) {
        S.e.push([m * K + k, m * K + (k + 1) % K]);
        S.e.push([m * K + k, ((m + 1) % M) * K + k]);
      }
    } else if (id === 'image') {
      // contorno del SVG extruido: capa frontal y trasera + aristas que las unen + caras laterales
      var lp = parsePath();
      if (!lp) return null;
      var RI = 0.95, th = depthK, li, n2, fl, bl, jj, k2;
      S.caps = [[], []];
      for (li = 0; li < lp.length; li++) {
        n2 = lp[li].length; fl = []; bl = [];
        for (jj = 0; jj < n2; jj++) { S.v.push([lp[li][jj][0] * RI, lp[li][jj][1] * RI, -th]); fl.push(S.v.length - 1); }
        for (jj = 0; jj < n2; jj++) { S.v.push([lp[li][jj][0] * RI, lp[li][jj][1] * RI, th]); bl.push(S.v.length - 1); }
        for (jj = 0; jj < n2; jj++) {
          k2 = (jj + 1) % n2;
          S.e.push([fl[jj], fl[k2]]); S.e.push([bl[jj], bl[k2]]); S.e.push([fl[jj], bl[jj]]);
          S.f.push([fl[jj], fl[k2], bl[k2], bl[jj]]);
        }
        S.caps[0].push(fl); S.caps[1].push(bl);
      }
    } else return null;
    return S;
  }
  // Prepara vertices, aristas, caras y la tabla de longitudes (para repartir las particulas
  // sobre las aristas en proporcion a su largo: sin esto las aristas cortas se llenarian igual).
  function buildShape() {
    var S = shapeId === 'none' ? null : makeShape(shapeId);
    if (!S || !S.v.length) { sv = null; se = null; sf = null; scap = null; sCum = null; sTot = 0; return; }
    sv = S.v; se = S.e; sf = S.f; scap = S.caps || null;
    sCum = []; sTot = 0;
    for (var i = 0; i < se.length; i++) {
      var a = sv[se[i][0]], b = sv[se[i][1]];
      sTot += Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]) + (a[2] - b[2]) * (a[2] - b[2]));
      sCum.push(sTot);
    }
    spx = new Float32Array(sv.length); spy = new Float32Array(sv.length); spz = new Float32Array(sv.length);
  }
  function samplePoint() {
    var r = Math.random() * sTot, lo = 0, hi = sCum.length - 1;
    while (lo < hi) { var mid = (lo + hi) >> 1; if (sCum[mid] < r) lo = mid + 1; else hi = mid; }
    var e = se[lo], a = sv[e[0]], b = sv[e[1]], t = Math.random(), j = 0.012;
    return [a[0] + (b[0] - a[0]) * t + rnd(-j, j), a[1] + (b[1] - a[1]) * t + rnd(-j, j), a[2] + (b[2] - a[2]) * t + rnd(-j, j)];
  }
  function strokeEdges(dx, color, lw, blur) {
    ctx.strokeStyle = color; ctx.lineWidth = lw; ctx.shadowColor = color; ctx.shadowBlur = blur;
    ctx.beginPath();
    for (var i = 0; i < se.length; i++) {
      var e = se[i];
      ctx.moveTo(spx[e[0]] + dx, spy[e[0]]); ctx.lineTo(spx[e[1]] + dx, spy[e[1]]);
    }
    ctx.stroke(); ctx.shadowBlur = 0;
  }
  // Rejilla de piso en perspectiva (camara propia: solo reacciona al mouse, no gira con la forma)
  function drawGrid(alpha) {
    var a = alpha * 0.1 * gridK, i, j;
    setCam(camG, mx * 0.1, 0.03 + my * 0.04);
    ctx.lineWidth = 1;
    for (i = -8; i <= 8; i++) {
      project(camG, i * 0.55, 1.75, -1.4, pj); project(camG, i * 0.55, 1.75, 4.2, pj2);
      ctx.strokeStyle = rgba(c1v, a);
      ctx.beginPath(); ctx.moveTo(pj[0], pj[1]); ctx.lineTo(pj2[0], pj2[1]); ctx.stroke();
    }
    for (j = 0; j <= 12; j++) {
      var gz = -1.4 + j * 0.47 + ((el * 0.35) % 0.47);
      project(camG, -4.4, 1.75, gz, pj); project(camG, 4.4, 1.75, gz, pj2);
      ctx.strokeStyle = rgba(c1v, a * clamp(1 - j / 12, 0, 1) * 1.6);
      ctx.beginPath(); ctx.moveTo(pj[0], pj[1]); ctx.lineTo(pj2[0], pj2[1]); ctx.stroke();
    }
  }
  function drawShape(alpha) {
    var i, n = sv.length;
    for (i = 0; i < n; i++) { project(camS, sv[i][0], sv[i][1], sv[i][2], pj); spx[i] = pj[0]; spy[i] = pj[1]; spz[i] = pj[3]; }
    // caras translucidas, las lejanas primero (se omiten si el equipo va lento)
    if (sf.length && lod === 0) {
      var order = [], fi, f;
      for (fi = 0; fi < sf.length; fi++) { f = sf[fi]; order.push([fi, (spz[f[0]] + spz[f[1]] + spz[f[2]] + spz[f[3]]) / 4]); }
      order.sort(function (u, v) { return v[1] - u[1]; });
      for (fi = 0; fi < order.length; fi++) {
        f = sf[order[fi][0]];
        var sh = clamp(1 - (order[fi][1] + 1.2) / 2.8, 0, 1);
        if (sf.length > 40) {
          // muchas caras (imagen): color plano, un degradado por cara por cuadro seria demasiado costoso
          ctx.fillStyle = rgba(mixCol(c1v, c2v, 0.5), (0.05 + 0.15 * sh) * alpha);
        } else {
          var g = ctx.createLinearGradient(spx[f[0]], spy[f[0]], spx[f[2]], spy[f[2]]);
          g.addColorStop(0, rgba(c1v, (0.06 + 0.16 * sh) * alpha));
          g.addColorStop(1, rgba(c2v, (0.05 + 0.14 * sh) * alpha));
          ctx.fillStyle = g;
        }
        ctx.beginPath();
        ctx.moveTo(spx[f[0]], spy[f[0]]); ctx.lineTo(spx[f[1]], spy[f[1]]);
        ctx.lineTo(spx[f[2]], spy[f[2]]); ctx.lineTo(spx[f[3]], spy[f[3]]);
        ctx.closePath(); ctx.fill();
      }
      if (scap) {
        // tapas frontal y trasera; 'evenodd' deja los huecos (la O de un logo, etc.) sin rellenar
        ctx.fillStyle = rgba(mixCol(c1v, c2v, 0.5), 0.1 * alpha);
        for (var cp = 0; cp < 2; cp++) {
          ctx.beginPath();
          for (var lq = 0; lq < scap[cp].length; lq++) {
            var cl = scap[cp][lq];
            ctx.moveTo(spx[cl[0]], spy[cl[0]]);
            for (var cu = 1; cu < cl.length; cu++) ctx.lineTo(spx[cl[cu]], spy[cl[cu]]);
            ctx.closePath();
          }
          ctx.fill('evenodd');
        }
      }
    }
    if (edgeK <= 0) return;
    var ea = alpha * edgeK, ab = (2.6 + 2.4 * Math.abs(mx)) * aberK;
    if (aberK > 0 && lod < 2) {
      strokeEdges(-ab, rgba([255, 60, 110], clamp(0.55 * ea, 0, 1)), 1.4, 0);
      strokeEdges(ab, rgba([60, 230, 255], clamp(0.55 * ea, 0, 1)), 1.4, 0);
    }
    strokeEdges(0, rgba(ecol, clamp(0.9 * ea, 0, 1)), Math.max(1, scaleS * 0.008), lod ? 0 : scaleS * 0.14 * edgeK * dpr);
  }

  // Lee data-text ("PALABRA1|PALABRA2|..."), dibuja cada palabra fuera de
  // pantalla y convierte cada punto con tinta en un destino de particula.
  function build() {
    var density = attr('data-density', 1, 0.3, 2);
    // la forma se construye primero: sin forma valida las palabras son obligatorias (si no,
    // el hero quedaria vacio); con forma, data-words=0 las oculta y queda solo la forma 3D
    buildShape();
    wordsOn = !sv || root.getAttribute('data-words') !== '0';
    var raw = String(root.getAttribute('data-text') || 'TU MARCA').split('|');
    // data-case: upper (por defecto) | lower | asis (tal como se escribio)
    var cm = String(root.getAttribute('data-case') || 'upper').trim();
    var list = [];
    for (var w = 0; w < raw.length && list.length < 6; w++) {
      var t = raw[w].trim().slice(0, 20);
      t = cm === 'lower' ? t.toLowerCase() : (cm === 'asis' ? t : t.toUpperCase());
      if (t) list.push(t);
    }
    if (!list.length) list.push('TU MARCA');
    if (!wordsOn) list = [];
    nW = list.length || 1;

    var oc = root.ownerDocument.createElement('canvas');
    var ow = 1000, oh = 300;
    oc.width = ow; oc.height = oh;
    var ox = oc.getContext('2d');
    var fam = famStack();
    var area = clamp((W * H) / (1280 * 720), 0.45, 1);
    var sets = [], maxPts = 0, wi;
    for (wi = 0; wi < list.length; wi++) {
      var fs = 200;
      ox.clearRect(0, 0, ow, oh);
      ox.font = '800 ' + fs + 'px ' + fam;
      var mw = ox.measureText(list[wi]).width;
      if (mw > ow - 60) {
        fs = Math.floor(fs * (ow - 60) / mw);
        ox.font = '800 ' + fs + 'px ' + fam;
        mw = ox.measureText(list[wi]).width;
      }
      ox.fillStyle = '#fff'; ox.textAlign = 'center'; ox.textBaseline = 'middle';
      ox.fillText(list[wi], ow / 2, oh / 2);
      var data = ox.getImageData(0, 0, ow, oh).data;
      var pts = [];
      for (var y = 0; y < oh; y += 3) {
        for (var x = 0; x < ow; x += 3) {
          if (data[(y * ow + x) * 4 + 3] > 128) pts.push([x - ow / 2, y - oh / 2]);
        }
      }
      if (!pts.length) pts.push([0, 0]);
      sets.push({ pts: pts, s: Math.min(1.25, (W * 0.84) / Math.max(1, mw)) });
      if (pts.length > maxPts) maxPts = pts.length;
    }

    N = wordsOn ? Math.min(maxPts, Math.round(3600 * density * area)) : Math.round(3600 * density * area);
    parts = [];
    for (var i = 0; i < N; i++) {
      var tg = [];
      for (wi = 0; wi < sets.length; wi++) {
        var st = sets[wi], m = st.pts.length;
        var pt = st.pts[Math.min(m - 1, Math.floor(i * m / N))];
        // si la palabra tiene menos puntos que particulas, se reutilizan con un pequeno desvio
        var jit = m < N ? 1.4 : 0;
        tg.push([W / 2 + (pt[0] + rnd(-jit, jit)) * st.s, cy + (pt[1] + rnd(-jit, jit)) * st.s]);
      }
      if (!tg.length) tg.push([W / 2, cy]); // sin palabras: destino de relleno (no se usa)
      var z = rnd(-1, 1);
      parts.push({
        x0: W / 2 + (Math.random() - 0.5) * W * 1.5,
        y0: H / 2 + (Math.random() - 0.5) * H * 1.5,
        tg: tg, sh: sv ? samplePoint() : null, arcx: rnd(-1, 1), arcy: rnd(-1, 1),
        z: z, r: rnd(0.7, 1.7) * (0.85 + 0.25 * z),
        lag: Math.random(), ph: rnd(0, 6.283), u: Math.random(),
        dx: 0, dy: 0, vx: 0, vy: 0
      });
    }
    // se generan estrellas para el maximo (starK = 2); se dibuja una fraccion en caliente
    stars = [];
    var ns = Math.round(240 * area);
    for (i = 0; i < ns; i++) stars.push([Math.random() * W, Math.random() * H, rnd(0.3, 1.2), rnd(0, 6.283)]);
  }

  function layout() {
    var r = root.getBoundingClientRect();
    W = Math.max(200, r.width); H = Math.max(200, r.height);
    dpr = Math.min(W < 600 ? 1.5 : 2, win.devicePixelRatio || 1);
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    cy = H * 0.36;
    rebuildThen(function (waited) {
      if (reduced) frame(0);
      // la 1a construccion espero a la fuente: la intro arranca ahora, no mientras cargaba
      else if (waited) { el = 0; last = 0; request(); }
    });
  }

  function frame(step) {
    var i;
    mx += (tx - mx) * 0.06; my += (ty - my) * 0.06;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 1;
    var bg = ctx.createRadialGradient(W / 2, cy, 0, W / 2, cy, Math.max(W, H) * 0.8);
    bg.addColorStop(0, bgA);
    bg.addColorStop(0.45, bgB);
    bg.addColorStop(1, bgC);
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);

    // 'lighter' suma los colores donde se superponen: de ahi sale el brillo
    ctx.globalCompositeOperation = blend;
    var intro = ease(clamp(el / 2.0, 0, 1));
    var formed = ease(clamp((el - 1.4) / 1.6, 0, 1));

    // palabra actual y siguiente segun el tiempo (en reduced-motion: 1a palabra fija)
    // con forma 3D: la forma ocupa [0, shapeT]; luego las particulas viajan a la 1a palabra
    // (escalonado + viaje) y recien ahi empieza la pausa y el ciclo normal de palabras
    var shapeOn = !!sv && (!reduced || !wordsOn);
    var tEnd = shapeOn && wordsOn ? shapeT + stagger + morph : 0;
    var from = 0, to = 0, loc = 0;
    var m0 = reduced ? -1 : el - ((shapeOn ? tEnd : INTRO_END) + hold);
    if (nW > 1 && m0 >= 0) {
      var per = hold + stagger + morph;
      var k = Math.floor(m0 / per);
      if (!loopOn && k >= nW - 1) {
        from = nW - 1; to = nW - 1;
      } else {
        loc = m0 - k * per;
        from = k % nW; to = (k + 1) % nW;
      }
    }

    var nStars = Math.floor(stars.length * clamp(starK / 2, 0, 1));
    ctx.fillStyle = starCol;
    for (i = 0; i < nStars; i++) {
      var sr = stars[i];
      ctx.globalAlpha = clamp((0.10 + 0.14 * Math.sin(el * 1.3 + sr[3])) * intro, 0, 1);
      ctx.beginPath();
      ctx.arc(sr[0] + mx * 6 * sr[2], sr[1] + my * 4 * sr[2], sr[2], 0, 6.2832);
      ctx.fill();
    }

    var hg = ctx.createRadialGradient(W / 2, cy, 0, W / 2, cy, W * 0.42);
    hg.addColorStop(0, rgba(haloC, 0.16 * glow * formed));
    hg.addColorStop(1, rgba(haloC, 0));
    ctx.globalAlpha = 1; ctx.fillStyle = hg; ctx.fillRect(0, 0, W, H);

    var inShape = shapeOn && (!wordsOn || el < tEnd);
    if (inShape) {
      scaleS = Math.min(W * 0.16, H * 0.195);
      // x: oscila (si girara entera quedaria de canto y dejaria de leerse como X); resto: gira
      var osc = shapeId === 'x' || shapeId === 'image';
      var yw = (osc ? 0.8 * Math.sin(el * 0.6 * spinK) : 0.5 + el * 0.5 * spinK) + mx * 0.5;
      var pt = (osc ? 0.1 : (shapeId === 'cube' ? 0.45 : 1.0)) + 0.1 * Math.sin(el * 0.5) * spinK + my * 0.25;
      setCam(camS, yw, pt);
      var sA = ease(clamp((el - 0.3) / 1.4, 0, 1)) * (wordsOn ? 1 - ease(clamp((el - shapeT) / Math.max(0.01, stagger + morph), 0, 1)) : 1);
      if (sA > 0.003) {
        if (gridK > 0) drawGrid(sA);
        drawShape(sA);
      }
    }

    var R2 = radius * radius;
    var damp = Math.pow(0.86, step);
    for (i = 0; i < parts.length; i++) {
      // degradacion por rendimiento: se omiten particulas intercaladas (no las ultimas,
      // porque el orden es por filas y se perderia la parte baja de las letras)
      if (lod === 1 && i % 4 === 3) continue;
      if (lod === 2 && i % 2 === 1) continue;
      var p = parts[i];
      var e = ease(clamp((el - 0.2 - p.lag * 0.9) / 1.5, 0, 1));
      // destino actual: interpolacion en arco entre la palabra 'from' y la 'to'
      var a = p.tg[from], b = p.tg[to];
      var q = from === to ? 0 : ease(clamp((loc - p.lag * stagger) / morph, 0, 1));
      var tr = Math.sin(q * 3.14159);
      var ax = a[0] + (b[0] - a[0]) * q + tr * p.arcx * 70 * arcK;
      var ay = a[1] + (b[1] - a[1]) * q + tr * p.arcy * 70 * arcK;
      // fase de forma 3D: el destino es el punto de la arista (rotando) y luego viaja a la palabra
      var kd = 1, sw = 0;
      if (inShape && p.sh) {
        project(camS, p.sh[0], p.sh[1], p.sh[2], pp);
        var w2 = wordsOn ? ease(clamp((el - shapeT - p.lag * stagger) / morph, 0, 1)) : 0, trs = Math.sin(w2 * 3.14159);
        ax = pp[0] + (ax - pp[0]) * w2 + trs * p.arcx * 70 * arcK;
        ay = pp[1] + (ay - pp[1]) * w2 + trs * p.arcy * 70 * arcK;
        kd = pp[2]; sw = 1 - w2; tr = Math.max(tr, trs);
      }
      // posicion base: del origen disperso al destino, con respiracion y parallax por profundidad
      var bx = p.x0 + (ax - p.x0) * e + Math.sin(el * 0.9 + p.ph) * 1.5 * e + mx * 5 * parK * p.z;
      var by = p.y0 + (ay - p.y0) * e + Math.cos(el * 1.1 + p.ph) * 1.5 * e + my * 3 * parK * p.z;
      // repulsion del puntero + resorte que la devuelve a su sitio
      var rx = bx + p.dx - px, ry = by + p.dy - py, d2 = rx * rx + ry * ry;
      if (repel > 0 && d2 < R2 && e > 0.9) {
        var d = Math.sqrt(d2) || 1, f = (1 - d / radius) * 2.2 * repel * step;
        p.vx += rx / d * f; p.vy += ry / d * f;
      }
      p.vx += -p.dx * 0.05 * step; p.vy += -p.dy * 0.05 * step;
      p.vx *= damp; p.vy *= damp;
      p.dx += p.vx * step; p.dy += p.vy * step;
      var al = (0.45 + 0.4 * twk * Math.sin(el * 2 + p.ph)) * (0.3 + 0.7 * e) * (1 + 0.6 * tr) * (1 + (kd - 1) * 0.8 * sw);
      ctx.globalAlpha = clamp(al * (1 + 0.5 * formed), 0.05, 1);
      ctx.fillStyle = p.u < mix ? col2s : col1s;
      ctx.beginPath();
      ctx.arc(bx + p.dx, by + p.dy, p.r * size * (1 + (kd - 1) * 0.9 * sw), 0, 6.2832);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  function onMove(e) {
    var r = root.getBoundingClientRect();
    px = e.clientX - r.left; py = e.clientY - r.top;
    tx = clamp(((px / Math.max(1, r.width)) - 0.5) * 2, -1.3, 1.3);
    ty = clamp(((py / Math.max(1, r.height)) - 0.5) * 2, -1.3, 1.3);
  }
  function onLeave() { px = -9999; py = -9999; tx = 0; ty = 0; }

  function destroy() {
    dead = true;
    if (raf) win.cancelAnimationFrame(raf);
    if (ro) ro.disconnect(); else win.removeEventListener('resize', layout);
    if (io) io.disconnect();
    if (mo) mo.disconnect();
    win.removeEventListener('pointermove', onMove);
    root.removeEventListener('pointerleave', onLeave);
    delete root.__sfHP;
  }

  function loop(ts) {
    raf = 0;
    if (dead) return;
    if (!root.isConnected) { destroy(); return; }
    var dt = last ? Math.min(0.1, (ts - last) / 1000) : 0;
    last = ts; el += dt;
    // rendimiento: si 70% de los ultimos 90 frames tardan > 32 ms, se baja un nivel (nunca sube)
    if (dt > 0) {
      nfr++; if (dt > 0.032) slow++;
      if (nfr >= 90) {
        if (slow >= 63 && lod < 2) lod++;
        nfr = 0; slow = 0;
      }
    }
    frame(dt * 60);
    if (visible && !reduced) raf = win.requestAnimationFrame(loop);
  }
  function request() { if (!raf && !dead) raf = win.requestAnimationFrame(loop); }
  function replay() { if (!reduced) { el = 0; last = 0; request(); } }

  var ro = win.ResizeObserver ? new win.ResizeObserver(layout) : null;
  var io = win.IntersectionObserver ? new win.IntersectionObserver(function (en) {
    visible = en[0].isIntersecting;
    if (visible) { last = 0; request(); }
  }) : null;
  // Cambios desde el panel de Ajustes. OJO: un MutationObserver se dispara con CADA
  // setAttribute aunque el valor no cambie, y GrapesJS reaplica TODOS los atributos al
  // editar uno solo (updateAttributes). Por eso se compara contra una instantanea y solo
  // se actua si un valor cambio de verdad; si no, cualquier ajuste reiniciaria la animacion.
  var PARAMS = ['data-text', 'data-case', 'data-font', 'data-loop',
    'data-shape', 'data-shape-time', 'data-spin', 'data-aberr', 'data-edge', 'data-grid',
    'data-words', 'data-depth', 'data-shape-path', 'data-hold', 'data-morph', 'data-stagger',
    'data-color1', 'data-color2', 'data-mix', 'data-bg1', 'data-bg2', 'data-halo',
    'data-size', 'data-arc', 'data-repel', 'data-radius', 'data-parallax',
    'data-twinkle', 'data-stars', 'data-density', 'data-glow'];
  var snap = {};
  for (var sp = 0; sp < PARAMS.length; sp++) snap[PARAMS[sp]] = root.getAttribute(PARAMS[sp]);
  // Segun el atributo que cambio: reconstruye / reinicia la linea de tiempo / solo repinta
  var mo = win.MutationObserver ? new win.MutationObserver(function (muts) {
    var changed = false, rebuild = false, again = false;
    for (var j = 0; j < muts.length; j++) {
      var n = muts[j].attributeName;
      var v = root.getAttribute(n);
      if (v === snap[n]) continue;
      snap[n] = v; changed = true;
      if (n === 'data-text' || n === 'data-density' || n === 'data-font' || n === 'data-case' || n === 'data-shape' ||
          n === 'data-words' || n === 'data-depth' || n === 'data-shape-path') rebuild = true;
      else if (n === 'data-hold' || n === 'data-morph' || n === 'data-stagger' || n === 'data-loop' || n === 'data-shape-time') again = true;
    }
    if (!changed) return;
    readParams();
    if (rebuild) rebuildThen(function () { if (reduced) frame(0); else replay(); });
    else if (reduced) frame(0);
    else if (again) replay();
  }) : null;

  if (fine && !reduced) {
    win.addEventListener('pointermove', onMove, { passive: true });
    root.addEventListener('pointerleave', onLeave);
  }
  if (ro) ro.observe(root); else win.addEventListener('resize', layout);
  if (io) io.observe(root);
  if (mo) mo.observe(root, { attributes: true, attributeFilter: PARAMS });

  root.__sfHP = { destroy: destroy, replay: replay };
  readParams();
  layout();
  request();

}.bind(items[i]))();
          }
          var items = document.querySelectorAll('#iherwx');
          for (var i = 0, len = items.length; i < len; i++) {
            (function(){

  var root = this;
  var win = (root.ownerDocument && root.ownerDocument.defaultView) || window;
  if (root.__sfBG && root.__sfBG.destroy) root.__sfBG.destroy();
  var cv = root.querySelector('.sf-bg-canvas');
  if (!cv || !cv.getContext) return;
  var ctx = cv.getContext('2d');
  var reduced = !!(win.matchMedia && win.matchMedia('(prefers-reduced-motion: reduce)').matches);

  function num(name, def, a, b) {
    var v = parseFloat(root.getAttribute(name));
    if (isNaN(v)) v = def;
    return Math.max(a, Math.min(b, v));
  }
  function nowMs() { return win.performance ? win.performance.now() : Date.now(); }

    // Resuelve var(--x,fallback) a un color real (el canvas no entiende var()).
  function resolveColor(v, fallback) {
    var m = /^var\(\s*(--[\w-]+)\s*(?:,\s*([^)]*))?\)$/.exec(v || '');
    if (!m) return v || fallback;
    var got = win.getComputedStyle(root).getPropertyValue(m[1]).trim();
    return got || m[2] || fallback;
  }
  // Convierte un #rrggbb a rgba con alfa (para los nodos).
  function withAlpha(c, a) {
    var h = /^#([0-9a-f]{6})$/i.exec(c);
    if (!h) return c;
    var n = parseInt(h[1], 16);
    return 'rgba(' + (n >> 16) + ',' + ((n >> 8) & 255) + ',' + (n & 255) + ',' + a.toFixed(3) + ')';
  }
  var lineColor = resolveColor(root.getAttribute('data-grid-color'), '#334155');
  var dotColor = resolveColor(root.getAttribute('data-dot-color'), '#ffffff');
  var spacing = num('data-spacing', 40, 20, 120);
  var PULL_R = num('data-pull-radius', 220, 60, 600);      // radio de influencia del puntero (px)
  var PULL_K = num('data-pull-strength', 0.45, 0, 1);      // intensidad del arrastre hacia el puntero
  var RIPPLE_LIFE = num('data-ripple-life', 1600, 300, 5000); // duración de cada onda (ms)
  var RIPPLE_SPEED = num('data-ripple-speed', 0.5, 0.05, 2); // velocidad de la onda (px/ms)
  var RIPPLE_WIDTH = 60;   // grosor del frente de la onda (px)
  var RIPPLE_AMP = num('data-ripple-amp', 14, 0, 40);      // desplazamiento máximo (px)

  var W = 0, H = 0, cols = 0, rows = 0, nodes = [];
  var pointer = { x: 0, y: 0, on: false };
  var ripples = [];
  var raf = 0, running = false, visible = true;

  function build() {
    var dpr = Math.min(win.devicePixelRatio || 1, 2);
    W = root.clientWidth;
    H = root.clientHeight;
    cv.width = Math.round(W * dpr);
    cv.height = Math.round(H * dpr);
    cv.style.width = W + 'px';
    cv.style.height = H + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(W / spacing) + 3;
    rows = Math.ceil(H / spacing) + 3;
    nodes = [];
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var bx = (c - 1) * spacing;
        var by = (r - 1) * spacing;
        nodes.push({ bx: bx, by: by, x: bx, y: by, vx: 0, vy: 0 });
      }
    }
  }

  // Avanza la simulación un paso. Devuelve true si algo sigue en movimiento.
  function step() {
    var t = nowMs();
    var alive = [];
    for (var k = 0; k < ripples.length; k++) {
      if (t - ripples[k].t0 < RIPPLE_LIFE) alive.push(ripples[k]);
    }
    ripples = alive;
    var moving = false;
    for (var i = 0; i < nodes.length; i++) {
      var n = nodes[i];
      var tx = 0, ty = 0;
      if (pointer.on) {
        var dx = pointer.x - n.bx, dy = pointer.y - n.by;
        var d = Math.sqrt(dx * dx + dy * dy);
        if (d < PULL_R && d > 0.001) {
          var f = 1 - d / PULL_R;
          f = f * f * PULL_K;
          tx += dx * f;
          ty += dy * f;
        }
      }
      for (var j = 0; j < ripples.length; j++) {
        var rp = ripples[j];
        var age = t - rp.t0;
        var rad = age * RIPPLE_SPEED;
        var ex = n.bx - rp.x, ey = n.by - rp.y;
        var dist = Math.sqrt(ex * ex + ey * ey);
        var ring = Math.exp(-Math.pow(dist - rad, 2) / (RIPPLE_WIDTH * RIPPLE_WIDTH));
        var amp = RIPPLE_AMP * ring * (1 - age / RIPPLE_LIFE);
        if (dist > 0.001) { tx += ex / dist * amp; ty += ey / dist * amp; }
      }
      n.vx = (n.vx + ((n.bx + tx) - n.x) * 0.08) * 0.82;
      n.vy = (n.vy + ((n.by + ty) - n.y) * 0.08) * 0.82;
      n.x += n.vx;
      n.y += n.vy;
      if (Math.abs(n.vx) + Math.abs(n.vy) > 0.01 || Math.abs(n.x - n.bx) + Math.abs(n.y - n.by) > 0.05) moving = true;
    }
    return moving || pointer.on || ripples.length > 0;
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.lineWidth = 1;
    ctx.strokeStyle = lineColor;
    ctx.beginPath();
    for (var r = 0; r < rows; r++) {
      for (var c = 0; c < cols; c++) {
        var n = nodes[r * cols + c];
        if (c < cols - 1) { var h = nodes[r * cols + c + 1]; ctx.moveTo(n.x, n.y); ctx.lineTo(h.x, h.y); }
        if (r < rows - 1) { var v = nodes[(r + 1) * cols + c]; ctx.moveTo(n.x, n.y); ctx.lineTo(v.x, v.y); }
      }
    }
    ctx.stroke();
    for (var i = 0; i < nodes.length; i++) {
      var p = nodes[i];
      var m = Math.sqrt((p.x - p.bx) * (p.x - p.bx) + (p.y - p.by) * (p.y - p.by));
      var a = Math.min(1, 0.3 + m / 10);
      ctx.fillStyle = withAlpha(dotColor, a);
      ctx.beginPath();
      ctx.arc(p.x, p.y, 1.2 + Math.min(m, 10) * 0.08, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function frame() {
    raf = 0;
    if (!running) return;
    var moving = step();
    draw();
    if (!moving) { running = false; return; }
    raf = win.requestAnimationFrame(frame);
  }
  function start() {
    if (reduced || running || !visible) return;
    running = true;
    raf = win.requestAnimationFrame(frame);
  }
  function stop() {
    running = false;
    if (raf) win.cancelAnimationFrame(raf);
    raf = 0;
  }

  function localPos(e) {
    var b = cv.getBoundingClientRect();
    return { x: e.clientX - b.left, y: e.clientY - b.top };
  }
  function onMove(e) {
    var p = localPos(e);
    pointer.x = p.x; pointer.y = p.y; pointer.on = true;
    start();
  }
  function onLeave() { pointer.on = false; start(); }
  function onDown(e) {
    var p = localPos(e);
    ripples.push({ x: p.x, y: p.y, t0: nowMs() });
    start();
  }
  function onResize() { build(); if (!running) draw(); }

  var io = null, ro = null;
  if (win.IntersectionObserver) {
    io = new win.IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible) start(); else stop();
    });
    io.observe(root);
  }
  if (win.ResizeObserver) {
    ro = new win.ResizeObserver(onResize);
    ro.observe(root);
  } else {
    win.addEventListener('resize', onResize);
  }
  root.addEventListener('pointermove', onMove);
  root.addEventListener('pointerleave', onLeave);
  root.addEventListener('pointerdown', onDown);

  root.__sfBG = {
    destroy: function () {
      stop();
      if (io) io.disconnect();
      if (ro) ro.disconnect();
      win.removeEventListener('resize', onResize);
      root.removeEventListener('pointermove', onMove);
      root.removeEventListener('pointerleave', onLeave);
      root.removeEventListener('pointerdown', onDown);
    }
  };

  build();
  draw();
  start();

}.bind(items[i]))();
          }
} catch (e) { console.error('Error en scripts de componentes (index.html):', e); }
