<script lang="ts">
	import type { Snippet } from 'svelte';
	import RoughArrow from './art/RoughArrow.svelte';

	/* "Read our story →" — a text link, not a button. The arrow nudges on hover. */
	let {
		href,
		color = 'var(--green-deep)',
		external = false,
		children
	}: { href: string; color?: string; external?: boolean; children: Snippet } = $props();
</script>

<a
	class="more-link"
	{href}
	style:--ink={color}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
>
	<span>{@render children()}</span>
	<span class="arrow"><RoughArrow dir="right" size="2.1rem" thickness={2.6} {color} /></span>
</a>

<style>
	.more-link {
		display: inline-flex;
		align-items: center;
		gap: 0.55rem;
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		font-size: clamp(0.85rem, 0.8rem + 0.25vw, 1rem);
		letter-spacing: 0.03em;
		color: var(--ink);
		text-decoration: none;
		border-bottom: 2.5px solid currentColor;
		padding-bottom: 0.15rem;
	}

	.arrow {
		display: block;
		transition: transform 0.2s ease;
	}

	.more-link:hover .arrow {
		transform: translateX(4px);
	}
</style>
