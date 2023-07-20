import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Text } from '@core/Typography';

import { Input } from '.';

const metaInput: Meta<typeof Input> = {
  title: 'core/Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      type: 'string',
      control: 'text',
      description: 'Тип инпута',
    },
    error: {
      type: 'string',
      control: 'text',
      description: 'Сообщение ошибки',
    },
    message: {
      type: 'string',
      control: 'text',
      description: 'Сообщение под инпутом',
    },
    warning: {
      type: 'string',
      control: 'text',
      description: 'Предупреждение',
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
      description: 'Загрузка',
    },
    renderExtraMessage: {
      control: { type: null },
      action: 'renderExtraMessage',
      description: 'Функция, возвращающая доп.компонеты для рендеринга',
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
};
export default metaInput;

const TemplateInput: StoryFn<typeof Input> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} {...args} />;
};

const TemplatePassword: StoryFn<typeof Input> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} {...args} />;
};

export const DefaultInput: StoryFn<typeof Input> = TemplateInput.bind({});
DefaultInput.args = {
  label: 'Имя',
  placeholder: 'Введите свое имя',
};

export const ErrorInput: StoryFn<typeof Input> = TemplateInput.bind({});
ErrorInput.args = {
  value: 'Иван',
  label: 'Имя',
  error: 'Нет такого пользователя',
};

export const LoadingInput: StoryFn<typeof Input> = TemplateInput.bind({});
LoadingInput.args = {
  value: 'Иван',
  label: 'Имя',
  isLoading: true,
};

export const DisabledInput: StoryFn<typeof Input> = TemplateInput.bind({});
DisabledInput.args = {
  value: 'Иван',
  label: 'Имя',
  disabled: true,
};

export const DefaultPassword: StoryFn<typeof Input> = TemplatePassword.bind({});
DefaultPassword.args = {
  type: 'password',
  label: 'Password',
  message: '6 or more characters',
};

export const ErrorPasswordWithMessage: StoryFn<typeof Input> = TemplatePassword.bind({});
ErrorPasswordWithMessage.args = {
  type: 'password',
  value: 'Иван',
  label: 'Password',
  error: 'Invalid password',
  renderExtraMessage: () => <Text variant="caption">Some extra message</Text>,
};

export const LoadingPassword: StoryFn<typeof Input> = TemplatePassword.bind({});
LoadingPassword.args = {
  type: 'password',
  value: 'Иван',
  label: 'Password',
  isLoading: true,
};
