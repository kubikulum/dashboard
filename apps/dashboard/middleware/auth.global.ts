import type { OrganizationCookie } from "@/server/routes/switch-organization.get";

export default defineNuxtRouteMiddleware(async (to, from) => {

	const client = useLogtoClient()
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
		return navigateTo('/sign-in', { external: true })
	}

	// Make the token available globally
	const accessToken = useState<string | undefined>('access-token');
	const currentOrganization = useState<string>('current-organization')

	// Call once in the server side
	await callOnce(async () => {
		if (!client) {
			throw new Error('Logto client is not available');
		}

		if (!(await client.isAuthenticated() && (user.organization_id === currentOrganization.value))) {
			return;
		}
		if(!currentOrganization.value) {
			const defaultOrganization = user.organization_data[0];
	
			if (defaultOrganization) {
				console.log('ss',defaultOrganization)
				currentOrganization.value = defaultOrganization.id;
			}
		}

		try {
			accessToken.value = await client.getAccessToken('https://api.kubikulum.com', currentOrganization.value);
		} catch (error) {
			console.error('Failed to get access token', error);
			navigateTo('/sign-in')
		}
	});


})