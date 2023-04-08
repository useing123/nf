export default {
  ssr: false,

  head: {
    title: 'nf',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/vuetify',
  ],
  vuetify: {
    // Vuetify options
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: '#FFA500',
          secondary: '#424242',
          accent: '#FFC107',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107'
        }
      }
    }  
  },

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/vuetify'
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'https://userwiner.pythonanywhere.com/get_answer',
      pathRewrite: { '^/api/': '' },
    },
  },

  build: {},
}
