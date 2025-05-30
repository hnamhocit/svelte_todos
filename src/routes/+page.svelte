<script lang="ts">
	import { Input } from '$lib/components/ui/input';
	import { collection, onSnapshot, type Unsubscribe } from 'firebase/firestore';
	import { onDestroy, onMount } from 'svelte';

	import CreateTodo from '../components/CreateTodo.svelte';
	import Loading from '../components/Loading.svelte';
	import TodoItem from '../components/TodoItem.svelte';
	import { db } from '../config/firebase';
	import type { ITodo } from '../interfaces';
	import { todosStore } from '../stores/todos.store';

	let search = $state('');
	let unsubscribe: Unsubscribe | null = null;

	const filteredTodos = $derived(() => {
		return $todosStore.todos.filter(
			(todo) =>
				todo.title.toLowerCase().includes(search.toLowerCase()) ||
				todo.description.toLowerCase().includes(search.toLowerCase())
		);
	});

	onMount(() => {
		todosStore.setLoading(true);

		unsubscribe = onSnapshot(
			collection(db, 'todos'),
			(snapshot) => {
				todosStore.update((state) => ({
					...state,
					isLoading: false,
					todos: snapshot.docs.map((doc) => doc.data() as ITodo)
				}));
			},
			(error) => {
				console.trace(error);
				todosStore.setLoading(false);
			}
		);
	});

	onDestroy(() => {
		if (unsubscribe) {
			unsubscribe();
		}
	});
</script>

{#if $todosStore.isLoading}
	<Loading />
{:else}
	<div class="space-y-7 p-7">
		<div class="flex justify-center">
			<Input bind:value={search} placeholder="Search" />
		</div>

		<div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<CreateTodo />

			{#each filteredTodos() as todo (todo.id)}
				<TodoItem {todo} />
			{/each}
		</div>
	</div>
{/if}
