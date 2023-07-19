import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { Checkbox } from '.';

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
      control: { type: 'color', presetColors: ['success', 'warning', 'error'] },
      description: 'colors presets: success | warning | error',
    },
  },
};
export default metaCheckbox;

const Template: StoryFn<typeof Checkbox> = ({ ...args }) => {
  return <Checkbox {...args} />;
};

export const DefaultCheckbox: StoryFn<typeof Checkbox> = Template.bind({});
DefaultCheckbox.args = {};

export const ControlledCheckbox: StoryFn<typeof Checkbox> = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Checkbox checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change checkbox
      </Button>
    </div>
  );
};

ControlledCheckbox.parameters = {
  docs: {
    source: {
      type: 'code',
    },
  },
};
