<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let scrollY: number;
	let total: number;

	onMount(() => {
		setTimeout(() => {
			const height = document.body.scrollHeight - window.innerHeight;
			total = height;
		}, 500);
	});
</script>

<svelte:window bind:scrollY />

<div style="width: {(scrollY / total) * 100}%" />

<style>
	div {
		position: fixed;
		top: 0;
		left: 0;
		width: 0%;
		height: 4px;
		background-color: var(--accent);
	}
</style>
