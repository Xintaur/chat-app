<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1 class="text-xl">Oops, an error occured:</h1>
<br />
<p class="text-xl text-red-600">{$page.status}</p>
<br />
<pre>{$page.error?.message}</pre>
