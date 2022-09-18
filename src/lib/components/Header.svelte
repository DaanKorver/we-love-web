<script lang="ts">
	import { scheme } from '$lib/state/scheme';

	function toggleScheme() {
		scheme.set($scheme === 'dark' ? 'light' : 'dark');
	}
</script>

<header>
	<nav>
		<ul>
			<li><a href="/">Blog</a></li>
			<li><button on:click={toggleScheme}>{$scheme === 'dark' ? 'light' : 'dark'} mode</button></li>
		</ul>
	</nav>
</header>

<style>
	nav {
		border-bottom: 1px solid var(--accent);
		margin-bottom: 1rem;
	}

	ul {
		display: flex;
		align-items: center;
		list-style-type: none;
		gap: 1.5rem;
		padding: 0;
		margin: 0;
		padding: 1rem;
	}

	a {
		color: var(--text);
	}

	li:last-child {
		margin-left: auto;
	}
</style>
