<script lang="ts">
	/* Four-pointed spark, drawn badly on purpose. */
	let {
		color = 'var(--orange)',
		size = '1.6rem',
		thickness = 2.6,
		spin = false
	}: { color?: string; size?: string; thickness?: number; spin?: boolean } = $props();
</script>

<svg
	class="star"
	class:spin
	style:--ink={color}
	style:--w={thickness}
	style:--size={size}
	viewBox="0 0 48 48"
	aria-hidden="true"
	focusable="false"
>
	<path d="M24 3 C 25.5 17, 27 21.5, 44 24 C 27.5 26.5, 25 31, 23 45 C 21.5 30.5, 19 26.5, 3 23.5 C 20 21, 22.5 16.5, 24 3 Z" />
</svg>

<style>
	.star {
		width: var(--size);
		height: var(--size);
		overflow: visible;
	}

	path {
		fill: none;
		stroke: var(--ink);
		stroke-width: var(--w);
		stroke-linejoin: round;
		vector-effect: non-scaling-stroke;
	}

	.spin {
		animation: twinkle 4s ease-in-out infinite;
		transform-origin: 50% 50%;
	}

	@keyframes twinkle {
		0%,
		100% {
			transform: rotate(-6deg) scale(1);
		}
		50% {
			transform: rotate(8deg) scale(1.1);
		}
	}
</style>
