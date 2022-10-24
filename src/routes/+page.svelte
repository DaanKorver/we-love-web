<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import { posts } from '$lib/state/posts';
</script>

<h1>Epische blog van Daan Korver</h1>
<ul>
	{#each $posts as post}
		<Post {...post} />
	{/each}
</ul>

<style>
	ul {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 1.25rem;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}
</style>
