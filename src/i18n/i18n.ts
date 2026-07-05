import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import es from './locales/es.json';
import en from './locales/en.json';

i18n.use(initReactI18next).init({
  resources: {
    es: { translation: es },
    en: { translation: en }
  },
  lng: localStorage.getItem('rumabi-lang') || 'es',
  fallbackLng: 'es',
  interpolation: { escapeValue: false }
});

i18n.on('languageChanged', (lng) => {
  localStorage.setItem('rumabi-lang', lng);
  document.documentElement.setAttribute('lang', lng);
});

export default i18n;
