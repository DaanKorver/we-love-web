import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const post = await import(`../../../lib/posts/${params.post}.md`);
	const { title, author, date, image, description } = post.metadata;
	const content = post.default;

	return {
		title,
		author,
		content,
		date,
		image,
		description
	};
};
