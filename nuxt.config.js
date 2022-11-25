export default {
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',

  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ],
  },

  /*
  ** Global CSS
  */
  css: [
    './assets/sass/base/_normalize.scss',
    './assets/sass/base/_container.scss',
    './assets/sass/project/_buttons.scss',
    './assets/sass/project/_form.scss',
    './assets/sass/base/_fonts.scss',
  ],

  /*
  ** Variables and mixins
  */
  styleResources: {
    scss: [
      './assets/sass/base/_colors.scss',
      './assets/sass/base/_variables.scss',
      './assets/sass/base/_breakpoints.scss',
    ],
  },

  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],

  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: [
    {
      path: '~/components',
    },
  ],

  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg',
    [
      '@nuxtjs/dotenv', {
        filename: `.env.${process.env.npm_config_env ? process.env.npm_config_env : 'local'}`,
      },
    ],
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    baseURL: process.env.VUE_VUE_APP_API_V1, // Used as fallback if no runtime config is provided
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {

    /**
     * ESLint
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            configFile: '.eslintrc.js',
            fix: true,
          },
        });
      }
    },
  },

  /**
   * Server configuration
   */
  server: {
    host: '0.0.0.0', // default: localhost
  },
};
