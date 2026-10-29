import React, { useState } from 'react';
import { TESTIMONIALS } from '../../data/landingData';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronLeft, ChevronRight, Quote, ShieldCheck, Star } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const prev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const current = TESTIMONIALS[currentIndex];
  const trans = t.testimonials.items[current.id];
  const quote = trans?.quote || current.quote;
  const authorName = trans?.name || current.author;
  const authorRole = trans?.role || current.role;
  const authorCompany = trans?.company || current.company;

  return (
    <section id="testimonios" className="py-20 bg-[#060A12] border-b border-[#1E2D4A] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff]">
            <ShieldCheck className="h-4 w-4" />
            <span>{t.testimonials.badge}</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#F8FAFC]">
            {t.testimonials.title}
          </h2>

          <p className="text-xs sm:text-sm text-[#94A3B8]">
            {t.testimonials.subtitle}
          </p>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-3xl mx-auto relative">
          <div className="relative rounded-3xl border border-[#2A3F66] bg-[#0C1527] p-8 sm:p-12 shadow-2xl transition-all duration-300">
            
            <div className="flex items-center justify-between mb-6">
              <Quote className="h-10 w-10 text-[#00f0ff]/40" />

              {/* Stars & Verification */}
              <div className="flex items-center gap-1 text-[#F59E0B]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-base sm:text-xl text-[#F8FAFC] font-medium leading-relaxed mb-8">
              "{quote}"
            </blockquote>

            {/* Author info */}
            <div className="flex items-center justify-between flex-wrap gap-4 pt-6 border-t border-[#1E2D4A]">
              <div>
                <h4 className="font-display text-base font-bold text-[#F8FAFC]">
                  {authorName}
                </h4>
                <div className="text-xs text-[#00f0ff]">
                  {authorRole} · <span className="text-[#94A3B8]">{authorCompany}</span>
                </div>
                <div className="mt-1 inline-flex items-center gap-1.5 text-[10px] text-[#10B981]">
                  <ShieldCheck className="h-3 w-3" />
                  <span>{current.verifiedStatus}</span>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Testimonio anterior"
                  className="btn-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E2D4A] bg-[#111C35] text-[#dae2fd] hover:border-[#00f0ff]/50 hover:text-[#00f0ff]"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={next}
                  aria-label="Siguiente testimonio"
                  className="btn-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E2D4A] bg-[#111C35] text-[#dae2fd] hover:border-[#00f0ff]/50 hover:text-[#00f0ff]"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Indicators */}
          <div className="mt-8 flex justify-center gap-2" role="tablist">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ver testimonio ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-8 bg-[#00f0ff]' : 'w-2 bg-[#1E2D4A] hover:bg-[#2A3F66]'
                }`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
