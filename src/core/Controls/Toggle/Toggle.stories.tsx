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
      control: { type: 'color', presetColors: ['success', 'warning', 'error'] },
      description: 'colors presets: success | warning | error',
    },
  },
};
export default metaToggle;

const Template: StoryFn<typeof Toggle> = ({ ...args }) => {
  return <Toggle {...args} />;
};

export const DefaultToggle: StoryFn<typeof Toggle> = Template.bind({});
DefaultToggle.args = {};

export const ControlledToggle: StoryFn<typeof Toggle> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return <Toggle checked={checked} onChange={handleChange} {...args} />;
};

ControlledToggle.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
