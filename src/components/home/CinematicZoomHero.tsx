import React from 'react';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Compass, Sparkles } from 'lucide-react';

export const CinematicZoomHero: React.FC = () => {
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  return (
    <section className="relative h-[480px] sm:h-[540px] md:h-[620px] w-full overflow-hidden bg-[#060A12] border-b border-[#1E2D4A] flex items-center justify-center">
      
      {/* Background Image Container with Continuous Breathing Zoom */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/images/Imagen_de_ChatGPT_14_oct_2026__20_58_28-10_1400x834_4cd5356e.png"
          alt="Gran ola estilo cyberpunk con horizonte del Monte Fuji y metrópolis futurista en neón"
          className="h-full w-full object-cover object-center animate-breathing"
        />

        {/* Cinematic Scrim & Dark Gradient for High-Contrast Typography (WCAG AA) */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#060A12] via-[#0b1326]/60 to-[#0b1326]/40 backdrop-blur-[0.5px]" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#060A12]/30 to-[#060A12]/80" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527]/80 px-4 py-1.5 text-xs font-semibold text-[#00f0ff] backdrop-blur-md shadow-[0_0_15px_rgba(0,240,255,0.15)]">
          <Compass className="h-3.5 w-3.5" />
          <span>{t.cinematicHero.badge}</span>
        </div>

        {/* Exact Mandatory Title from Document 01 Section 4.3 - Always white on photographic dark scrim */}
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight !text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)]">
          {t.cinematicHero.title}
        </h2>

        {/* Exact Mandatory Text from Document 01 Section 4.3 */}
        <p className="text-base sm:text-lg md:text-xl !text-slate-100 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
          {t.cinematicHero.subtitle}
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => openModal({ product: 'Plan Básico' })}
            className="btn-interactive flex items-center gap-2 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-6 py-3.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_20px_rgba(0,240,255,0.3)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
          >
            <Sparkles className="h-4 w-4" />
            <span>{t.cinematicHero.cta}</span>
          </button>
        </div>

      </div>
    </section>
  );
};
