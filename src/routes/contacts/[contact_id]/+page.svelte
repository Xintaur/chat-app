<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<p class="p-1 text-lg font-bold">{data.contact.username}</p>
