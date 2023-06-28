import { Meta, StoryFn } from '@storybook/react';
import { Button } from './Button.tsx';
import 'material-symbols';

const AddIcon = () => <div className="material-symbols-rounded">add</div>;

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
    icon: {
      description: 'Иконка для кнопки',
    },
    reversed: {
      description: 'Направление контента кнопки',
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

export const IconRightButton = Template.bind({});
IconRightButton.args = {
  children: 'Button',
  icon: <AddIcon />,
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
