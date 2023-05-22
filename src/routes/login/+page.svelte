<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from './$types';

	let loading = false;

	const signup: SubmitFunction = (input) => {
		loading = true;

		return async ({ update }) => {
			loading = false;

			await update();
		};
	};
</script>

<div>
	<form method="POST" use:enhance={signup}>
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
		<input type="submit" value="Continue" />
	</form>
	<p>
		<a href="/signup">Signup instead</a>
	</p>
</div>
