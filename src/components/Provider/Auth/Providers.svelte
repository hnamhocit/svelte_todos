<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { userStore } from '../../../stores/user.store';
</script>

<div class="flex items-center gap-3">
	<Button
		type="button"
		class="flex-1"
		variant="outline"
		onclick={() => userStore.loginWithProvider('google')}
	>
		<img src="/images/google.png" alt="Google" class="h-4 w-4" />
		Google
	</Button>

	<Button
		type="button"
		class="flex-1"
		variant="outline"
		onclick={() => userStore.loginWithProvider('facebook')}
	>
		<img src="/images/facebook.webp" alt="Facebook" class="h-4 w-4" />
		Facebook
	</Button>
</div>
