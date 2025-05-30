<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Book, HelpCircle } from '@lucide/svelte';
	import { userStore } from '../stores/user.store';
</script>

<div class="sticky top-0 left-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4">
	<div class="flex items-center gap-3">
		<a href="/">
			<img src="/images/logo.png" alt="Nuxt Todo" class="h-10 w-10" />
		</a>

		<h1 class="hidden text-2xl font-bold text-orange-500 md:block">Svelte Todos</h1>
	</div>

	{#if $userStore.user}
		<div class="flex items-center gap-5">
			<div class="hidden text-sm text-gray-500 md:block">
				Hi,
				<span class="font-semibold text-orange-500">{$userStore.user.displayName}</span>
			</div>

			<a href="/how-to-delete-data">
				<HelpCircle />
			</a>

			<a href="/privacy-and-policy">
				<Book />
			</a>

			<Button variant="destructive" onclick={() => userStore.logout()}>Logout</Button>
		</div>
	{/if}
</div>
