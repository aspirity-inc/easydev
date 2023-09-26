---
title: Datepicker
---

Datepicker based on react-datepicker library and uses to get the selected date.

The Datepicker has the next props: label. [See there](/storybook/?path=/docs/core-datepicker--docs) to get more information.

[Default Datepicker](/storybook/?path=/story/core-datepicker--default-datepicker)

Code:

```tsx
<div
  style={{
    height: '500px',
  }}
>
  <Datepicker label="Birth date" onChange={() => alert('changed')} selected={null} />
</div>
```

[Disabled Datepicker](/storybook/?path=/story/core-datepicker--disabled-datepicker)

Code:

```tsx
<Datepicker disabled label="Birth date" value="24.12.1993" />
```

[Disabled Empty Datepicker](/storybook/?path=/story/core-datepicker--disabled-empty-datepicker)

Code:

```tsx
<Datepicker disabled label="Birth date" />
```
