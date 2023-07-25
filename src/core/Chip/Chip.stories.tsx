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
    children: 'Chip',
  },
} satisfies Story;

export const ListOfDefaultChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args}>Chip</Chip>
      <Chip {...args} defaultSelected onDelete={undefined}>
        Selected chip
      </Chip>
      <Chip {...args} defaultSelected>
        Selected chip with delete button
      </Chip>
      <Chip {...args} disabled>
        Disabled chip
      </Chip>
    </Space>
  );
};

export const ListOfCheckboxChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} variant="checkbox">
        Chip
      </Chip>
      <Chip {...args} variant="checkbox" defaultSelected>
        Selected chip
      </Chip>
      <Chip {...args} variant="checkbox" disabled>
        Disabled chip
      </Chip>
      <Chip {...args} variant="checkbox">
        Chip
      </Chip>
    </Space>
  );
};

export const ListOfMultiselectChips = ({ ...args }) => {
  return (
    <Space direction="row">
      <Chip {...args} variant="multiselect">
        Chip
      </Chip>
      <Chip {...args} variant="multiselect" defaultSelected>
        Selected chip
      </Chip>
      <Chip {...args} variant="multiselect" disabled>
        Disabled chip
      </Chip>
      <Chip {...args} variant="multiselect">
        Chip
      </Chip>
    </Space>
  );
};
