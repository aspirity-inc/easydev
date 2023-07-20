import { Meta, StoryFn } from '@storybook/react';

import { Checkbox, Radio } from '@core/Controls';
import { Toggle } from '@core/Controls/Toggle';
import { Space } from '@core/Space';

import { ControlWithLabel } from '.';

const metaControlWithLabel: Meta<typeof ControlWithLabel> = {
  title: 'Core/Controls/ControlWithLabel',
  component: ControlWithLabel,
  argTypes: {
    reversed: {
      type: 'boolean',
      control: 'boolean',
      table: { defaultValue: { summary: false } },
    },
  },
};
export default metaControlWithLabel;

const Template: StoryFn<typeof ControlWithLabel> = ({ ...args }) => {
  return <ControlWithLabel {...args} />;
};

export const DefaultControlWithLabel: StoryFn<typeof ControlWithLabel> = Template.bind({});
DefaultControlWithLabel.args = {
  label: 'Checkbox label',
  control: <Checkbox />,
};

export const RadioWithLabel: StoryFn<typeof ControlWithLabel> = Template.bind({});
RadioWithLabel.args = {
  label: 'Radio label',
  control: <Radio />,
};

export const ToggleWithLabel: StoryFn<typeof ControlWithLabel> = Template.bind({});
ToggleWithLabel.args = {
  label: 'Toggle label',
  control: <Toggle />,
};

export const ToggleList = ({ ...args }) => {
  return (
    <Space>
      <ControlWithLabel label="Toggle 1" {...args} control={<Toggle />} />
      <ControlWithLabel label="Toggle 2" {...args} control={<Toggle />} />
      <ControlWithLabel label="Toggle 3" {...args} control={<Toggle />} />
      <ControlWithLabel label="Toggle 4" {...args} control={<Toggle />} />
    </Space>
  );
};

export const RadioList = ({ ...args }) => {
  return (
    <Space>
      <ControlWithLabel label="Radio 1" {...args} control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 2" {...args} control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 3" {...args} control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 4" {...args} control={<Radio name="name" />} />
    </Space>
  );
};
