<script>
	import { Plus } from '@lucide/svelte';
</script>

<a
	href="/todos/new"
	class="flex h-60 cursor-pointer items-center justify-center rounded-2xl bg-white p-4"
>
	<div
		class="flex min-h-60 flex-col items-center justify-center gap-5 rounded-2xl border p-4 text-center"
	>
		<Plus class="cursor-pointe text-orange-500" size={48} />
		<h2 class="text-2xl font-bold text-orange-500">Create Todo</h2>
		<p class="text-sm text-gray-500">Create a new todo to help you stay organized and on track.</p>
	</div>
</a>
