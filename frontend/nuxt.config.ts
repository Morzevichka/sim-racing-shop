export default defineNuxtConfig({
  modules: [
    '@nuxt/icon',
    '@nuxt/test-utils/module'
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
  css: ['~/assets/styles/main.css'],
  devServer: {
    port: 8081
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
