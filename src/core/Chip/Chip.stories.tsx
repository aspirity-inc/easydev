import { Meta, StoryObj } from '@storybook/react';

import { Space } from '@core/Space';

import { Chip } from '.';

export default {
  title: 'core/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const DefaultChip = {
  args: {
    label: 'Chip',
  },
} satisfies Story;

export const CheckboxChip = {
  args: {
    label: 'Chip',
    variant: 'checkbox',
  },
} satisfies Story;

export const ListOfDefaultChips = ({ ...args }) => {
  return (
    <Space direction="row">
      {/* Args have an empty function for onDelete prop by default, so we need pass undefined explicitly for demonstration*/}
      <Chip {...args} label="Selected chip" defaultChecked onDelete={undefined} />
      <Chip {...args} label="Selected chip with delete button" defaultChecked />
      <Chip {...args} label="Disabled chip" disabled />
    </Space>
  );
};

export const ListOfCheckboxChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} variant="checkbox" label="Chip" />
      <Chip {...args} variant="checkbox" label="Selected chip" defaultChecked />
      <Chip {...args} variant="checkbox" label="Disabled chip" disabled />
    </Space>
  );
};
