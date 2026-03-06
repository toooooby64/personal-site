<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import { Carta, MarkdownEditor } from 'carta-md';
	import { emoji } from '@cartamd/plugin-emoji';
	import { slash } from '@cartamd/plugin-slash';
	import { code } from '@cartamd/plugin-code';

	import '$lib/styles/github.scss';
	import '@cartamd/plugin-emoji/default.css';
	import '@cartamd/plugin-slash/default.css';
	import '@cartamd/plugin-code/default.css';

	const carta = new Carta({
		sanitizer: DOMPurify.sanitize,
		extensions: [emoji(), slash(), code({ theme: 'github-dark' })]
	});

	let title = $state('');
	let excerpt = $state('');
	let cover_image = $state('');
	let content = $state('');
	let published = $state(false);
	let manualSlug = $state('');
	let slugManuallyEdited = $state(false);

	function toSlug(str: string) {
		return str
			.toLowerCase()
			.trim()
			.replace(/[^a-z0-9\s-]/g, '')
			.replace(/\s+/g, '-');
	}

	let slug = $derived(slugManuallyEdited ? manualSlug : toSlug(title));
</script>

<div class="paper container" style="margin-top: 5rem; margin-bottom: 3rem;">
	<h2>Create Post</h2>
	<form method="POST">
		<div class="form-group">
			<label for="title">Title</label>
			<input id="title" name="title" type="text" placeholder="Post title" bind:value={title} />
		</div>

		<div class="form-group">
			<label for="slug">Slug</label>
			<input
				id="slug"
				name="slug"
				type="text"
				placeholder="post-slug"
				value={slug}
				oninput={(e) => {
					slugManuallyEdited = true;
					manualSlug = (e.target as HTMLInputElement).value;
				}}
			/>
		</div>

		<div class="form-group">
			<label for="excerpt">Excerpt</label>
			<textarea
				id="excerpt"
				name="excerpt"
				placeholder="Short description of the post"
				rows="3"
				bind:value={excerpt}
			></textarea>
		</div>

		<div class="form-group">
			<label for="cover_image">Cover Image URL</label>
			<input
				id="cover_image"
				name="cover_image"
				type="text"
				placeholder="https://..."
				bind:value={cover_image}
			/>
		</div>

		<div class="form-group">
			<label>Content</label>
			<MarkdownEditor bind:value={content} mode="tabs" theme="github" {carta} />
			<input type="hidden" name="content" value={content} />
		</div>

		<div class="form-footer">
			<label class="published-toggle">
				<input type="checkbox" name="published" bind:checked={published} />
				Publish immediately
			</label>
			<button type="submit">Save Post</button>
		</div>
	</form>
</div>

<style>
	h2 {
		margin-bottom: 1.5rem;
	}

	.form-group {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		margin-bottom: 1.25rem;
	}

	.form-group label {
		font-weight: bold;
		font-size: 0.95rem;
	}

	.form-group input[type='text'],
	.form-group textarea {
		width: 100%;
		box-sizing: border-box;
	}

	.form-footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-top: 1.5rem;
	}

	.published-toggle {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: 0.95rem;
		cursor: pointer;
	}

	.published-toggle input[type='checkbox'] {
		width: 1rem;
		height: 1rem;
	}
</style>
