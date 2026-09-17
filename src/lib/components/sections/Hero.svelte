<script lang="ts">
	import Button from '../Button.svelte';
	import RoughUnderline from '../art/RoughUnderline.svelte';
	import IrelandSketch from '../art/IrelandSketch.svelte';
	import MapPin from '../art/MapPin.svelte';
	import HandNote from '../art/HandNote.svelte';
	import { communities } from '$lib/data/communities';
	import { links } from '$lib/data/site';
	import { inView } from '$lib/actions';
</script>

<section class="hero" id="top">
	<div class="shell">
		<h1 class="br-wide" use:inView>
			Ireland's community <br />
			for young people <br />
			who <span class="build">
				build.
				<span class="line"><RoughUnderline thickness={8} reveal="hover" /></span>
			</span>
		</h1>

		<div class="row">
			<div class="copy">
				<p class="lede">
					Meet other ambitious young people. Build real things. Run projects. Go to hackathons.
					Start something.
				</p>

				<div class="actions">
					<Button href={links.join} size="lg">Join Innovation Ireland</Button>
					<Button href={links.startCommunity} variant="secondary" size="lg">
						Start a community
					</Button>
				</div>

				<p class="note">
					<HandNote rotate={-2} arrow="hook" size="1.3rem">
						free, and run by people your own age
					</HandNote>
				</p>
			</div>

			<div class="art">
				<div class="sketch" use:inView={{ threshold: 0.15 }}>
					<IrelandSketch thickness={2.6} />
					{#each communities as c (c.id)}
						<span class="mark" style:left="{c.x}%" style:top="{c.y}%">
							<MapPin size="1rem" />
						</span>
					{/each}
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.hero {
		padding-block: clamp(2.25rem, 5vw, 4rem) clamp(2.5rem, 5.5vw, 4.5rem);
		overflow: hidden;
	}

	h1 {
		font-size: clamp(2.5rem, 0.7rem + 6.9vw, 5.5rem);
		margin-bottom: clamp(1.75rem, 3.5vw, 2.75rem);
	}

	.build {
		position: relative;
		display: inline-block;
		color: var(--green);
		white-space: nowrap;
	}

	.line {
		position: absolute;
		left: 0;
		right: -2%;
		bottom: -0.02em;
		display: block;
		height: 0.3em;
		--draw: 0;
	}

	:global([data-inview]) .line {
		--draw: 1;
	}

	.row {
		display: grid;
		grid-template-columns: minmax(0, 1fr) clamp(12rem, 19vw, 16.5rem);
		gap: clamp(1.5rem, 5vw, 4rem);
		align-items: start;
	}

	.lede {
		font-size: clamp(1.05rem, 0.98rem + 0.5vw, 1.4rem);
		max-width: 40ch;
		margin-bottom: clamp(1.6rem, 3vw, 2.2rem);
	}

	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: 0.9rem;
	}

	.note {
		margin: 1.3rem 0 0;
		padding-left: clamp(0rem, 3vw, 2.5rem);
	}

	.art {
		position: relative;
	}

	.sketch {
		position: relative;
		width: 100%;
		transform: rotate(2.5deg);
		margin-top: -2.5rem;
	}

	.mark {
		position: absolute;
		translate: -50% -50%;
		animation: bob 3.4s ease-in-out infinite;
	}

	.mark:nth-of-type(2) {
		animation-delay: -0.8s;
	}
	.mark:nth-of-type(3) {
		animation-delay: -1.6s;
	}
	.mark:nth-of-type(4) {
		animation-delay: -2.4s;
	}

	@keyframes bob {
		0%,
		100% {
			transform: translateY(0) rotate(-2deg);
		}
		50% {
			transform: translateY(-4px) rotate(3deg);
		}
	}

	@media (max-width: 760px) {
		.row {
			grid-template-columns: 1fr;
		}

		.art {
			order: -1;
			width: 9.5rem;
			margin-left: auto;
			margin-bottom: 0.5rem;
		}

		.sketch {
			margin-top: 0;
		}

		.note {
			padding-left: 0;
		}
	}
</style>
