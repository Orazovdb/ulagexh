import tm from './locales/tm'
import ru from './locales/ru'
import en from './locales/en'
export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: 'Ulagexh',
      htmlAttrs: {
        lang: 'en',
        myAttribute: 'My Value',
        ...i18nHead.htmlAttrs,
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        ...i18nHead.meta,
      ],
      link: [
        { rel: 'icon', type: '/logo.svg', href: '/logo.svg' },
        ...i18nHead.link,
      ],
    }
  },

  server: {
    port: 3333,
    host: '0.0.0.0',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/style.css',
    '@/assets/css/style.scss',
    '@/assets/css/grid.scss',
  ],

	loading: {
		color: 'green',
    height: '2px',
	},

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/aos.client', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
      '@/components',
      '@/components/base',
      '@/components/admin',
      '@/components/popup',
    ],
  },
  ssr: true,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/google-analytics'],

  googleAnalytics: {
    id: 'G-JFK4PD11BR',
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@leandromatos/nuxt-cookie',
    '@nuxtjs/i18n',
    '@nuxtjs/yandex-metrika',
  ],

  yandexMetrika: {
    id: '95743159',
  },

  i18n: {
    locales: [
      {
        code: 'tm',
        lang: 'TM',
        name: 'TM',
        iso: 'tm-TM',
        file: 'tm',
        isCatchallLocale: true,
      },
      { code: 'ru', lang: 'RU', name: 'RU', iso: 'ru-RU', file: 'ru' },
      { code: 'en', lang: 'EN', name: 'EN', iso: 'en-EN', file: 'en' },
    ],
    defaultLocale: 'tm',
    seo: true,
    vueI18n: {
      fallbackLocale: 'tm',
      messages: { tm, ru, en },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  env: {
    BASE_API: process.env.BASE_API,
  },
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    BASE_API: process.env.BASE_API,
    retry: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
