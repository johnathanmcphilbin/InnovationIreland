<script lang="ts">
	import type { Snippet } from 'svelte';
	import RoughArrow from './RoughArrow.svelte';

	/* A note scribbled in the margin. Optional little arrow pointing at the thing. */
	let {
		rotate = -3,
		color = 'var(--green-deep)',
		arrow = 'none',
		size = '1.35rem',
		align = 'end',
		children
	}: {
		rotate?: number;
		color?: string;
		arrow?: 'none' | 'down' | 'right' | 'hook' | 'swoop';
		size?: string;
		align?: 'start' | 'center' | 'end';
		children: Snippet;
	} = $props();
</script>

<span
	class="note"
	style:--rot="{rotate}deg"
	style:--ink={color}
	style:--size={size}
	style:align-items={align === 'center' ? 'center' : `flex-${align}`}
>
	<span>{@render children()}</span>
	{#if arrow !== 'none'}
		<span class="arrow">
			<RoughArrow dir={arrow} {color} thickness={2.4} size="2.4rem" wiggle />
		</span>
	{/if}
</span>

<style>
	.note {
		display: inline-flex;
		gap: 0.35rem;
		font-family: var(--hand);
		font-weight: 600;
		font-size: var(--size);
		line-height: 1.1;
		color: var(--ink);
		transform: rotate(var(--rot));
	}

	.arrow {
		display: block;
		flex: none;
	}
</style>
