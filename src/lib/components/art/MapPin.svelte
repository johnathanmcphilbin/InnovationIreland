<script lang="ts">
	/* A cross/x marker scrawled on the map, not a pin icon. */
	let {
		color = 'var(--orange)',
		size = '1.4rem',
		thickness = 3.4
	}: { color?: string; size?: string; thickness?: number } = $props();
</script>

<svg
	class="pin"
	style:--ink={color}
	style:--w={thickness}
	style:--size={size}
	viewBox="0 0 32 32"
	aria-hidden="true"
	focusable="false"
>
	<path d="M6 7 C 13 14, 20 21, 26 26" />
	<path d="M25 6 C 19 13, 12 20, 7 26" />
</svg>

<style>
	.pin {
		width: var(--size);
		height: var(--size);
		overflow: visible;
	}

	path {
		fill: none;
		stroke: var(--ink);
		stroke-width: var(--w);
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
	}
</style>
