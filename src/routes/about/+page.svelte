<script>
	import Icon from "$lib/parts/Icon.svelte";
	import oldPage from "$lib/images/oldpage.png";
	import oldPageFriends from "$lib/images/oldpage-friends.png";
</script>

<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<div class="text-column">
	<h1>About this page</h1>
	<p>
		So, this is my website for my homework, the deadline is next year
		(2025), but idc.
	</p>
	<p>
		Originally, I was trying to make a blog using Flutter and Firebase. It
		succeeded, but at what cost. I dont want to have those 'ratelimit'ing
		read/writes for databases. So, I switched to make a website for my
		class. So, here it is!
	</p>
	<h2><strong>The "drastic" redesign changes</strong></h2>
	<img
		alt="old page"
		src={oldPage}
		style="width:20em; height:20em; align-self:center;"
	/>
	<p>Maybe if you already visited this website, you may find it a little bit.. off</p>
	<p>"Where the hell is the search bar?"</p>
	<p>"Where's the android-like UI that you use?"</p>
	<p>
		Well, in a nutshell, im redesigning everything including the code, just
		to make it lighter
	</p>
	<p>But if you want to be more technical, here it is</p>
	<h3>More technical...</h3>
	<p>
		"Everything is redesigned" Including the framework that powered this
		website. Instead of <a href="https://react.dev">React</a>, I use
		<a href="https://svelte.dev">Svelte</a>
	</p>
	<p>
		Instead of bundling into one file, I use built-in <a
			href="https://kit.svelte.dev">SvelteKit</a
		>
		engine to compile these things. Even though both of the frameworks are
		using the same bundling framework, <a href="https://vite.dev">Vite</a>
	</p>
	<p>
		But I mean, its pretty lite considering that <a
			href="https://svelte.dev">Svelte</a
		>
		dosent have VDoms in it. Unlike its competitor,
		<a href="https://vuejs.org">Vue</a>
		(well, atleast our <a href="https://nuxt.com">Nuxt</a> isnt as heavy as yours)
	</p>
</div>
