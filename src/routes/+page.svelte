<script>
	import Hero from '$lib/components/Hero.svelte';
	import AboutMe from '$lib/components/AboutMe.svelte';
	import Projects from '$lib/components/Projects.svelte';
	import ContactMe from '$lib/components/ContactMe.svelte';
</script>

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
