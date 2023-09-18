/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Easydev',
      social: {
        discord: 'https://discord.com/invite/8aJkBc8gFN',
      },
      customCss: ['./src/styles/custom.css'],
      favicon: '/favicon.ico',
      sidebar: [
        {
          label: 'Getting started',
          items: [
            { label: 'Introduction', link: 'getting-started/introduction' },
            { label: 'Installation', link: 'getting-started/installation' },
            { label: 'Resources', link: 'getting-started/resources' },
            { label: 'Usage', link: 'getting-started/usage' },
          ],
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
        },
        {
          label: 'Theming',
          autogenerate: { directory: 'theming' },
        },
        {
          label: 'Road map',
          autogenerate: { directory: 'road-map' },
        },
        {
          label: 'Changelog',
          autogenerate: { directory: 'changelog' },
        },
      ],
    }),
  ],
  base: '/',
  // Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
