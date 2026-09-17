<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import OriginStory from '$lib/components/sections/OriginStory.svelte';
	import PhotoBreak from '$lib/components/sections/PhotoBreak.svelte';
	import Philosophy from '$lib/components/sections/Philosophy.svelte';
	import Join from '$lib/components/sections/Join.svelte';
</script>

<svelte:head>
	<title>About — Innovation Ireland</title>
	<meta
		name="description"
		content="Our school robotics team got shut down, so we crossed the road. How a weekly group in a Headford clubhouse became a national community of young builders."
	/>
</svelte:head>

<PageHead
	eyebrow="How this started"
	lede="Innovation Ireland is a nonprofit community for ambitious young people across Ireland who want to build things. It started with a room we had to ask for."
>
	{#snippet title()}
		We weren't supposed <br />to start this.
	{/snippet}
</PageHead>

<OriginStory />
<PhotoBreak />
<Philosophy />
<Join />
