---
title: Chip
---

Сhip is an interface component that represents a small piece of information, usually in the form of a label or tag. It can contain text, an icon, or both elements together. Chips are often used to display selected items, filters, or categories in the user interface. Chip allows users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

The Chip has the next props: label, variant, disabled, defaultChecked, className, style, onChange, chipContent, color, bgColor. [See there](/storybook/?path=/docs/core-chip--docs) to get more information.

[Default Chip](/storybook/?path=/story/core-chip--default-chip)

Code:

```tsx
<Chip label="Chip" onChange={() => {}} />
```

[List Of Chips](/storybook/?path=/story/core-chip--list-of-chips)

Code:

```tsx
<Space direction="row">
  <Chip label="Chip" onChange={() => {}} />
  <Chip defaultChecked label="Selected chip" onChange={() => {}} />
  <Chip disabled label="Disabled chip" onChange={() => {}} />
</Space>
```

[List Of Extra Content Chips](/storybook/?path=/story/core-chip--list-of-extra-content-chips)

Code:

```tsx
<Space direction="row">
  <Chip chipContent={<Checkbox />} label="Сheckbox chip" onChange={() => {}} />
  <Chip chipContent={<Checkbox />} defaultChecked disabled label="Disabled checkbox chip" onChange={() => {}} />
  <Chip
    chipContent={<div className="material-symbols-outlined">close</div>}
    label="Delete button chip"
    onChange={() => {}}
  />
</Space>
```
