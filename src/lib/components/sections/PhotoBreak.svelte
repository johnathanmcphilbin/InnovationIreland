<script lang="ts">
	import PhotoSlot from '../PhotoSlot.svelte';
	import { photos } from '$lib/data/photos';
</script>

<section class="section break on-navy" aria-label="Event photograph">
	<div class="wide">
		<PhotoSlot
			src={photos.futurehackRoom.src}
			alt={photos.futurehackRoom.alt}
			caption={photos.futurehackRoom.caption}
			ratio="21 / 9"
			tilt={-0.5}
			tape="two"
		/>
	</div>
</section>

<style>
	.break {
		padding-block: var(--section-y);
	}

	.wide {
		width: 100%;
		max-width: 1500px;
		margin-inline: auto;
		padding-inline: clamp(1.15rem, 3vw, 2.5rem);
	}

	.break :global(figcaption) {
		color: #7dd39b;
		text-align: right;
	}

	@media (max-width: 640px) {
		.break :global(img),
		.break :global(.placeholder) {
			aspect-ratio: 4 / 3;
		}
	}
</style>
