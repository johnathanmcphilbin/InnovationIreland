<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import Press from '$lib/components/sections/Press.svelte';
	import Join from '$lib/components/sections/Join.svelte';
</script>

<svelte:head>
	<title>Events — Innovation Ireland</title>
	<meta
		name="description"
		content="Hackathons, workshops and build days that put every young builder in Ireland in the same room."
	/>
</svelte:head>

<PageHead
	eyebrow="Events"
	lede="Hackathons, workshops and build days. Everyone who's been quietly making things in their own town, in the same building for a weekend."
>
	{#snippet title()}
		Sometimes we put <br />everyone in one room.
	{/snippet}
</PageHead>

<Events />
<Press />
<Join />
