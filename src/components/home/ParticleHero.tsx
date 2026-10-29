import React, { useEffect, useRef, useState } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

interface Particle3D {
  // Current 3D coordinates (relative to canvas center)
  x: number;
  y: number;
  z: number;
  // Morph starting coordinates
  fromX: number;
  fromY: number;
  fromZ: number;
  // Morph target coordinates
  toX: number;
  toY: number;
  toZ: number;
  // 3D trajectory curves & stagger wave
  arcX: number;
  arcY: number;
  arcZ: number;
  staggerDelay: number;
  // Targets for both words
  aiTarget: { x: number; y: number; z: number };
  devTarget: { x: number; y: number; z: number };
  // Ambient orbiting halo around "AI"
  isAiHalo: boolean;
  haloAngle: number;
  haloRadius: number;
  haloSpeed: number;
  // Visual attributes
  colorHex: string;
  lightColorHex: string;
  baseSize: number;
  baseAlpha: number;
  twinkleSpeed: number;
  phase: number;
  // Interactive mouse repel velocity
  repelX: number;
  repelY: number;
}

interface BackgroundStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  twinkleSpeed: number;
  phase: number;
  color: string;
}

export const ParticleHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  const [activeWord, setActiveWord] = useState<'AI' | 'DEVALISAI'>('AI');

  const mouseRef = useRef<{
    x: number;
    y: number;
    active: boolean;
    parallaxX: number;
    parallaxY: number;
  }>({
    x: -9999,
    y: -9999,
    active: false,
    parallaxX: 0,
    parallaxY: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle3D[] = [];
    let stars: BackgroundStar[] = [];

    // Timing parameters based on video & user reference:
    // data-hold="2.4", data-morph="1.1", data-stagger="0.7", data-radius="80"
    const HOLD_TIME = 2.4;
    const MORPH_TIME = 1.1;
    const STAGGER_TIME = 0.7;
    const REPEL_RADIUS = 110;
    const FOV = 620;

    let animState: 'HOLDING' | 'MORPHING' = 'HOLDING';
    let stateElapsed = 0;
    let currentWord: 'AI' | 'DEVALISAI' = 'AI';
    let targetWord: 'AI' | 'DEVALISAI' = 'AI';

    // Current smooth 3D camera rotation
    let rotX = 0;
    let rotY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Helper: sample pixel coordinates of text in uppercase
    const sampleTextPoints = (
      text: string,
      fontSize: number,
      canvasW: number,
      canvasH: number,
      letterSpacingPx: number = 0
    ): { x: number; y: number }[] => {
      const off = document.createElement('canvas');
      const offCtx = off.getContext('2d');
      if (!offCtx) return [];

      off.width = canvasW;
      off.height = canvasH;
      offCtx.clearRect(0, 0, canvasW, canvasH);

      // Heavy geometric sans font for punchy, crisp dots
      offCtx.font = `900 ${fontSize}px "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, sans-serif`;
      offCtx.textAlign = 'center';
      offCtx.textBaseline = 'middle';
      offCtx.fillStyle = '#FFFFFF';

      if ('letterSpacing' in offCtx) {
        // @ts-ignore
        offCtx.letterSpacing = `${letterSpacingPx}px`;
      }

      offCtx.fillText(text, canvasW / 2, canvasH / 2);

      const imgData = offCtx.getImageData(0, 0, canvasW, canvasH);
      const data = imgData.data;
      const points: { x: number; y: number }[] = [];

      // Sampling density step balanced for 100% enlarged typography
      const step = canvasW < 640 ? 3.8 : canvasW < 1024 ? 4.3 : 4.8;

      for (let y = 0; y < canvasH; y += step) {
        for (let x = 0; x < canvasW; x += step) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const idx = (py * canvasW + px) * 4;
          if (data[idx + 3] > 130) {
            points.push({
              x: px - canvasW / 2,
              y: py - canvasH / 2,
            });
          }
        }
      }

      // Sort points horizontally to create a directional sweeping morph wave
      points.sort((a, b) => a.x - b.x || a.y - b.y);
      return points;
    };

    // Color interpolation: data-color1="#a9a2ff", data-color2="#62e9e0"
    const color1RGB: [number, number, number] = [169, 162, 255]; // #a9a2ff Lavender
    const color2RGB: [number, number, number] = [98, 233, 224];  // #62e9e0 Vibrant Cyan

    // High-contrast equivalents for light mode
    const light1RGB: [number, number, number] = [109, 40, 217]; // #6d28d9 Violet
    const light2RGB: [number, number, number] = [8, 145, 178];  // #0891b2 Cyan

    const lerpColor = (c1: [number, number, number], c2: [number, number, number], t: number): string => {
      const r = Math.round(c1[0] + (c2[0] - c1[0]) * t);
      const g = Math.round(c1[1] + (c2[1] - c1[1]) * t);
      const b = Math.round(c1[2] + (c2[2] - c1[2]) * t);
      return `rgb(${r}, ${g}, ${b})`;
    };

    const initParticleSystem = () => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      const isMobile = width < 640;
      const isTablet = width >= 640 && width < 1024;

    // Font size calculations enlarged by 100% (+100% / 2x larger) for massive hero presence
      const aiFontSize = isMobile
        ? Math.min(200, width * 0.52)
        : isTablet
          ? Math.min(280, width * 0.38)
          : Math.min(350, width * 0.34);

      const devFontSize = isMobile
        ? Math.min(84, width * 0.19)
        : isTablet
          ? Math.min(124, width * 0.165)
          : Math.min(164, width * 0.155);

      const aiPoints = sampleTextPoints('AI', aiFontSize, width, height, isMobile ? 10 : 22);
      const devPoints = sampleTextPoints('DEVALISAI', devFontSize, width, height, isMobile ? 3 : 7);

      if (aiPoints.length === 0 || devPoints.length === 0) return;

      // The larger count determines total particles so every character is completely formed
      const totalCount = Math.max(devPoints.length, aiPoints.length);
      particles = [];

      for (let i = 0; i < totalCount; i++) {
        const dPt = devPoints[i % devPoints.length];

        let aiTarget: { x: number; y: number; z: number };
        let isHalo = false;
        let haloRadius = 0;
        let haloAngle = Math.random() * Math.PI * 2;
        let haloSpeed = (Math.random() - 0.5) * 0.018;

        if (i < aiPoints.length) {
          // Direct point on "AI" with subtle natural 3D depth layer
          const aPt = aiPoints[i];
          aiTarget = {
            x: aPt.x,
            y: aPt.y,
            z: (Math.random() - 0.5) * 28,
          };
        } else if (i < aiPoints.length * 1.45) {
          // Extra thickness/glow layer on "AI" strokes
          const base = aiPoints[i % aiPoints.length];
          const ang = Math.random() * Math.PI * 2;
          const dist = Math.random() * 4.5 + 1.2;
          aiTarget = {
            x: base.x + Math.cos(ang) * dist,
            y: base.y + Math.sin(ang) * dist,
            z: (Math.random() - 0.5) * 36,
          };
        } else {
          // Ambient cosmic halo / constellation dust orbiting around the enlarged "AI"
          isHalo = true;
          haloRadius = Math.random() * (isMobile ? 130 : 240) + (isMobile ? 85 : 145);
          aiTarget = {
            x: Math.cos(haloAngle) * haloRadius,
            y: Math.sin(haloAngle) * (haloRadius * 0.55),
            z: (Math.random() - 0.5) * 110,
          };
        }

        const devTarget = {
          x: dPt.x,
          y: dPt.y,
          z: (Math.random() - 0.5) * 20,
        };

        // Color blend along horizontal axis (data-mix="0.38")
        const normX = Math.max(0, Math.min(1, (dPt.x + width / 2) / width));
        const mixJitter = (Math.random() - 0.5) * 0.38;
        const colorT = Math.max(0, Math.min(1, normX + mixJitter));

        const colorHex = lerpColor(color1RGB, color2RGB, colorT);
        const lightColorHex = lerpColor(light1RGB, light2RGB, colorT);

        // 3D arc burst trajectories for morphing transition
        const arcDir = Math.random() > 0.5 ? 1 : -1;
        const arcY = (Math.random() * 65 + 35) * arcDir;
        const arcX = (Math.random() - 0.5) * 55;
        const arcZ = (Math.random() * 220 + 80) * (Math.random() > 0.5 ? 1 : -1);
        const staggerDelay = normX * STAGGER_TIME;

        // Start initialized on "AI" as in the user's video!
        const startTarget = currentWord === 'AI' ? aiTarget : devTarget;

        particles.push({
          x: startTarget.x,
          y: startTarget.y,
          z: startTarget.z,
          fromX: startTarget.x,
          fromY: startTarget.y,
          fromZ: startTarget.z,
          toX: startTarget.x,
          toY: startTarget.y,
          toZ: startTarget.z,
          arcX,
          arcY,
          arcZ,
          staggerDelay,
          aiTarget,
          devTarget,
          isAiHalo: isHalo,
          haloAngle,
          haloRadius,
          haloSpeed,
          colorHex,
          lightColorHex,
          baseSize: Math.random() * 1.4 + 1.4,
          baseAlpha: Math.random() * 0.35 + 0.65,
          twinkleSpeed: Math.random() * 2.2 + 1.2,
          phase: Math.random() * Math.PI * 2,
          repelX: 0,
          repelY: 0,
        });
      }

      // Starfield background particles (data-stars="1", data-twinkle="1")
      const starCount = isMobile ? 35 : 65;
      stars = [];
      for (let s = 0; s < starCount; s++) {
        stars.push({
          x: Math.random() * width - width / 2,
          y: Math.random() * height - height / 2,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -Math.random() * 0.22 - 0.05,
          size: Math.random() * 1.3 + 0.6,
          alpha: Math.random() * 0.45 + 0.15,
          twinkleSpeed: Math.random() * 2 + 1,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.5 ? '#a9a2ff' : '#62e9e0',
        });
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);
      initParticleSystem();
    };

    resize();
    window.addEventListener('resize', resize);

    // Interactive pointer handlers
    const handlePointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const localX = e.clientX - rect.left;
      const localY = e.clientY - rect.top;

      mouseRef.current.x = localX - rect.width / 2;
      mouseRef.current.y = localY - rect.height / 2;
      mouseRef.current.active = true;

      // 3D Parallax target tilt
      targetRotY = ((localX - rect.width / 2) / rect.width) * 0.22;
      targetRotX = -((localY - rect.height / 2) / rect.height) * 0.18;
    };

    const handlePointerLeave = () => {
      mouseRef.current.active = false;
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
      targetRotX = 0;
      targetRotY = 0;
    };

    const startMorph = (to: 'AI' | 'DEVALISAI') => {
      animState = 'MORPHING';
      stateElapsed = 0;
      targetWord = to;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.fromX = p.x;
        p.fromY = p.y;
        p.fromZ = p.z;

        const target = to === 'AI' ? p.aiTarget : p.devTarget;
        p.toX = target.x;
        p.toY = target.y;
        p.toZ = target.z;
      }
    };

    const handleCanvasClick = () => {
      const next = currentWord === 'AI' ? 'DEVALISAI' : 'AI';
      currentWord = next;
      setActiveWord(next);
      startMorph(next);
    };

    canvas.addEventListener('pointermove', handlePointerMove);
    canvas.addEventListener('pointerleave', handlePointerLeave);
    canvas.addEventListener('click', handleCanvasClick);

    // Smooth cubic easing for fluid liquid acceleration & landing
    const easeInOutCubic = (t: number): number => {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    };

    let lastTime = performance.now();

    const render = (now: number) => {
      const rect = canvas.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const centerX = width / 2;
      const centerY = height / 2;

      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains('light');
      const mouse = mouseRef.current;

      // 1. Draw Starfield
      for (let s = 0; s < stars.length; s++) {
        const star = stars[s];
        star.y += star.vy;
        star.x += star.vx;

        if (star.y < -height / 2) {
          star.y = height / 2;
          star.x = Math.random() * width - width / 2;
        }

        const twinkle = 0.65 + 0.35 * Math.sin(now * 0.002 * star.twinkleSpeed + star.phase);
        ctx.beginPath();
        ctx.arc(centerX + star.x, centerY + star.y, star.size, 0, Math.PI * 2);

        if (isLight) {
          ctx.fillStyle = `rgba(100, 116, 139, ${star.alpha * twinkle * 0.4})`;
        } else {
          ctx.fillStyle = star.color === '#a9a2ff'
            ? `rgba(169, 162, 255, ${star.alpha * twinkle})`
            : `rgba(98, 233, 224, ${star.alpha * twinkle})`;
        }
        ctx.fill();
      }

      // 2. State Machine Progress (Hold -> Morph -> Hold -> Morph)
      stateElapsed += dt;

      if (animState === 'HOLDING') {
        if (stateElapsed >= HOLD_TIME) {
          const next = currentWord === 'AI' ? 'DEVALISAI' : 'AI';
          currentWord = next;
          setActiveWord(next);
          startMorph(next);
        }
      } else if (animState === 'MORPHING') {
        const totalMorphTime = MORPH_TIME + STAGGER_TIME;
        if (stateElapsed >= totalMorphTime) {
          animState = 'HOLDING';
          stateElapsed = 0;
          currentWord = targetWord;
        }
      }

      // 3. Continuous 3D camera rotation with ambient spin & mouse parallax
      const ambientSpinY = Math.sin(now * 0.0006) * 0.05;
      const ambientSpinX = Math.cos(now * 0.0005) * 0.03;

      rotX += (targetRotX + ambientSpinX - rotX) * 0.06;
      rotY += (targetRotY + ambientSpinY - rotY) * 0.06;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // 4. Update & Render Particles with 3D projection
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (animState === 'MORPHING') {
          const particleElapsed = Math.max(0, stateElapsed - p.staggerDelay);
          const rawProgress = Math.min(1, particleElapsed / MORPH_TIME);
          const ease = easeInOutCubic(rawProgress);

          const baseX = p.fromX + (p.toX - p.fromX) * ease;
          const baseY = p.fromY + (p.toY - p.fromY) * ease;
          const baseZ = p.fromZ + (p.toZ - p.fromZ) * ease;

          // 3D Parabolic arc swell during flight
          const arcSine = Math.sin(ease * Math.PI);
          p.x = baseX + p.arcX * arcSine;
          p.y = baseY - p.arcY * arcSine;
          p.z = baseZ + p.arcZ * arcSine;
        } else {
          // Standing state: gentle breathing + cosmic halo rotation for "AI"
          if (currentWord === 'AI' && p.isAiHalo) {
            p.haloAngle += p.haloSpeed;
            p.x = Math.cos(p.haloAngle) * p.haloRadius;
            p.y = Math.sin(p.haloAngle) * (p.haloRadius * 0.55);
            p.z = p.toZ + Math.sin(p.haloAngle * 2) * 20;
          } else {
            p.phase += 0.025;
            const shimmer = Math.sin(p.phase) * 0.5;
            p.x = p.toX + shimmer;
            p.y = p.toY + Math.cos(p.phase) * 0.5;
            p.z = p.toZ;
          }
        }

        // Mouse Repel Physics (2D screen projection space)
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.hypot(dx, dy);

          if (dist < REPEL_RADIUS && dist > 0.1) {
            const force = (1 - dist / REPEL_RADIUS) * 20;
            p.repelX += (dx / dist) * force;
            p.repelY += (dy / dist) * force;
          }
        }

        p.repelX *= 0.86;
        p.repelY *= 0.86;

        const px = p.x + p.repelX;
        const py = p.y + p.repelY;
        const pz = p.z;

        // 3D Matrix Rotation (around Y, then around X)
        const x1 = px * cosY + pz * sinY;
        const z1 = -px * sinY + pz * cosY;

        const y2 = py * cosX - z1 * sinX;
        const z2 = py * sinX + z1 * cosX;

        // Perspective projection
        const depthFactor = FOV / (FOV + z2);
        const screenX = centerX + x1 * depthFactor;
        const screenY = centerY + y2 * depthFactor;
        const renderSize = Math.max(0.6, p.baseSize * depthFactor);

        const twinkle = 0.82 + 0.18 * Math.sin(now * 0.003 * p.twinkleSpeed + p.phase);

        ctx.beginPath();
        ctx.arc(screenX, screenY, renderSize, 0, Math.PI * 2);

        if (isLight) {
          ctx.fillStyle = p.lightColorHex;
          ctx.shadowBlur = 0;
        } else {
          ctx.fillStyle = p.colorHex;
          ctx.shadowColor = p.colorHex;
          ctx.shadowBlur = 6;
        }
        ctx.fill();
      }

      // 5. Connective Constellation Filaments between close particles
      const connectDist = width < 640 ? 12 : 15;
      const stride = width < 640 ? 5 : 4;
      ctx.lineWidth = 0.5;

      for (let i = 0; i < particles.length; i += stride) {
        const p1 = particles[i];
        const screen1X = centerX + (p1.x + p1.repelX);
        const screen1Y = centerY + (p1.y + p1.repelY);

        const maxJ = Math.min(i + 12, particles.length);
        for (let j = i + 1; j < maxJ; j++) {
          const p2 = particles[j];
          const screen2X = centerX + (p2.x + p2.repelX);
          const screen2Y = centerY + (p2.y + p2.repelY);

          const dist = Math.hypot(screen1X - screen2X, screen1Y - screen2Y);
          if (dist < connectDist) {
            const lineAlpha = (1 - dist / connectDist) * 0.22;
            ctx.beginPath();
            ctx.moveTo(screen1X, screen1Y);
            ctx.lineTo(screen2X, screen2Y);

            if (isLight) {
              ctx.strokeStyle = `rgba(8, 145, 178, ${lineAlpha * 1.2})`;
            } else {
              ctx.strokeStyle = `rgba(98, 233, 224, ${lineAlpha})`;
            }
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('pointermove', handlePointerMove);
      canvas.removeEventListener('pointerleave', handlePointerLeave);
      canvas.removeEventListener('click', handleCanvasClick);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#1a1648] via-[#0d0f28] to-[#04040c] pt-8 sm:pt-12 pb-12 sm:pb-16 border-b border-[#1E2D4A] select-none text-[#EAF0FF]">
      
      {/* Background ambient cosmic glow matching data-halo="#6e64ff" & data-bg1="#1a1648" */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-[850px] h-[480px] bg-[#6e64ff]/22 blur-[150px] rounded-full" />
      <div className="pointer-events-none absolute right-1/4 top-20 w-[480px] h-[320px] bg-[#62e9e0]/20 blur-[120px] rounded-full" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Dynamic 3D Particle Canvas for AI <-> DEVALISAI (Pure, 100% enlarged typography) */}
        <div
          ref={containerRef}
          className="relative w-full max-w-6xl h-[340px] sm:h-[440px] md:h-[500px] flex items-center justify-center cursor-crosshair"
        >
          <canvas
            ref={canvasRef}
            className="w-full h-full block"
            aria-label={`Animación de partículas 3D formando la palabra ${activeWord}`}
          />

          {/* Accessible text fallback */}
          <h1 className="sr-only">
            DevalisAI — Desarrollando Valor con Soluciones Inteligentes
          </h1>
          <div className="sr-only" aria-live="polite">
            Palabra formada por partículas: {activeWord}
          </div>
        </div>

        {/* Hero Title & Subtitle (exact Document 01 / reference video) */}
        <div className="max-w-3xl space-y-3 mt-2 sm:mt-4">
          <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC] leading-tight">
            {t.particleHero.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg font-normal text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            {t.particleHero.subtitle}
          </p>
        </div>

        {/* Primary CTA Button "Contactanos" */}
        <div className="mt-6 sm:mt-8 flex items-center justify-center">
          <button
            onClick={() => openModal({ product: 'Consulta General' })}
            className="btn-interactive inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#6e64ff] to-[#00f0ff] px-8 py-3 text-xs sm:text-sm font-bold text-[#04040c] shadow-[0_0_24px_rgba(98,233,224,0.35)] hover:opacity-95 cursor-pointer transition-transform"
          >
            <span>{t.particleHero.ctaPrimary}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* 4 Capabilities Grid (exact inx-hero__caps from the video) */}
        <div className="mt-12 w-full max-w-5xl border-t border-white/10 pt-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-[#4DA3FF] text-xl sm:text-2xl font-extrabold tracking-wider">
                01
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#F0F6FF] leading-snug uppercase tracking-wide">
                Inteligencia<br />Artificial
              </span>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-[#4DA3FF] text-xl sm:text-2xl font-extrabold tracking-wider">
                02
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#F0F6FF] leading-snug uppercase tracking-wide">
                Desarrollo<br />de software
              </span>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-[#4DA3FF] text-xl sm:text-2xl font-extrabold tracking-wider">
                03
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#F0F6FF] leading-snug uppercase tracking-wide">
                Diseño web y<br />experiencias digitales
              </span>
            </li>

            <li className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 backdrop-blur-sm">
              <span className="text-[#4DA3FF] text-xl sm:text-2xl font-extrabold tracking-wider">
                04
              </span>
              <span className="text-xs sm:text-sm font-bold text-[#F0F6FF] leading-snug uppercase tracking-wide">
                Automatización
              </span>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
};
