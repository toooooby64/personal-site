<script>
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import ContactMe from '$lib/components/ContactMe.svelte';

	let dark = $state(false);

	function toggleDark() {
		dark = !dark;
		document.documentElement.classList.toggle('dark', dark);
		localStorage.setItem('darkMode', String(dark));
	}

	$effect(() => {
		const saved = localStorage.getItem('darkMode') === 'true';
		if (saved) {
			dark = true;
			document.documentElement.classList.add('dark');
		}
	});
</script>

<nav class="border fixed split-nav">
	<div class="nav-brand" style="display: flex; align-items: center; gap: 10px;">
		<h3>JA</h3>
		<button
			onclick={toggleDark}
			aria-label="Toggle dark mode"
			class="dark-toggle"
			style="margin: 0;"
		>
			{dark ? '☀️' : '🌙'}
		</button>
	</div>

	<div class="collapsible">
		<input id="collapsible1" type="checkbox" name="collapsible1" />
		<label for="collapsible1">
			<div class="bar1"></div>
			<div class="bar2"></div>
			<div class="bar3"></div>
		</label>
		<div class="collapsible-body">
			<ul class="inline">
				<li><a href="#About">About</a></li>
				<li><a href="#Projects">Projects</a></li>
				<li><a href="#ContactMe">Contact Me</a></li>
				<li><a href="https://www.github.com/toooooby64">Github</a></li>
			</ul>
		</div>
	</div>
</nav>
<div class="paper container margin-bottom-large top">
	<Hero />
</div>

<div class="paper container margin-bottom-large">
	<AboutMe />
</div>

<div class="paper container margin-bottom-large">
	<Projects />
</div>

<div class="paper container margin-bottom-large">
	<ContactMe />
</div>

<div class="to-top">
	<a class="paper-btn margin" style="border-radius: 100%;" href="#top">^</a>
</div>

<style>
	.to-top {
		opacity: 1;
		display: inline-block;
		position: fixed;
		bottom: 1em;
		right: 1em;
	}
	.to-top .paper-btn {
		padding: 0.6em 1em;
		border-top-left-radius: 185px 160px;
		border-top-right-radius: 200px 195px;
		border-bottom-right-radius: 160px 195px;
		border-bottom-left-radius: 185px 190px;
	}
</style>
