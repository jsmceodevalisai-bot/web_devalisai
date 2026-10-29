import React from 'react';
import { useCookies } from '../../context/CookieContext';
import { useNavigation } from '../../context/NavigationContext';
import { useContactModal } from '../../context/ContactModalContext';
import { useLanguage } from '../../context/LanguageContext';
import { COMPANY_INFO } from '../../data/landingData';
import { ShieldCheck, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer: React.FC = () => {
  const { openPreferencesModal, openPolicyModal } = useCookies();
  const { navigate } = useNavigation();
  const { openModal } = useContactModal();
  const { t } = useLanguage();

  return (
    <footer className="border-t border-[#1E2D4A] bg-[#060A12] text-[#94A3B8] transition-colors duration-200">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          
          {/* Col 1 & 2: Brand Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center">
              <div className="bg-white rounded-lg px-2.5 py-1.5 inline-flex items-center justify-center">
                <img
                  src="/images/devalisai-logo_grande_fondoblanco_8ca86973.svg"
                  alt="DevalisAI"
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            
            <p className="text-sm leading-relaxed text-[#94A3B8] max-w-sm">
              {t.footer.brandDesc}
            </p>

            <div className="space-y-2 pt-2 text-xs text-[#94A3B8]">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#00f0ff] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#00f0ff] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#00f0ff] transition-colors">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>

            {/* Social channels */}
            <div className="flex items-center gap-4 pt-3">
              {COMPANY_INFO.social.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg border border-[#1E2D4A] bg-[#0C1527] px-3.5 py-1.5 text-xs font-medium text-[#dae2fd] hover:border-[#00f0ff]/50 hover:text-[#00f0ff] transition-all flex items-center gap-1.5"
                >
                  <span>{s.name}</span>
                  <ExternalLink className="h-3 w-3 opacity-60" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 3: Soluciones (Productos) */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">{t.nav.products}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/productos/paginas-web')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['paginas-web']?.title || 'Páginas Web'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/productos/tiendas-online')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['tiendas-online']?.title || 'Tiendas Online'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/productos/saas')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['saas']?.title || 'Soluciones SaaS'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/productos/aplicaciones-moviles')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  App Móvil iOS & Android
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Servicios */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">{t.nav.services}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/servicios/agenda-online')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['ia']?.title || 'Inteligencia Artificial'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/servicios/posicionamiento-seo')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['consultoria']?.title || 'Consultoría Tecnológica'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/servicios/google-ads')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.offerings.items['automatizacion']?.title || 'Automatización'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => openModal({ product: 'Plan Básico' })}
                  className="text-[#00f0ff] hover:underline transition-colors text-left font-semibold cursor-pointer"
                >
                  {t.pricing.cta}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 5: Privacidad & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#F8FAFC]">{t.footer.legalCol}</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => navigate('/como-funciona')}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer font-medium"
                >
                  {t.nav.howItWorks}
                </button>
              </li>
              <li>
                <button
                  onClick={openPreferencesModal}
                  className="flex items-center gap-1.5 text-[#00f0ff] hover:underline text-left cursor-pointer font-medium"
                >
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>{t.footer.cookieSettings}</span>
                </button>
              </li>
              <li>
                <button
                  onClick={openPolicyModal}
                  className="hover:text-[#00f0ff] transition-colors text-left cursor-pointer"
                >
                  {t.footer.cookiePolicy}
                </button>
              </li>
              <li>
                <span className="text-[#64748B]">
                  Develisai AI & Software Engineering
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-[#1E2D4A] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © {new Date().getFullYear()} Develisai. {t.footer.rights}
          </div>
          <div className="flex items-center gap-6">
            <span>Santiago, Chile</span>
            <span>·</span>
            <span>{t.particleHero.stripMotto}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
