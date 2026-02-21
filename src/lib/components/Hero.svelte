<script>
	let showModal = $state(false);
</script>

<section class="row flex-center flex-middle section">
	<div class="sm-12 md-6 lg-6 col herodiv">
		<div>
			<h1 style=" margin-bottom: .1em ;">Jason Alvarez</h1>
		</div>
		<div>
			<p style="padding-bottom: 1em;">
				Dad, Software Engineer, and professional starter of new hobbies
			</p>
		</div>
		<div style="display: flex; flex-direction: row; gap: 1rem; align-items: center;">
			<label class="paper-btn btn-primary" for="blog-modal">Read my blog</label>
			<a href="#contact" style="opacity: 0.8;">Contact me →</a>
		</div>
	</div>

	<div class="sm-12 md-6 lg-6 col herodiv">
		<img src="/myself1.png" alt="Jason Alvarez" class="profile-img" />
	</div>
</section>
<input class="modal-state" id="blog-modal" type="checkbox" bind:checked={showModal} />
<div class="modal">
	<label class="modal-bg" for="blog-modal"></label>
	<div class="modal-body" style="width: 30%;">
		<label class="btn-close" for="blog-modal">X</label>
		<h4 class="modal-title">Blog is coming soon!</h4>
		<h5 class="modal-subtitle">For now, enjoy this cool song I found</h5>
		<div style="position: relative; padding-bottom: 56.25%; height: 0; margin-top: 1rem;">
			<iframe
				style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
				src={showModal ? 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1' : ''}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
	</div>
</div>

<style>
	.profile-img {
		border: none !important;
		filter: drop-shadow(4px 4px 6px rgba(0, 0, 0, 0.4));
		will-change: transform;
		width: 400px;
		height: auto;
	}
	.profile-img:hover {
		filter: drop-shadow(8px 8px 8px rgba(0, 0, 0, 0.4));
		animation: tilt-shaking 0.3s ease-in-out;
	}
	@keyframes tilt-shaking {
		0% {
			transform: rotate(0deg);
		}
		25% {
			transform: rotate(3deg);
		}
		50% {
			transform: rotate(0deg);
		}
		75% {
			transform: rotate(-3deg);
		}
		100% {
			transform: rotate(0deg);
		}
	}
	section.row {
		margin-top: 0 !important;
		margin-bottom: 0 !important;
	}
	section .col {
		padding: 0 !important;
		margin: 0 !important;
	}
	section {
		min-height: 100vh;
		box-sizing: border-box;
	}

	.herodiv {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.herodiv:last-child {
		align-items: center;
	}
	section.row::after {
		display: none !important;
	}
</style>
