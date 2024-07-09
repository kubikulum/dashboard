
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

	// Call once in the server side
	await callOnce(async () => {
		if (!client) {
			throw new Error('Logto client is not available');
		}

		if (!(await client.isAuthenticated())) {
			return;
		}

		try {
			accessToken.value = await client.getAccessToken('https://api.kubikulum.com');
		} catch (error) {
			console.error('Failed to get access token', error);
		}
	});

	const organization = useCookie<any>('organization')
	console.log('orgCookie', organization.value.organization)

	if (!organization.value.organization) {
		const firstOrganization = user.organization_data[0]
		return navigateTo(`/switch-organization?organizationId=${firstOrganization.id}`, { external: true })
	} else if (user.organization_data.map((org: any) => org.id).indexOf(organization.value.organization.id) === -1) {
		const firstOrganization = user.organization_data[0]
		return navigateTo(`/switch-organization?organizationId=${firstOrganization.id}`, { external: true })
	}
})