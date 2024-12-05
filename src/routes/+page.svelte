<script lang="ts">
    import Icon from '$lib/parts/Icon.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>9b is <span><Icon name="fire-fill" color="red"/>cooked</span></h1>
	<p>We like to</p>
	<ul class="tasks">
		<li>Chill</li>
		<li><Icon name="umbrella-fill"/></li>
		<li>Sleep</li>
		<li><Icon name="hotel-bed-fill"/></li>
		<li>Repeat</li>
		<li><Icon name="repeat-2-fill"/></li>
	</ul>
	<p>just <strong>that</strong></p>
    <iframe title="Spotify playlist" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/1DHqRh4zXuziQCKTL9x6tb?utm_source=generator" width="50%" height="352" frameBorder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
    ul.tasks {
		display: flex;
		list-style: none;
		column-gap: 10px;
		margin-left:20%;
		margin-right:23%;
		align-content: center;
		justify-content: center;
	}
	ul.tasks > li {
		color:white;
		background-color:var(--color-theme-1);
		padding:10px;
		border-radius:10px;
	}

	h1 {
		width: 100%;
	}
</style>
