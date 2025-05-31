<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import { goto } from '$app/navigation';
	import { page } from '$app/state';
	import Button from '$lib/components/ui/button/button.svelte';
	import { FormControl, FormField, FormFieldErrors } from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import moment from 'moment';
	import { onMount } from 'svelte';
	import Loading from '../../../components/Loading.svelte';
	import MarkdownPreview from '../../../components/MarkdownPreview.svelte';
	import { todosStore } from '../../../stores/todos.store';
	import { createOrUpdateTodoSchema } from '../schemas';

	let deadline = $state(moment().format('YYYY-MM-DDTHH:mm'));
	const id = page.url.searchParams.get('id');

	const form = superForm(
		{
			title: '',
			description: ''
		},
		{
			validators: zodClient(createOrUpdateTodoSchema)
		}
	);

	const { form: formData, enhance } = form;

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault();

		try {
			const { valid } = await form.validateForm();

			if (!valid) {
				return;
			}

			if (id) {
				await todosStore.updateTodo(id, {
					title: $formData.title,
					description: $formData.description,
					deadline: moment(deadline).valueOf()
				});
			} else {
				await todosStore.createTodo({
					title: $formData.title,
					description: $formData.description,
					deadline: moment(deadline).valueOf()
				});

				form.reset();
			}
		} catch (error) {
			console.trace(error);
		}
	}

	onMount(async () => {
		if (id) {
			const todo = await todosStore.getTodo(id);

			if (!todo) {
				goto('/');
				return;
			}

			formData.set({
				title: todo.title,
				description: todo.description
			});
		}
	});
</script>

{#if $todosStore.isLoading}
	<Loading />
{:else}
	<form method="POST" class="flex flex-col gap-7 p-7" use:enhance {onsubmit}>
		<FormField {form} name="title">
			<FormControl>
				{#snippet children()}
					<textarea
						bind:value={$formData.title}
						placeholder="Title"
						class="block resize-none bg-transparent text-5xl font-bold outline-none"
						spellcheck="false"
					></textarea>
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<div class="flex flex-col gap-3">
			<FormField {form} name="description" class="flex-1">
				<FormControl>
					{#snippet children()}
						<textarea
							bind:value={$formData.description}
							placeholder="Description"
							rows="12"
							class="block w-full resize-none bg-transparent outline-none"
							spellcheck="false"
						></textarea>
					{/snippet}
				</FormControl>
				<FormFieldErrors />
			</FormField>

			<div class="flex flex-col gap-3">
				<div class="text-muted-foreground text-sm">Preview</div>
				<MarkdownPreview
					class="min-h-40 w-full max-w-none overflow-x-hidden rounded-md border p-3"
					markdown={$formData.description}
				/>
			</div>
		</div>

		<Input bind:value={deadline} type="datetime-local" placeholder="Deadline" />

		<div class="flex items-center justify-end gap-3">
			<Button type="button" variant="destructive" onclick={() => form.reset()}>Reset</Button>

			<Button type="submit" disabled={$todosStore.isDisabled}>
				{id ? 'Update' : 'Add'} Todo
			</Button>
		</div>
	</form>
{/if}
