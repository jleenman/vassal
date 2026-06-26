export default defineNuxtConfig({
  compatibilityDate: '2026-06-26',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'nl' },
      title: 'VASSAL - Jonathan Leenman',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Jonathan Leenman ontwerpt hoe complexe producten eenvoudiger kunnen worden: product, UX, software, data en nieuwe manieren van bouwen.',
        },
        { name: 'theme-color', content: '#080b10' },
        { property: 'og:title', content: 'Jonathan Leenman' },
        {
          property: 'og:description',
          content: 'Product thinker, builder en systems thinker op het snijvlak van product, UX, software en data.',
        },
        { property: 'og:type', content: 'website' },
      ],
      link: [{ rel: 'icon', href: 'favicon.svg' }],
    },
  },
  nitro: {
    preset: 'github_pages',
    prerender: {
      crawlLinks: true,
      failOnError: true,
      routes: ['/', '/cv', '/404.html'],
    },
  },
  typescript: {
    typeCheck: true,
  },
})
