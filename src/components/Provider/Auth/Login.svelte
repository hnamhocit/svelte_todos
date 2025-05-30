<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { superForm } from 'sveltekit-superforms';
	import { zodClient } from 'sveltekit-superforms/adapters';

	import {
		FormButton,
		FormControl,
		FormField,
		FormFieldErrors,
		FormLabel
	} from '$lib/components/ui/form';
	import { Input } from '$lib/components/ui/input';
	import { userStore } from '../../../stores/user.store';
	import Providers from './Providers.svelte';
	import { loginSchema } from './schemas';
	let { onclick } = $props();

	const form = superForm(
		{
			email: '',
			password: ''
		},
		{
			validators: zodClient(loginSchema)
		}
	);

	const { form: formData, enhance } = form;

	async function onsubmit(e: SubmitEvent) {
		e.preventDefault();

		const { valid } = await form.validateForm();

		if (!valid) {
			return;
		}

		const email = $formData.email;
		const password = $formData.password;

		await userStore.login(email, password);
	}
</script>

<div class="w-full max-w-xs space-y-7">
	<div class="flex justify-center">
		<img src="/images/logo.png" alt="Logo" class="h-24 w-24" />
	</div>

	<form use:enhance method="POST" class="space-y-7" {onsubmit}>
		<FormField {form} name="email">
			<FormControl>
				{#snippet children({ props })}
					<FormLabel>Email</FormLabel>
					<Input {...props} bind:value={$formData.email} />
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<FormField {form} name="password">
			<FormControl>
				{#snippet children({ props })}
					<FormLabel>Password</FormLabel>
					<Input {...props} bind:value={$formData.password} />
				{/snippet}
			</FormControl>
			<FormFieldErrors />
		</FormField>

		<FormButton class="w-full justify-center">Login</FormButton>

		<div class="text-center">
			Don't have an account?
			<Button variant="link" {onclick}>Register</Button>
		</div>

		<Providers />
	</form>
</div>
