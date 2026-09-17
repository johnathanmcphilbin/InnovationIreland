<script lang="ts">
	import type { Snippet } from 'svelte';

	/* The top of an inner page: eyebrow, big title, one paragraph.
	   Same type and rhythm on every route. */
	let {
		eyebrow,
		title,
		lede = undefined,
		children = undefined
	}: { eyebrow: string; title: Snippet; lede?: string; children?: Snippet } = $props();
</script>

<header class="page-head">
	<div class="shell">
		<p class="eyebrow">{eyebrow}</p>
		<h1 class="br-wide">{@render title()}</h1>
		{#if lede}
			<p class="copy">{lede}</p>
		{/if}
		{#if children}
			<div class="extra">{@render children()}</div>
		{/if}
	</div>
</header>

<style>
	.page-head {
		padding-block: clamp(2.25rem, 4.5vw, 4rem) clamp(2rem, 4vw, 3.25rem);
	}

	h1 {
		font-size: clamp(2.4rem, 1rem + 5.6vw, 5rem);
		max-width: 26ch;
	}

	.copy {
		margin-top: clamp(1.1rem, 2vw, 1.6rem);
	}

	.extra {
		margin-top: clamp(1.4rem, 2.5vw, 2rem);
	}
</style>
