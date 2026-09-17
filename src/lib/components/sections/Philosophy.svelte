<script lang="ts">
	import HandNote from '../art/HandNote.svelte';
	import StarDoodle from '../art/StarDoodle.svelte';
</script>

<section class="section roomy philosophy">
	<div class="shell">
		<h2>
			You don't need to be<br />
			<span class="quoted">“good at tech.”</span>
		</h2>

		<h2 class="second">
			You just need to<br />
			want to make something.
		</h2>

		<div class="support">
			<div>
				<p>
					Some people here have been building since they were ten. Some turned up having never
					written a line of code and spent the first night asking what everyone else was doing.
					Both are completely normal.
				</p>
			</div>
			<div>
				<p>
					Nobody tests you at the door. You show up, you get shown how things work, and fairly
					soon you're the one showing somebody else.
				</p>
				<p class="note">
					<HandNote rotate={-2} size="1.3rem" color="var(--cream)">
						everyone is figuring it out
					</HandNote>
				</p>
			</div>
		</div>

		<span class="star"><StarDoodle color="var(--cream)" size="2.2rem" spin /></span>
	</div>
</section>

<style>
	.philosophy {
		background: var(--green);
		color: var(--cream);
		position: relative;
		overflow: hidden;
	}

	h2 {
		font-size: clamp(2rem, 0.9rem + 4.8vw, 4.6rem);
		max-width: 24ch;
	}

	.quoted {
		color: var(--navy);
	}

	.second {
		margin-top: clamp(1rem, 2.2vw, 1.75rem);
	}

	.support {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(1.5rem, 4vw, 3.5rem);
		margin-top: clamp(2rem, 4vw, 3rem);
		max-width: 62rem;
		border-top: 2px solid rgba(247, 241, 228, 0.35);
		padding-top: clamp(1.4rem, 2.8vw, 2rem);
	}

	.support p {
		font-size: var(--step-1);
		line-height: 1.55;
		max-width: var(--measure-copy);
	}

	.note {
		margin-top: 1.2rem;
	}

	.star {
		position: absolute;
		top: clamp(1.5rem, 4vw, 3rem);
		right: clamp(1.5rem, 5vw, 5rem);
		display: block;
	}

	@media (max-width: 760px) {
		.support {
			grid-template-columns: 1fr;
		}

		.star {
			display: none;
		}
	}
</style>
