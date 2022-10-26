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
		--col-size: 3;
		display: grid;
		grid-template-columns: repeat(var(--col-size), 1fr);
		gap: 1.25rem;
		padding: 0;
		margin: 0;
		list-style-type: none;
	}

	@media (max-width: 60rem) {
		ul {
			--col-size: 2;
		}
	}

	@media (max-width: 40rem) {
		ul {
			max-width: 25rem;
			margin: 0 auto;
			--col-size: 1;
		}
	}
</style>
