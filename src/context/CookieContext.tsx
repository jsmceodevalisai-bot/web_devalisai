import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { CookieContextType, CookiePreferences } from '../types';

const STORAGE_KEY = 'develisai_cookie_consent_v2';
const CURRENT_VERSION = '2.1.0';

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  advertising: false,
  preferences: false,
  timestamp: Date.now(),
  version: CURRENT_VERSION,
};

const CookieContext = createContext<CookieContextType | undefined>(undefined);

// Extend window for gtag
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export const CookieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<CookiePreferences | null>(null);
  const [hasConsented, setHasConsented] = useState<boolean>(false);
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showPreferencesModal, setShowPreferencesModal] = useState<boolean>(false);
  const [showPolicyModal, setShowPolicyModal] = useState<boolean>(false);

  // Initialize Google Consent Mode v2 in Basic mode (all denied by default)
  const initializeConsentMode = useCallback(() => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    window.gtag = gtag;

    gtag('consent', 'default', {
      analytics_storage: 'denied',
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      wait_for_update: 500,
    });
  }, []);

  // Update consent signals based on user preferences
  const updateConsentSignals = useCallback((prefs: CookiePreferences) => {
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: prefs.analytics ? 'granted' : 'denied',
        ad_storage: prefs.advertising ? 'granted' : 'denied',
        ad_user_data: prefs.advertising ? 'granted' : 'denied',
        ad_personalization: prefs.advertising ? 'granted' : 'denied',
      });
    }
  }, []);

  useEffect(() => {
    initializeConsentMode();

    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed: CookiePreferences = JSON.parse(stored);
        if (parsed.version === CURRENT_VERSION) {
          setPreferences(parsed);
          setHasConsented(true);
          setShowBanner(false);
          updateConsentSignals(parsed);
          return;
        }
      }
    } catch {
      // Error reading localStorage
    }

    // If no valid consent stored, show banner
    setShowBanner(true);
  }, [initializeConsentMode, updateConsentSignals]);

  const acceptAll = () => {
    const fullConsent: CookiePreferences = {
      necessary: true,
      analytics: true,
      advertising: true,
      preferences: true,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(fullConsent));
    } catch {
      // ignore
    }
    setPreferences(fullConsent);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferencesModal(false);
    updateConsentSignals(fullConsent);
  };

  const rejectOptional = () => {
    const essentialOnly: CookiePreferences = {
      necessary: true,
      analytics: false,
      advertising: false,
      preferences: false,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(essentialOnly));
    } catch {
      // ignore
    }
    setPreferences(essentialOnly);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferencesModal(false);
    updateConsentSignals(essentialOnly);
  };

  const savePreferences = (customPrefs: { analytics: boolean; advertising: boolean; preferences: boolean }) => {
    const updated: CookiePreferences = {
      necessary: true,
      analytics: customPrefs.analytics,
      advertising: customPrefs.advertising,
      preferences: customPrefs.preferences,
      timestamp: Date.now(),
      version: CURRENT_VERSION,
    };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    } catch {
      // ignore
    }
    setPreferences(updated);
    setHasConsented(true);
    setShowBanner(false);
    setShowPreferencesModal(false);
    updateConsentSignals(updated);
  };

  const openPreferencesModal = () => setShowPreferencesModal(true);
  const closePreferencesModal = () => setShowPreferencesModal(false);
  const openPolicyModal = () => setShowPolicyModal(true);
  const closePolicyModal = () => setShowPolicyModal(false);

  return (
    <CookieContext.Provider
      value={{
        preferences: preferences || DEFAULT_PREFERENCES,
        hasConsented,
        showBanner,
        showPreferencesModal,
        showPolicyModal,
        acceptAll,
        rejectOptional,
        savePreferences,
        openPreferencesModal,
        closePreferencesModal,
        openPolicyModal,
        closePolicyModal,
      }}
    >
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};
