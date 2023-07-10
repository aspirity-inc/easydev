import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { Radio } from '.';

export default {
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
      control: { type: 'color', presetColors: ['success', 'warning', 'error'] },
      description: 'colors presets: success | warning | error',
    },
  },
} as Meta<typeof Radio>;

const Template: StoryFn<typeof Radio> = ({ ...args }) => {
  return <Radio {...args} />;
};

export const DefaultRadio = Template.bind({});
DefaultRadio.args = {};

export const ControlledRadio = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Radio checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change Radio
      </Button>
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
