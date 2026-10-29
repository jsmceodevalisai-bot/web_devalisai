import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { ContactModalProvider } from './context/ContactModalContext';
import { CookieProvider } from './context/CookieContext';
import { NavigationProvider, useNavigation } from './context/NavigationContext';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Home Components (in exact sequence from Document 01)
import { ParticleHero } from './components/home/ParticleHero';
import { TechnologyMarquees } from './components/home/TechnologyMarquees';
import { CinematicZoomHero } from './components/home/CinematicZoomHero';
import { OfferingsGrid } from './components/home/OfferingsGrid';
import { SMEInteractiveHero } from './components/home/SMEInteractiveHero';
import { FeaturedProjectsGrid } from './components/home/FeaturedProjectsGrid';
import { KeyMetricsDashboard } from './components/home/KeyMetricsDashboard';
import { PricingSection } from './components/home/PricingSection';
import { TestimonialsCarousel } from './components/home/TestimonialsCarousel';
import { ContactSection } from './components/home/ContactSection';

// Service Landing Template & Data
import { ServiceLandingTemplate } from './components/landing/ServiceLandingTemplate';
import { HowItWorksPage } from './components/pages/HowItWorksPage';
import { LANDING_PAGES_DATA } from './data/landingData';

// Modals & Floating Widgets
import { ContactModal } from './components/modals/ContactModal';
import { CookieConsentBanner } from './components/modals/CookieConsentBanner';
import { CookiePreferencesModal } from './components/modals/CookiePreferencesModal';
import { CookiePolicyModal } from './components/modals/CookiePolicyModal';
import { WhatsAppFloating } from './components/widgets/WhatsAppFloating';
import { InternalChat } from './components/widgets/InternalChat';

const MainRouter: React.FC = () => {
  const { currentPath } = useNavigation();

  const isHowItWorks = currentPath === '/como-funciona' || currentPath === 'como-funciona';
  const landingContent = LANDING_PAGES_DATA[currentPath];

  return (
    <div className="min-h-screen flex flex-col bg-[#0b1326] text-[#dae2fd]">
      <Header />

      <main className="flex-1">
        {isHowItWorks ? (
          <HowItWorksPage />
        ) : landingContent ? (
          <ServiceLandingTemplate content={landingContent} />
        ) : (
          <>
            {/* 4.1 Hero de partículas Develisai -> AI */}
            <ParticleHero />

            {/* 4.2 Tres carruseles de tecnologías */}
            <TechnologyMarquees />

            {/* 4.3 Hero fotográfico con zoom respiratorio */}
            <CinematicZoomHero />

            {/* 4.4 Grilla principal de seis productos y servicios */}
            <OfferingsGrid />

            {/* 4.5 Hero interactivo de apoyo a las pymes con malla elástica */}
            <SMEInteractiveHero />

            {/* 4.6 Grilla de seis proyectos o soluciones destacadas */}
            <FeaturedProjectsGrid />

            {/* Key Metrics Dashboard (Recharts Visualizer) */}
            <KeyMetricsDashboard />

            {/* 4.7 Sección de precios Plan Básico $49.990 CLP con 14 características */}
            <PricingSection />

            {/* 4.8 Carrusel Qué dicen nuestros clientes (5 testimonios) */}
            <TestimonialsCarousel />

            {/* 4.9 Sección de contacto en dos columnas con mapa oficial de Santiago, Chile */}
            <ContactSection />
          </>
        )}
      </main>

      {/* 4.10 Footer corporativo completo */}
      <Footer />

      {/* Global Interactive Floating Controls */}
      <WhatsAppFloating />
      <InternalChat />

      {/* Global Modals */}
      <ContactModal />
      <CookieConsentBanner />
      <CookiePreferencesModal />
      <CookiePolicyModal />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <NavigationProvider>
          <ContactModalProvider>
            <CookieProvider>
              <MainRouter />
            </CookieProvider>
          </ContactModalProvider>
        </NavigationProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
