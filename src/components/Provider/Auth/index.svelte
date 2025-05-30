<script lang="ts">
	import Login from './Login.svelte';
	import Register from './Register.svelte';

	let isLogin = $state(true);
	const onclick = () => {
		isLogin = !isLogin;
	};
</script>

<div class="flex h-screen items-center justify-center">
	{#if isLogin}
		<Login {onclick} />
	{:else}
		<Register {onclick} />
	{/if}
</div>
