import { writable, type Writable } from 'svelte/store';
import { browser } from '$app/environment';

export type SchemeOptions = 'dark' | 'light';

export const scheme: Writable<SchemeOptions> = writable(
	browser
		? localStorage.getItem('colorscheme')
			? (localStorage.getItem('colorscheme') as SchemeOptions)
			: 'dark'
		: 'dark'
);
