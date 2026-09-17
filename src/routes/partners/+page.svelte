<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Partners from '$lib/components/sections/Partners.svelte';
	import Join from '$lib/components/sections/Join.svelte';
	import HandNote from '$lib/components/art/HandNote.svelte';
</script>

<svelte:head>
	<title>Partners — Innovation Ireland</title>
	<meta
		name="description"
		content="Innovation Ireland works with companies and organisations who want the next generation of Irish builders to exist. Rooms, hardware, mentors, hackathon costs."
	/>
</svelte:head>

<PageHead
	eyebrow="Partners"
	lede="Innovation Ireland is run by young people and funded by nobody in particular. We work with companies and organisations who want the next generation of Irish engineers, founders and makers to actually exist."
>
	{#snippet title()}
		Help us build this.
	{/snippet}

	<HandNote rotate={-2} size="1.25rem">no logos on hoodies. promise</HandNote>
</PageHead>

<Partners />
<Join />
