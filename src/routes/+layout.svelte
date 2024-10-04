<script>
	import '../app.css';
	export let data;
</script>

<div class="navbar bg-neutral text-neutral-content">
	<div class="navbar-start">
		<a href="/" class="btn btn-ghost text-xl">Pocket Budget</a>
	</div>

	{#if data.user}
		<div class="navbar-end">
			<ul class="menu menu-horizontal">
				<li>
					<details class="dropdown dropdown-end">
						<summary class="">Options</summary>
						<ul
							class="menu dropdown-content rounded-box z-[1] w-48 p-2 shadow text-primary-content"
						>
							<li><a href="/dashboard">Dashboard</a></li>
							<li><a href="/add/expense">Add Expense</a></li>
							<li><a href="/account">My Account</a></li>
							<li><a href="/logout">Logout</a></li>
						</ul>
					</details>
				</li>
			</ul>
		</div>
	{/if}
</div>

<slot />
