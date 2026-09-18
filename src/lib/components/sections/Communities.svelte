<script lang="ts">
	import { slide } from 'svelte/transition';
	import IrelandSketch from '../art/IrelandSketch.svelte';
	import MapPin from '../art/MapPin.svelte';
	import HandNote from '../art/HandNote.svelte';
	import Button from '../Button.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { communities } from '$lib/data/communities';
	import { links } from '$lib/data/site';
	import { photos } from '$lib/data/photos';
	import { inView } from '$lib/actions';

	/* preview = homepage. full = /communities, where the page title carries the heading
	   and the "start one" band sits at the bottom. */
	let { variant = 'full' }: { variant?: 'preview' | 'full' } = $props();

	let active = $state<string | null>(null);

	function toggle(id: string) {
		active = active === id ? null : id;
	}
</script>

<section class="section communities" id="communities">
	<div class="shell">
		{#if variant === 'preview'}
			<div class="section-head">
				<h2>Find your people.</h2>
				<p class="copy intro">
					Nothing happens in one central office in Dublin. Young people run their own
					communities where they actually live.
				</p>
			</div>
		{/if}

		<div class="grid">
			<div class="map-wrap">
				<div class="map" use:inView={{ threshold: 0.2 }}>
					<IrelandSketch thickness={2.8} />
					{#each communities as c (c.id)}
						<button
							class="pin"
							class:on={active === c.id}
							style:left="{c.x}%"
							style:top="{c.y}%"
							aria-pressed={active === c.id}
							onclick={() => toggle(c.id)}
							onpointerenter={() => (active = c.id)}
							onfocus={() => (active = c.id)}
						>
							<MapPin size="1.5rem" color={active === c.id ? 'var(--green)' : 'var(--orange)'} />
							<span class="pin-name" data-side={c.label}>{c.name}</span>
						</button>
					{/each}

					<span class="more">
						<HandNote rotate={-7} size="1.1rem" color="var(--navy)">
							your town could<br />be on here
						</HandNote>
					</span>
				</div>

				{#if variant === 'full'}
					<div class="map-photo">
						<PhotoSlot
							src={photos.galwayOpeningDay.src}
							alt={photos.galwayOpeningDay.alt}
							caption={photos.galwayOpeningDay.caption}
							tilt={-1.4}
							ratio="4 / 3"
							tape="one"
						/>
					</div>
				{/if}
			</div>

			<div class="list-wrap">
				<ul class="list">
					{#each communities as c (c.id)}
						<li class:on={active === c.id}>
							<button
								class="row"
								aria-expanded={active === c.id}
								onclick={() => toggle(c.id)}
								onpointerenter={() => (active = c.id)}
								onfocus={() => (active = c.id)}
							>
								<span class="name">{c.name}</span>
								<span class="mono-label county">{c.county}</span>
								{#if c.frequency}
									<span class="mono-label freq">{c.frequency}</span>
								{/if}
							</button>

							{#if active === c.id}
								<div class="detail" transition:slide={{ duration: 200 }}>
									<p>{c.blurb}</p>
									<Button href={links.join} size="sm">Join {c.name}</Button>
								</div>
							{/if}
						</li>
					{/each}
				</ul>

				{#if variant === 'preview'}
					<p class="link">
						<MoreLink href="/communities">See all communities</MoreLink>
					</p>
				{/if}
			</div>
		</div>

		{#if variant === 'full'}
			<div class="start" id="start-one">
				<h2>Nothing near you?<br /><span class="green">Start one.</span></h2>
				<div>
					<p class="copy">
						You don't need permission, a budget or a committee. You need a room, a night and a
						couple of people. We'll help with the rest. We've done it four times now.
					</p>
					<div class="start-cta">
						<Button href={links.startCommunity} variant="orange">Start a community</Button>
						<span class="start-note">
							<HandNote rotate={3} size="1.2rem" arrow="hook">that's the whole process</HandNote>
						</span>
					</div>
				</div>
			</div>
		{/if}
	</div>
</section>

<style>
	.intro {
		margin-top: 1.1rem;
	}

	.grid {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1fr);
		gap: clamp(1.75rem, 4.5vw, 4rem);
		align-items: center;
	}

	.map {
		position: relative;
		width: min(100%, 22rem);
		margin-inline: auto;
		transform: rotate(-1.5deg);
	}

	.pin {
		position: absolute;
		translate: -50% -50%;
		background: none;
		border: 0;
		padding: 0.35rem;
		cursor: pointer;
		display: block;
	}

	.pin:hover :global(svg),
	.pin.on :global(svg) {
		transform: scale(1.25) rotate(-8deg);
	}

	.pin-name {
		position: absolute;
		font-family: var(--hand);
		font-weight: 700;
		font-size: 1.05rem;
		line-height: 1;
		white-space: nowrap;
		color: var(--navy);
		opacity: 0.6;
		transition:
			opacity 0.2s ease,
			color 0.2s ease;
	}

	[data-side='left'] {
		right: 100%;
		top: 50%;
		translate: 0 -50%;
		margin-right: 0.15rem;
	}

	[data-side='right'] {
		left: 100%;
		top: 50%;
		translate: 0 -50%;
		margin-left: 0.15rem;
	}

	[data-side='above'] {
		bottom: 100%;
		left: 50%;
		translate: -50% 0;
	}

	[data-side='below'] {
		top: 100%;
		left: 50%;
		translate: -50% 0;
	}

	.pin.on .pin-name,
	.pin:hover .pin-name {
		opacity: 1;
		color: var(--green-deep);
	}

	.more {
		position: absolute;
		right: -1.5rem;
		bottom: 10%;
		width: 8rem;
		text-align: left;
	}

	.map-photo {
		margin-top: clamp(2rem, 4vw, 3rem);
		max-width: 22rem;
		margin-inline: auto;
	}

	.list li {
		border-top: 2px solid var(--rule);
	}

	.list li:last-child {
		border-bottom: 2px solid var(--rule);
	}

	.row {
		width: 100%;
		background: none;
		border: 0;
		cursor: pointer;
		display: grid;
		grid-template-columns: minmax(0, 1fr) auto;
		grid-template-areas: 'name freq' 'county freq';
		align-items: center;
		gap: 0 1rem;
		padding: 0.95rem 0.2rem;
		text-align: left;
		transition: background-color 0.18s ease;
	}

	.row:hover,
	li.on .row {
		background: rgba(15, 122, 61, 0.07);
	}

	.name {
		grid-area: name;
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.02em;
		font-size: clamp(1.45rem, 1rem + 1.4vw, 2.1rem);
		line-height: 1;
	}

	li.on .name {
		color: var(--green);
	}

	.county {
		grid-area: county;
		color: rgba(16, 31, 48, 0.6);
		margin-top: 0.3rem;
	}

	.freq {
		grid-area: freq;
		color: var(--green-deep);
		text-align: right;
	}

	.detail {
		padding: 0 0.2rem 1.3rem;
	}

	.detail p {
		max-width: 46ch;
		margin-bottom: 1rem;
	}

	.link {
		margin-top: clamp(1.4rem, 2.5vw, 2rem);
	}

	.start {
		margin-top: clamp(2.5rem, 5vw, 4rem);
		padding-top: clamp(1.75rem, 3.5vw, 2.5rem);
		border-top: 2.5px solid var(--navy);
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(1.25rem, 4vw, 3.5rem);
		align-items: start;
	}

	.start h2 {
		font-size: var(--step-3);
		margin: 0;
	}

	.green {
		color: var(--green);
	}

	.start p {
		margin-bottom: 1.4rem;
	}

	.start-cta {
		display: flex;
		align-items: center;
		gap: 0.8rem;
		flex-wrap: wrap;
	}

	@media (max-width: 900px) {
		.grid {
			grid-template-columns: 1fr;
			gap: clamp(1.5rem, 4vw, 2.5rem);
		}

		.map {
			width: min(100%, 16rem);
		}

		.more {
			right: -1.6rem;
			bottom: 2%;
		}

		.start {
			grid-template-columns: 1fr;
		}

		.start h2 {
			margin-bottom: 0.4rem;
		}
	}
</style>
