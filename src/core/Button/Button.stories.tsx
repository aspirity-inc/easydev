import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button.tsx';
import 'material-symbols';

const AddIcon = () => <div className='material-symbols-rounded'>add</div>;

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

export const IconRightButton = Template.bind({});
IconRightButton.args = {
  children: 'Button',
  icon: <AddIcon />,
  iconPosition: 'right',
};

export const IconLeftButton = Template.bind({});
IconLeftButton.args = {
  children: 'Button',
  icon: <AddIcon />,
  iconPosition: 'left',
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <AddIcon />,
};
