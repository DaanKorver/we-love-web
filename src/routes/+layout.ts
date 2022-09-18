import type { LayoutLoad } from './$types';
import { posts as postStore } from '$lib/state/posts';

export const load: LayoutLoad = async () => {
	const posts = await Promise.all(
		Object.entries(import.meta.glob('$lib/posts/*.md')).map(async ([path, post]: [string, any]) => {
			const slug: string = path.replace('/src/lib/posts/', '').slice(0, -3);
			const { metadata } = await post();

			return { metadata, slug };
		})
	);

	postStore.set(posts);

	return null;
};
