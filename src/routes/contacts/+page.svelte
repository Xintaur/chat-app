<script lang="ts">
	import { enhance } from '$app/forms';
	import type { ActionData, PageData, SubmitFunction } from './$types';

	export let data: PageData;

	let loading = false;

	const addContact: SubmitFunction = (input) => {
		loading = true;

		return async ({ update }) => {
			loading = false;

			await update();
		};
	};

	$: ({ contacts } = data);
</script>

<h1 class="p-1 text-lg">You currently have {contacts.length} Contacts.</h1>
<form class="flex flex-col gap-2" method="POST" action="?/addContact" use:enhance={addContact}>
	<input
		class="rounded-sm bg-slate-100 px-2 py-1 focus:bg-slate-200 dark:bg-slate-700 dark:focus:bg-slate-600"
		type="text"
		name="username"
		id="name"
		placeholder="Username*"
		required
	/>
	<input
		class="rounded-sm bg-slate-100 px-2 py-1 focus:bg-slate-200 dark:bg-slate-700 dark:focus:bg-slate-600"
		type="email"
		name="email"
		id="email"
		placeholder="E-Mail*"
		required
	/>
	<button
		class="rounded-sm bg-slate-100 px-2 py-1 active:bg-slate-200 disabled:bg-slate-400 dark:bg-slate-900 dark:active:bg-slate-950"
		class:loading
		type="submit"
		disabled={loading || null}
	>
		{#if !loading}Add{/if}
	</button>
</form>

<style>
	@import '$lib/client/style/loading.css';
</style>
