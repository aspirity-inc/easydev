import { Meta, StoryFn } from '@storybook/react';

import { Subtitle } from '.';

const metaSubtitle: Meta<typeof Subtitle> = {
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
};
export default metaSubtitle;

const Template: StoryFn<typeof Subtitle> = ({ children, ...args }) => {
  return <Subtitle {...args}>{children}</Subtitle>;
};

export const DefaultSubtitle: StoryFn<typeof Subtitle> = Template.bind({});
DefaultSubtitle.args = {
  children: 'EasyDev the greatest',
};

export const SubtitleWithStyle: StoryFn<typeof Subtitle> = Template.bind({});
SubtitleWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { fontStyle: 'italic' },
};
