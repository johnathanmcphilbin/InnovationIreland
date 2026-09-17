<script lang="ts">
	import Button from '../Button.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import Tape from '../art/Tape.svelte';
	import StarDoodle from '../art/StarDoodle.svelte';
	import HandNote from '../art/HandNote.svelte';
	import RoughUnderline from '../art/RoughUnderline.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { featuredEvent, pastEvents } from '$lib/data/events';
	import { links } from '$lib/data/site';
	import { photos } from '$lib/data/photos';
	import { inView } from '$lib/actions';

	/* preview = homepage: the next event only.
	   full = /events: the next event plus everything before it. */
	let { variant = 'full' }: { variant?: 'preview' | 'full' } = $props();
</script>

<section class="section events" id="events">
	<div class="shell">
		{#if variant === 'preview'}
			<div class="section-head">
				<p class="eyebrow">Events</p>
				<h2 class="br-wide">Sometimes we put <br />everyone in one room.</h2>
			</div>
		{/if}

		<article class="featured on-navy">
			<span class="tape-corner"><Tape rotate={-7} width="6.5rem" /></span>

			<header>
				<p class="mono-label kicker">Next big one · {featuredEvent.name}</p>
				<h3 class="city">{featuredEvent.city}</h3>
			</header>

			<dl class="facts">
				<div>
					<dt class="mono-label">Who</dt>
					<dd>{featuredEvent.size}</dd>
				</div>
				<div>
					<dt class="mono-label">Where</dt>
					<dd>{featuredEvent.venue}</dd>
				</div>
				<div>
					<dt class="mono-label">When</dt>
					<dd>
						{featuredEvent.when}
						<span class="tbd">
							<HandNote rotate={-4} size="1.15rem" color="#7dd39b">
								{featuredEvent.dateNote}
							</HandNote>
						</span>
					</dd>
				</div>
			</dl>

			<p class="feat-copy">{featuredEvent.description}</p>

			<div class="feat-cta">
				<Button href={links.join} size="lg" variant="orange">{featuredEvent.cta}</Button>
				<span class="star"><StarDoodle color="#7dd39b" size="1.5rem" spin /></span>
			</div>
		</article>

		{#if variant === 'preview'}
			<p class="link">
				<MoreLink href="/events">All events</MoreLink>
			</p>
		{:else}
			<div class="past">
				<h2 class="past-head" use:inView>
					<span class="past-word">
						Before this
						<span class="past-line"><RoughUnderline thickness={5} reveal="hover" /></span>
					</span>
				</h2>

				<ul class="photo-row">
					{#each pastEvents as ev (ev.photo)}
						<li>
							<PhotoSlot
								src={photos[ev.photo].src}
								alt={photos[ev.photo].alt}
								caption={photos[ev.photo].caption}
								tilt={ev.tilt}
								ratio="4 / 3"
								tape={ev.tilt > 0 ? 'one' : 'none'}
							/>
							<p class="meta">
								<span class="ev-title">{ev.title}</span>
								<span class="mono-label">{ev.place}</span>
							</p>
						</li>
					{/each}
				</ul>
			</div>
		{/if}
	</div>
</section>

<style>
	.featured {
		position: relative;
		border: 2.5px solid var(--navy);
		box-shadow: 10px 11px 0 0 var(--green);
		padding: clamp(1.6rem, 3.5vw, 2.75rem);
		display: grid;
		gap: clamp(1.2rem, 2.2vw, 1.75rem);
	}

	.tape-corner {
		position: absolute;
		top: -1.2rem;
		left: clamp(1rem, 6vw, 5rem);
	}

	.kicker {
		color: #7dd39b;
		margin: 0 0 0.8rem;
	}

	.city {
		font-size: clamp(3rem, 1.4rem + 7.6vw, 7rem);
		line-height: 0.9;
		margin: 0;
	}

	.facts {
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 1.5rem;
		margin: 0;
		border-block: 2px solid rgba(247, 241, 228, 0.22);
		padding-block: 1.3rem;
	}

	dt {
		color: #7dd39b;
		margin-bottom: 0.45rem;
	}

	dd {
		margin: 0;
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: clamp(0.95rem, 0.8rem + 0.6vw, 1.3rem);
		line-height: 1.1;
		letter-spacing: -0.01em;
	}

	.tbd {
		display: block;
		margin-top: 0.45rem;
	}

	.feat-copy {
		font-size: var(--step-1);
		line-height: 1.55;
		max-width: var(--measure-copy);
	}

	.feat-cta {
		display: flex;
		align-items: center;
		gap: 1.1rem;
		flex-wrap: wrap;
	}

	.star {
		display: block;
	}

	.link {
		margin-top: clamp(1.5rem, 3vw, 2.25rem);
	}

	.past {
		margin-top: clamp(2.5rem, 5vw, 4rem);
	}

	.past-head {
		font-size: var(--step-2);
		margin-bottom: var(--head-gap);
	}

	.past-word {
		position: relative;
		display: inline-block;
	}

	.past-line {
		position: absolute;
		left: 0;
		right: -4%;
		bottom: -0.14em;
		display: block;
	}

	:global([data-inview]) .past-line {
		--draw: 1;
	}

	.photo-row {
		display: grid;
		grid-template-columns: repeat(4, minmax(0, 1fr));
		gap: clamp(1.2rem, 2.8vw, 2.4rem);
		align-items: start;
	}

	.photo-row li:nth-child(even) {
		margin-top: 1.6rem;
	}

	.meta {
		margin: 0.85rem 0 0;
		display: grid;
		gap: 0.2rem;
	}

	.ev-title {
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.95rem;
		letter-spacing: 0.01em;
	}

	.meta .mono-label {
		color: rgba(16, 31, 48, 0.6);
	}

	@media (max-width: 900px) {
		.facts {
			grid-template-columns: 1fr;
			gap: 1.1rem;
		}

		.photo-row {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (max-width: 520px) {
		.photo-row {
			grid-template-columns: 1fr;
			gap: 2.2rem;
		}

		.photo-row li:nth-child(even) {
			margin-top: 0;
		}
	}
</style>
