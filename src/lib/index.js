// place files you want to import through the `$lib` alias in this folder.
export const getSundaysDate = () => {
	let date = new Date();

	// Set the date to the previous Sunday
	date.setDate(date.getDate() - date.getDay());

	return `${date.getFullYear()}-${(date.getMonth() + 1)
		.toString()
		.padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
};
