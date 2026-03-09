<script>
	let { data } = $props();
</script>

<div class="blog-page">
	<div style="width: 100%; display: flex; justify-content: center;">
		<h2>Blog</h2>
	</div>
	<div class="blog-grid">
		{#each data.posts as post}
			<div class="paper card">
				{#if post.cover_image}
					<img src={post.cover_image} alt={post.title} class="card-image" />
				{/if}
				<div class="card-body">
					<h4 class="card-title">{post.title}</h4>
					<p class="card-text">{post.excerpt}</p>
					<a href="/blog/{post.slug}" class="paper-btn btn-primary">Read more</a>
				</div>
			</div>
		{/each}

		{#if data.posts.length === 0}
			<p>No posts yet.</p>
		{/if}
	</div>
</div>

<style>
	.blog-page {
		padding: 5rem 2rem 3rem;
	}

	h2 {
		margin-bottom: 1.5rem;
	}

	.blog-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, 768px);
		justify-content: center;
		gap: 1.5rem;
	}

	.blog-card {
		display: flex;
		flex-direction: column;
		overflow: hidden;
		padding: 0;
	}

	.card-image {
		width: 100%;
		height: 180px;
		object-fit: cover;
	}

	.card-body {
		padding: 1.25rem;
		display: flex;
		flex-direction: column;
		flex: 1;
		gap: 0.75rem;
	}

	.card-title {
		margin: 0;
	}

	.card-text {
		flex: 1;
		margin: 0;
		opacity: 0.75;
	}
</style>
