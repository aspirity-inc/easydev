import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { MaskedInput } from '.';
import { MaskedInputProps } from './MaskedInput';

export default {
  title: 'core/Inputs/MaskedInput',
  component: MaskedInput,
  argTypes: {
    mask: {
      type: 'string',
      control: 'text',
      description: 'Маска',
    },
    maskPlaceholder: {
      type: 'string',
      control: 'text',
      table: {
        defaultValue: { summary: '_' },
      },
      description: 'Какой символ использовать для незаполненых символов',
    },
    alwaysShowMask: {
      control: 'boolean',
      defaultValue: false,
      description: 'Всегда показывать маску',
    },
  },
} as Meta<typeof MaskedInput>;

const TemplateMaskedInput: StoryFn<typeof MaskedInput> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <MaskedInput value={value} onChange={onChange} {...args}>
      {args.children}
    </MaskedInput>
  );
};

export const MaskedDefaultInput = TemplateMaskedInput.bind({});
MaskedDefaultInput.args = {
  mask: '+7 (999) 999-99-99',
  label: 'Phone number',
};

export const MaskedUserInput = TemplateMaskedInput.bind({});
const userInput = (args: MaskedInputProps) => (
  <label>
    {args.label}
    <input {...args} />
  </label>
);

const userInputArgs = {
  mask: '+7 (999) 999-99-99',
  label: 'Phone number',
};

MaskedUserInput.args = {
  ...userInputArgs,
  children: userInput(userInputArgs),
};

export const MaskedDefaultInputRegExp = TemplateMaskedInput.bind({});
MaskedDefaultInputRegExp.args = {
  mask: [/[A-Z]/, /[0-9]/, /[A-Z]/, ' ', /[0-9]/, /[A-Z]/, /[0-9]/],
  label: 'Postal code mask',
  message: 'Example: A4E 2P9',
};

export const ErrorInput = TemplateMaskedInput.bind({});
ErrorInput.args = {
  value: '0123456789',
  mask: '+7 (999) 999-99-99',
  label: 'Phone number',
  error: 'Нет такого номера',
};
