export default {
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Templo do Rio de Janeiro',
    htmlAttrs: {
      lang: 'pt-br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '22 a 25 de março de 2022. Agende a sua visita neste site.' },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'image', property: 'image', content: "https://www.templodorio.com.br/templo.jpg" },
      { hid: 'og:image', property: 'og:image', content: "https://www.templodorio.com.br/templo.jpg" }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-flickity', ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/google-analytics'
  ],

  googleFonts: {
    families: {
      Roboto: [400, 800],
      'Playfair+Display': [700]
    }
  },

  googleAnalytics: {
    id: 'UA-3616582-11'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dayjs'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: 'https://api.templodorio.com.br/api/'
  },

  dayjs: {
    locales: ['pt-br'],
    defaultLocale: 'pt-br',
    defaultTimeZone: 'America/Sao_Paulo',
    plugins: [
      'utc', // import 'dayjs/plugin/utc'
      'timezone' // import 'dayjs/plugin/timezone'
    ]
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
