import React from 'react';
import { useCookies } from '../../context/CookieContext';
import { useLanguage } from '../../context/LanguageContext';
import { ShieldCheck, Settings, XCircle, CheckCircle2 } from 'lucide-react';

export const CookieConsentBanner: React.FC = () => {
  const { showBanner, acceptAll, rejectOptional, openPreferencesModal, openPolicyModal } = useCookies();
  const { t } = useLanguage();

  if (!showBanner) return null;

  return (
    <aside
      aria-label="Gestión de cookies y privacidad"
      className="fixed bottom-0 inset-x-0 z-40 border-t border-[#2A3F66] bg-[#0C1527]/98 p-4 sm:p-5 shadow-2xl backdrop-blur-md transition-all duration-300"
    >
      <div className="mx-auto flex max-w-7xl flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        
        {/* Info Text */}
        <div className="flex items-start gap-3.5 max-w-3xl">
          <div className="rounded-lg bg-[#00f0ff]/10 p-2 text-[#00f0ff] shrink-0 mt-0.5">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-[#F8FAFC]">
              {t.cookies.title}
            </h3>
            <p className="text-xs leading-relaxed text-[#94A3B8]">
              {t.cookies.description}
            </p>
            <div className="pt-0.5">
              <button
                onClick={openPolicyModal}
                className="text-[11px] font-medium text-[#00f0ff] hover:underline"
              >
                {t.footer.cookiePolicy}
              </button>
            </div>
          </div>
        </div>

        {/* Action Buttons: Equal prominence, no dark patterns */}
        <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto">
          <button
            onClick={openPreferencesModal}
            className="btn-interactive flex items-center justify-center gap-1.5 rounded-lg border border-[#2A3F66] bg-[#111C35] px-3.5 py-2.5 text-xs font-semibold text-[#dae2fd] hover:bg-[#162343] hover:border-[#00f0ff]/40 flex-1 sm:flex-initial"
          >
            <Settings className="h-3.5 w-3.5 text-[#94A3B8]" />
            <span>{t.cookies.configure}</span>
          </button>

          <button
            onClick={rejectOptional}
            className="btn-interactive flex items-center justify-center gap-1.5 rounded-lg border border-[#1E2D4A] bg-[#060A12] px-3.5 py-2.5 text-xs font-semibold text-[#dae2fd] hover:bg-[#111C35] flex-1 sm:flex-initial"
          >
            <XCircle className="h-3.5 w-3.5 text-[#EF4444]" />
            <span>{t.cookies.rejectNonEssential}</span>
          </button>

          <button
            onClick={acceptAll}
            className="btn-interactive flex items-center justify-center gap-1.5 rounded-lg bg-[#00838f] dark:bg-[#00f0ff] px-4 py-2.5 text-xs font-bold text-white dark:text-[#060e20] shadow-[0_0_15px_rgba(0,240,255,0.25)] hover:bg-[#006b75] dark:hover:bg-[#7df4ff] flex-1 sm:flex-initial cursor-pointer"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-white dark:text-[#060e20]" />
            <span>{t.cookies.acceptAll}</span>
          </button>
        </div>

      </div>
    </aside>
  );
};
