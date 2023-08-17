import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Toggle } from '.';

const metaToggle: Meta<typeof Toggle> = {
  title: 'Core/Controls/Toggle',
  component: Toggle,
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
      control: { type: 'color' },
      description: 'Toggle background color',
    },
    checkedColor: {
      type: 'string',
      control: { type: 'color' },
      description: 'Checked toggle background color',
    },
    innerColor: {
      type: 'string',
      control: { type: 'color' },
      description: 'Inner toggle color',
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
export default metaToggle;

const Template: StoryFn<typeof Toggle> = ({ ...args }) => {
  return <Toggle {...args} />;
};

export const DefaultToggle: StoryFn<typeof Toggle> = Template.bind({});
DefaultToggle.args = {};

export const ControlledToggle: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} />;
};
ControlledToggle.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithLabel: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} label="Toggle me ☀️" />;
};
WithLabel.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithJSXLabel: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} label={<strong>Toggle me ☀️</strong>} />;
};
WithJSXLabel.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
