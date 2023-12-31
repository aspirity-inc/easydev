import { CloseIcon } from '@icons';

import { Checkbox } from '@core/Controls';
import { Space } from '@core/Space';

import { Chip } from '.';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Core/Chip',
  component: Chip,
} satisfies Meta<typeof Chip>;

type Story = StoryObj<typeof Chip>;

export const DefaultChip = {
  args: {
    label: 'Chip',
  },
} satisfies Story;

export const ListOfChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} label="Chip" />
      <Chip {...args} label="Selected chip" defaultChecked />
      <Chip {...args} label="Disabled chip" disabled />
    </Space>
  );
};

export const ListOfExtraContentChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} label="Сheckbox chip" chipContent={<Checkbox />} />
      <Chip {...args} label="Disabled checkbox chip" disabled defaultChecked chipContent={<Checkbox />} />
      <Chip {...args} label="Delete button chip" chipContent={<CloseIcon />} />
    </Space>
  );
};
