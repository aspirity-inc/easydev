import { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Select } from '.';
import { OptionType } from './types.ts';

const SelectMeta: Meta<typeof Select> = {
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
export default SelectMeta;

type Story = StoryObj<typeof Select>;

const options: OptionType[] = [
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
    isDisabled: false,
  },
};

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
        selectedStatePlaceholder={`YourChoice: ${value.length}`}
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

const SearchTemplate: StoryFn<typeof Select> = ({ ...args }) => {
  const [value, setValue] = useState<OptionType[]>([]);

  const handleSelectChange = (values: unknown) => {
    setValue(values as OptionType[]);
  };

  const filterOptions = (inputValue: string) => {
    return options.filter((o) => o.label.toLowerCase().includes(inputValue.toLowerCase()));
  };

  const promiseOptions = (inputValue: string) =>
    new Promise<OptionType[]>((resolve) => {
      setTimeout(() => {
        resolve(filterOptions(inputValue));
      }, 1000);
    });

  return (
    <div style={{ height: '350px' }}>
      <Select
        {...args}
        value={value}
        onChange={handleSelectChange}
        selectedStatePlaceholder={`YourChoice: ${value.length}`}
        loadOptions={promiseOptions}
      />
    </div>
  );
};

export const Search: StoryFn<typeof Select> = SearchTemplate.bind({});
Search.args = {
  maxMenuHeight: 250,
  minMenuHeight: 250,
  rounded: true,
  selectType: 'async',
  defaultOptions: true,
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
