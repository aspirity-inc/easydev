import { useState } from 'react';

import { Radio } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaRadio: Meta<typeof Radio> = {
  title: 'Core/Controls/Radio',
  component: Radio,
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
export default metaRadio;

const Template: StoryFn<typeof Radio> = ({ ...args }) => {
  return <Radio {...args} />;
};

export const DefaultRadio: StoryFn<typeof Radio> = Template.bind({});
DefaultRadio.args = {};

export const ControlledRadio: StoryFn<typeof Radio> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return (
    <div>
      <Radio checked={checked} onChange={onChange} />
    </div>
  );
};
ControlledRadio.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};

export const WithLabel: StoryFn<typeof Radio> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return (
    <div>
      <Radio checked={checked} onChange={onChange} label="Pick me 🌵" />
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

export const WithJSXLabel: StoryFn<typeof Radio> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return (
    <div>
      <Radio checked={checked} onChange={onChange} label={<strong>Pick me 🌵</strong>} />
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
