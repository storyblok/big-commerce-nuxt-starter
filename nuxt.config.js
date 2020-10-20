export default {
  env: {
    storeUrl: 'https://storyblok-partner-demo-store.mybigcommerce.com',
    storeToken:
      'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYXQiOjE2MzkyNjcyMDAsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxLCJjb3JzIjpbImh0dHBzOi8vYmlnLWNvbW1lcmNlLWRlbW8ubmV0bGlmeS5hcHAiXSwiY2lkIjoxLCJpYXQiOjE2MDMxOTM1ODgsInN1YiI6ImhhNDFiOG1oNHlxbnA0emc3NDI1azhjajVoMWV4ZDIiLCJzaWQiOjEwMDEzODY2NjMsImlzcyI6IkJDIn0.TDmurFwUjWASqpKnCcrOwpXarAHnN0FQfulQtblWz70YdG_o4paGkKon8cmrwwZC5qGeM_gxsIRMdzZvBckHXA',
    // storeToken:
    //  'eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJlYXQiOjE2MzkyNjcyMDAsInN1Yl90eXBlIjoyLCJ0b2tlbl90eXBlIjoxLCJjb3JzIjpbImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMCJdLCJjaWQiOjEsImlhdCI6MTYwMzE4NTIxNCwic3ViIjoiaGE0MWI4bWg0eXFucDR6Zzc0MjVrOGNqNWgxZXhkMiIsInNpZCI6MTAwMTM4NjY2MywiaXNzIjoiQkMifQ.IdYuHyWui75Uv8wVWh5-PhHwrX-iSoacP8JeNMttFFR-79485VoiwBvhRrVlsNtEd6lAPBW56h2ID7bNp_66zA',
  },

  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/components'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  generate: {
    fallback: true,
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    [
      'storyblok-nuxt',
      { accessToken: 'zTa0mMPr26a7IEBpNQtaLwtt', cacheProvider: 'memory' },
    ],
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {},
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
