import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { CodeInput } from '.';

const metaCodeInput: Meta<typeof CodeInput> = {
  title: 'Core/Inputs/CodeInput',
  component: CodeInput,
};
export default metaCodeInput;

const TemplateCodeInput: StoryFn<typeof CodeInput> = ({ ...args }) => {
  const [codeValue, setCodeValue] = useState<string[]>(Array(args.number));

  return <CodeInput {...args} code={codeValue} onChangeCode={setCodeValue} />;
};

export const DefaultCodeInput: StoryFn<typeof CodeInput> = TemplateCodeInput.bind({});
DefaultCodeInput.args = {
  number: 5,
};

const TemplateFilledCodeInput: StoryFn<typeof CodeInput> = ({ ...args }) => {
  const [codeValue, setCodeValue] = useState<string[]>(Array(args.number).fill('1'));

  return <CodeInput {...args} code={codeValue} onChangeCode={setCodeValue} />;
};

export const FilledCodeInput: StoryFn<typeof CodeInput> = TemplateFilledCodeInput.bind({});
FilledCodeInput.args = {
  number: 5,
};

export const DisabledCodeInput: StoryFn<typeof CodeInput> = TemplateFilledCodeInput.bind({});
DisabledCodeInput.args = {
  number: 5,
  disabled: true,
};
