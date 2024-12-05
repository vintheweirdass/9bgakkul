<script>
	import { friendsListInfer } from "$lib/modules/friendsList";
	import Friend from "$lib/parts/Friend.svelte";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>
<div class="grid-container">
	{#each Object.keys(friendsListInfer) as friend}
		<Friend inferName={friend} />
	{/each}
</div>

<style>
	.grid-container {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: repeat(2, 1fr);
		column-gap: 10px;
		row-gap: 10px;
	}
</style>
