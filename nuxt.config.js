
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Alexandr Borecky | Director, Writer and Actor',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Alexandr Borecký is an award winning director, writer and actor' },
      { property: 'og:image', content: 'https://ik.imagekit.io/alexborecky/My__Web/ogImage_vqhS4obQI.png' },
      { property: 'og:type', content: 'website'},
      { property: 'og:url', content: 'https://alexborecky.com'},
      { property: 'og:title', content: 'Alexandr Borecky | Director, Actor & Writer' },
      { property: 'og:description', content: 'Alexandr Borecký is an award winning director, writer and actor' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { href: "https://fonts.gstatic.com", rel:"preconnect"},
      { href: "https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Krona+One&display=swap", rel: "stylesheet"},
      { href: "https://fonts.googleapis.com/css2?family=Anybody:wght@500&display=swap", rel: "stylesheet"},
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
    'aos/dist/aos.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/uiKit.js',
    { src: "@/plugins/aos", mode: "client" },
  ],
  purgeCSS: {
    whitelist: ["aos-init", "aos-animate", "data-aos-delay", "data-aos-duration", "fade-up", "zoom-in"],
  },
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/google-analytics'
  ],
  googleAnalytics: {
    id: 'G-77WZXNEX3H'
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
