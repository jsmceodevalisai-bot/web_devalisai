import React from 'react';
import { COMPANY_INFO } from '../../data/landingData';
import { useLanguage } from '../../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloating: React.FC = () => {
  const { t } = useLanguage();
  const whatsappUrl = `${COMPANY_INFO.whatsappBaseUrl}?text=${encodeURIComponent(
    t.whatsapp.defaultText
  )}`;

  return (
    <aside aria-label="Acceso directo a WhatsApp oficial" className="fixed bottom-6 right-6 z-30">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Develisai por WhatsApp"
        className="btn-interactive group flex h-14 w-14 items-center justify-center rounded-full bg-[#10B981] text-white shadow-[0_4px_25px_rgba(16,185,129,0.4)] hover:bg-[#059669] focus:outline-none focus-visible:ring-4 focus-visible:ring-[#10B981]/50 cursor-pointer"
      >
        <MessageCircle className="h-7 w-7" />
        
        {/* Tooltip on hover */}
        <span className="pointer-events-none absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[#10B981]/40 bg-[#0C1527] px-3 py-1.5 text-xs font-semibold text-[#10B981] shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 hidden sm:block">
          WhatsApp Oficial Develisai
        </span>
      </a>
    </aside>
  );
};
