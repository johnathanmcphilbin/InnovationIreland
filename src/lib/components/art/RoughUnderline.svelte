<script lang="ts">
	/* Two slightly-missed passes of a marker under a word.
	   Set `reveal="hover"` and have an ancestor flip `--draw: 1` to draw it on. */
	let {
		color = 'var(--green)',
		reveal = 'static',
		thickness = 6,
		class: klass = ''
	}: {
		color?: string;
		reveal?: 'static' | 'hover';
		thickness?: number;
		class?: string;
	} = $props();
</script>

<svg
	class="underline {klass}"
	class:always={reveal === 'static'}
	style:--ink={color}
	style:--w={thickness}
	viewBox="0 0 300 20"
	preserveAspectRatio="none"
	aria-hidden="true"
	focusable="false"
>
	<path
		pathLength="1"
		d="M4 13.5 C 48 7.5, 96 10.5, 142 9 C 191 7.4, 238 11.8, 295 7.5"
	/>
	<path
		pathLength="1"
		class="second"
		d="M12 17.5 C 62 13.8, 118 16.6, 168 14.2 C 215 12, 254 16, 288 13"
	/>
</svg>

<style>
	.underline {
		width: 100%;
		height: 0.42em;
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
		transition: stroke-dashoffset 0.5s cubic-bezier(0.3, 0.8, 0.3, 1);
	}

	.always path {
		stroke-dashoffset: 0;
	}

	.second {
		stroke-width: calc(var(--w) * 0.55);
		opacity: 0.75;
		transition-delay: 0.1s;
	}
</style>
