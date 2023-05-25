<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { PageData } from './$types';
	import '../app.css';

	export let data: PageData;

	let loading = false;

	async function logout() {
		loading = true;

		await fetch('/api/logout/', {
			method: 'DELETE'
		});
		await invalidateAll();

		loading = false;
	}
</script>

<div class="container mx-auto flex h-full flex-col p-2">
	<nav class="py-1">
		<ul class="flex gap-2">
			<li
				class="rounded-md px-3 py-1 text-lg font-bold active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
			>
				<a href="/">Home</a>
			</li>
			<li
				class="rounded-md px-3 py-1 text-lg font-bold active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
			>
				<a href="/contacts">Contacts</a>
			</li>
			<li
				class="rounded-md px-3 py-1 text-lg font-bold active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
			>
				<a href="/chat">Chat</a>
			</li>
			{#if data.user}
				<li
					class="ml-auto rounded-md px-3 py-1 text-lg font-bold active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
				>
					<button type="submit" class:loading on:click={() => logout()}>
						{#if !loading}Signout{/if}
					</button>
				</li>
			{/if}
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>
