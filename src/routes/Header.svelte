<script lang="ts">
	import { page } from "$app/stores";
	import bintang from "$lib/images/bintang.png";
	import { providers } from "$lib/modules/friendsList";
    import Icon from "$lib/parts/Icon.svelte";
</script>

<header>
	<div class="corner">
		<img src={bintang} alt="B i n t a n g" />
	</div>
	{#snippet navTo(href: string, name: string, icon?:string|undefined)}
		<li aria-current={$page.url.pathname === href ? "page" : undefined} title={name}>
			<a {href}><Icon name="{icon??((name).toLowerCase())}-{$page.url.pathname === href?"fill":"line"}"/></a>
		</li>
	{/snippet}
	<nav>
		<ul>
			{@render navTo("/", "Home")}
			{@render navTo("/friends", "Friends", "user-community")}
			{@render navTo("/msgmaker", "Message Maker", "message-3")}
			{@render navTo("/about", "About", "information")}
		</ul>
	</nav>
	<nav>
		<ul>
			<li>
				<a href={`${providers["instagram"]}9b_iscooked`}><Icon name="instagram-line"/></a>
			</li>
			<li>
				<a href={"https://open.spotify.com/playlist/1DHqRh4zXuziQCKTL9x6tb"}><Icon name="spotify-line"/></a>
			</li>
		</ul>
	</nav>
</header>

<style>
	header {
		display: flex;
		justify-content: space-around;
	}
	.corner {
		width: 3em;
		height: em;
	}
	.corner > img {
		width: 3em;
		height: 3em;
		border-radius: 10px;
		object-fit: contain;
		margin-top: 10px;
		margin-left: 10px;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}

	ul {
		position: relative;
		padding: 6px;
		margin: 0;
		border-bottom-left-radius: 30px;
		border-bottom-right-radius: 30px;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current="page"]::before {
		--size: 6px;
		content: "";
		width: 0;
		height: 0;
		position: absolute;
		top: 80%;
		padding: 10px;
		left: calc(42% - var(--size));
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.8rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
