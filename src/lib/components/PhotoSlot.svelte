<script lang="ts">
	import Tape from './art/Tape.svelte';
	import StarDoodle from './art/StarDoodle.svelte';

	/* A photograph, treated like an actual physical object: paper border,
	   pinned or taped on, sitting a degree or two off straight.
	   With no `src` it renders an honest placeholder slot. */
	let {
		src = undefined,
		alt = '',
		slot: slotLabel = 'Photo',
		caption = undefined,
		tilt = -1.5,
		ratio = '4 / 3',
		tape = 'none',
		width = undefined
	}: {
		src?: string;
		alt?: string;
		slot?: string;
		caption?: string;
		tilt?: number;
		ratio?: string;
		tape?: 'none' | 'one' | 'two';
		width?: string;
	} = $props();
</script>

<figure class="photo" style:--tilt="{tilt}deg" style:--ratio={ratio} style:--w={width}>
	{#if tape !== 'none'}
		<span class="tape tape-a"><Tape rotate={-8} width="4.6rem" /></span>
	{/if}
	{#if tape === 'two'}
		<span class="tape tape-b"><Tape rotate={6} width="4.2rem" /></span>
	{/if}

	<div class="paper">
		{#if src}
			<img {src} {alt} loading="lazy" />
		{:else if slotLabel === 'empty'}
			<div class="empty">
				<StarDoodle color="var(--rule-strong)" size="1.9rem" />
				<span class="mono-label">Slot free</span>
			</div>
		{:else}
			<div class="placeholder">
				<span class="mono-label tag">Photo</span>
				<span class="desc">{slotLabel}</span>
			</div>
		{/if}
	</div>

	{#if caption}
		<figcaption class="hand">{caption}</figcaption>
	{/if}
</figure>

<style>
	.photo {
		position: relative;
		margin: 0;
		width: var(--w, 100%);
		transform: rotate(var(--tilt));
		transition: transform 0.35s cubic-bezier(0.3, 0.8, 0.3, 1);
	}

	.photo:hover,
	.photo:focus-within {
		transform: rotate(calc(var(--tilt) * -0.6)) translateY(-3px);
	}

	.paper {
		background: var(--paper);
		border: 2px solid var(--navy);
		padding: 0.55rem 0.55rem 0.55rem;
		box-shadow: 6px 7px 0 0 rgba(16, 31, 48, 0.18);
	}

	img,
	.placeholder,
	.empty {
		aspect-ratio: var(--ratio);
		width: 100%;
		object-fit: cover;
		display: flex;
	}

	.placeholder,
	.empty {
		background: var(--cream-deep);
		border: 1.5px dashed var(--rule-strong);
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 1.25rem;
		text-align: center;
	}

	.tag {
		color: var(--green-deep);
	}

	.desc {
		font-family: var(--body);
		font-size: 0.85rem;
		line-height: 1.35;
		color: rgba(16, 31, 48, 0.62);
		max-width: 22ch;
	}

	.empty .mono-label {
		color: rgba(16, 31, 48, 0.5);
	}

	figcaption {
		margin-top: 0.7rem;
		transform: rotate(-1.2deg);
		font-size: 1.2rem;
	}

	.tape {
		position: absolute;
		z-index: 2;
		pointer-events: none;
	}

	.tape-a {
		top: -1.1rem;
		left: -0.9rem;
	}

	.tape-b {
		bottom: -1.1rem;
		right: -0.8rem;
	}
</style>
