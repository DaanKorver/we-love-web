<script lang="ts">
	import { fly } from 'svelte/transition';
	import { quadInOut } from 'svelte/easing';

	export let key: string;

	const duration = 400;
	const height = 25;
</script>

{#key key}
	<div
		in:fly={{ y: height, delay: duration, easing: quadInOut }}
		out:fly={{ y: -height, duration: duration, easing: quadInOut }}
	>
		<slot />
	</div>
{/key}

<style>
	div {
		position: absolute;
		inset: 0;
	}
</style>
