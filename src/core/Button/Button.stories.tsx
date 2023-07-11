import { Meta, StoryFn } from '@storybook/react';

import 'material-symbols';

import { Button } from '.';

const AddIcon = () => <div className="material-symbols-rounded">add</div>;
const LoaderIcon = () => <div className="material-symbols-rounded">refresh</div>;

export default {
  title: 'core/Button',
  component: Button,
  argTypes: {
    size: {
      type: 'string',
      description: 'Размер кнопки',
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
      description: 'Скругление углов кнопки',
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
      description: 'Вариант кнопки',
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
      description: 'Иконка для кнопки',
    },
    loadingIcon: {
      description: 'Иконка для кнопки в состоянии загрузки',
    },
    reversed: {
      description: 'Направление контента кнопки',
      control: 'boolean',
      defaultValue: false,
    },
    loading: {
      description: 'Кнопка в состоянии загрузки',
      control: 'boolean',
      defaultValue: false,
    },
    className: {
      description: 'Любой CSS класс для дополнительной стилизации',
    },
    style: {
      description: 'Любые дополнительные стили',
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }) => {
  return <Button {...args}>{children}</Button>;
};

export const IconTextButton = Template.bind({});
IconTextButton.args = {
  children: 'Button',
  icon: <AddIcon />,
};

export const SecondaryIconTextButton = Template.bind({});
SecondaryIconTextButton.args = {
  children: 'Button',
  icon: <AddIcon />,
  variant: 'secondary',
};

export const IconButton = Template.bind({});
IconButton.args = {
  icon: <AddIcon />,
};

export const TextButton = Template.bind({});
TextButton.args = {
  children: 'Button',
};

export const RoundedButton = Template.bind({});
RoundedButton.args = {
  children: 'Button',
  rounded: 'lg',
};

export const ProgressDefaultIconButton = Template.bind({});
ProgressDefaultIconButton.args = {
  children: 'Button',
  loading: true,
};

export const ProgressUserIconButton = Template.bind({});
ProgressUserIconButton.args = {
  children: 'Button',
  loadingIcon: <LoaderIcon />,
  loading: true,
};
