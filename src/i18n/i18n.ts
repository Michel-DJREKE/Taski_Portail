
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languageDetector';


import frTranslation from './locales/fr/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
  en: {
    translation: enTranslation
  },
  fr: {
    translation: frTranslation
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    // fallbackLng: 'fr',
    // detection: {
    //   order: ['localStorage', 'navigator'],
    //   caches: ['localStorage'],
    //   lookupLocalStorage: 'i18nextLng'
    // },
    // interpolation: {
    //   escapeValue: false
    // },
    // debug: true 
    lng:'fr'
  });

if (!localStorage.getItem('i18nextLng')) {
  localStorage.setItem('i18nextLng', 'fr');
  i18n.changeLanguage('fr');
} else {
  const savedLang = localStorage.getItem('i18nextLng');
  if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
    i18n.changeLanguage(savedLang);
    console.log(`Language loaded from localStorage: ${savedLang}`);
  }
}

export default i18n;
