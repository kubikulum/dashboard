// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.9.0_magicast@0.3.5_pinia@2.3.0_typescript@5.7.3_vue@3.5.13_typescript@5.7.3___rollup@4.30.1/node_modules/@pinia/nuxt/dist/runtime/payload-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt-open-fetch@0.9.5_magicast@0.3.5_rollup@4.30.1_typescript@5.7.3/node_modules/nuxt-open-fetch/dist/runtime/nuxt-plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/debug.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@pinia+nuxt@0.9.0_magicast@0.3.5_pinia@2.3.0_typescript@5.7.3_vue@3.5.13_typescript@5.7.3___rollup@4.30.1/node_modules/@pinia/nuxt/dist/runtime/plugin.vue3.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@3.15.2_@parcel+watcher@2.5.0_@types+node@22.10.7_db0@0.2.1_eslint@9.18.0_jiti@2.4.2__ior_tqrvnbz6pw3kmf25rli7msebxy/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@9.1.1_@vue+compiler-dom@3.5.13_eslint@9.18.0_jiti@2.4.2__magicast@0.3.5_rollup@4_nebyfme3wwny6njuwiow22hq24/node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@9.1.1_@vue+compiler-dom@3.5.13_eslint@9.18.0_jiti@2.4.2__magicast@0.3.5_rollup@4_nebyfme3wwny6njuwiow22hq24/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/dayjs-nuxt@2.1.11_magicast@0.3.5_rollup@4.30.1/node_modules/dayjs-nuxt/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+device@3.2.4/node_modules/@nuxtjs/device/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../plugins/vuetify/index")> &
  InjectionType<typeof import("../../plugins/iconify/index")> &
  InjectionType<typeof import("../../plugins/layouts")> &
  InjectionType<typeof import("../../plugins/webfontloader.client")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:debug' | 'nuxt:payload' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'pinia' | 'nuxt:global-components' | 'nuxt:prefetch' | 'i18n:plugin:switch-locale-path-ssr' | 'i18n:plugin'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
