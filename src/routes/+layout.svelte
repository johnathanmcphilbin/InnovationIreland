<script lang="ts">
	import '../app.css';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<a class="skip" href="#main">Skip to content</a>
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
