<script>
	export let data;
	const { budget } = data.user;
	const alertColor = () => {
		let breakpointOne = budget / 3;
		let breakpointTwo = breakpointOne * 2;

		if (data.weeklyTotal < breakpointOne) {
			return 'alert-success';
		} else if (
			data.weeklyTotal > breakpointOne &&
			data.weeklyTotal < breakpointTwo
		) {
			return 'alert-warning';
		} else {
			return 'alert-error';
		}
	};
</script>

<div class="container mx-auto">
	<div class="w-11/12 mx-auto mt-5">
		<div role="alert" class={`alert ${alertColor()}`}>
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
