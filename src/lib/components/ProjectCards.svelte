<script>
	let { projectInfo } = $props();
</script>

<div class="col sm-6 md-6 lg-6">
	<div class="card">
		<div class="card-body">
			<h4 class="card-title"><strong> {projectInfo.title}</strong></h4>
			<p class="card-text">
				{projectInfo.description}
			</p>
			{#if projectInfo.url}
				<div style="display: flex; justify-content: center;">
					<a href={projectInfo.url} class="paper-btn">Github Repo</a>
				</div>
			{/if}
		</div>
	</div>
</div>

<style>
	.card {
		display: flex;
		flex-direction: column;
		height: 100%;
	}
	.card-body {
		flex: 1;
	}
	.card-title {
		display: flex;
		justify-content: center;
	}
</style>
