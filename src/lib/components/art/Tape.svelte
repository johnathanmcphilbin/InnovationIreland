<script lang="ts">
	/* A strip of masking tape. Torn ends, slightly crooked, a bit see-through. */
	let {
		rotate = -4,
		width = '5.5rem',
		tone = 'cream'
	}: { rotate?: number; width?: string; tone?: 'cream' | 'green' } = $props();
</script>

<svg
	class="tape"
	style:--rot="{rotate}deg"
	style:--w={width}
	data-tone={tone}
	viewBox="0 0 160 46"
	aria-hidden="true"
	focusable="false"
>
	<path
		d="M6 9 L 18 6 L 30 9.5 L 44 6.5 L 60 9 L 76 5.5 L 92 9 L 110 6 L 128 9.5 L 148 6 L 154 38 L 136 41 L 118 37.5 L 100 41 L 82 37 L 64 41 L 46 37.5 L 28 41 L 12 37.5 Z"
	/>
</svg>

<style>
	.tape {
		width: var(--w);
		height: auto;
		transform: rotate(var(--rot));
		filter: none;
	}

	path {
		fill: rgba(226, 214, 188, 0.92);
		stroke: rgba(16, 31, 48, 0.3);
		stroke-width: 1.2;
	}

	[data-tone='green'] path {
		fill: rgba(125, 211, 155, 0.7);
		stroke: rgba(10, 91, 45, 0.3);
	}
</style>
