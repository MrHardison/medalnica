
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Rubik:400,500,700&display=swap&subset=cyrillic'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: 'green' },
    /*
  ** Global CSS
  */
  css: [
    '@/assets/styles/base.css',
    '@/assets/styles/ui.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    ['vue-scrollto/nuxt', {
      duration: 100,
      easing: "linear"
    }]
  ],
  /*
  ** Custom styles
  */
  styleResources: {
    sass: [
      '@/assets/styles/colors.sass'
    ] // alternative: sass
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
