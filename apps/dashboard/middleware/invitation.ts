export default defineNuxtRouteMiddleware(async (to) => {

	const client = useLogtoClient()
	const user = useLogtoUser()
	/*
		1.check if the user is already logged in
			true: call accept invitation api and redirect to the dashboard with query parameter to show the invitation accepted message
			false: redirect to the signin/signup page with this page as a post callback
	*/
	const isLoggedIn = client ? await client.isAuthenticated() : user;
	if (isLoggedIn) {
		let accessToken = useState<string | undefined>('access-token');
		if(!accessToken.value && client){
			accessToken.value = await client.getAccessToken('https://api.kubikulum.com');
		}
		const { $kbk } = useNuxtApp()
		const invitationCode = to.params.code as string
		if (invitationCode) {
			try {
				console.log(accessToken.value)
				await $kbk('/api/invitations/{id}/accept', { method: 'post', headers: { 'Authorization': `Bearer ${accessToken.value}` }, path: { id: invitationCode } })
				return navigateTo({ path: '/', query: { invitationAccepted: invitationCode } })
			} catch (e) {
				console.error(e)
				return navigateTo('/invitation/not-found')
			}
		}
		return navigateTo('/')
	} else {
		// retrieve current full url 
		const url = useRequestURL()
		const callbackUrl = new URL(`/callback`, url.href)
		const signInSession = useCookie('signing-session-callback')
		// Before redirecting to the signin page, we need to store the current url in a cookie
		if(signInSession.value !== to.fullPath) {
			console.log('Redirecting to /set-cookie-and-redirect', to.fullPath);
			return navigateTo({path:'/set-cookie-and-redirect',query:{redirect:to.fullPath}})
		}
		console.log(signInSession.value)
		await client?.signIn({ redirectUri: callbackUrl.href})
	}
})