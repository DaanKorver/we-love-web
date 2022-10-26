<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { title, content, date, image, description } = data;
</script>

<article>
	<date>{date}</date>
	<img src={image} alt={title} />
	<h1>{title}</h1>
	<p>{description}</p>
	<div class="md">
		<svelte:component this={content} class="md" />
	</div>
</article>

<style>
	img {
		width: 100%;
		aspect-ratio: 5/3;
		object-fit: cover;
		object-position: center;
	}

	article {
		max-width: 35rem;
		margin: 0 auto;
	}

	h1 {
		font-size: clamp(2.5rem, 10vw, 4rem);
		margin-bottom: 1rem;
		margin-top: 1.5rem;
	}

	date {
		color: var(--grey);
		display: block;
		margin-bottom: 1rem;
	}

	p {
		font-style: italic;
	}

	.md {
		padding-top: 1rem;
	}

	.md :global(p) {
		font-size: 1rem;
	}
</style>
