<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import { getConsent, setConsent } from '$lib/analytics';

	let visible = $state(false);

	$effect(() => {
		visible = getConsent() === null;
	});

	function choose(choice: 'accepted' | 'declined') {
		setConsent(choice);
		visible = false;
	}
</script>

{#if visible}
	<div class="cookie-banner on-navy" role="dialog" aria-label="Cookies" transition:slide={{ duration: 220 }}>
		<div class="shell inner">
			<div class="copy">
				<p class="heading">Quick one before you go in.</p>
				<p>
					We use <a href="https://posthog.com" target="_blank" rel="noreferrer">PostHog</a> to see
					which pages get visited, nothing more. No ads, nothing sold, nothing shared. Full detail
					on our <a href="/privacy">privacy &amp; cookies page</a>.
				</p>
			</div>
			<div class="actions">
				<Button variant="ghost" onclick={() => choose('declined')}>Decline</Button>
				<Button variant="primary" onclick={() => choose('accepted')}>Accept</Button>
			</div>
		</div>
	</div>
{/if}

<style>
	.cookie-banner {
		border-bottom: 2.5px solid var(--cream);
	}

	.inner {
		padding-block: clamp(1.5rem, 4vw, 2.25rem);
		display: flex;
		align-items: center;
		gap: 1.5rem 2.5rem;
	}

	.copy {
		flex: 1 1 auto;
	}

	.heading {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.01em;
		font-size: var(--step-2);
		line-height: 1;
		margin: 0 0 0.6rem;
	}

	.copy p:not(.heading) {
		max-width: 56ch;
		font-size: var(--step-0);
		line-height: 1.5;
		margin: 0;
	}

	.copy a {
		color: #7dd39b;
	}

	.actions {
		display: flex;
		gap: 0.75rem;
		flex: none;
	}

	@media (max-width: 700px) {
		.inner {
			flex-direction: column;
			align-items: stretch;
		}

		.actions {
			justify-content: flex-start;
		}
	}
</style>
