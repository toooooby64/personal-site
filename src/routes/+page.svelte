<div class="paper container">
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
					<li><a href="About">About</a></li>
					<li><a href="https://www.github.com/toooooby64">Github</a></li>
				</ul>
			</div>
		</div>
	</nav>
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
				<a href="/blog" class="paper-btn btn-primary">Read my blog</a>
				<a href="#contact" style="opacity: 0.8;">Contact me →</a>
			</div>
		</div>

		<div class="sm-12 md-6 lg-6 col herodiv">
			<img src="/myself1.png" alt="Jason Alvarez" class="profile-img" />
		</div>
	</section>
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
	.paper.container {
		padding-top: 0 !important;
		padding-bottom: 0 !important;
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
