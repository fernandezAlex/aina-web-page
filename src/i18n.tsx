/* eslint-disable react-refresh/only-export-components */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { getSiteContent, type Locale } from './config';

const STORAGE_KEY = 'aina-preferred-locale';
const URL_PARAM = 'lang';

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

const I18nContext = createContext<I18nContextValue | null>(null);

function normalizeLocale(value?: string | null): Locale {
  if (!value) return 'es';

  const lowered = value.toLowerCase();

  if (lowered.startsWith('ca')) return 'ca';
  if (lowered.startsWith('en')) return 'en';
  return 'es';
}

function getUrlLocale(): Locale | null {
  if (typeof window === 'undefined') return null;

  const params = new URLSearchParams(window.location.search);
  const lang = params.get(URL_PARAM);

  if (!lang) return null;

  return normalizeLocale(lang);
}

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'es';

  const urlLocale = getUrlLocale();
  if (urlLocale) return urlLocale;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored) return normalizeLocale(stored);

  return normalizeLocale(window.navigator.languages?.[0] || window.navigator.language);
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale);

  const setLocale = useCallback((nextLocale: Locale) => {
    setLocaleState(nextLocale);

    if (typeof window === 'undefined') return;

    const url = new URL(window.location.href);
    url.searchParams.set(URL_PARAM, nextLocale);
    window.history.replaceState({}, '', url);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  useEffect(() => {
    const handlePopState = () => {
      const urlLocale = getUrlLocale();

      if (urlLocale) {
        setLocaleState(urlLocale);
      }
    };

    window.addEventListener('popstate', handlePopState);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const value = useMemo(() => ({ locale, setLocale }), [locale, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }

  return context;
}

export function useSiteContent() {
  const { locale } = useI18n();

  return useMemo(() => getSiteContent(locale), [locale]);
}
