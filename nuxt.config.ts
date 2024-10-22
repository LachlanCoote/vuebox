// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // eslint-disable-next-line node/prefer-global/process
    process.env.APP_MODE === 'impl1'
      ? './impl1'
      : './impl2',
    './base',
  ],
  future: {
    compatibilityVersion: 4,
  },
})
