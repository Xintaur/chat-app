<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types';

	let loading = false;

	const login: SubmitFunction = (input) => {
		loading = true;

		return async ({ update }) => {
			loading = false;

			await update();
		};
	};
</script>

<form class="grid gap-2 py-2" method="POST" use:enhance={login}>
	<input
		class="rounded-sm bg-slate-100 px-2 py-1 focus:bg-slate-200 dark:bg-slate-700 dark:focus:bg-slate-600"
		id="username"
		name="username"
		placeholder="Username*"
	/>
	<input
		class="rounded-sm bg-slate-100 px-2 py-1 focus:bg-slate-200 dark:bg-slate-700 dark:focus:bg-slate-600"
		type="password"
		id="password"
		name="password"
		placeholder="Password*"
	/>
	<button
		class="rounded-sm bg-slate-100 px-2 py-1 active:bg-slate-200 disabled:bg-slate-400 dark:bg-slate-900 dark:active:bg-slate-950"
		class:loading
		type="submit"
		disabled={loading || null}
	>
		{#if !loading}Signup{/if}
	</button>
</form>
<p>
	<a href="/login"> Log into an existing account </a>
</p>

<style>
	@import '$lib/client/style/loading.css';
</style>
