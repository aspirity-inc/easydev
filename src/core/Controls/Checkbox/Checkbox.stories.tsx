import { useState } from 'react';

import { Checkbox } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaCheckbox: Meta<typeof Checkbox> = {
  title: 'Core/Controls/Checkbox',
  component: Checkbox,
  argTypes: {
    disabled: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    defaultChecked: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    color: {
      type: 'string',
      control: 'radio',
      options: ['success', 'warning', 'error'],
    },
    label: {
      control: 'text',
    },
    checked: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
    onChange: {
      type: 'function',
      description: 'function onChange(): void',
    },
  },
};
export default metaCheckbox;

const Template: StoryFn<typeof Checkbox> = ({ ...args }) => {
  return <Checkbox {...args} />;
};

export const DefaultCheckbox: StoryFn<typeof Checkbox> = Template.bind({});
DefaultCheckbox.args = {};

export const ControlledCheckbox: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Checkbox checked={checked} onChange={onChange} />;
};

ControlledCheckbox.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithLabel: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return (
    <div>
      <Checkbox checked={checked} onChange={onChange} label="Check me 🌵" />
    </div>
  );
};

WithLabel.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithJSXLabel: StoryFn<typeof Checkbox> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return (
    <div>
      <Checkbox checked={checked} onChange={onChange} label={<strong>Check me 🌵</strong>} />
    </div>
  );
};

WithJSXLabel.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
