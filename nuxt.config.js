
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alexandr Borecky | Director, Writer and Actor',
    htmlAttrs: {
      lang: 'cs',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: 'https://ik.imagekit.io/alexborecky/My__Web/ogImage_vqhS4obQI.png' },
      { property: 'og:type', content: 'home page'},
      { property: 'og:url', content: 'https://alexborecky.com'},
      { property: 'og:title', content: 'Alexandr Borecky | Director, Actor & Writer' },
      { property: 'og:description', content: 'Alexandr Borecký is a award winning director, writer and actor' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.gstatic.com", rel:"preconnect"},
      { href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Krona+One&display=swap", rel: "stylesheet"},
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/_typography.scss',
    '~/assets/scss/_layouts.scss',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'UA-110811154-1'
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    scss: [
      '~/assets/scss/_colours.scss',
    ]
},
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  },
  router: {
    scrollBehavior: async (to, from, savedPosition) => {
      if (savedPosition) {
        return savedPosition
      }

      const findEl = async (hash, x) => {
        return document.querySelector(hash) ||
          new Promise((resolve, reject) => {
            if (x > 50) {
              return resolve()
            }
            setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
          })
      }

      if (to.hash) {
        let el = await findEl(to.hash)
        if ('scrollBehavior' in document.documentElement.style) {
          return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
        } else {
          return window.scrollTo(0, el.offsetTop)
        }
      }

      return { x: 0, y: 0 }
    }
  }
}
