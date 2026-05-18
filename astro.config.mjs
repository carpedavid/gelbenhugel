// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Gelbenhügel',
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Introduction', slug: 'guides/introduction' },
						{ label: 'About your world', slug: 'guides/about' },
						{ label: 'Creating a character', slug: 'guides/creating-a-character' },
					],
				},
				{
					label: 'Volk',
					items: [{ autogenerate: { directory: 'volk' } }],
				},				
				{
					label: 'Districts',
					items: [{ autogenerate: { directory: 'districts' } }],
				},
			],
		}),
	],
});
