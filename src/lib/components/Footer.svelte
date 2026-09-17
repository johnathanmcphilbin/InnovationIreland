<script lang="ts">
	import Scribble from './art/Scribble.svelte';
	import HandNote from './art/HandNote.svelte';
	import { nav, links } from '$lib/data/site';

	const footerLinks = [...nav, { label: 'Contact', href: links.contact }];
	const year = new Date().getFullYear();
</script>

<footer class="footer" id="footer">
	<div class="shell">
		<div class="top">
			<div class="brand">
				<p class="wordmark">Innovation<br />Ireland</p>
				<p class="tagline">Built by young people, for young people.</p>
				<span class="squiggle"><Scribble variant="loop" width="8rem" color="var(--green)" /></span>
			</div>

			<nav aria-label="Footer">
				<ul>
					{#each footerLinks as link (link.href + link.label)}
						<li><a href={link.href}>{link.label}</a></li>
					{/each}
				</ul>
			</nav>
		</div>

		<div class="bottom">
			<p class="mono-label">
				Innovation Ireland · Nonprofit · Headford, Co. Galway · {year}
			</p>
			<p class="mono-label todo">
				<!-- TODO: real contact email, socials and charity/CLG registration details -->
				Contact details coming soon
			</p>
			<p class="sign">
				<HandNote rotate={-2.5} size="1.2rem">made on a Tuesday night</HandNote>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--cream);
		padding-block: clamp(2.6rem, 6vw, 4.5rem) 2.2rem;
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: clamp(2rem, 5vw, 5rem);
		align-items: start;
	}

	.wordmark {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.035em;
		line-height: 0.85;
		font-size: clamp(2.4rem, 1.2rem + 5vw, 5rem);
		margin: 0 0 1rem;
	}

	.tagline {
		font-size: var(--step-1);
		margin: 0;
		max-width: 30ch;
	}

	.squiggle {
		display: block;
		margin-top: 1.2rem;
	}

	nav ul {
		display: grid;
		gap: 0.3rem;
		text-align: right;
	}

	nav a {
		font-family: var(--display);
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.95rem;
		letter-spacing: 0.04em;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.18s ease;
	}

	nav a:hover {
		border-bottom-color: var(--orange);
	}

	.bottom {
		margin-top: clamp(2.4rem, 5vw, 4rem);
		border-top: 2px solid var(--rule);
		padding-top: 1.2rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.6rem 1.6rem;
		color: rgba(16, 31, 48, 0.6);
	}

	.bottom p {
		margin: 0;
	}

	.sign {
		margin-left: auto !important;
	}

	@media (max-width: 700px) {
		.top {
			grid-template-columns: 1fr;
		}

		nav ul {
			text-align: left;
			grid-template-columns: repeat(2, 1fr);
			gap: 0.5rem 1rem;
		}

		nav a {
			font-size: 1.05rem;
		}

		.sign {
			margin-left: 0 !important;
		}
	}
</style>
