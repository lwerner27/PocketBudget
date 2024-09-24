<script>
	export let form;
</script>

<div class="container mx-auto">
	<div class="card card-compact shadow-2xl mx-auto mt-32 w-11/12 md:w-5/12">
		<div class="card-body">
			<form
				method="POST"
				class="p-5"
				autocomplete="off"
				autocapitalize="off"
			>
				{#if form?.status === 400}
					<div role="alert" class="alert alert-warning">
						<span>Invalid Username or Password</span>
					</div>
				{/if}
				<label class="form-control mt-4">
					<input
						name="username"
						type="text"
						placeholder="Username"
						class="input input-bordered input-secondary"
					/>
				</label>
				<label class="form-control mt-4">
					<input
						name="password"
						type="password"
						placeholder="Password"
						class="input input-bordered input-secondary"
					/>
				</label>

				<button class="btn btn-secondary btn-block mt-4">Login</button>
			</form>
		</div>
	</div>
</div>
