<script lang="ts">
	import type { PostMetadata } from '$lib/state/posts';

	export let metadata: PostMetadata;
	export let slug: string;
</script>

<li>
	<a href={`/post/${slug}`}>
		<article>
			<img src={metadata.image} alt={metadata.title} />
			<div>
				<date>{metadata.date}</date>

				<h2>{metadata.title}</h2>
				<p>{metadata.description}</p>
			</div>
		</article>
	</a>
</li>

<style>
	a {
		color: inherit;
		text-decoration: none;
		display: block;
		height: 100%;
	}

	a:hover,
	a:focus {
		color: var(--accent);
	}

	article {
		background-color: var(--lighter);
		height: inherit;
	}

	article > div {
		padding: 1rem;
	}

	date {
		color: var(--grey);
		font-size: 0.8rem;
	}

	h2 {
		margin-top: 0.5rem;
		font-size: 1.5rem;
		margin-bottom: 1rem;
	}

	img {
		width: 100%;
		aspect-ratio: 5/3;
		object-fit: cover;
		object-position: center;
	}
</style>
