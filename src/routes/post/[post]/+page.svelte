<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { title, content, date, author } = data;
</script>

<article>
	<h1>{title}</h1>
	<date>{date}</date>
	<p>Door: {author}</p>
	<hr />
	<svelte:component this={content} />
</article>
