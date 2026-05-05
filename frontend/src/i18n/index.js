// setup translation system (multi-language)
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import fr from './fr';
import en from './en';

const savedLang = localStorage.getItem('fitquest_lang') || 'fr'; // get saved language or default to French

i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: fr },
      en: { translation: en },
    },
    lng: savedLang,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }, // allow React to handle values
  });

export default i18n;