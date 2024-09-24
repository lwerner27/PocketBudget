import { redirect } from '@sveltejs/kit';
import { getSundaysDate } from '$lib';

export const load = async ({ locals }) => {
	// Check the authStore for a user and if there is none, redirect the user.
	if (!locals.pb.authStore.isValid) {
		console.log('User Session Invalid, redirecting to login.');
		throw redirect(303, '/login');
	}

	const sundaysDate = getSundaysDate();

	let expenses = await locals.pb.collection('Expenses').getFullList({
		sort: '-created',
		filter: `created >= "${sundaysDate}" && Purchaser = "${locals.pb.authStore.model.id}"`,
		fields: 'Cost, Category, Seller, Notes',
		expand: 'Purchaser',
	});

	let weeklyTotal = 0;

	expenses.forEach((expense) => {
		weeklyTotal += expense.Cost;
	});

	weeklyTotal = weeklyTotal.toFixed(2);

	return { expenses: expenses.slice(0, 5), weeklyTotal };
};
