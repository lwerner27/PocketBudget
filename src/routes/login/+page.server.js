import { redirect, error } from '@sveltejs/kit';

export const load = ({ locals }) => {
	// Check the authStore for a user and redirect if found
	if (locals.pb.authStore.isValid) {
		console.log('User already logged in, redirecting.');
		throw redirect(301, '/dashboard');
	}
};

export const actions = {
	default: async ({ request, locals }) => {
		// Get the data from the form
		const data = await request.formData();

		// Attempt the login and handle the error
		try {
			await locals.pb
				.collection('users')
				.authWithPassword(data.get('username'), data.get('password'));
		} catch (err) {
			return {
				status: err.status,
				message: 'Invalid Username or Password',
			};
		}

		// On successful auth redirect to the homepage
		throw redirect(303, '/dashboard');
	},
};
