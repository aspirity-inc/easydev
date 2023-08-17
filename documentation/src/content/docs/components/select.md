---
title: Select
---

Select components are used for collecting user provided information from a list of options.

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
    onChange={function Zo() {}}
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
    loadOptions={function Zo() {}}
    maxMenuHeight={250}
    minMenuHeight={250}
    onChange={function Zo() {}}
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
