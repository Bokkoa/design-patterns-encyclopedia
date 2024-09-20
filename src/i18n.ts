import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { translationFactory } from './store/creationals/factory';

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en: {
      translation: {
        ...translationFactory.en,
        title: 'The Patterns Collection'
      }
    },
    es: {
      translation: {
        ...translationFactory.en,
        title: 'La colección de patrones'
      }
    }
  }
});

export default i18n;