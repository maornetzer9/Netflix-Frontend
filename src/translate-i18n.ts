import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import he from './translate/he.json';
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },
  });

  export const changeLanguage = (lng: string) => {
    const resources = { he: he};

    i18n.init({ lng, resources});
};

export default i18n;
