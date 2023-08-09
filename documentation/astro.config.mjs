/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Easydev',
			social: {
				discord: 'https://discord.com/invite/8aJkBc8gFN'
			},
			customCss: ['./src/styles/custom.css']
			
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
