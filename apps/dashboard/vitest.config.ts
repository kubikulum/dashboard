import { fileURLToPath } from 'node:url'
import { defineVitestConfig } from '@nuxt/test-utils/config'


export default defineVitestConfig ({
  
  test: {
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        rootDir: fileURLToPath(new URL('.', import.meta.url)),
        domEnvironment: 'happy-dom',
        overrides: {
          app: {
            // baseURL: BASE_API_URL,
          },
        },
      },
    },
  },
})