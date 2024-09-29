// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: '/vuebox/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/vuebox/favicon.ico' },
      ],
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
  ],
  typescript: {
    typeCheck: true,
  },
})
