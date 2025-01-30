import { createUseOpenFetch } from '#imports'
import type { paths as KbkPaths, operations as KbkOperations } from '#open-fetch-schemas/kbk'

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

export type KbkResponse<T extends keyof KbkOperations, R extends keyof KbkOperations[T]['responses'] = 200 extends keyof KbkOperations[T]['responses'] ? 200 : never> = KbkOperations[T]['responses'][R] extends { content: { 'application/json': infer U } }
  ? U
  : never

export type KbkRequestBody<T extends keyof KbkOperations> = KbkOperations[T]['requestBody'] extends { content: { 'application/json': infer U } }
  ? U
  : never

export type KbkRequestQuery<T extends keyof KbkOperations> = KbkOperations[T]['parameters'] extends { query?: infer U } ? U : never
