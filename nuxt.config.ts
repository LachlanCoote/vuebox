// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    // eslint-disable-next-line node/prefer-global/process
    ...process.env.CONFIG_EXTENDS?.split(',') || [],
    './base',
  ],
})
