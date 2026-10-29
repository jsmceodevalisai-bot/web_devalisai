import React, { useRef, useEffect } from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Rocket, ArrowRight } from 'lucide-react';

interface GridPoint {
  baseX: number;
  baseY: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const SMEInteractiveHero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let points: GridPoint[][] = [];
    const spacing = 38;
    const mouse = { x: -1000, y: -1000, active: false };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      // Re-initialize grid points
      const cols = Math.ceil(rect.width / spacing) + 1;
      const rows = Math.ceil(rect.height / spacing) + 1;
      points = [];

      for (let r = 0; r < rows; r++) {
        const rowPoints: GridPoint[] = [];
        for (let c = 0; c < cols; c++) {
          const px = c * spacing;
          const py = r * spacing;
          rowPoints.push({
            baseX: px,
            baseY: py,
            x: px,
            y: py,
            vx: 0,
            vy: 0,
          });
        }
        points.push(rowPoints);
      }
    };

    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    const render = () => {
      const rect = container.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      const isLight = document.documentElement.classList.contains('light');
      ctx.lineWidth = 1.15;
      // White, luminous elastic mesh lines as requested by the user
      ctx.strokeStyle = isLight ? 'rgba(255, 255, 255, 0.75)' : 'rgba(255, 255, 255, 0.52)';

      const rows = points.length;
      if (rows === 0) return;
      const cols = points[0].length;

      // Update points physics
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];

          if (!prefersReducedMotion && mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 120;

            if (dist < maxDist && dist > 0) {
              const force = (1 - dist / maxDist) * 16;
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          // Elastic spring back to baseX, baseY
          const springDx = p.baseX - p.x;
          const springDy = p.baseY - p.y;
          p.vx += springDx * 0.08;
          p.vy += springDy * 0.08;

          p.vx *= 0.82; // friction damping
          p.vy *= 0.82;

          p.x += p.vx;
          p.y += p.vy;
        }
      }

      // Draw horizontal lines
      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const p = points[r][c];
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw vertical lines
      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const p = points[r][c];
          if (r === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Highlight subtle nodes - whiter with luminous clarity
      for (let r = 0; r < rows; r += 2) {
        for (let c = 0; c < cols; c += 2) {
          const p = points[r][c];
          ctx.beginPath();
          ctx.arc(p.x, p.y, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.82)';
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="pymes"
      ref={containerRef}
      className="relative min-h-[440px] py-20 bg-gradient-to-b from-[#182848] via-[#1a2d54] to-[#12203c] border-b border-[#2A3F66] overflow-hidden flex items-center"
    >
      {/* Interactive Elastic Canvas - white luminous mesh */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute inset-0 h-full w-full opacity-90"
        aria-hidden="true"
      />

      {/* Luminous soft ambient lighting for clarity and depth */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-[#00f0ff]/10 blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-0 bg-radial from-transparent via-[#1a2d54]/20 to-[#12203c]/45" />

      {/* Content Layer (non-obstructive to user interaction) */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527]/90 px-4 py-1.5 text-xs font-semibold text-[#00f0ff] backdrop-blur-md">
          <Rocket className="h-3.5 w-3.5" />
          <span>{t.smeHero.badge}</span>
        </div>

        {/* Exact Title from Document 01 Section 4.5 */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          {t.smeHero.title}
        </h2>

        {/* Exact Description from Document 01 Section 4.5 */}
        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
          {t.smeHero.subtitle}
        </p>

        {/* Exact CTA from Document 01 Section 4.5 */}
        <div className="pt-2 flex justify-center">
          <button
            onClick={() => openModal({ product: 'Plan Pyme / Impulso Digital' })}
            className="btn-interactive flex items-center gap-2.5 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-8 py-3.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_25px_rgba(0,240,255,0.3)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
          >
            <span>{t.smeHero.cta}</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
