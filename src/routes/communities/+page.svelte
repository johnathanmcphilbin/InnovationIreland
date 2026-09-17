<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Communities from '$lib/components/sections/Communities.svelte';
	import Join from '$lib/components/sections/Join.svelte';
</script>

<svelte:head>
	<title>Communities — Innovation Ireland</title>
	<meta
		name="description"
		content="Young people run their own Innovation Ireland communities in Galway City, Ballina, Laois and Ennis — and you can start one where you live."
	/>
</svelte:head>

<PageHead
	eyebrow="Communities"
	lede="Innovation Ireland isn't one organisation in Dublin that everyone else has to travel to. Young people run their own communities where they actually live — a room, a night of the week, and whatever everyone's building at the time."
>
	{#snippet title()}
		Find your people.
	{/snippet}
</PageHead>

<Communities />
<Join />
