<script lang="ts">
	import Button from '../Button.svelte';
	import StarDoodle from '../art/StarDoodle.svelte';
	import PhotoSlot from '../PhotoSlot.svelte';
	import { partners, partnerAsks } from '$lib/data/partners';
	import { links } from '$lib/data/site';
	import { photos } from '$lib/data/photos';

	/* The page title and pitch live in the page head - this is the body. */
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

		<h2 class="logos-title">
			Proudly supported by<br />&amp; partnered with.
		</h2>

		<ul class="logos">
			{#each partners as p, i (p.name)}
				<li style:--tilt="{(i % 3) - 1}deg">
					<svelte:element this={p.href ? 'a' : 'div'} class="logo-card" href={p.href} target={p.href ? '_blank' : undefined} rel={p.href ? 'noreferrer' : undefined}>
						<span class="logo-frame">
							{#if p.logo}
								<img class="logo-img" src={p.logo} alt="{p.name} logo" loading="lazy" />
							{:else}
								<span class="no-logo">{p.name}</span>
							{/if}
						</span>
						<span class="card-text">
							<span class="mono-label kind">{p.kind}</span>
							<span class="slot-name">{p.name}</span>
						</span>
					</svelte:element>
				</li>
			{/each}
		</ul>

		<p class="disclaimer mono-label">
			Real names, real logos. We don't list anyone who hasn't actually said yes.
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

	.logos-title {
		margin-top: clamp(2.5rem, 5vw, 4rem);
		font-size: var(--step-2);
	}

	.logos {
		margin-top: var(--head-gap);
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: clamp(1.6rem, 3.5vw, 2.75rem);
	}

	.logos li {
		transform: rotate(var(--tilt));
	}

	.logo-card {
		display: block;
		background: var(--paper);
		border: 2.5px solid var(--navy);
		box-shadow: 5px 6px 0 0 rgba(16, 31, 48, 0.18);
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.15s ease,
			box-shadow 0.15s ease;
	}

	a.logo-card:hover {
		transform: translate(-2px, -2px);
		box-shadow: 7px 8px 0 0 rgba(16, 31, 48, 0.22);
	}

	.logo-frame {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 6.5rem;
		padding: 1rem 1.25rem;
		border-bottom: 2px solid var(--rule);
	}

	.logo-img {
		max-height: 100%;
		max-width: 100%;
		width: auto;
		object-fit: contain;
	}

	.no-logo {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.01em;
		font-size: 1.3rem;
		color: var(--navy);
	}

	.card-text {
		display: grid;
		justify-items: center;
		gap: 0.3rem;
		padding: 0.9rem 1rem 1.1rem;
		text-align: center;
	}

	.kind {
		color: var(--green-deep);
	}

	.slot-name {
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: 0.95rem;
		letter-spacing: -0.005em;
		color: var(--navy);
	}

	a.logo-card:hover .slot-name {
		color: var(--green-deep);
		text-decoration: underline;
		text-decoration-thickness: 2px;
		text-underline-offset: 3px;
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

	@media (max-width: 480px) {
		.logos {
			grid-template-columns: 1fr;
			max-width: 20rem;
			margin-inline: auto;
		}
	}
</style>
