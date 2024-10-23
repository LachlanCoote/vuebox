import en from '../locales/en.json'
import es from '../locales/es.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-AU',
  missingWarn: false,
  fallbackWarn: false,
  messages: {
    en,
    es,
  },
  numberFormats: {
    'en-AU': {
      currency: {
        style: 'currency',
        currency: 'AUD',
      },
    },
    'en-GB': {
      currency: {
        style: 'currency',
        currency: 'GBP',
      },
    },
    'es-ES': {
      currency: {
        style: 'currency',
        currency: 'EUR',
      },
    },
  },
}))
