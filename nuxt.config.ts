// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['@unocss/reset/tailwind-compat.css'],
  modules: [
    [
      '@storyblok/nuxt', {
        accessToken: process.env.STORYBLOK_TOKEN,
      },
    ], 
    '@unocss/nuxt',
    '@nuxt/image',
  ],
  runtimeConfig: {
    public: {
      bigCommerce: {
        url: process.env.BIGCOMMERCE_URL,
        token: process.env.BIGCOMMERCE_TOKEN,
      },
    },
  },
  unocss: {
    // presets
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,
    theme: {
      colors: {
        brand: {
          primary: '#00B3B0',
          secondary: '#1B243F',
        },
      },
    },

    // core options
    shortcuts: [],
  },
})

