import { Meta, StoryFn } from '@storybook/react';

import 'material-symbols';

import { Button } from '.';

const AddIcon = () => <div className="material-symbols-rounded">add</div>;
const LoaderIcon = () => <div className="material-symbols-rounded">refresh</div>;

const metaButton: Meta<typeof Button> = {
  title: 'Сore/Button',
  component: Button,
  argTypes: {
    size: {
      type: 'string',
      description: 'Button size',
      control: {
        type: 'select',
      },
      defaultValue: 'lg',
      options: ['lg', 'sm'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    rounded: {
      type: 'string',
      description: 'Round button corners',
      control: {
        type: 'select',
      },
      defaultValue: 'lg',
      options: ['lg', 'sm', 'none'],
      table: {
        defaultValue: { summary: 'lg' },
      },
    },
    variant: {
      type: 'string',
      description: 'Button variants',
      control: {
        type: 'select',
      },
      defaultValue: 'primary',
      options: ['primary', 'secondary'],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    icon: {
      description: 'Button icon',
    },
    loadingIcon: {
      description: 'Button loading icon',
    },
    reversed: {
      description: 'Button content direction',
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      description: 'Loading state',
      control: 'boolean',
      defaultValue: false,
    },
    className: {
      description: 'CSS class for additional styling',
    },
    style: {
      description: 'Additional styles',
    },
  },
};
export default metaButton;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const IconTextButton: StoryFn<typeof Button> = Template.bind({});
IconTextButton.args = {
  children: 'Button',
  icon: <AddIcon />,
};

export const SecondaryIconTextButton: StoryFn<typeof Button> = Template.bind({});
SecondaryIconTextButton.args = {
  children: 'Button',
  icon: <AddIcon />,
  variant: 'secondary',
};

export const IconButton: StoryFn<typeof Button> = Template.bind({});
IconButton.args = {
  icon: <AddIcon />,
};

export const TextButton: StoryFn<typeof Button> = Template.bind({});
TextButton.args = {
  children: 'Button',
};

export const RoundedButton: StoryFn<typeof Button> = Template.bind({});
RoundedButton.args = {
  children: 'Button',
  rounded: 'lg',
};

export const ProgressDefaultIconButton: StoryFn<typeof Button> = Template.bind({});
ProgressDefaultIconButton.args = {
  children: 'Button',
  loading: true,
};

export const ProgressUserIconButton: StoryFn<typeof Button> = Template.bind({});
ProgressUserIconButton.args = {
  children: 'Button',
  loadingIcon: <LoaderIcon />,
  loading: true,
};
