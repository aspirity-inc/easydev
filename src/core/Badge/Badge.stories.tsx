import { Meta, StoryFn } from '@storybook/react';

import { Badge } from '.';

export default {
  title: 'Core/Badge',
  component: Badge,
  argTypes: {
    size: {
      defaultValue: 'md',
      description: 'Size',
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    color: {
      type: 'string',
      control: { type: 'color', presetColors: ['success', 'warning', 'error'] },
      description: 'colors presets: success | warning | error',
    },
    textColor: {
      type: 'string',
      control: { type: 'color' },
      description: 'Text color',
    },
  },
} satisfies Meta<typeof Badge>;

const Template: StoryFn<typeof Badge> = ({ ...args }) => {
  return <Badge {...args}>{args.children}</Badge>;
};

export const DefaultBadge: StoryFn<typeof Badge> = Template.bind({});
DefaultBadge.args = {
  children: 'Badge',
};

export const FullWidthBadge: StoryFn<typeof Badge> = Template.bind({});
FullWidthBadge.args = {
  children: 'Badge',
  fullWidth: true,
};

export const UserColorBadge: StoryFn<typeof Badge> = Template.bind({});
UserColorBadge.args = {
  children: 'Badge',
  color: '#0100fa',
  textColor: 'lightblue',
};
