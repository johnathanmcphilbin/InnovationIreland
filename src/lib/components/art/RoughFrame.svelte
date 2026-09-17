<script lang="ts">
	/* A box drawn by hand around content: corners that don't quite meet. */
	let {
		color = 'var(--navy)',
		thickness = 2.5,
		radius = 0
	}: { color?: string; thickness?: number; radius?: number } = $props();
</script>

<svg
	class="frame"
	style:--ink={color}
	style:--w={thickness}
	style:--r="{radius}px"
	viewBox="0 0 400 260"
	preserveAspectRatio="none"
	aria-hidden="true"
	focusable="false"
>
	<path
		d="M8 10 C 110 5, 262 8, 392 6 C 396 92, 393 176, 395 252 C 274 256, 130 253, 6 255 C 9 172, 5 90, 8 10 Z"
	/>
</svg>

<style>
	.frame {
		position: absolute;
		inset: -6px;
		width: calc(100% + 12px);
		height: calc(100% + 12px);
		pointer-events: none;
		overflow: visible;
	}

	path {
		fill: none;
		stroke: var(--ink);
		stroke-width: var(--w);
		stroke-linejoin: round;
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
	}
</style>
