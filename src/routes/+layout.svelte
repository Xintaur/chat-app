<script>
	import { navigating } from '$app/stores';
	import '../app.css';
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
			<li
				class="rounded-md px-3 py-1 text-lg font-bold active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
			>
				<a href="/user">User</a>
			</li>
		</ul>
	</nav>
	<main>
		<slot />
	</main>
</div>
