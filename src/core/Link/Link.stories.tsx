import { Link } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaLink: Meta<typeof Link> = {
  title: 'Core/Link',
  component: Link,
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
