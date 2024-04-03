// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations
const resources = {
  en: {
    translation: {
      greeting: 'Hello!',
      // other English translations...
      khutbat: 'KHUTBAT',
      haqeeqat_e_islam: 'Haqeeqat e islam',
    },
  },
  ur: {
    translation: {
      greeting: 'ہیلو!',
      // other Urdu translations...
      khutbat: 'خطبات',
      haqeeqat_e_islam: 'حقیقتِ اسلام',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Set default language here
    fallbackLng: 'en', // Fallback language in case translation isn't found
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
