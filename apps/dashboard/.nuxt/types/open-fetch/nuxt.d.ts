import type { OpenFetchClient } from '#imports'
import type { paths as KbkPaths } from '#open-fetch-schemas/kbk'

declare module '#app' {
  interface NuxtApp {
    $kbk: OpenFetchClient<KbkPaths>
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $kbk: OpenFetchClient<KbkPaths>
  }
}

export {}
