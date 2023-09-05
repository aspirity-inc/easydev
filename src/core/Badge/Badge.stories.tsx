import { Meta, StoryFn } from '@storybook/react';

import { Badge } from '.';
import { defaultColors } from './types';

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
      defaultValue: 'green',
      description: 'Color',
      control: 'select',
      options: [...defaultColors],
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
};
