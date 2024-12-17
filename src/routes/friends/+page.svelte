<script lang="ts">
	import { friendsListInfer } from "$lib/modules/friendsList";
	import Friend from "$lib/parts/Friend.svelte";
	import Search from "$lib/parts/Search.svelte";
	let search: string = $state("");
</script>

<svelte:head>
	<title>Friends</title>
	<meta name="description" content="Temen temen 9b" />
</svelte:head>
<Search bind:value={search} />
<div class="grid-container">
	{#each Object.keys(friendsListInfer) as friend}
		{#if search === "" || friend.includes(search)}
			<Friend inferName={friend} />
		{/if}
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
