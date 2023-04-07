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

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {
    proxy: true,
  },

  proxy: {
    '/api/': {
      target: 'http://127.0.0.1:5000/get_answer',
      pathRewrite: { '^/api/': '' },
    },
  },

  build: {},
}
