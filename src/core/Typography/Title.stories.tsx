import { Meta, StoryFn } from '@storybook/react';
import { Title } from './Title.tsx';

export default {
  title: 'Typography/Title',
  component: Title,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Вариант заголовка. h1-h6',
      defaultValue: 'h1',
      control: {
        type: 'select'
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      table: {
        defaultValue: {summary: 'h1'}
      }
    },
    type: {
      type: 'string',
      description: 'Тип контента',
      control: {
        type: 'select'
      },
      defaultValue: 'default',
      options: ['success', 'warning', 'error']
    },
    className: {
      description: 'Любой CSS класс для дополнительной стилизации'
    },
    style: {
      description: 'Любые дополнительные стили'
    },

  }
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = ({ children, ...args }) => {
  return <Title {...args}>{children}</Title>;
};

export const DefaultTitle = Template.bind({});
DefaultTitle.args = {
  children: 'EasyDev the greatest',
};

export const TitleWithStyle = Template.bind({});
TitleWithStyle.args = {
  children: 'EasyDev the greatest',
  style: {color: 'violet'}
};
export const WarningTitle = Template.bind({});
WarningTitle.args = {
  children: 'EasyDev the greatest',
  type: 'warning'
};
