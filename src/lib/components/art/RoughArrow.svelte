<script lang="ts">
	/* Hand-drawn arrows. Slight wiggle, off by a degree or two, never perfect. */
	let {
		dir = 'down',
		color = 'var(--navy)',
		thickness = 3,
		wiggle = false,
		size = '4rem',
		flip = false
	}: {
		dir?: 'down' | 'right' | 'swoop' | 'hook';
		color?: string;
		thickness?: number;
		wiggle?: boolean;
		size?: string;
		flip?: boolean;
	} = $props();

	const shapes = {
		down: {
			box: '0 0 60 120',
			shaft: 'M31 5 C 25 32, 35 58, 28 95 C 28.5 100, 29 105, 29.5 111',
			head: 'M15 88 C 21 96, 26 104, 29.5 112 C 34 103, 38 95, 44 87'
		},
		right: {
			box: '0 0 130 60',
			shaft: 'M6 33 C 36 24, 62 38, 92 29 C 99 27.5, 105 28, 112 29',
			head: 'M92 13 C 99 20, 105 25, 113 29 C 104 33, 97 39, 90 46'
		},
		swoop: {
			box: '0 0 190 140',
			shaft: 'M8 16 C 62 2, 148 22, 160 72 C 165 96, 140 118, 106 121',
			head: 'M124 104 C 116 112, 110 117, 104 121.5 C 112 126, 119 131, 125 138'
		},
		hook: {
			box: '0 0 150 110',
			shaft: 'M142 10 C 138 44, 112 66, 66 72 C 52 74, 40 73, 26 70',
			head: 'M44 55 C 36 62, 30 67, 24 70 C 33 75, 40 81, 46 89'
		}
	} as const;

	const s = $derived(shapes[dir]);
</script>

<svg
	class="arrow"
	class:wiggle
	class:flip
	style:--ink={color}
	style:--w={thickness}
	style:--size={size}
	viewBox={s.box}
	aria-hidden="true"
	focusable="false"
>
	<path d={s.shaft} />
	<path d={s.head} />
</svg>

<style>
	.arrow {
		width: var(--size);
		height: auto;
		overflow: visible;
	}

	.flip {
		transform: scaleX(-1);
	}

	path {
		fill: none;
		stroke: var(--ink);
		stroke-width: var(--w);
		stroke-linecap: round;
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
	}

	.wiggle {
		animation: wiggle 3.6s ease-in-out infinite;
		transform-origin: 50% 20%;
	}

	.wiggle.flip {
		animation-name: wiggle-flip;
	}

	@keyframes wiggle {
		0%,
		100% {
			transform: rotate(-1.5deg) translateY(0);
		}
		50% {
			transform: rotate(2deg) translateY(3px);
		}
	}

	@keyframes wiggle-flip {
		0%,
		100% {
			transform: scaleX(-1) rotate(-1.5deg);
		}
		50% {
			transform: scaleX(-1) rotate(2deg) translateY(3px);
		}
	}
</style>
