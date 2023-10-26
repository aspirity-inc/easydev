import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Text } from '@core/Typography';

import { Input } from '.';

const metaInput: Meta<typeof Input> = {
  title: 'Core/Inputs/Input',
  component: Input,
  argTypes: {
    type: {
      type: 'string',
      control: 'text',
      description: 'Input type',
    },
    error: {
      type: 'string',
      control: 'text',
      description: 'Error message',
    },
    message: {
      type: 'string',
      control: 'text',
      description: 'Extra message under input',
    },
    warning: {
      type: 'string',
      control: 'text',
      description: 'Warning',
    },
    isLoading: {
      control: 'boolean',
      defaultValue: false,
      description: 'Loading',
    },
    renderExtraMessage: {
      control: { type: null },
      action: 'renderExtraMessage',
      description: 'A function that returns additional components for rendering',
    },
    label: {
      type: 'string',
      control: 'text',
      description: 'Label',
    },
    placeholder: {
      type: 'string',
      control: 'text',
      description: 'Placeholder',
    },
    className: {
      description: 'CSS class for additional styling',
    },
    style: {
      description: 'Additional styles',
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
  label: 'Name',
  placeholder: 'Enter your name',
};

export const ErrorInput: StoryFn<typeof Input> = TemplateInput.bind({});
ErrorInput.args = {
  value: 'Ivan',
  label: 'Name',
  error: 'There is no such user',
};

export const LoadingInput: StoryFn<typeof Input> = TemplateInput.bind({});
LoadingInput.args = {
  value: 'Ivan',
  label: 'Name',
  isLoading: true,
};

export const DisabledInput: StoryFn<typeof Input> = TemplateInput.bind({});
DisabledInput.args = {
  value: 'Ivan',
  label: 'Name',
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
  value: 'Ivan',
  label: 'Password',
  error: 'Invalid password',
  renderExtraMessage: () => <Text variant="caption">Some extra message</Text>,
};

export const LoadingPassword: StoryFn<typeof Input> = TemplatePassword.bind({});
LoadingPassword.args = {
  type: 'password',
  value: 'Ivan',
  label: 'Password',
  isLoading: true,
};
