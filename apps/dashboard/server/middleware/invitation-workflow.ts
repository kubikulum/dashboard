
export default defineEventHandler(async (event) => {

	const url = getRequestURL(event);
	if (url.pathname === '/set-cookie-and-redirect') {
		const redirect = url.searchParams.get('redirect');
		console.log('add cookie', redirect)
		if (redirect) {
			setCookie(event, 'signing-session-callback', redirect);
		}
		await sendRedirect(event, '/sign-in', 302);
		return;
	}

	if (url.pathname === '/post-callback') {
		const signInSession = getCookie(event, 'signing-session-callback');

		if (signInSession) {
			console.log('Redirecting to', signInSession);
			setCookie(event, 'signing-session-callback', '', { maxAge: 0 });
			await sendRedirect(event, signInSession, 302);
		} else {
			await sendRedirect(event, '/', 302);
		}

		return;
	}
})