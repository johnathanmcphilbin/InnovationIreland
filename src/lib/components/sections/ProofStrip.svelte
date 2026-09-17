<script lang="ts">
	/* Four flat statements of fact. Numbers in green, everything else out of the way. */
	const facts = [
		{ figure: '100+', rest: 'young builders' },
		{ figure: '4', rest: 'communities across Ireland' },
		{ figure: null, rest: 'National hackathons' },
		{ figure: '100%', rest: 'nonprofit' }
	];
</script>

<section class="proof on-navy">
	<div class="shell">
		<ul>
			{#each facts as fact (fact.rest)}
				<li>
					{#if fact.figure}<span class="figure">{fact.figure}</span>{/if}{fact.rest}
				</li>
			{/each}
		</ul>
	</div>
</section>

<style>
	.proof {
		border-block: 2.5px solid var(--navy);
		padding-block: clamp(2rem, 4vw, 3rem);
	}

	ul {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
	}

	li {
		font-family: var(--display);
		font-weight: 900;
		text-transform: uppercase;
		letter-spacing: -0.025em;
		line-height: 0.95;
		font-size: clamp(1.1rem, 0.55rem + 1.6vw, 2.1rem);
		padding-inline: clamp(0.9rem, 2vw, 2rem);
		border-left: 2px solid rgba(247, 241, 228, 0.22);
		text-wrap: balance;
	}

	li:first-child {
		border-left: 0;
		padding-left: 0;
	}

	.figure {
		color: #7dd39b;
		margin-right: 0.22em;
	}

	@media (max-width: 940px) {
		ul {
			grid-template-columns: repeat(2, 1fr);
			gap: 1.6rem 0;
		}

		li:nth-child(odd) {
			border-left: 0;
			padding-left: 0;
		}
	}
</style>
