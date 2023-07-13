import { Meta, StoryFn } from '@storybook/react';

import { Link } from '.';

export default {
  title: 'Core/Link',
  component: Link,
  argTypes: {
    children: {
      description: 'ReactNode | ReactNode[] | string',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
    },
    defaultUnderline: {
      type: 'boolean',
      control: 'boolean',
    },
  },
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = ({ ...args }) => {
  return <Link {...args}>Go to the google!!!</Link>;
};

export const DefaultLink = Template.bind({});
DefaultLink.args = {};

export const DefaultUnderlineLink = Template.bind({});
DefaultUnderlineLink.args = {
  defaultUnderline: true,
};
