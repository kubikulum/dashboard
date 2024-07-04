import type { Router } from 'vue-router'
import { canNavigate } from '@layouts/plugins/casl'
import { useLogto } from "@logto/vue";
import { redirectUrl } from '@/utils/constants';
import { userSessionStore } from '@/stores/user.store';
export const setupGuards = (router: Router) => {
  // 👉 router.beforeEach
  // Docs: https://router.vuejs.org/guide/advanced/navigation-guards.html#global-before-guards
  router.beforeEach(to => {
    /*
     * If it's a public route, continue navigation. This kind of pages are allowed to visited by login & non-login users. Basically, without any restrictions.
     * Examples of public routes are, 404, under maintenance, etc.
     */
    if (to.meta.public)
      return

    const { isAuthenticated, isLoading, signIn } = useLogto();
    const userSession = userSessionStore()

    /**
     * Check if user is logged in by checking if token & user data exists in local storage
     * Feel free to update this logic to suit your needs
     */
    const isLoggedIn = userSession.auth?.isAuthenticated


    /*
      If user is logged in and is trying to access login like page, redirect to home
      else allow visiting the page
      (WARN: Don't allow executing further by return statement because next code will check for permissions)
     */
    if (to.meta.unauthenticatedOnly) {
      if (isLoggedIn)
        return '/'
      else
        return undefined
    }

    if (!isLoggedIn) {
      signIn(redirectUrl);
    }


    // if (!canNavigate(to) && to.matched.length) {
    //   /* eslint-disable indent */
    //   if
    //   return isLoggedIn
    //     ? { name: 'not-authorized' }
    //     : {
    //         name: 'login',
    //         query: {
    //           ...to.query,
    //           to: to.fullPath !== '/' ? to.path : undefined,
    //         },
    //       }
    //   /* eslint-enable indent */
    // }
  })
}
