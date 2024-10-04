/** @type {import('./$types').Actions} */
export const actions = {
	updateBudget: async ({ locals, request }) => {
		// console.log(locals.pb.authStore.model.id);
		let data = await request.formData();
		let budget = data.get('budget');
		const record = await locals.pb
			.collection('users')
			.update(locals.pb.authStore.model.id, { budget });
		console.log(record);
	},
};
