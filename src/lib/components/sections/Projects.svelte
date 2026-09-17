<script lang="ts">
	import PhotoSlot from '../PhotoSlot.svelte';
	import HandNote from '../art/HandNote.svelte';
	import Scribble from '../art/Scribble.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { projects } from '$lib/data/projects';
	import { photos } from '$lib/data/photos';

	/* preview = homepage: the first three off the wall.
	   full = /projects: the whole wall. */
	let { variant = 'full' }: { variant?: 'preview' | 'full' } = $props();

	const shown = $derived(variant === 'preview' ? projects.slice(0, 3) : projects);

	const ratios: Record<string, string> = {
		wide: '16 / 9',
		tall: '3 / 4'
	};
</script>

<section class="section projects" id="projects">
	<div class="shell">
		{#if variant === 'preview'}
			<div class="section-head intro">
				<div>
					<p class="eyebrow">Projects</p>
					<h2 class="br-wide">People here actually<br />make stuff.</h2>
				</div>
				<p class="copy side">
					Robots, apps, games, machines that only work if you hold them at the right angle. Some
					of it is genuinely impressive. Some of it is held together with tape.
					<span class="scribble">
						<Scribble variant="wave" width="5.5rem" color="var(--orange)" />
					</span>
				</p>
			</div>
		{/if}

		<ul class="wall" class:preview={variant === 'preview'}>
			{#each shown as p, i (p.name + i)}
				<li data-span={variant === 'preview' ? 'normal' : (p.span ?? 'normal')}>
					<PhotoSlot
						src={p.photo === 'empty' ? undefined : photos[p.photo].src}
						alt={p.photo === 'empty' ? '' : photos[p.photo].alt}
						slot={p.photo === 'empty' ? 'empty' : 'Photo'}
						caption={p.photo === 'empty' ? undefined : photos[p.photo].caption}
						tilt={p.tilt}
						ratio={variant === 'preview' ? '1 / 1' : (ratios[p.span ?? ''] ?? '1 / 1')}
						tape={i % 3 === 0 ? 'one' : 'none'}
					/>
					<div class="info">
						<h3>{p.name}</h3>
						<p class="builder mono-label">{p.builder}</p>
						<p class="line">{p.line}</p>
					</div>
				</li>
			{/each}
		</ul>

		{#if variant === 'preview'}
			<p class="link">
				<MoreLink href="/projects">See what people are building</MoreLink>
			</p>
		{:else}
			<p class="footnote">
				<HandNote rotate={-1.5} size="1.25rem" arrow="right">
					not everything works. that's allowed
				</HandNote>
			</p>
		{/if}
	</div>
</section>

<style>
	.intro {
		display: grid;
		grid-template-columns: minmax(0, 1.1fr) minmax(0, 0.9fr);
		gap: clamp(1.25rem, 3.5vw, 3.5rem);
		align-items: end;
	}

	.side {
		position: relative;
	}

	.scribble {
		display: block;
		margin-top: 0.7rem;
	}

	.wall {
		display: grid;
		grid-template-columns: repeat(6, minmax(0, 1fr));
		gap: clamp(1.5rem, 3vw, 2.75rem) clamp(1.25rem, 2.5vw, 2.5rem);
		align-items: start;
	}

	.wall li {
		grid-column: span 2;
	}

	.wall li[data-span='wide'] {
		grid-column: span 4;
	}

	.wall:not(.preview) li:nth-child(3) {
		padding-top: 2rem;
	}

	.wall:not(.preview) li:nth-child(5) {
		padding-top: 1.25rem;
	}

	.wall.preview li:nth-child(2) {
		padding-top: 1.75rem;
	}

	.info {
		margin-top: 0.95rem;
		max-width: 34ch;
	}

	.info h3 {
		font-size: clamp(1.1rem, 0.95rem + 0.5vw, 1.35rem);
		margin-bottom: 0.35rem;
	}

	.builder {
		color: var(--green-deep);
		margin: 0 0 0.5rem;
	}

	.line {
		font-size: 0.95rem;
		line-height: 1.45;
		color: rgba(16, 31, 48, 0.78);
		margin: 0;
	}

	.link {
		margin-top: clamp(1.75rem, 3.5vw, 2.5rem);
	}

	.footnote {
		margin: clamp(1.25rem, 2.5vw, 2rem) 0 0;
		max-width: none;
		display: flex;
		justify-content: flex-end;
	}

	@media (max-width: 900px) {
		.intro {
			grid-template-columns: 1fr;
			align-items: start;
		}

		.wall {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}

		.wall li[data-span='wide'] {
			grid-column: span 4;
		}
	}

	@media (max-width: 560px) {
		.wall {
			grid-template-columns: 1fr;
			gap: 2.4rem;
		}

		.wall li,
		.wall li[data-span='wide'] {
			grid-column: span 1;
		}

		.wall li:nth-child(n) {
			padding-top: 0;
		}

		.footnote {
			justify-content: flex-start;
		}
	}
</style>
