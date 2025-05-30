<script lang="ts">
	import { Toaster } from '$lib/components/ui/sonner/index.js';
	import '../app.css';
	import Provider from '../components/Provider/index.svelte';

	let { children } = $props();
</script>

<Toaster />

<Provider>
	{@render children()}
</Provider>
