import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, Language } from '../../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';

export const LanguageSelector: React.FC<{ isMobileMenu?: boolean }> = ({ isMobileMenu = false }) => {
  const { language, setLanguage, currentOption, availableLanguages, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  if (isMobileMenu) {
    return (
      <div className="w-full pt-2 border-t border-[#1E2D4A]/60">
        <div className="flex items-center gap-2 mb-2 px-1 text-xs font-semibold text-[#94A3B8]">
          <Globe className="h-3.5 w-3.5 text-[#00f0ff]" />
          <span>{t.nav.languageSelect}</span>
        </div>
        <div className="grid grid-cols-3 gap-1.5">
          {availableLanguages.map((item) => {
            const isActive = item.code === language;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => handleSelect(item.code)}
                className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#00f0ff]/15 text-[#00f0ff] border border-[#00f0ff]/40 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                    : 'bg-[#0C1527] border border-[#1E2D4A] text-[#94A3B8] hover:text-white hover:border-[#2A3F66]'
                }`}
              >
                <span>{item.flag}</span>
                <span className="font-mono">{item.shortCode}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Trigger Button positioned strictly between Theme and WhatsApp */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-label={`${t.nav.languageSelect}: ${currentOption.nativeName}`}
        className="btn-interactive flex h-10 items-center gap-1.5 rounded-lg border border-[#1E2D4A] bg-[#0C1527] px-2.5 sm:px-3 text-xs font-semibold text-[#dae2fd] hover:text-[#00f0ff] hover:border-[#2A3F66] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00f0ff] transition-all cursor-pointer shadow-sm"
      >
        <span className="text-sm leading-none">{currentOption.flag}</span>
        <span className="font-mono tracking-wider font-bold text-[11px] sm:text-xs text-[#00f0ff]">
          {currentOption.shortCode}
        </span>
        <ChevronDown
          className={`h-3 w-3 text-[#94A3B8] transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-[#00f0ff]' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          role="listbox"
          aria-label={t.nav.languageSelect}
          className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-[#1E2D4A] bg-[#0C1527]/98 p-1.5 shadow-[0_10px_30px_rgba(0,0,0,0.6)] backdrop-blur-xl z-50 animate-in fade-in-0 zoom-in-95 duration-150"
        >
          <div className="px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider text-[#64748B] border-b border-[#1E2D4A]/60 flex items-center gap-1.5 mb-1">
            <Globe className="h-3 w-3 text-[#00f0ff]" />
            <span>{t.nav.languageSelect}</span>
          </div>

          <div className="space-y-0.5">
            {availableLanguages.map((item) => {
              const isSelected = item.code === language;
              return (
                <button
                  key={item.code}
                  role="option"
                  aria-selected={isSelected}
                  type="button"
                  onClick={() => handleSelect(item.code)}
                  className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#00f0ff]/15 text-[#00f0ff] font-bold border border-[#00f0ff]/30 shadow-[0_0_12px_rgba(0,240,255,0.15)]'
                      : 'text-[#CBD5E1] hover:bg-[#1E2D4A]/70 hover:text-white border border-transparent'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{item.flag}</span>
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{item.nativeName}</span>
                      <span className="text-[10px] text-[#64748B] font-mono leading-none">
                        {item.name} ({item.shortCode})
                      </span>
                    </div>
                  </div>
                  {isSelected && <Check className="h-3.5 w-3.5 text-[#00f0ff] shrink-0" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
