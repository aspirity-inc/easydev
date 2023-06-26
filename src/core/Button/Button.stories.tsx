import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button.tsx';

export default {
  title: 'core/Button',
  component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const NoIconButton = Template.bind({});
NoIconButton.args = {
  children: 'Button',
};
