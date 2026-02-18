export default defineNuxtConfig({
  modules: ['@nuxt/content', '@nuxt/eslint'],
  css: ['~/styles/tokens.css', '~/styles/globals.css'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000'
    }
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'pt-BR'
      },
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap'
        }
      ]
    }
  },
  content: {
    documentDriven: false,
    highlight: {
      theme: 'github-light'
    }
  },
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-11-01'
})
