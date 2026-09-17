<script lang="ts">
	import PageHead from '$lib/components/PageHead.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Join from '$lib/components/sections/Join.svelte';
</script>

<svelte:head>
	<title>Projects — Innovation Ireland</title>
	<meta
		name="description"
		content="A wall of things members of Innovation Ireland have built: robots, apps, games and machines that only work at the right angle."
	/>
</svelte:head>

<PageHead
	eyebrow="Projects"
	lede="Robots, apps, games, machines that only work if you hold them at the right angle. Some of it is genuinely impressive. Some of it is held together with tape."
>
	{#snippet title()}
		People here actually <br />make stuff.
	{/snippet}
</PageHead>

<Projects />
<Join />
