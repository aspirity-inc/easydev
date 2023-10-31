---
title: Datepicker
---

The Datepicker based on react-datepicker library and uses to get the selected date. [See there](https://github.com/Hacker0x01/react-datepicker/blob/main/docs/datepicker.md) to get more info about datepicker props.

The Datepicker have the next props: label. [See there](/storybook/?path=/docs/core-datepicker--docs) to get more information.

## Datepicker variants

### [Default Datepicker Range Two Inputs](/storybook/?path=/story/core-datepicker--default-datepicker-range-two-inputs)

```tsx
<div
  style={{
    height: '500px',
  }}
>
  <Datepicker label="Start date" selectsStart startDate={null} />
  <Datepicker endDate={null} label="End date" selectsEnd />
</div>
```

### [Default Datepicker Range](/storybook/?path=/story/core-datepicker--default-datepicker-range)

```tsx
<div
  style={{
    height: '500px',
  }}
>
  <Datepicker label="Select range" selectsRange />
</div>
```

### [Default Datepicker](/storybook/?path=/story/core-datepicker--default-datepicker)

```tsx
<div
  style={{
    height: '500px',
  }}
>
  <Datepicker label="Birth date" />
</div>
```

### [Disabled Datepicker](/storybook/?path=/story/core-datepicker--disabled-datepicker)

```tsx
<Datepicker disabled label="Birth date" value="24.12.1993" />
```

### [Disabled Empty Datepicker](/storybook/?path=/story/core-datepicker--disabled-empty-datepicker)

```tsx
<Datepicker disabled label="Birth date" />
```

## CSS

The following class names are useful for styling with CSS.

| Class                      | Description                                                             |
| -------------------------- | ----------------------------------------------------------------------- |
| **easy_datepicker**        | Styles applied to the root element.                                     |
| **easy_datepicker-header** | Styles applied to the datepicker header.                                |
| **easy_datepicker-label**  | Styles applied to the container with datepicker input, label and icons. |
| **easy_datepicker-input**  | Styles applied to the datepicker input.                                 |
