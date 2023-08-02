import { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { Chip } from '@core/Chip';
import { OptionType } from '@core/Select/types.ts';
import { scrollbarStyles } from '@core/Theme';

import { Select } from '.';

export default {
  title: 'Core/Select',
  component: Select,
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
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'chocolate1', label: 'Chocolate1' },
  { value: 'strawberry1', label: 'Strawberry1' },
  { value: 'vanilla1', label: 'Vanilla1' },
  { value: 'chocolate2', label: 'Chocolate2' },
  { value: 'strawberry2', label: 'Strawberry2', isDisabled: true },
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
    maxMenuHeight: 250,
    minMenuHeight: 250,
    isSearchable: false,
    isDisabled: false,
  },
} satisfies Story;

const MultiselectTemplate: StoryFn<typeof Select> = ({ ...args }) => {
  const [value, setValue] = useState<OptionType[]>([]);

  const handleSelectChange = (values: unknown) => {
    setValue(values as OptionType[]);
  };

  return (
    <div style={{ height: '350px' }}>
      <Select
        {...args}
        value={value}
        onChange={handleSelectChange}
        selectedPlaceholder={`YourChoice: ${value.length}`}
      />
    </div>
  );
};

export const Multiselect: StoryFn<typeof Select> = MultiselectTemplate.bind({});
Multiselect.args = {
  options,
  maxMenuHeight: 250,
  minMenuHeight: 250,
  isSearchable: true,
  isMulti: true,
  hideSelectedOptions: false,
  closeMenuOnSelect: false,
};

export const Autocomplete = {
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
} satisfies Story;

const ChipsContent = () => {
  const StyledFilters = styled('div')`
    margin-top: 32px;
    padding-bottom: 2px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 30px;
    flex-wrap: nowrap;
    overflow-x: auto;

    ${scrollbarStyles};
    &::-webkit-scrollbar {
      height: 4px;
      background-color: ${({ theme }) =>
        theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
    }
  `;
  return (
    <StyledFilters>
      <Chip label="Filter 1" onDelete={() => null} />
      <Chip label="Filter 2" onDelete={() => null} />
      <Chip label="Super ling filter 3 name" onDelete={() => null} />
      <Chip label="Filter 3" onDelete={() => null} />
      <Chip label="Filter 3" onDelete={() => null} />
      <Chip label="Filter 3" onDelete={() => null} />
      <Chip label="Filter 3" onDelete={() => null} />
    </StyledFilters>
  );
};
export const AutocompleteWithChips = {
  render: (args) => (
    <div style={{ height: '350px' }}>
      <Select {...args} />
      <ChipsContent />
    </div>
  ),
  args: {
    options,
    maxMenuHeight: 250,
    minMenuHeight: 250,
    isSearchable: true,
    rounded: true,
    noOptionsMessage: () => 'Custom no options message',
  },
} satisfies Story;
