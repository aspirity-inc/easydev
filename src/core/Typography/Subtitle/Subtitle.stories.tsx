import { Meta, StoryFn } from '@storybook/react';

import { Subtitle } from '.';

export default {
  title: 'Core/Typography/Subtitle',
  component: Subtitle,
  argTypes: {
    tag: {
      type: 'string',
      description: 'HTML tag',
      control: {
        type: 'select',
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      table: { defaultValue: { summary: 'h4' } },
    },
    level: {
      type: 'number',
      description: 'Size of subheading element',
      control: 'select',
      options: [1, 2, 3, 4, 5],
      table: { defaultValue: { summary: 1 } },
    },
    color: {
      type: 'string',
      control: { type: 'color' },
    },
    bgColor: {
      type: 'string',
      control: { type: 'color' },
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
  style: { fontStyle: 'italic' },
};
