/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	if (locals.pb.authStore.isValid) {
		return { user: locals.pb.authStore.model };
	} else {
		return { user: undefined };
	}
}
