<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import type { LayoutData } from './$types';

	export let data: LayoutData;

	$: ({ contacts } = data);

	async function removeContact(id: string) {
		await fetch('/api/contact/' + id, {
			method: 'DELETE'
		});

		invalidateAll();
	}
</script>

<div class="flex gap-4">
	<aside class="w-1/4">
		<nav class="overflow-y-auto">
			<ul>
				{#each contacts as contact}
					<li
						class="grid-f-a my-2 grid gap-3 rounded-md bg-slate-100 px-3 py-2 active:bg-slate-200 dark:bg-slate-900 dark:active:bg-slate-950"
					>
						<a class="block truncate" href="/contacts/{contact.id}">{contact.username}</a>
						<button
							class="text-lg leading-none text-red-600"
							on:click={() => removeContact(contact.id)}>X</button
						>
					</li>
				{/each}
			</ul>
		</nav>
	</aside>
	<article class="w-3/4">
		<slot />
	</article>
</div>
