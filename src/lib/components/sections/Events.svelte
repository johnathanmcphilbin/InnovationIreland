<script lang="ts">
	import Button from '../Button.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import Tape from '../art/Tape.svelte';
	import StarDoodle from '../art/StarDoodle.svelte';
	import HandNote from '../art/HandNote.svelte';
	import RoughUnderline from '../art/RoughUnderline.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { upcomingEvents, pastEvents } from '$lib/data/events';
	import { photos } from '$lib/data/photos';
	import { inView } from '$lib/actions';

	/* preview = homepage: the next event only.
	   full = /events: the next event, what's after it, and everything before it. */
	let { variant = 'full' }: { variant?: 'preview' | 'full' } = $props();

	const next = upcomingEvents[0];
	const later = upcomingEvents.slice(1);
</script>

<section class="section events" id="events">
	<div class="shell">
		{#if variant === 'preview'}
			<div class="section-head">
				<h2 class="br-wide">Sometimes we put <br />everyone in one room.</h2>
			</div>
		{/if}

		<article class="featured on-navy">
			<span class="tape-corner"><Tape rotate={-7} width="6.5rem" /></span>

			<header>
				<p class="mono-label kicker">Next up · {next.name}</p>
				<h3 class="city">{next.city}</h3>
			</header>

			<dl class="facts">
				<div>
					<dt class="mono-label">Who</dt>
					<dd>{next.audience}</dd>
				</div>
				<div>
					<dt class="mono-label">Where</dt>
					<dd>{next.venue}</dd>
				</div>
				<div>
					<dt class="mono-label">When</dt>
					<dd>
						{next.when}
						{#if next.dateNote}
							<span class="tbd">
								<HandNote rotate={-4} size="1.15rem" color="#7dd39b">
									{next.dateNote}
								</HandNote>
							</span>
						{/if}
					</dd>
				</div>
			</dl>

			<p class="feat-copy">{next.description}</p>

			<div class="feat-cta">
				<Button href={next.href} size="lg" variant="orange">{next.cta}</Button>
				<span class="star"><StarDoodle color="#7dd39b" size="1.5rem" spin /></span>
			</div>

			{#if next.pdf}
				<p class="pdf-link">
					<MoreLink href={next.pdf} color="#7dd39b" external>{next.pdfLabel ?? 'Download PDF'}</MoreLink>
				</p>
			{/if}
		</article>

		{#if variant === 'preview'}
			<p class="link">
				<MoreLink href="/events">All events</MoreLink>
			</p>
		{:else}
			{#if later.length > 0}
				<div class="also">
					<h3 class="also-head mono-label">Coming soon</h3>
					<ul class="also-list">
						{#each later as ev (ev.name)}
							<li>
								<div class="also-info">
									<span class="also-name">{ev.name}</span>
									<span class="mono-label also-meta">{ev.city} · {ev.venue}</span>
								</div>
								<div class="also-when">
									<span class="mono-label">{ev.when}</span>
									{#if ev.dateNote}
										<span class="mono-label also-note">{ev.dateNote}</span>
									{/if}
									{#if ev.pdf}
										<span class="also-pdf">
											<MoreLink href={ev.pdf} external>{ev.pdfLabel ?? 'Download PDF'}</MoreLink>
										</span>
									{/if}
								</div>
							</li>
						{/each}
					</ul>
				</div>
			{/if}
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

	.pdf-link {
		max-width: none;
	}

	.link {
		margin-top: clamp(1.5rem, 3vw, 2.25rem);
	}

	.also {
		margin-top: clamp(2rem, 4vw, 3rem);
	}

	.also-head {
		color: var(--green-deep);
		margin-bottom: 0.9rem;
	}

	.also-list li {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 0.4rem 1.5rem;
		padding-block: 1rem;
		border-top: 2px solid var(--rule);
	}

	.also-list li:last-child {
		border-bottom: 2px solid var(--rule);
	}

	.also-info {
		display: grid;
		gap: 0.3rem;
	}

	.also-name {
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: -0.01em;
		font-size: clamp(1.05rem, 0.95rem + 0.5vw, 1.3rem);
	}

	.also-meta {
		color: rgba(16, 31, 48, 0.6);
	}

	.also-when {
		text-align: right;
		display: grid;
		gap: 0.2rem;
	}

	.also-note {
		color: var(--green-deep);
	}

	.also-pdf {
		margin-top: 0.15rem;
		justify-self: end;
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
