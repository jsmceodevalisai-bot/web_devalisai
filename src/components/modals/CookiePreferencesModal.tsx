import React, { useState, useEffect } from 'react';
import { useCookies } from '../../context/CookieContext';
import { X, ShieldCheck, Check } from 'lucide-react';

export const CookiePreferencesModal: React.FC = () => {
  const {
    showPreferencesModal,
    closePreferencesModal,
    preferences,
    savePreferences,
    acceptAll,
    rejectOptional,
    openPolicyModal,
  } = useCookies();

  const [analytics, setAnalytics] = useState(false);
  const [advertising, setAdvertising] = useState(false);
  const [customPreferences, setCustomPreferences] = useState(false);

  useEffect(() => {
    if (preferences) {
      setAnalytics(preferences.analytics);
      setAdvertising(preferences.advertising);
      setCustomPreferences(preferences.preferences);
    }
  }, [preferences, showPreferencesModal]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && showPreferencesModal) {
        closePreferencesModal();
      }
    };
    if (showPreferencesModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [showPreferencesModal, closePreferencesModal]);

  if (!showPreferencesModal) return null;

  const handleSave = () => {
    savePreferences({
      analytics,
      advertising,
      preferences: customPreferences,
    });
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-preferences-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#000]/80 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#2A3F66] bg-[#0C1527] p-6 sm:p-8 text-[#dae2fd] shadow-2xl">
        
        {/* Close Button */}
        <button
          onClick={closePreferencesModal}
          aria-label="Cerrar panel de preferencias de cookies"
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
            <h2 id="cookie-preferences-title" className="font-display text-xl font-bold text-[#F8FAFC]">
              Centro de Preferencias de Cookies
            </h2>
            <p className="text-xs text-[#94A3B8] mt-0.5">
              Administra tu consentimiento según la Ley N.° 19.628 y preparación Ley N.° 21.719 de Chile.
            </p>
          </div>
        </div>

        {/* Categories List */}
        <div className="space-y-4">
          
          {/* Categoria 1: Necesarias */}
          <div className="rounded-xl border border-[#1E2D4A] bg-[#060A12] p-4">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-xs font-bold text-[#F8FAFC]">1. Cookies Técnicas Necesarias</h3>
                  <span className="rounded bg-[#1E2D4A] px-2 py-0.5 text-[10px] font-semibold text-[#00f0ff]">
                    Siempre Activas
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#94A3B8] leading-relaxed">
                  Esenciales para la navegación, seguridad de sesión, selector de tema claro/oscuro y registro del propio consentimiento de cookies. No pueden desactivarse.
                </p>
              </div>
              <div className="shrink-0 flex items-center justify-center h-5 w-5 rounded bg-[#00f0ff]/20 text-[#00f0ff]">
                <Check className="h-3.5 w-3.5" />
              </div>
            </div>
          </div>

          {/* Categoria 2: Analítica */}
          <div className="rounded-xl border border-[#1E2D4A] bg-[#111C35] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-[#F8FAFC]">2. Cookies de Analítica (Google Analytics 4)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Permiten recopilar datos agregados y anónimos sobre el rendimiento y páginas más consultadas para mejorar la calidad del software.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#1E2D4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f0ff]"></div>
              </label>
            </div>
          </div>

          {/* Categoria 3: Publicidad */}
          <div className="rounded-xl border border-[#1E2D4A] bg-[#111C35] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-[#F8FAFC]">3. Cookies Publicitarias (Google Ads & Meta)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Utilizadas para medir la efectividad de las campañas comerciales de Develisai en motores de búsqueda y redes profesionales.
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={advertising}
                  onChange={(e) => setAdvertising(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#1E2D4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f0ff]"></div>
              </label>
            </div>
          </div>

          {/* Categoria 4: Preferencias y Contenido Externo */}
          <div className="rounded-xl border border-[#1E2D4A] bg-[#111C35] p-4">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-xs font-bold text-[#F8FAFC]">4. Preferencias y Contenido Externo (Mapas / Recursos)</h3>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  Permite enriquecer la experiencia visual interactiva (como mapas de ubicación de oficinas y tipografías externas optimizadas).
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer shrink-0 mt-1">
                <input
                  type="checkbox"
                  checked={customPreferences}
                  onChange={(e) => setCustomPreferences(e.target.checked)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-[#1E2D4A] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#00f0ff]"></div>
              </label>
            </div>
          </div>

        </div>

        {/* Policy Link */}
        <div className="mt-4 text-center">
          <button
            onClick={() => {
              closePreferencesModal();
              openPolicyModal();
            }}
            className="text-[11px] text-[#00f0ff] hover:underline"
          >
            Consultar la Política de Cookies completa
          </button>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 pt-5 border-t border-[#1E2D4A] flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={rejectOptional}
            className="btn-interactive rounded-lg border border-[#1E2D4A] bg-[#060A12] px-4 py-2.5 text-xs font-semibold text-[#dae2fd] hover:bg-[#111C35]"
          >
            Rechazar todas las opcionales
          </button>

          <div className="flex items-center gap-2.5">
            <button
              onClick={acceptAll}
              className="btn-interactive rounded-lg border border-[#2A3F66] bg-[#111C35] px-4 py-2.5 text-xs font-semibold text-[#dae2fd] hover:bg-[#162343]"
            >
              Aceptar todas
            </button>
            <button
              onClick={handleSave}
              className="btn-interactive rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-5 py-2.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] cursor-pointer"
            >
              Guardar preferencias
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
