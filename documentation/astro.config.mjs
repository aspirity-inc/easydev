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
          items: [
            { label: 'Accordion', link: 'components/accordion/' },
            { label: 'Avatar', link: 'components/avatar/' },
            { label: 'Badge', link: 'components/badge/' },
            { label: 'Breadcrumbs', link: 'components/breadcrumbs/' },
            { label: 'Button', link: 'components/button/' },
            { label: 'Card', link: 'components/card/' },
            { label: 'Center', link: 'components/center/' },
            { label: 'Chip', link: 'components/chip/' },
            {
              label: 'Controls',
              items: [
                {
                  label: 'Checkbox',
                  link: 'components/controls/checkbox',
                },
                {
                  label: 'Radio',
                  link: 'components/controls/radio',
                },
                {
                  label: 'Toggle',
                  link: 'components/controls/toggle',
                },
              ],
              collapsed: true,
            },
            { label: 'Datepicker', link: 'components/datepicker/' },
            { label: 'Dropdown', link: 'components/dropdown/' },
            { label: 'Flex', link: 'components/flex/' },
            { label: 'Grid', link: 'components/grid/' },
            {
              label: 'Inputs',
              items: [
                { label: 'Input', link: 'components/inputs/input' },
                { label: 'CodeInput', link: 'components/inputs/code-input' },
                { label: 'MaskedInput', link: 'components/inputs/masked-input' },
                { label: 'Textarea', link: 'components/inputs/textarea' },
              ],
              collapsed: true,
            },
            {
              label: 'Layout',
              items: [
                { label: 'Layout', link: 'components/layout/' },
                { label: 'Header', link: 'components/layout/header' },
                { label: 'Sidebar', link: 'components/layout/sidebar' },
                { label: 'Main', link: 'components/layout/main' },
                { label: 'Footer', link: 'components/layout/footer' },
              ],
              collapsed: true,
            },
            { label: 'Link', link: 'components/link/' },
            { label: 'Modal', link: 'components/modal/' },
            { label: 'Pagination', link: 'components/pagination/' },
            { label: 'Popover', link: 'components/popover/' },
            {
              label: 'Progress',
              items: [
                { label: 'ProgressBar', link: 'components/progress/progress-bar' },
                { label: 'RangeSlider', link: 'components/progress/range-slider' },
                { label: 'Stepper', link: 'components/progress/stepper' },
              ],
              collapsed: true,
            },
            { label: 'Select', link: 'components/select/' },
            { label: 'Space', link: 'components/space/' },
            { label: 'Tab', link: 'components/tab/' },
            { label: 'Table', link: 'components/table/' },
            { label: 'Theme', link: 'components/theme/' },
            { label: 'Toast', link: 'components/toast/' },
            {
              label: 'Typography',
              items: [
                { label: 'Text', link: 'components/typography/text' },
                { label: 'Title', link: 'components/typography/title' },
                { label: 'Subtitle', link: 'components/typography/subtitle' },
              ],
              collapsed: true,
            },
          ],
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
