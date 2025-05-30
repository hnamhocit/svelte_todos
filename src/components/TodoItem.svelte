<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { ExternalLink, Trash2 } from '@lucide/svelte';
	import type { ITodo } from '../interfaces';
	import { todosStore } from '../stores/todos.store';

	let { todo }: { todo: ITodo } = $props();

	let isComplete = $state(todo.isComplete);
</script>

<div class="space-y-4 rounded-2xl bg-white p-4">
	<div class="flex items-center justify-end gap-3">
		<Checkbox
			class="h-5 w-5 border-black"
			disabled={$todosStore.isDisabled}
			bind:checked={isComplete}
			onCheckedChange={(value) => {
				isComplete = value;
				todosStore.updateTodo(todo.id, { isComplete: value });
			}}
		/>

		<a href={`/todos/${todo.id}`}>
			<Button variant="outline">
				<ExternalLink />
			</Button>
		</a>

		<Button
			variant="outline"
			disabled={$todosStore.isDisabled}
			onclick={() => todosStore.deleteTodo(todo.id)}
		>
			<Trash2 />
		</Button>
	</div>

	<div class="space-y-2">
		<div class="text-lg font-bold text-black" class:line-through={isComplete}>
			{todo.title}
		</div>

		<p class="line-clamp-4 text-gray-700" class:line-through={isComplete}>
			{todo.description}
		</p>

		<div
			class="text-sm text-gray-500"
			class:text-green-500={isComplete && todo.deadline > Date.now()}
			class:text-red-600={!isComplete && todo.deadline < Date.now()}
		>
			{new Date(todo.deadline).toLocaleString()}
		</div>
	</div>
</div>
