<script lang="ts">
	import { io } from '$lib/webSocket.js';
	import { onMount } from 'svelte';

	let textfield = '';
	let username = '';

	let messages = [];

	onMount(() => {
		io.on('message', (message) => {
			messages = [...messages, message];
		});
		io.on('name', (name) => {
			username = name;
		});
	});

	function sendMessage() {
		const message = textfield.trim();
		if (!message) return;

		textfield = '';
		io.emit('message', message);
	}
</script>

<div>
	{#each messages as message}
		<div>
			<span>
				<b>{message.from}</b>
				<i>{message.time}</i>
			</span>
			{message.message}
		</div>
	{/each}
</div>
<form action="#" on:submit|preventDefault={sendMessage}>
	<input type="text" bind:value={textfield} placeholder="Type something..." />
	<button type="submit">Send</button>
</form>
