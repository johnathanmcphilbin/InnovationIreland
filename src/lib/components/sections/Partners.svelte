<script lang="ts">
	import Button from '../Button.svelte';
	import RoughFrame from '../art/RoughFrame.svelte';
	import StarDoodle from '../art/StarDoodle.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import { partners, partnerAsks } from '$lib/data/partners';
	import { links } from '$lib/data/site';
	import { photos } from '$lib/data/photos';

	/* The page title and pitch live in the page head — this is the body. */
</script>

<section class="section partners" id="partners">
	<div class="shell">
		<div class="help">
			<div class="asks">
				<h2 class="asks-title mono-label">What actually helps</h2>
				<ul>
					{#each partnerAsks as ask (ask)}
						<li>
							<span class="bullet"><StarDoodle size="1rem" thickness={3} /></span>
							{ask}
						</li>
					{/each}
				</ul>
			</div>

			<div class="photo">
				<PhotoSlot
					src={photos.iseSponsorship.src}
					alt={photos.iseSponsorship.alt}
					caption={photos.iseSponsorship.caption}
					tilt={1.4}
					ratio="4 / 3"
					tape="one"
				/>
			</div>
		</div>

		<ul class="logos">
			{#each partners as p, i (p.kind + i)}
				<li style:--tilt="{(i % 3) - 1}deg">
					<RoughFrame thickness={2} color="var(--rule-strong)" />
					<span class="mono-label kind">{p.kind}</span>
					<span class="slot-name">{p.name}</span>
				</li>
			{/each}
		</ul>

		<p class="disclaimer mono-label">
			Partner logos go here once agreements are signed — we don't list anyone who hasn't said yes.
		</p>

		<div class="cta">
			<Button href={links.partner} size="lg">Become a partner</Button>
			<Button href={links.sponsorship} variant="secondary" size="lg">View sponsorship</Button>
		</div>
	</div>
</section>

<style>
	.help {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 0.7fr);
		gap: clamp(1.5rem, 4vw, 3.5rem);
		align-items: start;
	}

	.asks {
		border-top: 2px solid var(--rule);
		padding-top: 1.5rem;
	}

	.photo {
		max-width: 24rem;
	}

	.asks-title {
		color: var(--green-deep);
		margin-bottom: 1.1rem;
	}

	.asks ul {
		display: grid;
		gap: 0.85rem;
	}

	.asks li {
		display: flex;
		align-items: baseline;
		gap: 0.6rem;
		font-family: var(--display);
		font-weight: 700;
		font-size: clamp(1rem, 0.9rem + 0.4vw, 1.2rem);
		text-transform: uppercase;
		line-height: 1.15;
		letter-spacing: -0.01em;
	}

	.bullet {
		display: block;
		flex: none;
		translate: 0 0.15rem;
	}

	.logos {
		margin-top: clamp(2.25rem, 4.5vw, 3.5rem);
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1.4rem, 3vw, 2.6rem);
	}

	.logos li {
		position: relative;
		aspect-ratio: 5 / 2;
		display: grid;
		align-content: center;
		justify-items: center;
		gap: 0.35rem;
		transform: rotate(var(--tilt));
		padding: 1rem;
		text-align: center;
	}

	.kind {
		color: var(--green-deep);
	}

	.slot-name {
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.9rem;
		color: rgba(16, 31, 48, 0.45);
	}

	.disclaimer {
		margin: 1.5rem 0 0;
		color: rgba(16, 31, 48, 0.55);
		max-width: 46ch;
		line-height: 1.6;
	}

	.cta {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
		margin-top: clamp(1.75rem, 3.5vw, 2.5rem);
	}

	@media (max-width: 860px) {
		.help {
			grid-template-columns: 1fr;
		}

		.logos {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
