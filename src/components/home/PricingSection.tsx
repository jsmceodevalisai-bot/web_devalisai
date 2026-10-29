import React, { useState } from 'react';
import { BASIC_PLAN_DATA } from '../../data/landingData';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Check, ChevronDown, ChevronUp, Sparkles, Shield, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  const features = t.pricing.features && t.pricing.features.length > 0
    ? t.pricing.features
    : BASIC_PLAN_DATA.features.map(f => f.text);

  const initialFeatures = features.slice(0, 8);
  const expandedFeatures = features.slice(8);

  const handleOpenProposal = () => {
    openModal({
      product: 'Plan Básico',
      plan: `Plan Básico (${t.pricing.priceAmount})`,
      price: t.pricing.priceAmount,
      origin: 'Sección Precios Home',
    });
  };

  return (
    <section id="precios" className="py-20 bg-[#0B1326] border-b border-[#1E2D4A] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#00f0ff]/30 bg-[#0C1527] px-4 py-1.5 text-xs font-semibold text-[#00f0ff]">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{t.pricing.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
            {t.pricing.title}
          </h2>

          <p className="text-sm sm:text-base text-[#94A3B8]">
            {t.pricing.subtitle}
          </p>
        </div>

        {/* Protagonist Pricing Card (Centered & Responsive) */}
        <div className="max-w-lg mx-auto">
          <div className="relative rounded-3xl border-2 border-[#00f0ff]/60 bg-gradient-to-b from-[#0C1527] to-[#111C35] p-7 sm:p-9 shadow-2xl shadow-[#00f0ff]/10">
            
            {/* Featured Badge */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#00838f] to-[#004d54] dark:from-[#00f0ff] dark:to-[#006970] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white dark:text-[#060e20] shadow-md">
              {t.pricing.planBadge || 'Plan Pyme'}
            </div>

            {/* Card Header */}
            <div className="text-center pb-6 border-b border-[#1E2D4A]">
              <h3 className="font-display text-2xl font-bold text-[#F8FAFC]">
                {t.pricing.planName || BASIC_PLAN_DATA.name}
              </h3>
              <p className="text-xs text-[#00f0ff] font-medium mt-1">
                {t.pricing.planSubtitle || BASIC_PLAN_DATA.subtitle}
              </p>

              {/* Exact Price Display */}
              <div className="mt-5 flex items-baseline justify-center gap-1.5">
                <span className="font-display text-4xl sm:text-5xl font-black text-[#F8FAFC] tracking-tight">
                  {t.pricing.priceAmount}
                </span>
              </div>
              <span className="block text-[11px] text-[#64748B] mt-1 font-mono">
                {t.pricing.priceNote}
              </span>
            </div>

            {/* Features List (Strict ordered 1 to 14) */}
            <div className="py-6 space-y-3.5 text-xs">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#94A3B8] mb-2">
                {t.pricing.includedTitle}
              </div>

              {/* 1 to 8: Always visible */}
              {initialFeatures.map((featText, idx) => (
                <div key={idx} className="flex items-start gap-3 text-[#dae2fd]">
                  <div className="rounded-full bg-[#00f0ff]/15 p-1 text-[#00f0ff] shrink-0 mt-0.5">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="leading-tight">{featText}</span>
                </div>
              ))}

              {/* 9 to 14: Expandable */}
              {isExpanded && (
                <div
                  id="expanded-features-list"
                  className="space-y-3.5 pt-1 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  {expandedFeatures.map((featText, idx) => (
                    <div key={idx + 8} className="flex items-start gap-3 text-[#dae2fd]">
                      <div className="rounded-full bg-[#00f0ff]/15 p-1 text-[#00f0ff] shrink-0 mt-0.5">
                        <Check className="h-3.5 w-3.5" />
                      </div>
                      <span className="leading-tight">{featText}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Toggle Button */}
              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                  aria-controls="expanded-features-list"
                  className="btn-interactive inline-flex items-center gap-1.5 text-xs font-semibold text-[#00f0ff] hover:text-[#7df4ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded px-2 py-1 cursor-pointer"
                >
                  <span>{isExpanded ? '▲' : '▼ (+6)'}</span>
                  {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {/* Prominent CTA */}
            <div className="pt-4 border-t border-[#1E2D4A] space-y-3">
              <button
                type="button"
                onClick={handleOpenProposal}
                className="btn-interactive w-full flex items-center justify-center gap-2 rounded-xl bg-[#00838f] dark:bg-[#00f0ff] py-4 px-6 text-sm font-extrabold text-white dark:text-[#060e20] shadow-[0_0_25px_rgba(0,240,255,0.35)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
              >
                <span>{t.pricing.cta}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-[#64748B]">
                <Shield className="h-3.5 w-3.5 text-[#10B981]" />
                <span>{t.pricing.guarantee}</span>
              </div>
            </div>

            {/* Disclaimer */}
            <p className="mt-4 text-[10px] text-center text-[#64748B] leading-relaxed">
              {BASIC_PLAN_DATA.disclaimer}
            </p>

          </div>
        </div>

      </div>
    </section>
  );
};
