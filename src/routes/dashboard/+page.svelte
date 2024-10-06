<script>
	export let data;
	const { budget } = data.user;
	const alertColorCalculator = () => {
		if (data.weeklyTotal >= budget * 0.66) {
			console.log('Hello');
			return 'alert-error';
		} else if (data.weeklyTotal >= budget * 0.33) {
			return 'alert-warning';
		} else {
			return 'alert-success';
		}
	};
</script>

<div class="container mx-auto">
	<div class="w-11/12 mx-auto mt-5">
		<div role="alert" class={`alert ${alertColorCalculator()}`}>
			<span>Currently Weekly Total: ${data.weeklyTotal}</span>
		</div>
	</div>

	<div class="w-11/12 mx-auto">
		{#each data.expenses as expense}
			<div
				tabIndex={0}
				class="collapse collapse-arrow bg-info text-primary-content mt-5"
			>
				<div class="collapse-title text-xl font-medium">
					{`$${expense.Cost} - ${expense.Seller}`}
				</div>
				<div class="collapse-content">
					{#if expense.Notes}
						<p>
							<strong>Notes:</strong>
							{expense.Notes}
						</p>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
