<script>
	import PocketBase from 'pocketbase';

	let pb = new PocketBase('http://10.0.0.101:8090');

	let userLoggedIn = pb.authStore.isValid;
</script>

{#if userLoggedIn}
	<h1>Welcome to the homepage, {pb.authStore.model.name}</h1>
{:else}
	<h1>Welcome to the homepage.</h1>
{/if}
