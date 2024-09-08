import i18n from 'i18next'; 
import {initReactI18next} from 'react-i18next'; 
import en from './languages/en.json'; 
import vi from './languages/vi.json'; 
  
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: en,
      vi: vi,
    },
    lng: "en", // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });
  
export default i18n; 