import { posts, type Post } from '$lib/state/posts';
import { get } from 'svelte/store';

export const findBySlug: (slug: string) => Post | undefined = (slug) =>
	get(posts).find((post) => post.slug === slug);
