// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'icon', href: '/favicon.ico' },
      ],
      meta: [
        { name: 'description', content: 'A sandbox starter app for Nuxt 3' },
        { name: 'theme-color', content: '#313F48' },
      ],
      title: 'Vuebox',
    },
  },
  compatibilityDate: '2024-10-20',
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts',
  },
  icon: {
    clientBundle: {
      scan: true, // future enabled by default
    },
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
  ssr: false,
  // Doesn't play nice with Nuxt UI V3 yet
  // typescript: {
  //   typeCheck: true,
  // }
})
