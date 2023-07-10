import { Meta, StoryFn } from '@storybook/react';

import { Input } from '.';

export default {
  title: 'core/Input',
  component: Input,
  argTypes: {
    status: {
      type: 'string',
      description: 'Статус инпута',
      control: {
        type: 'select',
      },
      defaultValue: 'default',
      options: ['-', 'warning', 'error', 'loading', 'success'],
      table: {
        defaultValue: { summary: '-' },
      },
    },
    statusText: {
      type: 'string',
      control: 'text',
      description: 'Сообщение статуса',
    },
    value: {
      type: 'string',
      control: 'text',
      description: 'Текст',
    },
    label: {
      type: 'string',
      control: 'text',
      description: 'Метка',
    },
    placeholder: {
      type: 'string',
      control: 'text',
      description: 'Подсказка',
    },
    className: {
      description: 'Любой CSS класс для дополнительной стилизации',
    },
    style: {
      description: 'Любые дополнительные стили',
    },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({ ...args }) => {
  return <Input {...args} />;
};

export const DefaultInput = Template.bind({});
DefaultInput.args = {
  placeholder: 'Введите свое имя',
  label: 'Имя',
};

export const WarningInput = Template.bind({});
WarningInput.args = {
  value: 'Иван',
  placeholder: 'Введите свое имя',
  label: 'Имя',
  status: 'warning',
  statusText: 'Проверьте еще раз',
};

export const LoadingInput = Template.bind({});
LoadingInput.args = {
  value: 'Иван',
  placeholder: 'Введите свое имя',
  label: 'Имя',
  status: 'loading',
  statusText: 'Ожидайте',
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  value: 'Иван',
  placeholder: 'Введите свое имя',
  label: 'Имя',
  disabled: true,
};

export const DisabledEmptyInput = Template.bind({});
DisabledEmptyInput.args = {
  placeholder: 'Введите свое имя',
  label: 'Имя',
  disabled: true,
};
