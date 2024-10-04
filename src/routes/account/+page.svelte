<script>
	export let data;
	let budget = (data.user.budget * 1.0).toFixed(2);
</script>

<div class="container w-11/12 mx-auto">
	<h1 class="text-4xl text-center mt-3">
		Hello {data.user.name.split(' ')[0]}!
	</h1>
	<div class="divider">UPDATE BUDGET</div>
	<form action="?/updateBudget" method="post">
		<label for="budget" class="form-control">
			<div class="label">
				<span class="label-text">Budget:</span>
			</div>
			<input
				name="budget"
				type="number"
				placeholder="Type here"
				class="input input-bordered input-primary w-full"
				bind:value={budget}
			/>
		</label>
		<button type="submit" class="btn btn-primary w-full mt-3">UPDATE</button
		>
	</form>
</div>

<style>
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
		margin: 0;
	}
</style>
