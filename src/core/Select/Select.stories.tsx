import { Meta, StoryObj } from '@storybook/react';

import { Select } from '.';

export default {
  title: 'Core/Select',
  component: Select,
  argTypes: {
    menuHeight: { table: { defaultValue: { summary: 300 } } },
  },
  parameters: {
    docs: {
      description: {
        component: 'Based on React-select https://react-select.com/home',
      },
    },
  },
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla', isDisabled: true },
  { value: 'chocolate1', label: 'Chocolate1' },
  { value: 'strawberry1', label: 'Strawberry1' },
  { value: 'vanilla1', label: 'Vanilla1', isDisabled: true },
  { value: 'chocolate2', label: 'Chocolate2' },
  { value: 'strawberry2', label: 'Strawberry2' },
  { value: 'vanilla2', label: 'Vanilla2', isDisabled: true },
];

export const DefaultSelect = {
  render: (args) => (
    <div style={{ height: '350px' }}>
      <Select {...args} />
    </div>
  ),
  args: {
    options,
  },
} satisfies Story;
