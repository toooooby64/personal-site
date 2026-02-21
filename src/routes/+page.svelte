<script>
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<nav class="border fixed split-nav">
	<div class="nav-brand">
		<h3>JA</h3>
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
				<li><a href="https://www.github.com/toooooby64">Github</a></li>
			</ul>
		</div>
	</div>
</nav>
<div class="paper container margin-bottom-large">
	<Hero />
</div>

<div class="paper container margin-bottom-large">
	<AboutMe />
</div>

<div class="paper container margin-bottom-large">
	<Projects />
</div>
