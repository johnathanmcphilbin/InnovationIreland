<script lang="ts">
	import HandNote from './art/HandNote.svelte';
	import { nav, links } from '$lib/data/site';

	const footerLinks = [...nav, { label: 'Contact', href: links.contact }];
	const year = new Date().getFullYear();
</script>

<footer class="footer" id="footer">
	<div class="shell">
		<div class="top">
			<div class="brand">
				<img class="mark" src="/img/brand/mark.png" alt="" />
				<p class="wordmark">Innovation Ireland</p>
				<p class="tagline">Built by young people, for young people.</p>
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
				<HandNote rotate={-2.5} size="1rem">made on a Tuesday night</HandNote>
			</p>
		</div>
	</div>
</footer>

<style>
	.footer {
		background: var(--cream);
		padding-block: clamp(1.25rem, 2.5vw, 1.75rem) 1.1rem;
	}

	.top {
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: center;
	}

	.brand {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		column-gap: 0.6rem;
		row-gap: 0.15rem;
	}

	.mark {
		display: block;
		height: 1.4rem;
		width: auto;
	}

	.wordmark {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.02em;
		line-height: 1;
		font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.25rem);
		margin: 0;
	}

	.tagline {
		font-size: 0.9rem;
		margin: 0;
		max-width: 30ch;
		color: rgba(16, 31, 48, 0.6);
	}

	nav ul {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-end;
		gap: 0.3rem 1.3rem;
	}

	nav a {
		font-family: var(--display);
		font-weight: 700;
		text-transform: uppercase;
		font-size: 0.78rem;
		letter-spacing: 0.03em;
		text-decoration: none;
		border-bottom: 2px solid transparent;
		transition: border-color 0.18s ease;
		white-space: nowrap;
	}

	nav a:hover {
		border-bottom-color: var(--orange);
	}

	.bottom {
		margin-top: clamp(0.85rem, 1.8vw, 1.25rem);
		border-top: 2px solid var(--rule);
		padding-top: 0.65rem;
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: 0.3rem 1.4rem;
		color: rgba(16, 31, 48, 0.6);
	}

	.bottom p {
		margin: 0;
	}

	.sign :global(.note) {
		font-size: 1rem !important;
	}

	.sign {
		margin-left: auto !important;
	}

	@media (max-width: 700px) {
		.top {
			grid-template-columns: 1fr;
			align-items: start;
		}

		nav ul {
			justify-content: flex-start;
		}

		nav a {
			font-size: 0.85rem;
		}

		.sign {
			margin-left: 0 !important;
		}
	}
</style>
