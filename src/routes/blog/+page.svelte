<script>
	import { marked } from 'marked';
	let { data } = $props();
</script>

{#each data.posts as post}
	<div class="card" style="width: 20rem;">
		<img src={post.cover_image} alt="Card example image" />

		<div class="card-body">
			<h4 class="card-title">{post.title}</h4>
			<p class="card-text">
				{post.excerpt}
			</p>
			<a href="/blog/{post.slug}"> <button>View full post</button></a>
		</div>
	</div>
{/each}

<style>
	.card {
		background-color: var(--main-background);
	}
</style>
