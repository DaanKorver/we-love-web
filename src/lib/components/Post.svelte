<script lang="ts">
	import type { PostMetadata } from '$lib/state/posts';

	export let metadata: PostMetadata;
	export let slug: string;
</script>

<a href={`/post/${slug}`}>
	<article>
		<h2>{metadata.title}</h2>
		<p>{metadata.description}</p>
	</article>
</a>

<style>
	a {
		display: inline-block;
		color: inherit;
		text-decoration: none;
	}

	h2 {
		text-decoration: underline;
	}
</style>
