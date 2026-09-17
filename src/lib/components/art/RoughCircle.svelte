<script lang="ts">
	/* A biro circled twice around something, overshooting on the second pass. */
	let {
		color = 'var(--orange)',
		thickness = 3,
		reveal = 'static'
	}: { color?: string; thickness?: number; reveal?: 'static' | 'hover' } = $props();
</script>

<svg
	class="circle"
	class:always={reveal === 'static'}
	style:--ink={color}
	style:--w={thickness}
	viewBox="0 0 240 120"
	preserveAspectRatio="none"
	aria-hidden="true"
	focusable="false"
>
	<path
		pathLength="1"
		d="M126 8 C 52 4, 8 30, 10 62 C 12 98, 76 116, 134 112 C 200 108, 232 84, 228 54 C 224 22, 176 6, 118 9"
	/>
	<path
		pathLength="1"
		class="second"
		d="M118 9 C 66 12, 24 30, 22 58"
	/>
</svg>

<style>
	.circle {
		width: 100%;
		height: 100%;
		overflow: visible;
	}

	path {
		fill: none;
		stroke: var(--ink);
		stroke-width: var(--w);
		stroke-linecap: round;
		vector-effect: non-scaling-stroke;
		stroke-dasharray: 1;
		stroke-dashoffset: calc(1 - var(--draw, 0));
		transition: stroke-dashoffset 0.6s ease-out;
	}

	.always path {
		stroke-dashoffset: 0;
	}

	.second {
		opacity: 0.8;
		transition-delay: 0.25s;
	}
</style>
