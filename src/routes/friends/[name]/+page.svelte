<script lang="ts">
	import Friend from "$lib/parts/Friend.svelte";
	import Icon from "$lib/parts/Icon.svelte";
	import type { PageData } from "./$types";
	import { preloadData } from "$app/navigation";
	import { browser } from "$app/environment";
	let { data }: { data: PageData } = $props();
</script>

<svelte:head>
	<title>{data.name} - Friends</title>
        <meta name="description" content="Temen temen 9b" />
</svelte:head>

<button
	class="go-back"
	onclick={async () => {
		if (browser) {
			await preloadData("/friends");
			history.back();
		}
	}}
>
	<Icon name="arrow-left-fill" /> <span>Go back to main page</span>
</button>
<Friend name={data.name} full={true} />

<style>
	.go-back {
		border: none;
		cursor: pointer;
		display: flex;
		color: white;
		background-color: var(--color-theme-1);
		padding: 10px;
		border-radius: 10px;
		padding-left: auto;
		align-items: center;
		justify-content: center;
	}
</style>
