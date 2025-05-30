<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import Checkbox from '$lib/components/ui/checkbox/checkbox.svelte';
	import { PencilIcon, Trash2 } from '@lucide/svelte';
	import { onMount } from 'svelte';
	import { toast } from 'svelte-sonner';
	import Loading from '../../../components/Loading.svelte';
	import MarkdownPreview from '../../../components/MarkdownPreview.svelte';
	import type { ITodo } from '../../../interfaces';
	import { todosStore } from '../../../stores/todos.store';

	const { id } = page.params;

	let todo = $state<ITodo | null>(null);
	let isComplete = $state(false);

	onMount(async () => {
		if (id) {
			const res = await todosStore.getTodo(id);

			if (!res) {
				goto('/');
				toast.error('Todo not found');
			}

			todo = res;
			isComplete = res!.isComplete;
		}
	});
</script>

{#if $todosStore.isLoading}
	<Loading />
{/if}

{#if todo}
	<div class="space-y-7 p-4">
		<div class="flex items-center justify-between">
			<div class="space-y-2">
				<div class="text-5xl font-bold text-green-500">
					{todo.title}
				</div>

				<div class="flex items-center gap-3">
					<div class:text-green-500={isComplete} class:text-red-500={!isComplete}>
						{isComplete ? 'Completed' : 'Not Completed'}
					</div>

					<div>-</div>

					<div class="text-gray-500">
						Deadline:
						{new Date(todo.deadline).toLocaleDateString()}
					</div>
				</div>
			</div>

			<div class="flex items-center gap-3">
				<Checkbox
					class="h-6 w-6 border-black"
					disabled={$todosStore.isDisabled}
					bind:checked={isComplete}
					onCheckedChange={(value) => {
						isComplete = value;
						todosStore.updateTodo(todo!.id, { isComplete: value });
					}}
				/>

				<a href={`/todos/new?id=${id}`}>
					<Button>
						<PencilIcon />
					</Button>
				</a>

				<Button
					variant="destructive"
					disabled={$todosStore.isDisabled}
					onclick={() => todosStore.deleteTodo(todo!.id)}
				>
					<Trash2 />
				</Button>
			</div>
		</div>

		<MarkdownPreview markdown={todo.description} class="max-w-none" />
	</div>
{/if}
