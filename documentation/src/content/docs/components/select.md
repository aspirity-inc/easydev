---
title: Select
---

Select allows the user to select one or more options from the suggested list. It is usually a drop-down list that displays all available choices. Select can be used to select options, categories, dates, times, etc. It can also be configured for multiple selection, allowing the user to select multiple options at the same time.

The Select has the next props: options, maxMenuHeight, minMenuHeight, isSearchable, isDisabled, rounded, selectedStatePlaceholder, clearButtonText, selectType. [See there](/?path=/docs/core-select--docs) to get more information.

[Default Select](/?path=/story/core-select--default-select)

Code:

```tsx
<div
  style={{
    height: '350px',
  }}
>
  <Select
    maxMenuHeight={250}
    minMenuHeight={250}
    options={[
      {
        label: 'Chocolate',
        value: 'chocolate',
      },
      {
        label: 'Strawberry',
        value: 'strawberry',
      },
      {
        label: 'Vanilla',
        value: 'vanilla',
      },
      {
        label: 'Chocolate1',
        value: 'chocolate1',
      },
      {
        label: 'Strawberry1',
        value: 'strawberry1',
      },
      {
        label: 'Vanilla1',
        value: 'vanilla1',
      },
      {
        label: 'Chocolate2',
        value: 'chocolate2',
      },
      {
        isDisabled: true,
        label: 'Strawberry2',
        value: 'strawberry2',
      },
      {
        isDisabled: true,
        label: 'Vanilla2',
        value: 'vanilla2',
      },
    ]}
  />
</div>
```

[Multiselect](/?path=/story/core-select--multiselect)

Code:

```tsx
<div
  style={{
    height: '350px',
  }}
>
  <Select
    isMulti
    isSearchable
    maxMenuHeight={250}
    minMenuHeight={250}
    onChange={() => {
      alert('changed');
    }}
    options={[
      {
        label: 'Chocolate',
        value: 'chocolate',
      },
      {
        label: 'Strawberry',
        value: 'strawberry',
      },
      {
        label: 'Vanilla',
        value: 'vanilla',
      },
      {
        label: 'Chocolate1',
        value: 'chocolate1',
      },
      {
        label: 'Strawberry1',
        value: 'strawberry1',
      },
      {
        label: 'Vanilla1',
        value: 'vanilla1',
      },
      {
        label: 'Chocolate2',
        value: 'chocolate2',
      },
      {
        isDisabled: true,
        label: 'Strawberry2',
        value: 'strawberry2',
      },
      {
        isDisabled: true,
        label: 'Vanilla2',
        value: 'vanilla2',
      },
    ]}
    selectedStatePlaceholder="YourChoice: 0"
    value={[]}
  />
</div>
```

[Search](/?path=/story/core-select--search)

Code:

```tsx
<div
  style={{
    height: '350px',
  }}
>
  <Select
    defaultOptions
    maxMenuHeight={250}
    minMenuHeight={250}
    onChange={() => {
      alert('changed');
    }}
    rounded
    selectType="async"
    selectedStatePlaceholder="YourChoice: 0"
    value={[]}
  />
</div>
```

[Autocomplete](/?path=/story/core-select--autocomplete)

Code:

```tsx
<div
  style={{
    height: '350px',
  }}
>
  <Select
    isSearchable
    maxMenuHeight={250}
    minMenuHeight={250}
    options={[
      {
        label: 'Chocolate',
        value: 'chocolate',
      },
      {
        label: 'Strawberry',
        value: 'strawberry',
      },
      {
        label: 'Vanilla',
        value: 'vanilla',
      },
      {
        label: 'Chocolate1',
        value: 'chocolate1',
      },
      {
        label: 'Strawberry1',
        value: 'strawberry1',
      },
      {
        label: 'Vanilla1',
        value: 'vanilla1',
      },
      {
        label: 'Chocolate2',
        value: 'chocolate2',
      },
      {
        isDisabled: true,
        label: 'Strawberry2',
        value: 'strawberry2',
      },
      {
        isDisabled: true,
        label: 'Vanilla2',
        value: 'vanilla2',
      },
    ]}
    rounded
  />
</div>
```
