import { Meta, StoryObj } from '@storybook/react';

import { Chip } from '@core/Chip';

import { Select } from '.';

const metaSelect: Meta<typeof Select> = {
  title: 'Core/Select',
  component: Select,
  parameters: {
    docs: {
      description: {
        component: 'Based on React-select https://react-select.com/home',
      },
    },
  },
};

export default metaSelect;

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

export const DefaultSelect: Story = {
  render: (args) => (
    <div style={{ height: '350px' }}>
      <Select {...args} />
    </div>
  ),
  args: {
    options,
    maxMenuHeight: 250,
    minMenuHeight: 250,
    isSearchable: false,
    rounded: true,
  },
};

export const Autocomplete: Story = {
  render: (args) => (
    <div style={{ height: '350px' }}>
      <Select {...args} />
    </div>
  ),
  args: {
    options,
    maxMenuHeight: 250,
    minMenuHeight: 250,
    isSearchable: true,
    rounded: true,
  },
};

const FiltersContent = (
  <>
    <Chip label="Filter 1" onDelete={() => null} />
    <Chip label="Filter 2" onDelete={() => null} />
    <Chip label="Super ling filter 3 name" onDelete={() => null} />
    <Chip label="Filter 3" onDelete={() => null} />
    <Chip label="Filter 3" onDelete={() => null} />
    <Chip label="Filter 3" onDelete={() => null} />
    <Chip label="Filter 3" onDelete={() => null} />
  </>
);
export const AutocompleteWithChips: Story = {
  render: (args) => (
    <div style={{ height: '350px' }}>
      <Select {...args} />
    </div>
  ),
  args: {
    options,
    maxMenuHeight: 250,
    minMenuHeight: 250,
    isSearchable: true,
    rounded: true,
    filters: FiltersContent,
    noOptionsMessage: () => 'Custom no options message',
  },
};
