import { createUseOpenFetch } from '#imports'
import type { paths as KbkPaths } from '#open-fetch-schemas/kbk'

export type OpenFetchClientName = 'kbk'

/**
 * Fetch data from an OpenAPI endpoint with an SSR-friendly composable.
 * See {@link https://nuxt-open-fetch.vercel.app/composables/useclient}
 * @param string The OpenAPI path to fetch
 * @param opts extends useFetch, $fetch options and useAsyncData options
 */
export const useKbk = createUseOpenFetch<KbkPaths>('kbk')
/**
 * Fetch data from an OpenAPI endpoint with an SSR-friendly composable.
 * See {@link https://nuxt-open-fetch.vercel.app/composables/uselazyclient}
 * @param string The OpenAPI path to fetch
 * @param opts extends useFetch, $fetch options and useAsyncData options
 */
export const useLazyKbk = createUseOpenFetch<KbkPaths>('kbk', true)
