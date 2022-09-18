import { writable, type Writable } from 'svelte/store';

export interface PostMetadata {
	author: string;
	title: string;
	description: string;
	data: string;
}

export interface Post {
	metadata: PostMetadata;
	slug: string;
}

export const posts: Writable<Post[]> = writable([]);
