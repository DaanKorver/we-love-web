import { writeFileSync } from 'fs';

const title = process.argv[3];

const date = new Date();

const currentDate = `${date.getUTCDate()}-${
	date.getUTCMonth() + 1 <= 9 ? '0' + date.getUTCMonth() : date.getUTCMonth() + 1
}-${date.getUTCFullYear()}`;

const template = `---
title: Template Post
description: Short description about the post!
date: ${currentDate}
image: https://webanimation.blog/static/423be0fcbd4a0c52595db365bde1a574/42e64/basics.jpg
---

## Template post

Hello World!

`;

try {
	writeFileSync(`src/lib/posts/${title}.md`, template);
	console.log('Created new post!');
	console.log('Go write something\n');
	console.log(`Path: src/lib/posts/${title}.md`);
} catch (err) {
	console.log(err);
}
