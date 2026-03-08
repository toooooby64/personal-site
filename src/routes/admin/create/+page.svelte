<script lang="ts">
	import DOMPurify from 'dompurify';
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

	let { form } = $props();

	let showModal = $state(false);

	$effect(() => {
		if (form !== null && form !== undefined) {
			showModal = true;
		}
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

<input class="modal-state" id="post-modal" type="checkbox" bind:checked={showModal} />
<div class="modal">
	<label class="modal-bg" for="post-modal"></label>
	<div class="modal-body">
		<label class="btn-close" for="post-modal">X</label>
		{#if form?.success}
			<h4 class="modal-title">{form.published ? '✓ Post Published!' : '✓ Draft Saved!'}</h4>
			<p class="modal-text">{form.published ? 'Your post is now live.' : 'Your draft has been saved.'}</p>
		{:else if form?.message}
			<h4 class="modal-title">✗ Failed to Save</h4>
			<p class="modal-text">{form.message}</p>
		{/if}
		<label class="paper-btn" for="post-modal">Close</label>
	</div>
</div>

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

	:global(.modal .modal-body) {
		padding: 2.5rem;
		min-width: 420px;
	}

	:global(.modal .modal-title) {
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	:global(.modal .modal-text) {
		font-size: 1rem;
		margin-bottom: 2rem;
	}
</style>
