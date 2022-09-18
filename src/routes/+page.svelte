<script lang="ts">
	import Post from '$lib/components/Post.svelte';
	import { posts } from '$lib/state/posts';
</script>

{#each $posts as post}
	<Post {...post} />
{/each}
