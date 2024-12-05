<script lang="ts">
	import { page } from "$app/stores";
	import bintang from "$lib/images/bintang.png";
	import github from "$lib/images/github.svg";
	import { providers } from "$lib/modules/friendsList";
</script>

<header>
	<div class="corner">
		<img src={bintang} alt="B i n t a n g" />
	</div>
	{#snippet navTo(href: string, name: string)}
		<li aria-current={$page.url.pathname === href ? "page" : undefined}>
			<a {href}>{name}</a>
		</li>
	{/snippet}
	<nav>
		<ul>
			{@render navTo("/", "Home")}
			{@render navTo("/friends", "Friends")}
			{@render navTo("/about", "About")}
		</ul>
	</nav>
	<nav>
		<ul>
			<li>
				<a href={`${providers["instagram"]}9b_iscooked`}>Instagram</a>
			</li>
			<li>
				<a href={"https://open.spotify.com/playlist/1DHqRh4zXuziQCKTL9x6tb"}>Spotify</a>
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
		top: 70%;
		padding: 10px;
		left: calc(40% - var(--size));
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
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
