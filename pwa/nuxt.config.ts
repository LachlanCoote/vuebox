export default defineNuxtConfig({
  experimental: {
    payloadExtraction: false,
  },
  future: {
    compatibilityVersion: 4,
  },
  modules: [
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
      }, {
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
})
