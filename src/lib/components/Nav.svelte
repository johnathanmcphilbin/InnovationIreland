<script lang="ts">
	import { slide } from 'svelte/transition';
	import { page } from '$app/state';
	import Button from './Button.svelte';
	import { nav, links } from '$lib/data/site';

	let open = $state(false);
</script>

<header class="nav">
	<div class="shell bar">
		<a class="wordmark" href="/" onclick={() => (open = false)}>
			<span class="star"><img src="/img/brand/mark.png" alt="" /></span>
			<span class="name"><span>Innovation</span> <span>Ireland</span></span>
		</a>

		<nav class="links" aria-label="Sections">
			{#each nav as link (link.href)}
				<a
					href={link.href}
					aria-current={page.url.pathname === link.href ? 'page' : undefined}
				>
					{link.label}
				</a>
			{/each}
		</nav>

		<div class="cta">
			<Button href={links.join} size="sm">Join us</Button>
		</div>

		<button
			class="burger"
			aria-expanded={open}
			aria-controls="mobile-nav"
			onclick={() => (open = !open)}
		>
			<span class="mono-label">{open ? 'Close' : 'Menu'}</span>
			<svg viewBox="0 0 34 24" aria-hidden="true" focusable="false">
				<path d="M3 5 C 12 3, 23 7, 31 4" />
				<path d="M4 12.5 C 13 10, 24 14, 30 11.5" />
				<path d="M3 20 C 12 17.5, 23 21.5, 31 19" />
			</svg>
		</button>
	</div>

	{#if open}
		<div id="mobile-nav" class="panel" transition:slide={{ duration: 220 }}>
			<div class="shell">
				{#each nav as link (link.href)}
					<a
						href={link.href}
						aria-current={page.url.pathname === link.href ? 'page' : undefined}
						onclick={() => (open = false)}
					>
						{link.label}
					</a>
				{/each}
				<Button href={links.join} onclick={() => (open = false)}>Join us</Button>
			</div>
		</div>
	{/if}
</header>

<style>
	.nav {
		position: sticky;
		top: 0;
		z-index: 60;
		background: var(--cream);
		border-bottom: 2.5px solid var(--navy);
	}

	.bar {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		min-height: 4.1rem;
	}

	.wordmark {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.03em;
		font-size: clamp(1.05rem, 0.95rem + 0.6vw, 1.35rem);
		line-height: 1;
		text-decoration: none;
		display: flex;
		align-items: center;
		gap: 0.45rem;
		margin-right: auto;
	}

	.star {
		display: block;
		flex: none;
		height: 1.6rem;
		transition: transform 0.4s ease;
	}

	.star img {
		display: block;
		height: 100%;
		width: auto;
	}

	.wordmark:hover .star {
		transform: rotate(90deg) scale(1.15);
	}

	.links {
		display: flex;
		gap: clamp(0.9rem, 1.6vw, 1.9rem);
	}

	.links a {
		font-family: var(--display);
		font-weight: 700;
		font-size: 0.78rem;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
		padding-block: 0.4rem;
		border-bottom: 2.5px solid transparent;
		transition: border-color 0.18s ease;
	}

	.links a:hover {
		border-bottom-color: var(--green);
	}

	.burger {
		display: none;
		align-items: center;
		gap: 0.5rem;
		background: none;
		border: 0;
		padding: 0.4rem 0;
		cursor: pointer;
	}

	.burger svg {
		width: 1.9rem;
		fill: none;
		stroke: var(--navy);
		stroke-width: 2.6;
		stroke-linecap: round;
	}

	.panel a {
		display: block;
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 1.6rem;
		text-decoration: none;
		padding-block: 0.55rem;
		border-bottom: 2px solid var(--rule);
	}

	.panel .shell {
		padding-block: 1.1rem 1.8rem;
		display: grid;
		gap: 0.2rem;
	}

	.panel :global(.btn) {
		margin-top: 1.1rem;
		justify-self: start;
	}

	@media (max-width: 860px) {
		.links,
		.cta {
			display: none;
		}

		.burger {
			display: flex;
		}
	}

	.name {
		display: flex;
		flex-wrap: wrap;
		gap: 0 0.28em;
	}

	@media (max-width: 380px) {
		.name {
			max-width: 6.5em;
		}
	}
</style>
