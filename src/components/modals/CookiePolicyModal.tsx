import React, { useEffect } from 'react';
import { useCookies } from '../../context/CookieContext';
import { useLanguage } from '../../context/LanguageContext';
import { X, ShieldCheck } from 'lucide-react';

export const CookiePolicyModal: React.FC = () => {
  const { showPolicyModal, closePolicyModal, openPreferencesModal } = useCookies();
  const { language, t } = useLanguage();
  const isEn = language === 'en';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPolicyModal) {
        closePolicyModal();
      }
    };
    if (showPolicyModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showPolicyModal, closePolicyModal]);

  if (!showPolicyModal) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-policy-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-8 text-[#dae2fd] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={closePolicyModal}
          aria-label="Cerrar modal de política de cookies"
          className="absolute right-5 top-5 rounded-lg p-2 text-[#94A3B8] hover:bg-[#162343] hover:text-[#F8FAFC] transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-6 flex items-center gap-3">
          <div className="rounded-lg bg-[#00f0ff]/10 p-2 text-[#00f0ff]">
            <ShieldCheck className="h-6 w-6" />
          </div>
          <div>
            <h2 id="cookie-policy-title" className="font-display text-xl font-bold text-[#F8FAFC]">
              {t.cookies.policyTitle || (isEn ? "Develisai Cookie & Privacy Policy" : "Política de Cookies y Privacidad de Develisai")}
            </h2>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              {t.cookies.policySubtitle || (isEn ? "Regulatory framework: Chilean Data Protection Law No. 19,628 and Law No. 21,719." : "Marco normativo: Ley N.° 19.628 y preparación Ley N.° 21.719 de Protección de Datos Personales (Chile).")}
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 text-xs text-[#94A3B8] leading-relaxed">
          {isEn ? (
            <>
              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">1. What are cookies and how do we use them?</h3>
                <p>
                  Cookies and local storage technologies are small data files placed on your device when you browse the Develisai website. Our platform is informational and geared towards commercial inquiries for software engineering, web design, and AI services, with zero automatic credit card charging or mandatory account creation.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">2. Cookie Categories on this Website</h3>
                <ul className="list-disc pl-5 space-y-1 text-[#dae2fd]">
                  <li>
                    <strong>Essential Technical Cookies:</strong> Strictly necessary for site navigation, session security, persisting dark/light mode, and recording your cookie consent choices. Cannot be deactivated.
                  </li>
                  <li>
                    <strong>Analytics Cookies (Google Analytics 4):</strong> Gather anonymous and aggregated telemetry to optimize technical performance. Implemented via Google Consent Mode v2 Basic.
                  </li>
                  <li>
                    <strong>Advertising Cookies (Google Ads & Meta Pixel):</strong> Used to evaluate the reach of professional engineering campaigns on commercial search networks.
                  </li>
                  <li>
                    <strong>Preferences & External Resources:</strong> Enable interactive features such as embedded office maps and fast web typography.
                  </li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">3. Google Consent Mode v2 — Basic Mode</h3>
                <p>
                  By default, all tracking signals (analytics, marketing, personalization) initialize in a <code className="text-[#00f0ff]">denied</code> state. Third-party tools only execute once explicit affirmative consent is granted.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">4. Modifying or Revoking Consent</h3>
                <p>
                  You can update or revoke your consent preferences at any time by clicking <strong>«Cookie Settings»</strong> located in the website footer. Revocations immediately cease corresponding telemetry.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">5. Data Privacy Officer Contact</h3>
                <p>
                  For inquiries regarding personal data processing, email our Privacy Team at <a href="mailto:contacto@develisai.com" className="text-[#00f0ff] hover:underline">contacto@develisai.com</a> or visit our offices at Av. Providencia 1208, Suite 702, Santiago, Chile.
                </p>
              </section>
            </>
          ) : (
            <>
              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">1. ¿Qué son las cookies y cómo las utilizamos?</h3>
                <p>
                  Las cookies y tecnologías de almacenamiento local son pequeños archivos que se almacenan en su dispositivo al visitar la web corporativa de Develisai. Nuestro sitio web es exclusivamente de carácter informativo y captación de contactos comerciales para servicios de ingeniería y software, sin realizar ventas automáticas con tarjeta en línea ni registro de cuentas de usuarios.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">2. Categorías de cookies en este sitio</h3>
                <ul className="list-disc pl-5 space-y-1 text-[#dae2fd]">
                  <li>
                    <strong>Cookies Técnicas Necesarias:</strong> Imprescindibles para la navegación básica, seguridad, guardar su preferencia de tema (claro/oscuro) y registrar su elección de cookies. No pueden deshabilitarse.
                  </li>
                  <li>
                    <strong>Cookies Analíticas (Google Analytics 4):</strong> Permiten recopilar estadísticas de visita anónimas y agregadas para optimizar el rendimiento técnico. Implementado mediante Google Consent Mode v2 en modo básico.
                  </li>
                  <li>
                    <strong>Cookies Publicitarias (Google Ads & Meta Pixel):</strong> Utilizadas para medir la efectividad de campañas publicitarias profesionales en motores de búsqueda.
                  </li>
                  <li>
                    <strong>Preferencias y Recursos Externos:</strong> Permiten la carga de mapas de ubicación interactivos (OpenStreetMap / Google Maps) para ubicar nuestras oficinas.
                  </li>
                </ul>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">3. Google Consent Mode v2 — Modo Basic</h3>
                <p>
                  Por defecto, todas las señales de consentimiento (analítica, publicidad, personalización) se inician en estado denegado (<code className="text-[#00f0ff]">denied</code>). Las herramientas de terceros correspondientes solo se activan cuando el usuario expresa su consentimiento afirmativo.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">4. Revocación y Modificación del Consentimiento</h3>
                <p>
                  Usted puede modificar o revocar su consentimiento en cualquier momento haciendo clic en el enlace permanente <strong>«Preferencias de cookies»</strong> ubicado en el pie de página de nuestro sitio web. Al revocar un permiso, se suspenden de inmediato las ejecuciones correspondientes.
                </p>
              </section>

              <section className="space-y-1.5">
                <h3 className="text-sm font-bold text-[#F8FAFC]">5. Contacto del Responsable de Datos</h3>
                <p>
                  Para cualquier consulta sobre el tratamiento de sus datos personales, puede escribir a nuestro Oficial de Privacidad a <a href="mailto:contacto@develisai.com" className="text-[#00f0ff] hover:underline">contacto@develisai.com</a> o visitarnos en Av. Providencia 1208, Oficina 702, Santiago, Chile.
                </p>
              </section>
            </>
          )}
        </div>

        {/* Modal Actions */}
        <div className="mt-8 pt-5 border-t border-[#1E2D4A] flex items-center justify-between">
          <button
            onClick={() => {
              closePolicyModal();
              openPreferencesModal();
            }}
            className="btn-interactive rounded-lg border border-[#2A3F66] bg-[#111C35] px-4 py-2 text-xs font-semibold text-[#00f0ff] hover:bg-[#162343]"
          >
            {isEn ? "Configure preferences" : "Configurar mis preferencias"}
          </button>
          <button
            onClick={closePolicyModal}
            className="btn-interactive rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-5 py-2 text-xs font-bold text-white dark:text-[#060e20] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
          >
            {isEn ? "Understood" : "Entendido"}
          </button>
        </div>

      </div>
    </div>
  );
};
