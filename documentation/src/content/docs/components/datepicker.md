---
title: Datepicker
---

Datepicker based on react-datepicker library and uses to get the selected date.

The Datepicker has the next props: label. [See there](/?path=/docs/core-datepicker--docs) to get more information.

[Default Datepicker](/?path=/story/core-datepicker--default-datepicker)

Code:

```tsx
<div
  style={{
    height: '500px',
  }}
>
  <Datepicker label="Birth date" onChange={function Zo() {}} selected={null} />
</div>
```

[Disabled Datepicker](/?path=/story/core-datepicker--disabled-datepicker)

Code:

```tsx
<Datepicker disabled label="Birth date" value="24.12.1993" />
```

[Disabled Empty Datepicker](/?path=/story/core-datepicker--disabled-empty-datepicker)

Code:

```tsx
<Datepicker disabled label="Birth date" />
```
