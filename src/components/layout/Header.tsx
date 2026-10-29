import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';
import { useContactModal } from '../../context/ContactModalContext';
import { useNavigation } from '../../context/NavigationContext';
import { LanguageSelector } from './LanguageSelector';
import { COMPANY_INFO } from '../../data/landingData';
import {
  Sun,
  Moon,
  MessageCircle,
  Menu,
  X,
  ChevronDown,
  Globe,
  ShoppingBag,
  LayoutDashboard,
  Smartphone,
  TrendingUp,
  Target,
  CalendarDays,
} from 'lucide-react';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const { openModal } = useContactModal();
  const { currentPath, navigate } = useNavigation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<'productos' | 'servicios' | null>(null);

  const navRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (path: string) => {
    navigate(path);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  const handleSectionScroll = (sectionId: string) => {
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        el?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#1E2D4A] bg-[#0b1326]/90 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        
        {/* Zone 1: Official SVG Brand Logo - App icon on mobile, horizontal logo on desktop */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] rounded-lg cursor-pointer"
            aria-label="DevalisAI - Ir a Inicio"
          >
            {/* Mobile: App Icon */}
            <div className="flex sm:hidden items-center justify-center">
              <img
                src="/assets/aistudio/devalisai-icono_ebd3a920.svg"
                alt="DevalisAI"
                className="h-10 w-10 object-contain rounded-xl shadow-sm"
              />
            </div>
            {/* Desktop: Horizontal Full Brand Logo with White Background */}
            <div className="hidden sm:flex bg-white rounded-lg px-2.5 py-1.5 items-center justify-center">
              <img
                src="/assets/aistudio/devalisai-logo_grande_fondoblanco_8ca86973.svg"
                alt="DevalisAI"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </button>
        </div>

        {/* Zone 2: Navigation Links with Dropdowns */}
        <nav ref={navRef} className="hidden lg:flex items-center gap-7 text-sm font-medium text-[#94A3B8]" aria-label="Navegación principal">
          <button
            onClick={() => handleNavClick('/')}
            className={`whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer ${
              currentPath === '/' ? 'text-[#00f0ff] font-semibold' : ''
            }`}
          >
            {t.nav.home}
          </button>

          {/* Dropdown Productos */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'productos' ? null : 'productos')}
              onMouseEnter={() => setActiveDropdown('productos')}
              aria-expanded={activeDropdown === 'productos'}
              className={`flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer ${
                currentPath.startsWith('/productos') ? 'text-[#00f0ff] font-semibold' : ''
              }`}
            >
              <span>{t.nav.products}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'productos' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'productos' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-[#2A3F66] bg-[#0C1527] p-2 shadow-2xl shadow-[#000]/60 ring-1 ring-[#00f0ff]/10"
              >
                <button
                  onClick={() => handleNavClick('/productos/paginas-web')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <Globe className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['paginas-web']?.title || 'Páginas Web'}</div>
                    <div className="text-[11px] text-[#64748B]">Desde $49.990 CLP</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/productos/tiendas-online')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <ShoppingBag className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['tiendas-online']?.title || 'Tiendas Online'}</div>
                    <div className="text-[11px] text-[#64748B]">{t.nav.megaMenu.ecommerceDesc}</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/productos/saas')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <LayoutDashboard className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['saas']?.title || 'Soluciones SaaS'}</div>
                    <div className="text-[11px] text-[#64748B]">{t.nav.megaMenu.saasDesc}</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/productos/aplicaciones-moviles')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <Smartphone className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">App Móvil iOS & Android</div>
                    <div className="text-[11px] text-[#64748B]">PWA & Nativo</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          {/* Dropdown Servicios */}
          <div className="relative">
            <button
              onClick={() => setActiveDropdown(activeDropdown === 'servicios' ? null : 'servicios')}
              onMouseEnter={() => setActiveDropdown('servicios')}
              aria-expanded={activeDropdown === 'servicios'}
              className={`flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer ${
                currentPath.startsWith('/servicios') ? 'text-[#00f0ff] font-semibold' : ''
              }`}
            >
              <span>{t.nav.services}</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === 'servicios' ? 'rotate-180' : ''}`} />
            </button>

            {activeDropdown === 'servicios' && (
              <div
                onMouseLeave={() => setActiveDropdown(null)}
                className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-[#2A3F66] bg-[#0C1527] p-2 shadow-2xl shadow-[#000]/60 ring-1 ring-[#00f0ff]/10"
              >
                <button
                  onClick={() => handleNavClick('/servicios/agenda-online')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <CalendarDays className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['ia']?.title || 'IA'}</div>
                    <div className="text-[11px] text-[#64748B]">{t.offerings.items['ia']?.badgeText || 'IA Generativa'}</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/servicios/posicionamiento-seo')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <TrendingUp className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['consultoria']?.title || 'Consultoría'}</div>
                    <div className="text-[11px] text-[#64748B]">{t.offerings.items['consultoria']?.badgeText || 'Estratégico'}</div>
                  </div>
                </button>
                <button
                  onClick={() => handleNavClick('/servicios/google-ads')}
                  className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-xs transition-colors hover:bg-[#162343] hover:text-[#00f0ff]"
                >
                  <Target className="h-4 w-4 text-[#00f0ff] shrink-0" />
                  <div>
                    <div className="font-semibold text-[#F8FAFC]">{t.offerings.items['automatizacion']?.title || 'Automatización'}</div>
                    <div className="text-[11px] text-[#64748B]">{t.offerings.items['automatizacion']?.badgeText || 'Eficiencia'}</div>
                  </div>
                </button>
              </div>
            )}
          </div>

          <button
            onClick={() => handleSectionScroll('metricas')}
            className="whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer"
          >
            {t.nav.metrics}
          </button>

          <button
            onClick={() => handleSectionScroll('testimonios')}
            className="whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer"
          >
            {t.nav.clients}
          </button>

          <button
            onClick={() => handleNavClick('/como-funciona')}
            className={`whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer ${
              currentPath === '/como-funciona' ? 'text-[#00f0ff] font-semibold' : ''
            }`}
          >
            {t.nav.howItWorks}
          </button>

          <button
            onClick={() => handleSectionScroll('contacto')}
            className="whitespace-nowrap transition-colors hover:text-[#00f0ff] cursor-pointer"
          >
            {t.nav.contact}
          </button>
        </nav>

        {/* Zone 3: Controls (Theme, Language, WhatsApp, Primary CTA Contactar) */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Theme Switcher */}
          <button
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? t.nav.themeDark : t.nav.themeLight}
            className="btn-interactive flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E2D4A] bg-[#0C1527] text-[#94A3B8] hover:text-[#00f0ff] hover:border-[#2A3F66] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff]"
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Language Selector: strictly between Theme and WhatsApp */}
          <LanguageSelector />

          {/* WhatsApp Direct - oculto en móvil, visible en desktop */}
          <a
            href={`${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(t.whatsapp.defaultText)}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp oficial"
            className="btn-interactive hidden md:flex h-10 items-center gap-2 rounded-lg border border-[#1E2D4A] bg-[#0C1527] px-3.5 text-xs font-semibold text-[#10B981] hover:border-[#10B981]/40 hover:bg-[#10B981]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            <MessageCircle className="h-4 w-4" />
            <span>{t.nav.whatsappButton}</span>
          </a>

          {/* Primary CTA Contactar */}
          <button
            onClick={() => openModal({ origin: currentPath, product: 'Consulta General' })}
            className="btn-interactive flex h-10 items-center justify-center rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-4 sm:px-5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_20px_rgba(0,240,255,0.25)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] cursor-pointer whitespace-nowrap"
          >
            {t.nav.contactButton}
          </button>

          {/* Mobile hamburger menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú de navegación'}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-[#1E2D4A] bg-[#0C1527] text-[#94A3B8] hover:text-[#00f0ff]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#1E2D4A] bg-[#0C1527] px-6 py-5 shadow-2xl">
          <div className="flex flex-col gap-3 text-sm">
            <button
              onClick={() => handleNavClick('/')}
              className={`text-left py-2 px-3 rounded-md transition-colors ${
                currentPath === '/' ? 'bg-[#162343] text-[#00f0ff] font-semibold' : 'text-[#dae2fd]'
              }`}
            >
              Inicio
            </button>

            <div className="pt-2 pb-1 border-t border-[#1E2D4A] text-xs font-bold uppercase tracking-wider text-[#64748B] px-3">
              Productos
            </div>
            <button
              onClick={() => handleNavClick('/productos/paginas-web')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Páginas Web (desde $49.990 CLP)
            </button>
            <button
              onClick={() => handleNavClick('/productos/tiendas-online')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Tiendas Online (E-Commerce)
            </button>
            <button
              onClick={() => handleNavClick('/productos/saas')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Soluciones SaaS Cloud
            </button>
            <button
              onClick={() => handleNavClick('/productos/aplicaciones-moviles')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Aplicaciones Móviles iOS & Android
            </button>

            <div className="pt-2 pb-1 border-t border-[#1E2D4A] text-xs font-bold uppercase tracking-wider text-[#64748B] px-3">
              Servicios
            </div>
            <button
              onClick={() => handleNavClick('/servicios/agenda-online')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Agenda Online de Reservas
            </button>
            <button
              onClick={() => handleNavClick('/servicios/posicionamiento-seo')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Posicionamiento SEO en Google
            </button>
            <button
              onClick={() => handleNavClick('/servicios/google-ads')}
              className="text-left py-1.5 px-3 rounded-md text-xs text-[#dae2fd] hover:text-[#00f0ff]"
            >
              Campañas Google Ads
            </button>

            <div className="pt-3 border-t border-[#1E2D4A] flex flex-col gap-2">
              <button
                onClick={() => handleSectionScroll('metricas')}
                className="text-left py-1.5 px-3 text-xs text-[#dae2fd] hover:text-[#00f0ff]"
              >
                Métricas de Impacto & Rendimiento
              </button>
              <button
                onClick={() => handleSectionScroll('testimonios')}
                className="text-left py-1.5 px-3 text-xs text-[#dae2fd] hover:text-[#00f0ff]"
              >
                Clientes & Testimonios
              </button>
              <button
                onClick={() => handleNavClick('/como-funciona')}
                className={`text-left py-1.5 px-3 text-xs hover:text-[#00f0ff] ${
                  currentPath === '/como-funciona' ? 'text-[#00f0ff] font-semibold' : 'text-[#dae2fd]'
                }`}
              >
                {t.nav.howItWorks}
              </button>
              <button
                onClick={() => handleSectionScroll('contacto')}
                className="text-left py-1.5 px-3 text-xs text-[#dae2fd] hover:text-[#00f0ff]"
              >
                {t.nav.contact}
              </button>
            </div>

            {/* Mobile Language Selector */}
            <LanguageSelector isMobileMenu={true} />
          </div>
        </div>
      )}
    </header>
  );
};
