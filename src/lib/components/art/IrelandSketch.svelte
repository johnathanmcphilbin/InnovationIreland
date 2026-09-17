<script lang="ts">
	/* Ireland, drawn from memory with a marker. Deliberately not a map UI:
	   the peninsulas are wrong, the coast wobbles, Donegal is a bit big. */
	let {
		color = 'var(--navy)',
		thickness = 3,
		ghost = true,
		drawn = true
	}: { color?: string; thickness?: number; ghost?: boolean; drawn?: boolean } = $props();

	const coast =
		'M232 36 C 268 28, 306 40, 330 58 C 342 82, 338 104, 348 120 ' +
		'C 358 136, 362 150, 352 160 C 336 164, 324 176, 318 194 ' +
		'C 316 220, 328 244, 320 268 C 330 284, 318 298, 326 312 ' +
		'C 318 344, 310 374, 300 402 C 258 430, 214 450, 172 468 ' +
		'C 144 478, 110 488, 82 476 C 96 466, 108 460, 118 452 ' +
		'C 96 446, 74 440, 58 430 C 76 424, 94 416, 104 406 ' +
		'C 88 398, 70 390, 56 380 C 72 374, 84 368, 84 358 ' +
		'C 100 344, 114 320, 130 296 C 110 290, 82 280, 62 268 ' +
		'C 70 246, 52 218, 62 198 C 48 180, 58 162, 70 152 ' +
		'C 100 144, 126 166, 156 156 C 170 148, 178 138, 162 130 ' +
		'C 144 120, 132 112, 128 104 C 122 84, 146 62, 176 52 ' +
		'C 188 62, 196 48, 208 58 C 216 44, 226 60, 232 36 Z';
</script>

<svg
	class="ireland"
	class:drawn
	style:--ink={color}
	style:--w={thickness}
	viewBox="0 0 400 520"
	role="img"
	aria-label="A rough hand-drawn outline of Ireland"
>
	{#if ghost}
		<!-- second pass of the pen, slightly off — makes the line feel drawn twice -->
		<path class="ghost" d={coast} transform="translate(5 4) rotate(0.6 200 260)" />
	{/if}
	<path class="ink" pathLength="1" d={coast} />
</svg>

<style>
	.ireland {
		width: 100%;
		height: auto;
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

	.ghost {
		opacity: 0.28;
		stroke-width: calc(var(--w) * 0.7);
	}

	.ink {
		stroke-dasharray: 1;
		stroke-dashoffset: 1;
		transition: stroke-dashoffset 2.4s cubic-bezier(0.4, 0, 0.2, 1);
	}

	.drawn .ink {
		stroke-dashoffset: 0;
	}
</style>
