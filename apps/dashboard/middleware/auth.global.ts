export default defineNuxtRouteMiddleware(async (to, from) => {

	const client = useLogtoClient()
	const user = useLogtoUser()
	const isLoggedIn = client ? await client.isAuthenticated() : user;

	/*
		Allow visiting the page if it's not protected
	 */
	if (to.meta.public) {
		return undefined
	}

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
	const currentOrganization = useCookie<string>('current-organization')

	// Call once in the server side
	await callOnce(async () => {
		if (import.meta.client) return
		if (!client) {
			throw new Error('Logto client is not available');
		}

		// get access Token without organization scope 
		// to check if the user is in any organization
		accessToken.value = await client.getAccessToken('https://api.kubikulum.com');
		// check if the user is in any organization
		if (user.organization_data.length === 0) {
			return
		}

		// set the current organization to the first organization if it's not set
		if (!currentOrganization.value) {
			const defaultOrganization = user.organization_data[0];
			if (defaultOrganization) {
				currentOrganization.value = defaultOrganization.id;
			}
		}

		// check if the user is member of the current organization if not, set the current organization to the first organization
		const organization = user.organization_data.find((org) => org.id === currentOrganization.value);
		if (!organization) {
			const defaultOrganization = user.organization_data[0];
			if (defaultOrganization) {
				currentOrganization.value = defaultOrganization.id;
			}
		}


		try {
			accessToken.value = await client.getAccessToken('https://api.kubikulum.com', currentOrganization.value);
		} catch (error) {
			console.error('Failed to get access token', error);
			return navigateTo('/sign-in', { redirectCode: 301 })
		}
	});

	// if the user is not in any organization, it could mean that he is a new user 
	// check if has received any invitations to join an organization
	// if so, redirect to the organization invitation page
	if (isLoggedIn && user.organization_data.length === 0 && !['register'].includes(to.name as string)) {
		// If there are no pending invitations, redirect to the onboarding page
		return navigateTo({ name: 'register' })

	}


})