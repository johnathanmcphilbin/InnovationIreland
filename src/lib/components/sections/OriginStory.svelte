<script lang="ts">
	import RoughCircle from '../art/RoughCircle.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import HandNote from '../art/HandNote.svelte';
	import RoughArrow from '../art/RoughArrow.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { timeline } from '$lib/data/site';
	import { photos } from '$lib/data/photos';
	import { inView } from '$lib/actions';

	/* preview = the short version on the homepage.
	   full = the whole thing on /about, where the page title carries the heading. */
	let { variant = 'full' }: { variant?: 'preview' | 'full' } = $props();
</script>

<section class="section origin" id="story">
	<div class="shell">
		{#if variant === 'preview'}
			<div class="section-head">
				<h2 use:inView>
					We weren't supposed<br />
					to start
					<span class="circled">
						this.
						<span class="ring"><RoughCircle thickness={3.2} reveal="hover" /></span>
					</span>
				</h2>
			</div>
		{/if}

		<div class="grid" class:preview={variant === 'preview'}>
			<div class="story">
				<div class="prose copy">
					<p>Our school robotics team got shut down.</p>
					<p class="beat">So we crossed the road.</p>
					{#if variant === 'full'}
						<p>
							We asked the local football club if we could use their clubhouse, brought our
							projects with us and started meeting every week.
						</p>
						<p>That little group in Headford became Innovation Ireland.</p>
						<p class="beat">Now we're building communities across the country.</p>
					{:else}
						<p>
							We asked the local football club in Headford if we could use their clubhouse,
							brought our projects with us, and started meeting every week. That group became
							Innovation Ireland.
						</p>
					{/if}
				</div>

				{#if variant === 'preview'}
					<p class="link">
						<MoreLink href="/about">Read our story</MoreLink>
					</p>
				{/if}
			</div>

			{#if variant === 'full'}
				<div class="side">
					<ol class="timeline" use:inView={{ threshold: 0.15 }}>
						{#each timeline as item, i (item.step)}
							<li class:last={i === timeline.length - 1}>
								<span class="step">{item.step}</span>
								{#if item.note}
									<span class="annotation">
										<HandNote rotate={i % 2 ? 2 : -2.5} size="1.15rem">{item.note}</HandNote>
									</span>
								{/if}
								{#if i < timeline.length - 1}
									<span class="arrow" style:--d="{i * 0.12}s">
										<RoughArrow
											dir="down"
											size="2.2rem"
											thickness={2.6}
											flip={i % 2 === 1}
											wiggle={i === 1}
										/>
									</span>
								{/if}
							</li>
						{/each}
					</ol>
				</div>
			{/if}

			{#if variant === 'preview'}
				<div class="photo">
					<PhotoSlot
						src={photos.dayOneHeadford.src}
						alt={photos.dayOneHeadford.alt}
						caption={photos.dayOneHeadford.caption}
						tape="one"
						tilt={-2}
						ratio="4 / 3"
					/>
				</div>
			{:else}
				<div class="photo-row">
					<PhotoSlot
						src={photos.dayOneBuilding.src}
						alt={photos.dayOneBuilding.alt}
						caption={photos.dayOneBuilding.caption}
						tape="one"
						tilt={-1.6}
						ratio="4 / 3"
					/>
					<PhotoSlot
						src={photos.moyneVilla.src}
						alt={photos.moyneVilla.alt}
						caption={photos.moyneVilla.caption}
						tilt={1.2}
						ratio="21 / 9"
					/>
				</div>
			{/if}
		</div>
	</div>
</section>

<style>
	.circled {
		position: relative;
		display: inline-block;
	}

	.ring {
		position: absolute;
		inset: -30% -7% -26%;
		display: block;
		pointer-events: none;
	}

	:global([data-inview]) .ring,
	.circled:hover .ring {
		--draw: 1;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(15rem, 0.58fr);
		gap: clamp(2rem, 5vw, 4.5rem);
		align-items: start;
	}

	/* the short version: copy on the left, one photo on the right */
	.grid.preview {
		grid-template-columns: minmax(0, 1fr) minmax(13rem, 0.5fr);
		align-items: center;
	}

	.beat {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		font-size: var(--step-3);
		line-height: 1.02;
		letter-spacing: -0.025em;
		margin-block: 1.25rem;
	}

	.link {
		margin-top: clamp(1.4rem, 2.5vw, 2rem);
	}

	.photo {
		max-width: 19rem;
	}

	/* on /about the photographs sit under the story, across the full column */
	.photo-row {
		grid-column: 1;
		margin-top: clamp(1.5rem, 3vw, 2.5rem);
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(1.25rem, 3vw, 2.5rem);
		align-items: start;
	}

	.timeline {
		display: grid;
		justify-items: start;
	}

	.timeline li {
		position: relative;
		padding-bottom: 2.9rem;
		max-width: 100%;
	}

	.timeline li:last-child {
		padding-bottom: 0;
	}

	.step {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		font-size: clamp(1.1rem, 0.85rem + 0.9vw, 1.65rem);
		line-height: 1;
		letter-spacing: -0.02em;
		display: block;
		opacity: 0;
		translate: 0 8px;
		transition:
			opacity 0.5s ease,
			translate 0.5s ease;
	}

	:global([data-inview]) .step {
		opacity: 1;
		translate: 0 0;
	}

	.timeline li:nth-child(2) .step {
		transition-delay: 0.1s;
	}
	.timeline li:nth-child(3) .step {
		transition-delay: 0.2s;
	}
	.timeline li:nth-child(4) .step {
		transition-delay: 0.3s;
	}
	.timeline li:nth-child(5) .step {
		transition-delay: 0.4s;
	}

	.last .step {
		color: var(--green);
		font-size: clamp(1.4rem, 0.9rem + 1.8vw, 2.2rem);
	}

	.annotation {
		display: block;
		margin-top: 0.3rem;
		margin-left: 2.6rem;
	}

	.arrow {
		position: absolute;
		left: 0.6rem;
		bottom: 0.15rem;
		display: block;
		opacity: 0;
		transition: opacity 0.4s ease;
		transition-delay: var(--d);
	}

	:global([data-inview]) .arrow {
		opacity: 1;
	}

	@media (max-width: 880px) {
		.grid,
		.grid.preview {
			grid-template-columns: 1fr;
			gap: clamp(1.75rem, 4vw, 2.5rem);
		}

		.side {
			border-top: 2px solid var(--rule);
			padding-top: clamp(1.5rem, 3vw, 2.2rem);
		}

		.photo {
			max-width: 17rem;
		}

		.photo-row {
			grid-template-columns: 1fr;
			margin-top: 0;
			gap: 2rem;
		}
	}
</style>
