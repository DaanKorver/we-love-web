<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	export let key: string;

	const duration = 400;
	const height = 20;
</script>

{#key key}
	<main
		in:fly={{ y: -height, delay: duration + 100, easing: quadInOut }}
		out:fly={{ y: height, duration: duration, easing: quadInOut }}
	>
		<slot />
	</main>
{/key}

<style>
	main {
		padding: 2rem;
	}

	@media (max-width: 40rem) {
		main {
			padding: 1rem;
		}
	}
</style>
