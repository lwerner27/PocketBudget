import PocketBase from 'pocketbase';
import { POCKETBASE_HOST } from '$env/static/private';

export const handle = async ({ event, resolve }) => {
	// Instantiate the new pocketbase instance
	event.locals.pb = new PocketBase(POCKETBASE_HOST);

	// Check the request for a user cookie
	event.locals.pb.authStore.loadFromCookie(
		event.request.headers.get('cookie') || ''
	);

	// Allow the event to resolve and wait for the response
	const response = await resolve(event);

	// Add the user to the coookie
	response.headers.set(
		'set-cookie',
		event.locals.pb.authStore.exportToCookie({ secure: false })
	);

	return response;
};
