import { Meta, StoryFn } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'core/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => <Button {...args}>{children}</Button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};
