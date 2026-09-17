<script lang="ts">
	import Button from '../Button.svelte';
	import HandNote from '../art/HandNote.svelte';
	import RoughArrow from '../art/RoughArrow.svelte';
	import { links } from '$lib/data/site';
</script>

<section class="section roomy join on-navy" id="join">
	<div class="shell">
		<h2>
			Stop scrolling.<br />
			Go build something.
		</h2>

		<div class="buttons">
			<Button href={links.join} size="lg" variant="primary">Join a community</Button>
			<Button href={links.startCommunity} size="lg" variant="orange">Start a community</Button>
		</div>

		<div class="aside">
			<span class="arrow">
				<RoughArrow dir="swoop" size="5rem" thickness={2.6} color="#7dd39b" flip wiggle />
			</span>
			<span class="scrawl">
				<HandNote rotate={-4} size="1.4rem" color="#7dd39b">
					the footer will still be<br />here afterwards
				</HandNote>
			</span>
		</div>
	</div>
</section>

<style>
	h2 {
		font-size: clamp(2.4rem, 1rem + 6.6vw, 5.2rem);
		margin-bottom: clamp(1.6rem, 3vw, 2.25rem);
	}

	.buttons {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.aside {
		display: flex;
		align-items: flex-start;
		gap: 0.6rem;
		margin-top: 1.6rem;
		padding-left: clamp(0rem, 6vw, 6rem);
	}

	.arrow {
		display: block;
		flex: none;
		translate: 0 -0.5rem;
	}

	@media (max-width: 640px) {
		.aside {
			padding-left: 0;
		}
	}
</style>
