import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { CodeInput } from '.';

const metaCodeInput: Meta<typeof CodeInput> = {
  title: 'Core/Inputs/CodeInput',
  component: CodeInput,
};
export default metaCodeInput;

const TemplateCodeInput: StoryFn<typeof CodeInput> = (args) => {
  const [value, setValue] = useState('');

  const onChange = (value: string) => {
    setValue(value);
  };

  return <CodeInput value={value} {...args} onChange={onChange} />;
};

export const DefaultCodeInput: StoryFn<typeof CodeInput> = TemplateCodeInput.bind({});
DefaultCodeInput.args = {};

export const FilledCodeInput: StoryFn<typeof CodeInput> = TemplateCodeInput.bind({});
FilledCodeInput.args = {
  value: '111111',
};

export const ErrorFilledCodeInput: StoryFn<typeof CodeInput> = TemplateCodeInput.bind({});
ErrorFilledCodeInput.args = {
  value: '111111',
  error: true,
};
