<script lang="ts">
	/* Filler squiggle. Used sparingly — it means nothing, so it earns very little space. */
	let {
		color = 'var(--navy)',
		thickness = 2.4,
		width = '7rem',
		variant = 'wave'
	}: {
		color?: string;
		thickness?: number;
		width?: string;
		variant?: 'wave' | 'loop' | 'cross';
	} = $props();

	const paths = {
		wave: 'M4 22 C 18 6, 30 34, 46 18 C 62 3, 72 32, 88 19 C 100 9, 110 24, 122 17',
		loop: 'M6 26 C 14 6, 34 4, 38 22 C 41 36, 24 42, 20 30 C 16 16, 38 4, 60 12 C 82 20, 96 8, 120 20',
		cross: 'M10 10 C 40 22, 76 34, 118 40 M116 8 C 80 20, 44 30, 12 42'
	} as const;
</script>

<svg
	class="scribble"
	style:--ink={color}
	style:--w={thickness}
	style:--width={width}
	viewBox="0 0 128 48"
	aria-hidden="true"
	focusable="false"
>
	<path d={paths[variant]} />
</svg>

<style>
	.scribble {
		width: var(--width);
		height: auto;
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
