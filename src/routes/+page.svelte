<script lang="ts">
	import Icon from "$lib/parts/Icon.svelte";
	import TitleBanner from "$lib/images/title-banner.png"
</script>

<svelte:head>
	<title>Home</title>
	<meta
		name="description"
		content="9b emang gak kul. Mending lgsg masuk websitenya dah, daripada nengok deskripsi doang"
	/>
</svelte:head>
<section>
	<img class="banner" alt="title banner" src={TitleBanner}/>
	<h1>9b is <span><Icon name="fire-fill" color="red" />cooked</span></h1>
	<p>We like to</p>
	<ul class="tasks">
		<li>
			<p>Chill</p>
			<Icon name="umbrella-fill" />
		</li>
		<li>
			<p>Sleep</p>
			<Icon name="hotel-bed-fill" />
		</li>
		<li>
			<p>Repeat</p>
			<Icon name="repeat-2-fill" />
		</li>
	</ul>
	<p>just <strong>that</strong></p>
	<iframe
		title="Spotify playlist"
		style="border-radius:12px"
		src="https://open.spotify.com/embed/playlist/1DHqRh4zXuziQCKTL9x6tb?utm_source=generator"
		width="280"
		height="352"
		frameBorder="0"
		allowfullscreen
		allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
		loading="lazy"
	></iframe>
</section>

<style scoped>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}
	.banner {
		position: absolute;
		width:20em;
		top:70px;
		z-index: 1;
		opacity: 0.5;
		border-radius: 30px;
	}
	h1 {
		z-index: 2;
	}
	p {
		z-index: 2;
	}
	ul.tasks {
		display: flex;
		list-style: none;
		column-gap: 5px;
		margin-left: 20%;
		margin-right: 25%;
	}
	ul.tasks > li {
		display: flex;
		align-items: center;
	}
	ul.tasks > li > :global(svg) {
		color: white;
		background-color: var(--color-theme-1);
		padding: 10px;
		border-radius: 10px;
	}
	ul.tasks > li > p {
		color: white;
		background-color: var(--color-theme-1);
		padding: 10px;
		border-radius: 10px;
	}

	h1 {
		width: 100%;
	}

	@media only screen and (max-width: 600px) {
		ul.tasks {
			flex-direction: row;
		}
		ul.tasks > li > :global(svg) {
			display: none;
		}
	}
</style>
