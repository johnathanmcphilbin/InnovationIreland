<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import { links } from '$lib/data/site';
</script>

<svelte:head>
	<title>Privacy & cookies - Innovation Ireland</title>
	<meta
		name="description"
		content="What Innovation Ireland collects when you visit this site, why, and how to opt out."
	/>
</svelte:head>

<PageHead eyebrow="Privacy" lede="Short version: we track anonymised pageviews so we know which parts of the site are actually useful. That's it.">
	{#snippet title()}
		Privacy &amp; cookies.
	{/snippet}
</PageHead>

<section class="section privacy">
	<div class="shell">
		<div class="copy">
		<h2>What we collect</h2>
		<p>
			We use <a href="https://posthog.com" target="_blank" rel="noreferrer">PostHog</a>, an analytics
			tool hosted in the EU, to see which pages get visited and roughly how people move through the
			site. It records things like the page you're on, your browser and device type, and a
			randomly generated ID stored in your browser so repeat visits during a session can be
			grouped together. We don't ask for your name or email through this, and we don't build a
			profile tied to who you are.
		</p>

		<h2>Cookies</h2>
		<p>
			PostHog sets a cookie (and uses local storage) to remember that random ID between page
			loads. That's the only cookie this site sets. There are no advertising cookies, no
			third-party trackers, and we don't sell or share data with anyone.
		</p>

		<h2>Your choice</h2>
		<p>
			Nothing is tracked until you accept the cookie banner. If you decline, or close the banner
			without choosing, no analytics run and no cookie is set. You can change your mind at any
			time by clearing this site's data in your browser settings, which will show the banner
			again on your next visit.
		</p>

		<h2>Who to contact</h2>
		<p>
			If you want to know more, or want any data linked to your visit removed, email
			<a href={links.contact}>{links.contactEmail}</a>.
		</p>

		<p class="note">
			We're a small volunteer-run nonprofit, not a law firm. This page is a plain-language
			description of what actually happens on the site, not formal legal advice.
		</p>
		</div>
	</div>
</section>

<style>
	.copy {
		max-width: var(--measure-copy);
	}

	h2 {
		font-size: var(--step-2);
		margin-top: clamp(2rem, 4vw, 3rem);
		margin-bottom: 0.9rem;
	}

	h2:first-child {
		margin-top: 0;
	}

	p {
		font-size: var(--step-0);
		line-height: 1.6;
	}

	.note {
		margin-top: clamp(2rem, 4vw, 3rem);
		padding-top: 1.25rem;
		border-top: 2px solid var(--rule);
		color: rgba(16, 31, 48, 0.6);
		font-size: 0.9rem;
	}
</style>
