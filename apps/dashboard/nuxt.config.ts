import { fileURLToPath } from 'node:url'
import svgLoader from 'vite-svg-loader'
import vuetify from 'vite-plugin-vuetify'
import { UserScope } from '@logto/nuxt';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    head: {
      titleTemplate: '%s - Kubernetes for AI',
      title: 'Kubikulum',

      link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico',
      }],
    },
  },

  logto: {
    resources: ['https://api.kubikulum.com'],
    fetchUserInfo: true,
    postCallbackRedirectUri: '/post-callback',
    scopes: [UserScope.Email,
    UserScope.CustomData,
    UserScope.Organizations]
  },

  openFetch: {
    clients: {
      kbk: {
        baseURL : 'http://localhost:4000',
        schema:'http://localhost:4000/api-json',
      }
    }
  },

  runtimeConfig: {
    openFetch: {
      kbk: {
      },
    },
  },

  devtools: {
    enabled: true,
  },


  css: [
    '@core/scss/template/index.scss',
    '@styles/styles.scss',
    '@/plugins/iconify/icons.css',
  ],

  components: {
    dirs: [{
      path: '@/@core/components',
      pathPrefix: false,
    }, {
      path: '~/components/global',
      global: true,
    }, {
      path: '~/components',
      pathPrefix: false,
    }],
  },

  plugins: ['@/plugins/vuetify/index.ts', '@/plugins/iconify/index.ts'],

  imports: {
    dirs: ['./@core/utils', './@core/composable/', './plugins/*/composables/*'],
    presets: [],
  },

  hooks: {},

  experimental: {
    typedPages: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          '@/*': ['../*'],
          '@themeConfig': ['../themeConfig.ts'],
          '@layouts/*': ['../@layouts/*'],
          '@layouts': ['../@layouts'],
          '@core/*': ['../@core/*'],
          '@core': ['../@core'],
          '@images/*': ['../assets/images/*'],
          '@styles/*': ['../assets/styles/*'],
          '@validators': ['../@core/utils/validators'],
          '@db/*': ['../server/fake-db/*'],
          '@api-utils/*': ['../server/utils/*'],
          // "@application-test-utils": ["../tests/drivers/playwright/driver.ts"]
        }
      }
    }
  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === 'swiper-container' || tag === 'swiper-slide',
    },
  },

  vite: {
    define: { 'process.env': {} },

    resolve: {
      alias: {
        '@': fileURLToPath(new URL('.', import.meta.url)),
        '@themeConfig': fileURLToPath(new URL('./themeConfig.ts', import.meta.url)),
        '@core': fileURLToPath(new URL('./@core', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./@layouts', import.meta.url)),
        '@images': fileURLToPath(new URL('./assets/images/', import.meta.url)),
        '@styles': fileURLToPath(new URL('./assets/styles/', import.meta.url)),
        '@configured-variables': fileURLToPath(new URL('./assets/styles/variables/_template.scss', import.meta.url)),
        '@db': fileURLToPath(new URL('./server/fake-db/', import.meta.url)),
        '@api-utils': fileURLToPath(new URL('./server/utils/', import.meta.url)),
       
      },
    },

    build: {
      chunkSizeWarningLimit: 5000,

    },

    optimizeDeps: {
      exclude: ['vuetify'],
      entries: [
        './**/*.vue',
      ],
    },

    plugins: [
      svgLoader(),
      vuetify({
        styles: {
          configFile: 'assets/styles/variables/_vuetify.scss',
        },
      }),
      // VueI18nPlugin({
      //   runtimeOnly: true,
      //   compositionOnly: true,
      //   ssr: true,
      //   include: [
      //     fileURLToPath(new URL('./plugins/i18n/locales/**', import.meta.url)),
      //   ],
      // }),
    ],
  },
  testUtils: {
    // startOnBoot: true,
    // logToConsole: true,
  
  },
  debug:true,
  build: {
    transpile: ['vuetify'],
  },
  i18n:{
    defaultLocale:'en',
    vueI18n:'./i18n.config.ts'
  },


  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/device',
    '@pinia/nuxt',
    '@logto/nuxt',
    "dayjs-nuxt",
    'nuxt-open-fetch',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n'
  ],

  compatibilityDate: '2024-07-06',
})