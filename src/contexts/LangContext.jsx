import { createContext, useContext, useState, useCallback } from 'react';
import translations from '../i18n/translations';

const LangContext = createContext(null);

// Safely resolve a dot-notation key, e.g. 'home.heroTitle1'
function resolve(obj, key) {
  return key.split('.').reduce((acc, part) => (acc ? acc[part] : undefined), obj);
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState('en');

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'te' : 'en'));
  }, []);

  // t('nav.home')  →  translations[lang].nav.home
  const t = useCallback(
    (key) => {
      const val = resolve(translations[lang], key);
      return val !== undefined ? val : resolve(translations['en'], key) ?? key;
    },
    [lang]
  );

  // tr(enVal, teVal) — for inline translations where values come from data arrays
  const tr = useCallback(
    (enVal, teVal) => (lang === 'te' && teVal ? teVal : enVal),
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, setLang, toggleLang, t, tr }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used inside <LangProvider>');
  return ctx;
}
