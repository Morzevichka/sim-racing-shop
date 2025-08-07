// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/icon'
  ],
  icon: {
    class: 'icon',
    mode: 'css',
    customCollections: [
      {
        prefix: 'my-icon',
        dir: './app/assets/icons'
      }
    ],
    serverBundle: {
      collections: ['mdi']
    }
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
})
