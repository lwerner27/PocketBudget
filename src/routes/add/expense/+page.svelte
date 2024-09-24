<script>
	export let data;
	let Purchaser = data.user.id;
	let Category;
	let Seller;
	let Cost;
	let Notes;
	let toastState = false;

	const checkFields = (fields) => {
		if (
			fields.Purchaser !== 'Who?' &&
			fields.Category &&
			fields.Seller &&
			fields.Cost
		) {
			return false;
		} else return true;
	};

	const showToast = () => {
		toastState = true;
		setTimeout(() => (toastState = false), 5000);
	};

	const handleSubmit = async () => {
		let expenseData = {
			Purchaser,
			Category,
			Seller,
			Cost,
		};

		Notes ? (expenseData.Notes = Notes) : null;

		let response = await fetch('/api/expenses', {
			method: 'POST',
			body: JSON.stringify(expenseData),
			headers: {
				'content-type': 'application/json',
			},
		});

		response = await response.json();
		if (response.code === 201) {
			Category = '';
			Seller = '';
			Cost = undefined;
			Notes = '';
			showToast();
		}
	};
</script>

<div class="container mx-auto px-4">
	<div>
		<label class="form-control w-full mt-3">
			<div class="label">
				<span class="label-text">Store</span>
			</div>
			<input
				bind:value={Seller}
				type="text"
				placeholder="Where?"
				class="input input-bordered w-full"
				required
			/>
		</label>

		<label class="form-control w-full mt-3">
			<div class="label">
				<span class="label-text">Category</span>
			</div>
			<input
				bind:value={Category}
				type="text"
				placeholder="What?"
				class="input input-bordered w-full"
				required
			/>
		</label>

		<label class="form-control w-full mt-3">
			<div class="label">
				<span class="label-text">Cost</span>
			</div>
			<input
				bind:value={Cost}
				type="number"
				placeholder="How much?"
				class="input input-bordered w-full"
				required
			/>
		</label>

		<label class="form-control">
			<div class="label">
				<span class="label-text">Notes</span>
			</div>
			<textarea
				bind:value={Notes}
				class="textarea textarea-bordered h-24"
				placeholder="Optional Purchase information..."
			></textarea>
		</label>

		<button
			class="btn btn-secondary w-full mt-3"
			on:click={handleSubmit}
			disabled={checkFields({ Purchaser, Category, Seller, Cost })}
			>+ Add</button
		>
	</div>
	{#if toastState}
		<div class="toast toast-center">
			<div class="alert alert-success">
				<span>Expense Added.</span>
			</div>
		</div>
	{/if}
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
