import { useOrganizationStore } from "@/stores/user.store";

export default defineNuxtRouteMiddleware(async (to, from) => {

	const client = useLogtoClient()

	// skip middleware on server
	const user = useLogtoUser()
	const isLoggedIn = client ? await client.isAuthenticated() : user;
	/*
	If user is logged in and is trying to access login like page, redirect to home
	else allow visiting the page
	(WARN: Don't allow executing further by return statement because next code will check for permissions)
   */
	if (to.meta.unauthenticatedOnly) {
		if (isLoggedIn)
			return navigateTo('/')
		else
			return undefined
	}

	if (!isLoggedIn) {
		return navigateTo('/sign-in',{ external: true})
	}

	const organizationStore = useOrganizationStore()
	const currentOrganization = useCookie<any>('currentOrganization')

	if (!currentOrganization.value) {
		const firstOrganization = user.organization_data[0]
		await organizationStore.switchOrganization(firstOrganization.id)
	}else{
		await organizationStore.switchOrganization(currentOrganization.value.id)
	}
})