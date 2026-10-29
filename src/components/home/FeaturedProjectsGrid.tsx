import React from 'react';
import { FEATURED_PROJECTS } from '../../data/landingData';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { Layers, ArrowUpRight, CheckCircle2, FlaskConical } from 'lucide-react';

export const FeaturedProjectsGrid: React.FC = () => {
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-[#060A12] border-b border-[#1E2D4A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff] mb-2">
              <Layers className="h-3.5 w-3.5" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {t.projects.title}
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* 6 Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((proj, idx) => {
            const legacyKeys = [
              'web-corporativa',
              'e-commerce-gourmet',
              'portal-clinico',
              'logistica-express',
              'gestion-inventario',
              'ia-atencion',
            ];
            const trans = t.projects.items[proj.id] || t.projects.items[legacyKeys[idx]];
            const title = trans?.title || proj.title;
            const category = trans?.category || proj.category;
            const description = trans?.description || proj.description;
            const statusLabel = trans?.statusLabel || (
              proj.isDemo
                ? (t.projects.demoBadge || 'Solución Demostrativa de Referencia')
                : (t.projects.verifiedBadge || 'Proyecto Real Verificado')
            );
            const technologies = trans?.technologies || proj.technologies;

            return (
              <article
                key={proj.id}
                className="group flex flex-col justify-between rounded-xl border border-[#1E2D4A] bg-[#0C1527] overflow-hidden hover:border-[#2A3F66] transition-all duration-300"
              >
                <div>
                  {/* Visual Thumbnail */}
                  <div className="relative h-48 w-full overflow-hidden bg-[#111C35]">
                    <img
                      src={proj.imageSrc}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1527] via-transparent to-black/20" />

                    {/* Verification Status Badge */}
                    <div className="absolute top-3 left-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[10px] font-bold backdrop-blur-md border ${
                          proj.isDemo
                            ? 'border-[#38BDF8]/40 bg-[#0C1527]/90 text-[#38BDF8]'
                            : 'border-[#10B981]/40 bg-[#0C1527]/90 text-[#10B981]'
                        }`}
                      >
                        {proj.isDemo ? <FlaskConical className="h-3 w-3" /> : <CheckCircle2 className="h-3 w-3" />}
                        <span>{statusLabel}</span>
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6">
                    <div className="text-[11px] font-mono text-[#00f0ff] uppercase tracking-wider mb-1">
                      {category}
                    </div>
                    <h3 className="font-display text-lg font-bold text-[#F8FAFC] group-hover:text-[#00f0ff] transition-colors mb-2">
                      {title}
                    </h3>
                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="rounded border border-[#1E2D4A] bg-[#111C35] px-2 py-0.5 text-[10px] font-mono text-[#dae2fd]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="px-6 pb-6 pt-3 border-t border-[#1E2D4A]/60">
                  <button
                    onClick={() => openModal({ product: title, origin: t.projects.title || 'Proyectos Destacados' })}
                    className="btn-interactive w-full flex items-center justify-center gap-2 rounded-lg border border-[#2A3F66] bg-[#111C35] py-2.5 text-xs font-semibold text-[#dae2fd] hover:text-[#00f0ff] hover:border-[#00f0ff]/50 cursor-pointer"
                  >
                    <span>{t.projects.similarCta}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
