<script lang="ts">
	import type { PostMetadata } from '$lib/state/posts';

	export let metadata: PostMetadata;
	export let slug: string;
</script>

<a href={`/post/${slug}`}>
	<article>
		<date>{metadata.date}</date>
		<h2>{metadata.title}</h2>
		<p>{metadata.description}</p>
	</article>
</a>

<style>
	a {
		color: inherit;
		text-decoration: none;
		display: inline-block;
		margin-bottom: 3.5rem;
	}

	a:hover,
	a:focus {
		color: var(--accent);
	}

	date {
		color: var(--grey);
	}

	h2 {
		margin-top: 0.5rem;
		text-decoration: underline;
		font-size: 2.5rem;
		margin-bottom: 1rem;
	}
</style>
