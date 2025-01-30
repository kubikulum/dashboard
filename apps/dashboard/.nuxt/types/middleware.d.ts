import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = "invitation"
declare module "../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}
declare module 'nitropack' {
  interface NitroRouteConfig {
    appMiddleware?: MiddlewareKey | MiddlewareKey[] | Record<MiddlewareKey, boolean>
  }
}