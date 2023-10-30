---
title: Select
---

The Select allows the user to select one or more options from the suggested list. It is usually a drop-down list that displays all available choices. Select can be used to select options, categories, dates, times, etc. It can also be configured for multiple selection, allowing the user to select multiple options at the same time.

The Select can have the next props:rounded, selectedStatePlaceholder, clearButtonText, selectType. [See there](/storybook/?path=/docs/core-select--docs) to get more information.

## Select variants

### [Default Select](/storybook/?path=/story/core-select--default-select)

```tsx
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

const DefaultSelect = () => {
  return (
    <div style={{ height: '350px' }}>
      <Select options={options} maxMenuHeight={250} minMenuHeight={250} isSearchable={false} isDisabled={false} />
    </div>
  );
};
```

### [Multiselect](/storybook/?path=/story/core-select--multiselect)

```tsx
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

const Multiselect = () => {
  return (
    <div style={{ height: '350px' }}>
      <Select
        options={options}
        maxMenuHeight={250}
        minMenuHeight={250}
        isSearchable={false}
        isDisabled={false}
        isSearchable
        isMulti
      />
    </div>
  );
};
```

### [Search](/storybook/?path=/story/core-select--search)

```tsx
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

const Search = () => {
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
        maxMenuHeight={250}
        minMenuHeight={250}
        rounded
        selectType="async"
        defaultOptions
        value={value}
        onChange={handleSelectChange}
        selectedStatePlaceholder={`YourChoice: ${value.length}`}
        loadOptions={promiseOptions}
      />
    </div>
  );
};
```

### [Autocomplete](/storybook/?path=/story/core-select--autocomplete)

```tsx
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

const Autocomplete = () => {
  return (
    <div style={{ height: '350px' }}>
      <Select options={options} maxMenuHeight={250} minMenuHeight={250} isSearchable={false} isSearchable rounded />
    </div>
  );
};
```

### [User Icons Select](/storybook/?path=/story/core-select--user-icons-select)

```tsx
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

const ControlIcon = () => <div className="material-symbols-rounded">nutrition</div>;
const ArrowDown = () => <div className="material-symbols-rounded">keyboard_arrow_down</div>;
const SelectedIcon = () => <div className="material-symbols-rounded">priority</div>;

const UserIconsSelect = () => {
  return (
    <div style={{ height: '350px' }}>
      <Select
        options={options}
        maxMenuHeight={250}
        minMenuHeight={250}
        isSearchable={false}
        isDisabled={false}
        dropdownIcon={<ArrowDown />}
        selectedIcon={<SelectedIcon />}
        controlIcon={<ControlIcon />}
      />
    </div>
  );
};
```

## CSS

The following class names are useful for styling with CSS.

| Class                     | Description                         |
| ------------------------- | ----------------------------------- |
| **easy_select-wrap**      | Styles applied to the root element. |
| **easy_select-container** | Styles applied to the select.       |
