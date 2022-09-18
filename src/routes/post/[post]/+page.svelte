<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { title, content, date } = data;
</script>

<article>
	<a href="/">Terug</a>
	<h1>{title}</h1>
	<date>{date}</date>
	<div class="md">
		<svelte:component this={content} class="md" />
	</div>
</article>

<style>
	a {
		color: var(--text);
	}
	article {
		padding: 1rem;
		max-width: 35rem;
	}
	h1 {
		font-size: 4rem;
		margin-bottom: 0rem;
		margin-top: 1.5rem;
	}

	date {
		color: var(--grey);
		display: block;
		margin-bottom: 2rem;
	}
	.md :global(p) {
		font-size: 1.1rem;
	}
</style>
