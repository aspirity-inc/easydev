import { useEffect, useState } from 'react';

import { Toggle } from '.';
import type { Meta, StoryFn } from '@storybook/react';

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
      control: 'radio',
      options: ['success', 'warning', 'error'],
    },
    label: {
      control: 'text',
    },
    checked: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: true } },
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
DefaultToggle.args = { defaultChecked: true };

export const ControlledToggle: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} />;
};

export const WithLabel: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} label="Toggle me ☀️" />;
};

export const WithJSXLabel: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} label={<strong>Toggle me ☀️</strong>} />;
};

export const DayNightToggle: StoryFn<typeof Toggle> = () => {
  const [checked, setChecked] = useState(false);

  const dayToggleBackground = "url('/assets/toggle/day.svg')";
  const nightToggleBackground = "url('/assets/toggle/night.svg')";

  const dayToggleInnerBackground = '#ffc700';
  const nightToggleInnerBackground = "url('/assets/toggle/night-span.svg')";

  const [toggleBackground, setToggleBackground] = useState(checked ? dayToggleBackground : nightToggleBackground);
  const [toggleInnerBackground, setToggleInnerBackground] = useState(
    checked ? dayToggleInnerBackground : nightToggleInnerBackground
  );

  const onChange = () => setChecked((prevState) => !prevState);

  useEffect(() => {
    if (checked) {
      setToggleBackground(dayToggleBackground);
      setToggleInnerBackground(dayToggleInnerBackground);
    } else {
      setToggleBackground(nightToggleBackground);
      setToggleInnerBackground(nightToggleInnerBackground);
    }
  }, [checked]);

  return (
    <Toggle
      checked={checked}
      onChange={onChange}
      toggleBackground={toggleBackground}
      toggleInnerBackground={toggleInnerBackground}
      toggleWrapProps={{ style: { width: 48 } }}
      toggleInnerProps={{ style: { translate: checked ? '150% -50%' : '' } }}
    />
  );
};
