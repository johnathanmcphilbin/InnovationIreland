<script lang="ts">
	import type { Snippet } from 'svelte';

	/* Chunky rectangular buttons with a hard offset shadow.
	   They physically move a couple of pixels when you press them. */
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
		{@render children()}
	</a>
{:else}
	<button class="btn" data-variant={variant} data-size={size} {type} {onclick} {...rest}>
		{@render children()}
	</button>
{/if}

<style>
	.btn {
		--shadow: 5px 5px 0 0 var(--navy);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.5rem;
		font-family: var(--display);
		font-weight: 800;
		text-transform: uppercase;
		letter-spacing: 0.01em;
		text-decoration: none;
		border: 2.5px solid var(--navy);
		border-radius: 2px;
		padding: 0.72em 1.25em;
		cursor: pointer;
		background: var(--paper);
		color: var(--navy);
		box-shadow: var(--shadow);
		transition:
			transform 0.12s ease,
			box-shadow 0.12s ease,
			background-color 0.15s ease;
		text-align: center;
	}

	.btn:hover {
		transform: translate(-1px, -1px);
		box-shadow: 6px 6px 0 0 var(--navy);
	}

	.btn:active {
		transform: translate(3px, 3px);
		box-shadow: 1px 1px 0 0 var(--navy);
	}

	[data-variant='primary'] {
		background: var(--green);
		color: var(--paper);
	}

	[data-variant='orange'] {
		background: var(--orange);
		color: var(--navy);
	}

	[data-variant='secondary'] {
		background: transparent;
	}

	[data-variant='ghost'] {
		border-color: currentColor;
		background: transparent;
		box-shadow: none;
		--shadow: none;
	}

	[data-variant='ghost']:hover {
		box-shadow: none;
		background: rgba(16, 31, 48, 0.07);
	}

	[data-size='sm'] {
		font-size: 0.8rem;
		padding: 0.55em 0.9em;
	}

	[data-size='lg'] {
		font-size: clamp(1rem, 0.9rem + 0.5vw, 1.3rem);
		padding: 0.8em 1.5em;
	}

	/* On a dark section the offset shadow has to flip to something visible */
	:global(.on-navy) .btn {
		border-color: var(--cream);
		box-shadow: 5px 5px 0 0 var(--cream);
	}

	:global(.on-navy) .btn:hover {
		box-shadow: 6px 6px 0 0 var(--cream);
	}

	:global(.on-navy) .btn:active {
		box-shadow: 1px 1px 0 0 var(--cream);
	}

	:global(.on-navy) [data-variant='secondary'] {
		color: var(--cream);
	}
</style>
