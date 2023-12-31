---
title: Chip
---

The Сhip is an interface component that represents a small piece of information, usually in the form of a label or tag. It can contain text, an icon, or both elements together. Chips are often used to display selected items, filters, or categories in the user interface. Chip allows users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

The Chip can have the next props: label, variant, disabled, defaultChecked, className, style, onChange, chipContent, color, bgColor. [See there](/storybook/?path=/docs/core-chip--docs) to get more information.

## Chip variants

### [Default Chip](/storybook/?path=/story/core-chip--default-chip)

```tsx
<Chip label="Chip" />
```

### [List Of Chips](/storybook/?path=/story/core-chip--list-of-chips)

```tsx
<Space direction="row">
  <Chip label="Chip" />
  <Chip defaultChecked label="Selected chip" />
  <Chip disabled label="Disabled chip" />
</Space>
```

### [List Of Extra Content Chips](/storybook/?path=/story/core-chip--list-of-extra-content-chips)

```tsx
<Space direction="row">
  <Chip chipContent={<Checkbox />} label="Сheckbox chip" />
  <Chip chipContent={<Checkbox />} defaultChecked disabled label="Disabled checkbox chip" />
  <Chip chipContent={<div className="material-symbols-outlined">close</div>} label="Delete button chip" />
</Space>
```

## CSS

The following class names are useful for styling with CSS.

| Class         | Description                         |
| ------------- | ----------------------------------- |
| **easy_chip** | Styles applied to the root element. |
