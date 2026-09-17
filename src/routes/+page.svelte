<script lang="ts">
	import Hero from '$lib/components/sections/Hero.svelte';
	import ProofStrip from '$lib/components/sections/ProofStrip.svelte';
	import OriginStory from '$lib/components/sections/OriginStory.svelte';
	import Communities from '$lib/components/sections/Communities.svelte';
	import Events from '$lib/components/sections/Events.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Join from '$lib/components/sections/Join.svelte';
</script>

<svelte:head>
	<title>Innovation Ireland - Ireland's community for young people who build</title>
	<meta
		name="description"
		content="Innovation Ireland is a nonprofit community of 100+ young builders across Ireland. Weekly communities, hackathons, workshops and student-led projects."
	/>
</svelte:head>

<Hero />
<ProofStrip />
<OriginStory variant="preview" />
<Communities variant="preview" />
<Events variant="preview" />
<Projects variant="preview" />
<Join />
