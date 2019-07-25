
export default {

  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    script: [
      { crossorigin: 'anonymous', src: 'https://connect.facebook.net/ru_RU/sdk.js#xfbml=1&version=v3.3' },
      { src: 'https://vk.com/js/api/share.js?93', charset: 'windows-1251' }

    ],
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:url', content: 'http://medalnica.at.appstockus.net' },
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: 'Витрина твоих беговых достижений.' },
      { property: 'og:description', content: 'Принимай участие в разных забегах. Собирай результаты и медали в одном месте.' },
      { property: 'og:image', content: 'http://medalnica.at.appstockus.net/share.png' },
    ],
    link: [
      { rel: 'shortcut icon', href: '/favicon.ico' },
      { rel: 'icon', sizes: '16x16 32x32 64x64', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes:'196x196', href: '/favicon-192.png' },
      { rel: 'icon', type: 'image/png', sizes:'160x160', href: '/favicon-160.png' },
      { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/favicon-96.png' },
      { rel: 'icon', type: 'image/png', sizes:'64x64', href: '/favicon-64.png' },
      { rel: 'icon', type: 'image/png', sizes:'32x32', href: '/favicon-32.png' },
      { rel: 'icon', type: 'image/png', sizes:'16x16', href: '/favicon-16.png' },
      { rel: 'apple-touch-icon', href: '/favicon-57.png' },
      { rel: 'apple-touch-icon', sizes:'114x114', href: '/favicon-114.png' },
      { rel: 'apple-touch-icon', sizes:'72x72', href: '/favicon-72.png' },
      { rel: 'apple-touch-icon', sizes:'144x144', href: '/favicon-144.png' },
      { rel: 'apple-touch-icon', sizes:'60x60', href: '/favicon-60.png' },
      { rel: 'apple-touch-icon', sizes:'120x120', href: '/favicon-120.png' },
      { rel: 'apple-touch-icon', sizes:'76x76', href: '/favicon-76.png' },
      { rel: 'apple-touch-icon', sizes:'152x152', href: '/favicon-152.png' },
      { rel: 'apple-touch-icon', sizes:'180x180', href: '/favicon-180.png' },
      { name: 'msapplication-TileColor', content:'#ffffff' },
      { name: 'msapplication-TileImage', content:'/favicon-144.png' },
      { name: 'msapplication-config', content:'/browserconfig.xml' },
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
      offset: -50,
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
  },

  serverMiddleware: ['redirect-ssl']
}
