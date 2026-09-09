// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import { satteriResolveMarkdownLinks } from 'satteri-resolve-markdown-links';
import starlight from '@astrojs/starlight';

export default defineConfig({
	markdown: {
		processor: satteri({
			hastPlugins: [
				satteriResolveMarkdownLinks({rootDir: './src/content/docs'})
			]
		})
	},
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
						{ label: 'Beyond Gelbenhügel', slug: 'guides/geography' },
						{ label: 'Adventuring', slug: 'guides/adventuring'},
						{ label: 'Calendar', slug: 'guides/calendar'},
						{ label: 'Commerce', slug: 'guides/calendar'},
						{ label: 'Food and Drink', slug: 'guides/food-and-drink'},						
						{ label: 'Law and Order', slug: 'guides/law-and-order'},
						{ label: 'Creating a character', slug: 'guides/creating-a-character' },
						{ label: 'Names', slug: 'guides/names'},
						{ label: 'Volk', slug: 'guides/volk'},
					],
				},
				{
					label: 'Volk',
					items: [{ autogenerate: { directory: 'volk' } }],
					collapsed: true
				},
				{
					label: 'Districts',
					items: [{ autogenerate: { directory: 'districts' } }],
					collapsed: true
				},
				{
					label: 'Places',
					items: [{ autogenerate: { directory: 'places' } }],
					collapsed: true					
				},
				{
					label: 'People',
					items: [{ autogenerate: { directory: 'people' } }],
					collapsed: true					
				},
				{
					label: 'Spirits',
					items: [{ autogenerate: { directory: 'spirits' } }],
					collapsed: true					
				},				
				{
					label: 'Factions',
					items: [{ autogenerate: { directory: 'factions' } }],
					collapsed: true					
				},
				{
					label: 'Things',
					items: [{ autogenerate: { directory: 'things' } }],
					collapsed: true					
				},
				{
					label: 'Creatures',
					items: [{ autogenerate: { directory: 'creatures' } }],
					collapsed: true					
				},
				{
					label: 'More Resources',
					items: [
						{ label: 'Credits and copyright', slug: 'resources/copyright'},
						{ label: 'License and logos', slug: 'resources/license-and-logos'},
						{ label: 'Amalara Game Studio', link: 'https://amalara.com'}
					],
				},
			],
		}),
	],
});
