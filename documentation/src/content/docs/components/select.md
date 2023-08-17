---
title: Select
---

Select components are used for collecting user provided information from a list of options.

Default select

Multiselect

Search

Autocomplete

Example:

```ts
const Example = ({ ...args }) => {
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
```
