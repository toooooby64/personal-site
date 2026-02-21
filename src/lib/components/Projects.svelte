<script>
	import ProjectCards from './ProjectCards.svelte';
	const personalSite = {
		title: 'My Personal Website',
		description:
			'This site was built with Svelte, PaperCSS and ✨Love✨. I am expanding it to include a blog that will allow users to like, comment, and share. Stay tuned for updates!',
		url: 'https://github.com/toooooby64/personal-site'
	};
	const configInspector = {
		title: 'Configuration Inspector',
		description:
			"Our ops team were constantly pulling in engineers to diagnose pricing configuration issues that didn't not need engineering involvement. I built the backend telemetry and a clear UI using React to surface that data — so ops could self-diagnose and move on without filing a ticket."
	};
	const comingSoon = {
		title: 'Many more to come! Soon™',
		description: ''
	};
</script>

<section id="Projects" class="section" style="display: flex; align-items: center;">
	<div style="min-height: 100%;">
		<div class="row flex-center">
			<div class="col">
				<h2>Projects</h2>
			</div>
		</div>
		<div class="row flex-spaces">
			<ProjectCards projectInfo={personalSite} />
			<ProjectCards projectInfo={configInspector} />
			<ProjectCards projectInfo={comingSoon} />
		</div>
	</div>
</section>
