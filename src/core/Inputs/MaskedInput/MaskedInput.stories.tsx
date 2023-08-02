import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { MaskedInput } from '.';

const metaMaskedInput: Meta<typeof MaskedInput> = {
  title: 'Сore/Inputs/MaskedInput',
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
};
export default metaMaskedInput;

const TemplateMaskedInput: StoryFn<typeof MaskedInput> = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <MaskedInput value={value} onChange={onChange} {...args} />;
};

export const MaskedDefaultInput: StoryFn<typeof MaskedInput> = TemplateMaskedInput.bind({});
MaskedDefaultInput.args = {
  mask: '+7 (999) 999-99-99',
  label: 'Phone number',
};

export const MaskedDefaultInputRegExp: StoryFn<typeof MaskedInput> = TemplateMaskedInput.bind({});
MaskedDefaultInputRegExp.args = {
  mask: [/[A-Z]/, /[0-9]/, /[A-Z]/, ' ', /[0-9]/, /[A-Z]/, /[0-9]/],
  label: 'Postal code mask',
  message: 'Example: A4E 2P9',
};

export const ErrorInput: StoryFn<typeof MaskedInput> = TemplateMaskedInput.bind({});
ErrorInput.args = {
  value: '0123456789',
  mask: '+7 (999) 999-99-99',
  label: 'Phone number',
  error: 'Нет такого номера',
};
