import { Meta, StoryFn } from '@storybook/react';

import { Link } from '.';

const metaLink: Meta<typeof Link> = {
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
};
export default metaLink;

const Template: StoryFn<typeof Link> = ({ ...args }) => {
  return <Link {...args}>Go to the google!!!</Link>;
};

export const DefaultLink: StoryFn<typeof Link> = Template.bind({});
DefaultLink.args = {};

export const DefaultUnderlineLink: StoryFn<typeof Link> = Template.bind({});
DefaultUnderlineLink.args = {
  defaultUnderline: true,
};
