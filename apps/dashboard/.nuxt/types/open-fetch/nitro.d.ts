import type { OpenFetchClient } from '#imports'
import type { paths as KbkPaths } from '#open-fetch-schemas/kbk'

declare module 'nitropack' {
  interface NitroApp {
    $kbk: OpenFetchClient<KbkPaths>
  }
}

export {}
