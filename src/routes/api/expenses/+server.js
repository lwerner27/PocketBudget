import { json } from '@sveltejs/kit';

export async function POST({ locals, request }) {
	// Get the expense data from the request
	const expense = await request.json();

	// Attempt to add the record to the DB
	const record = await locals.pb.collection('Expenses').create(expense);

	// Check if the attempt resulted in an error code.
	if (record.code) {
		// If error code found send information to the front end.
		return json({ code: record.code, msg: record.message });
	}

	return json({ code: 201, id: record.id });
}
