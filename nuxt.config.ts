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
        { name: 'description', content: 'A sandbox starter app for Nuxt 3'},
        { name: 'theme-color', content: '#313F48' },
      ],
      title: 'Vuebox',
    },
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  eslint: {
    config: {
      standalone: false,
    },
  },
  experimental: {
    payloadExtraction: false,
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
    '@vite-pwa/nuxt',
  ],
  pwa: {
    includeAssets: ['favicon.ico'],
    manifest: {
      description: 'A sandbox starter app for Nuxt 3',
      name: 'Vuebox',
      short_name: 'VB',
      theme_color: '#313F48',
      icons: [{
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },{
        src: 'pwa-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
  },
  routeRules: {
    '/': { prerender: true },
  },
  ssr: false,
  typescript: {
    typeCheck: true,
  },
})
