import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "blank" | "components-default-layout-with-horizontal-nav" | "components-default-layout-with-vertical-nav" | "components-footer" | "components-nav-bar-notifications" | "components-nav-search-bar" | "components-navbar-shortcuts" | "components-navbar-theme-switcher" | "components-user-profile" | "default" | "empty"
declare module "../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}