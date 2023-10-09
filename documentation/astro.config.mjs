/* eslint-disable import/order */
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import { astroExpressiveCode } from 'astro-expressive-code';

export default defineConfig({
  integrations: [
    astroExpressiveCode({ theme: 'dracula' }),
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
          collapsed: true,
        },
        {
          label: 'Components',
          autogenerate: { directory: 'components' },
          collapsed: true,
        },
        {
          label: 'Theming',
          link: 'theming/',
        },
        {
          label: 'Road map',
          link: 'road-map/',
        },
        {
          label: 'Changelog',
          link: 'changelog/',
        },
      ],
    }),
  ],
  base: '/',
  image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
