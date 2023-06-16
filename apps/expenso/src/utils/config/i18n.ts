import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import LanguageDetector from 'i18next-browser-languagedetector'
import en from '@locales/en/translation.json'
import vi from '@locales/vi/translation.json'

const resources = {
  en: {
    translation: en,
  },
  vi: {
    translation: vi,
  },
}

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    lng: 'en',
    fallbackLng: 'en',
    debug: false,
    resources,
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n
