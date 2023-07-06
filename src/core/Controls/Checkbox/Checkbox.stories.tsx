import { Meta, StoryFn } from '@storybook/react';
import { Checkbox } from './index.tsx';

export default {
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
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = ({ ...args }) => {
  return <Checkbox {...args} />;
};

export const DefaultCheckbox = Template.bind({});
DefaultCheckbox.args = {};
