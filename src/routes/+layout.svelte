<script lang="ts">
	import { page } from '$app/state';
	import { afterNavigate } from '$app/navigation';
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import CookieBanner from '$lib/components/CookieBanner.svelte';
	import { trackPageviewIfConsented } from '$lib/analytics';

	let { children } = $props();

	// fires on the initial load too, so this alone covers every pageview,
	// and does nothing at all until the visitor has accepted the cookie banner
	afterNavigate(() => {
		trackPageviewIfConsented(page.url.href);
	});
</script>

<a class="skip" href="#main">Skip to content</a>
<CookieBanner />
<Nav />
<main id="main">
	{@render children()}
</main>
<Footer />

<style>
	.skip {
		position: absolute;
		left: -9999px;
		top: 0;
		z-index: 100;
		background: var(--navy);
		color: var(--cream);
		padding: 0.7rem 1rem;
		font-family: var(--mono);
		font-size: 0.8rem;
	}

	.skip:focus {
		left: 0.5rem;
		top: 0.5rem;
	}
</style>
