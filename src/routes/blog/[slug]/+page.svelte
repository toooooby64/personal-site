<script>
	import { marked } from 'marked';
	let { data } = $props();
</script>

<div class="paper container" style="margin-top: 5rem; margin-bottom: 3rem;">
	<div class="blog-content">
		{@html marked(data.content)}
	</div>
</div>

<style>
	.blog-content {
		max-width: 720px;
		margin: 0 auto;
		line-height: 1.8;
	}

	.blog-content :global(h1),
	.blog-content :global(h2),
	.blog-content :global(h3),
	.blog-content :global(h4) {
		margin-top: 0.25em;
		margin-bottom: 0.25em;
	}

	.blog-content :global(h1:first-child),
	.blog-content :global(h2:first-child),
	.blog-content :global(h3:first-child) {
		margin-top: 0;
	}

	.blog-content :global(p) {
		margin-bottom: 1em;
	}

	.blog-content :global(pre) {
		padding: 1em;
		border-radius: 4px;
		overflow-x: auto;
	}

	.blog-content :global(img) {
		max-width: 100%;
		height: auto;
	}

	.blog-content :global(blockquote) {
		border-left: 4px solid #ccc;
		margin-left: 0;
		padding-left: 1em;
		opacity: 0.75;
	}

	.blog-content :global(a) {
		text-decoration: underline;
	}

	.blog-content :global(ul),
	.blog-content :global(ol) {
		padding-left: 1.5em;
		margin-bottom: 1em;
	}
</style>
