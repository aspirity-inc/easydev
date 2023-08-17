import { Meta, StoryObj } from '@storybook/react';

import { Space } from '@core/Space';

import { Chip } from '.';
import { Checkbox } from '@core/Controls';

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
      <Chip {...args} label="Selected chip" />
      <Chip {...args} label="Selected chip" defaultChecked />
      <Chip {...args} label="Disabled chip" disabled />
    </Space>
  );
};

export const ListOfExtraContentChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} label="Сheckbox chip" chipContent={(props: any) => <Checkbox {...props} />} />
      <Chip
        {...args}
        label="Delete button chip"
        chipContent={() => <div className="material-symbols-outlined">close</div>}
      />
    </Space>
  );
};
