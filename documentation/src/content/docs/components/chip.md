---
title: Chip
---

Сhip is an interface component that represents a small piece of information, usually in the form of a label or tag. It can contain text, an icon, or both elements together. Chips are often used to display selected items, filters, or categories in the user interface. Chip allows users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

The Chip has the next props: label, variant, disabled, defaultChecked, className, style, onDelete, onClick. [See there](/?path=/docs/core-chip--docs) to get more information.

[Default Chip](/?path=/story/core-chip--default-chip)

Code:

```tsx
<Chip label="Chip" onClick={function Zo() {}} onDelete={function Zo() {}} />
```

[Checkbox Chip](/?path=/story/core-chip--checkbox-chip)

Code:

```tsx
<Chip label="Chip" onClick={function Zo() {}} onDelete={function Zo() {}} variant="checkbox" />
```

[List Of Default Chips](/?path=/story/core-chip--list-of-default-chips)

Code:

```tsx
<Space direction="row">
  <Chip defaultChecked label="Selected chip" onClick={function Zo() {}} />
  <Chip
    defaultChecked
    label="Selected chip with delete button"
    onClick={function Zo() {}}
    onDelete={function Zo() {}}
  />
  <Chip disabled label="Disabled chip" onClick={function Zo() {}} onDelete={function Zo() {}} />
</Space>
```

[List Of Checkbox Chips](/?path=/story/core-chip--list-of-checkbox-chips)

Code:

```tsx
<Space direction="row">
  <Chip label="Chip" onClick={function Zo() {}} onDelete={function Zo() {}} variant="checkbox" />
  <Chip
    defaultChecked
    label="Selected chip"
    onClick={function Zo() {}}
    onDelete={function Zo() {}}
    variant="checkbox"
  />
  <Chip disabled label="Disabled chip" onClick={function Zo() {}} onDelete={function Zo() {}} variant="checkbox" />
</Space>
```
