<script lang="ts">
	import '$lib/styles/global.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';
	import { scheme as schemeStore, type SchemeOptions } from '$lib/state/scheme';
	import { browser } from '$app/environment';

	import { onMount } from 'svelte';
	import PageTransition from '$lib/components/PageTransition.svelte';
	import type { LayoutData } from './$types';

	let scheme: string = 'dark';

	export let data: LayoutData;

	$: {
		if (browser) {
			document.body.classList.toggle('dark', $schemeStore === 'dark');
		}
	}

	$: browser ? (document.body.style.display = 'grid') : null;

	onMount(() => {
		schemeStore.subscribe((n) => {
			localStorage.setItem('colorscheme', n);
		});

		if (localStorage.getItem('colorscheme')) {
			schemeStore.set(localStorage.getItem('colorscheme') as SchemeOptions);
			return;
		}

		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
			scheme = 'light';
		}

		localStorage.setItem('colorscheme', scheme);

		window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
			scheme = event.matches ? 'dark' : 'light';
			localStorage.setItem('colorscheme', scheme);
		});
	});
</script>

<PageTransition key={data.url}>
	<Header />
	<main>
		<slot />
	</main>
	<Footer />
</PageTransition>

<style>
	@media (min-width: 40rem) {
		main {
			padding: 1rem;
		}
	}
</style>
