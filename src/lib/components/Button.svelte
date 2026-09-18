<script lang="ts">
	import type { Snippet } from 'svelte';

	/* Flat rectangular buttons. No shadow, no rounded corners, no gradient.
	   Their one move: a solid-colour square block travels through the button
	   on hover, and the letters it crosses swap to a second, high-contrast
	   colour for as long as the square sits under them - a real colour
	   change, not a blend trick, so it reads clearly on every background. */
	let {
		href = undefined,
		variant = 'primary',
		size = 'md',
		type = 'button',
		onclick = undefined,
		children,
		...rest
	}: {
		href?: string;
		variant?: 'primary' | 'secondary' | 'ghost' | 'orange';
		size?: 'sm' | 'md' | 'lg';
		type?: 'button' | 'submit';
		onclick?: (event: MouseEvent) => void;
		children: Snippet;
		[key: string]: unknown;
	} = $props();
</script>

{#if href}
	<a class="btn" data-variant={variant} data-size={size} {href} {onclick} {...rest}>
		<span class="chunk" aria-hidden="true"></span>
		<span class="label">{@render children()}</span>
		<span class="label label-over" aria-hidden="true">{@render children()}</span>
	</a>
{:else}
	<button class="btn" data-variant={variant} data-size={size} {type} {onclick} {...rest}>
		<span class="chunk" aria-hidden="true"></span>
		<span class="label">{@render children()}</span>
		<span class="label label-over" aria-hidden="true">{@render children()}</span>
	</button>
{/if}

<style>
	.btn {
		/* size */
		--chunk: 2.4em;
		/* colour: the travelling square, and what the letters under it turn */
		--chunk-bg: var(--orange);
		--chunk-text: var(--navy);

		position: relative;
		overflow: hidden;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		text-decoration: none;
		border: 2.5px solid var(--navy);
		border-radius: 0;
		padding-block: 0.72em;
		cursor: pointer;
		background: var(--paper);
		color: var(--navy);
		transition: background-color 0.15s ease;
		text-align: center;
	}

	.btn:active {
		translate: 0 1px;
	}

	.label {
		position: relative;
		padding-inline: calc(var(--chunk) + 0.7em);
		white-space: nowrap;
	}

	/* the second copy of the text: pinned exactly over the first, in the
	   "under the square" colour, revealed only through the square's clip */
	.label-over {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		color: var(--chunk-text);
		clip-path: inset(0 calc(100% - var(--chunk)) 0 0);
		transition: clip-path 0.6s cubic-bezier(0.3, 0.8, 0.3, 1);
	}

	/* the square itself: flush left at rest, flush right on hover */
	.chunk {
		position: absolute;
		inset-block: 0;
		left: 0;
		width: var(--chunk);
		background: var(--chunk-bg);
		transition: left 0.6s cubic-bezier(0.3, 0.8, 0.3, 1);
		pointer-events: none;
	}

	.btn:hover .chunk {
		left: calc(100% - var(--chunk));
	}

	.btn:hover .label-over {
		clip-path: inset(0 0 0 calc(100% - var(--chunk)));
	}

	[data-variant='primary'] {
		background: var(--green);
		color: var(--paper);
		--chunk-bg: var(--orange);
		--chunk-text: var(--navy);
	}

	[data-variant='orange'] {
		background: var(--orange);
		color: var(--navy);
		--chunk-bg: var(--navy);
		--chunk-text: var(--paper);
	}

	[data-variant='secondary'] {
		background: transparent;
		--chunk-bg: var(--green);
		--chunk-text: var(--paper);
	}

	[data-variant='ghost'] {
		border-color: currentColor;
		background: transparent;
		--chunk-bg: var(--green);
		--chunk-text: var(--paper);
	}

	[data-variant='ghost']:hover {
		background: rgba(16, 31, 48, 0.07);
	}

	[data-size='sm'] {
		--chunk: 1.9em;
		font-size: 0.8rem;
		padding-block: 0.55em;
	}

	[data-size='lg'] {
		--chunk: 2.75em;
		font-size: clamp(1rem, 0.9rem + 0.5vw, 1.3rem);
		padding-block: 0.8em;
	}

	:global(.on-navy) .btn {
		border-color: var(--cream);
	}

	:global(.on-navy) [data-variant='secondary'],
	:global(.on-navy) [data-variant='ghost'] {
		color: var(--cream);
		--chunk-bg: var(--orange);
		--chunk-text: var(--navy);
	}

	:global(.on-navy) [data-variant='ghost']:hover {
		background: rgba(247, 241, 228, 0.1);
	}
</style>
