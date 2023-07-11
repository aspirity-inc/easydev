import { Meta, StoryFn } from '@storybook/react';

import { Subtitle } from '.';

export default {
  title: 'Typography/Subtitle',
  component: Subtitle,
  argTypes: {
    tag: {
      type: 'string',
      description: 'HTML tag',
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      table: {
        defaultValue: { summary: 'div' },
      },
    },
    level: {
      type: 'number',
      description: 'Size of subheading element',
      control: 'select',
      options: [1, 2, 3, 4, 5],
      table: { defaultValue: { summary: 1 } },
    },
    type: {
      type: 'string',
      description: 'Content type',
      control: {
        type: 'select',
      },
      options: ['success', 'warning', 'error'],
    },
    className: {},
    style: {},
  },
} as Meta<typeof Subtitle>;

const Template: StoryFn<typeof Subtitle> = ({ children, ...args }) => {
  return <Subtitle {...args}>{children}</Subtitle>;
};

export const DefaultSubtitle = Template.bind({});
DefaultSubtitle.args = {
  children: 'EasyDev the greatest',
};

export const SubtitleWithStyle = Template.bind({});
SubtitleWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { color: 'violet' },
};
export const WarningSubtitle = Template.bind({});
WarningSubtitle.args = {
  children: 'EasyDev the greatest',
  type: 'warning',
};
