import React from 'react';
import { HOME_OFFERINGS } from '../../data/landingData';
import { useNavigation } from '../../context/NavigationContext';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { ArrowRight, Sparkles, Globe, ShoppingBag, LayoutDashboard, Smartphone, TrendingUp, Target } from 'lucide-react';

const ICON_MAP: Record<string, React.ReactNode> = {
  Globe: <Globe className="h-5 w-5 text-[#00f0ff]" />,
  ShoppingBag: <ShoppingBag className="h-5 w-5 text-[#00f0ff]" />,
  LayoutDashboard: <LayoutDashboard className="h-5 w-5 text-[#00f0ff]" />,
  Smartphone: <Smartphone className="h-5 w-5 text-[#00f0ff]" />,
  TrendingUp: <TrendingUp className="h-5 w-5 text-[#00f0ff]" />,
  Target: <Target className="h-5 w-5 text-[#00f0ff]" />,
};

export const OfferingsGrid: React.FC = () => {
  const { navigate } = useNavigation();
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  return (
    <section id="servicios-grid" className="py-20 bg-[#060A12] border-b border-[#1E2D4A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#00f0ff] mb-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{t.offerings.badge}</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-[#F8FAFC]">
              {t.offerings.title}
            </h2>
          </div>
          <p className="text-xs text-[#94A3B8] max-w-md leading-relaxed">
            {t.offerings.subtitle}
          </p>
        </div>

        {/* 6-Card Responsive Grid (3 columns on desktop, 2 on tablet, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HOME_OFFERINGS.map((item) => {
            const trans = t.offerings.items[item.id];
            const title = trans?.title || item.title;
            const category = trans?.category || (item.category === 'producto' ? 'Producto' : 'Servicio');
            const badgeText = trans?.badgeText || item.badgeText;
            const shortDescription = trans?.shortDescription || item.shortDescription;
            const highlightBenefit = trans?.highlightBenefit || item.highlightBenefit;

            return (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-2xl border border-[#1E2D4A] bg-[#0C1527] overflow-hidden hover:border-[#2A3F66] hover:shadow-xl hover:shadow-[#00f0ff]/5 transition-all duration-300"
              >
                <div>
                  {/* Header Image Slot with Zero Broken Policy */}
                  <div className="relative h-44 w-full overflow-hidden bg-[#111C35]">
                    <img
                      src={item.imageSrc}
                      alt={title}
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C1527] via-transparent to-black/30" />
                    
                    {/* Category Chip */}
                    <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                      <span className="rounded-md border border-[#2A3F66] bg-[#0C1527]/90 px-2.5 py-1 text-[11px] font-bold text-[#F8FAFC] backdrop-blur-md uppercase tracking-wider">
                        {category}
                      </span>
                      <span className="rounded-md bg-[#00f0ff]/20 px-2 py-0.5 text-[10px] font-bold text-[#00f0ff] backdrop-blur-md">
                        {badgeText}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2.5">
                      <div className="rounded-lg bg-[#111C35] p-2 border border-[#1E2D4A]">
                        {ICON_MAP[item.iconName] || <Globe className="h-5 w-5 text-[#00f0ff]" />}
                      </div>
                      <h3 className="font-display text-xl font-bold text-[#F8FAFC] group-hover:text-[#00f0ff] transition-colors">
                        {title}
                      </h3>
                    </div>

                    <p className="text-xs text-[#94A3B8] leading-relaxed mb-4">
                      {shortDescription}
                    </p>

                    <div className="rounded-lg bg-[#111C35]/60 border border-[#1E2D4A] p-2.5 text-[11px] text-[#dae2fd]">
                      <span className="font-semibold text-[#00f0ff]">★ </span>
                      {highlightBenefit}
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="px-6 pb-6 pt-2 border-t border-[#1E2D4A]/50 flex items-center justify-between gap-3">
                  <button
                    onClick={() => navigate(item.slug)}
                    className="flex items-center gap-1.5 text-xs font-semibold text-[#00f0ff] hover:underline cursor-pointer"
                  >
                    <span>{t.offerings.ctaDetails}</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <button
                    onClick={() => openModal({ product: title, origin: item.slug })}
                    className="btn-interactive rounded-lg bg-[#111C35] border border-[#2A3F66] px-3.5 py-2 text-xs font-bold text-[#F8FAFC] hover:border-[#00f0ff]/50 hover:bg-[#162343] cursor-pointer"
                  >
                    {t.nav.contactButton}
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
