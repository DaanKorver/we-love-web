import { writable, type Writable } from 'svelte/store';

export interface PostMetadata {
	title: string;
	description: string;
	date: string;
	image: string;
}

export interface Post {
	metadata: PostMetadata;
	slug: string;
}

export const posts: Writable<Post[]> = writable([]);
