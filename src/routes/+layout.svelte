<script lang="ts">
	import Header from './Header.svelte';
	import '../app.css';
    import { effect } from '$lib/modules/nf.svelte';

	let { children } = $props();
	effect(()=>{})
</script>

<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	<footer>
		<a href="https://github.com/vintheweirdass/">
			<img class="myself" alt="vtwa's pfp" src="https://avatars.githubusercontent.com/u/70825723?v=4"/>
	    </a>
		<p>With the power of <a href="https://kit.svelte.dev">SvelteKit</a></p>
	</footer>
</div>

<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
    footer {
		display: flex;
		flex-direction: row;
	}
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer img.myself {
       width:3em;
	   height:3em;
	   border-radius: 30px;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
