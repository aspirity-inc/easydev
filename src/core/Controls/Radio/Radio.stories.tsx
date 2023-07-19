import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { Radio } from '.';

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
      control: { type: 'color', presetColors: ['success', 'warning', 'error'] },
      description: 'colors presets: success | warning | error',
    },
  },
};
export default metaRadio;

const Template: StoryFn<typeof Radio> = ({ ...args }) => {
  return <Radio {...args} />;
};

export const DefaultRadio: StoryFn<typeof Radio> = Template.bind({});
DefaultRadio.args = {};

export const ControlledRadio: StoryFn<typeof Radio> = ({ ...args }) => {
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
