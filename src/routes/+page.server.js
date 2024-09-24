import { redirect } from '@sveltejs/kit';
export const load = ({ locals }) => {
	// Check the authStore for a user and if there is none, redirect the user.
	if (!locals.pb.authStore.isValid) {
		console.log('User Session Invalid, redirecting to login.');
		throw redirect(303, '/login');
	}
};
