<script lang="ts">
	import PhotoSlot from '../PhotoSlot.svelte';
	import MoreLink from '../MoreLink.svelte';
	import { photos } from '$lib/data/photos';
</script>

<section class="section press">
	<div class="shell">
		<div class="grid">
			<div class="copy-col">
				<h2 class="br-wide">80+ students. <br />One weekend. Real city problems.</h2>

				<div class="copy">
					<p>
						More than 80 students from across Ireland gathered at Galway's PorterShed for
						FutureHack, a student-led hackathon challenging young people aged 13 to 19 to
						develop practical solutions to real city challenges: sustainability, traffic,
						security, infrastructure and urban planning.
					</p>
					<p>
						Founded by Innovation Ireland and led by Johnathan McPhilbin and Lukas Lydon, the
						winning team built a data-driven concept using trends, graphs and heat-map
						visualisations to identify where future infrastructure investment may be needed
						across Galway.
					</p>
					<blockquote>
						"Young people did not simply participate in an innovation programme designed for
						them. They took the initiative to create one, bring peers together from around the
						country and connect them with founders, mentors, educators and technology
						professionals."
					</blockquote>
				</div>

				<div class="links">
					<MoreLink
						href="https://www.thinkbusiness.ie/articles/futurehack-galway-student-hackathon-young-innovators-city-challenges/"
						external
					>
						Read the full write-up
					</MoreLink>
					<MoreLink
						href="https://www.universityofgalway.ie/Ideaslab"
						color="var(--orange)"
						external
					>
						IdeasLab at University of Galway
					</MoreLink>
				</div>
			</div>

			<div class="photo">
				<PhotoSlot
					src={photos.futurehackGroup.src}
					alt={photos.futurehackGroup.alt}
					caption={photos.futurehackGroup.caption}
					tilt={-1.6}
					ratio="4 / 3"
					tape="one"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.grid {
		display: grid;
		grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
		gap: clamp(2rem, 5vw, 4rem);
		align-items: start;
	}

	h2 {
		font-size: var(--step-3);
		margin-bottom: var(--head-gap);
	}

	.copy p {
		margin-bottom: 1.1em;
	}

	blockquote {
		margin: 1.4rem 0 0;
		padding-left: 1.1rem;
		border-left: 3px solid var(--green);
		font-family: var(--display);
		font-weight: 700;
		font-size: clamp(1rem, 0.94rem + 0.35vw, 1.2rem);
		line-height: 1.4;
		letter-spacing: -0.01em;
		max-width: var(--measure-copy);
	}

	.links {
		display: flex;
		flex-wrap: wrap;
		gap: 1.1rem 1.6rem;
		margin-top: clamp(1.5rem, 3vw, 2.25rem);
	}

	.photo {
		max-width: 22rem;
		margin-inline: auto;
	}

	@media (max-width: 880px) {
		.grid {
			grid-template-columns: 1fr;
		}

		.photo {
			max-width: 18rem;
			margin-inline: 0;
		}
	}
</style>
