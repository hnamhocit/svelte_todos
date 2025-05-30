<script lang="ts">
	import { onAuthStateChanged } from 'firebase/auth';
	import { onDestroy } from 'svelte';

	import { auth } from '../../config/firebase';
	import { userStore } from '../../stores/user.store';
	import Header from '../Header.svelte';
	import Loading from '../Loading.svelte';
	import Auth from './Auth/index.svelte';

	let { children } = $props();

	let unsubscribe = onAuthStateChanged(auth, (user) => {
		if (user) {
			userStore.getMe(user.uid);
		} else {
			userStore.setLoading(false);
		}
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

{#if $userStore.isLoading}
	<Loading />
{:else if !$userStore.user}
	<Auth />
{:else}
	<Header />
	<div class="p-4">
		{@render children()}
	</div>
{/if}
