---
title: Badge
---

The Badge uses to display some additional information, such as status of an event, number of messages, etc.

The Badge component can have the next props: color, textColor. [See there](/storybook/?path=/docs/core-badge--docs) to get more information.

## Badge variants

### [Default Badge](/storybook/?path=/story/core-badge--default-badge)

```tsx
<Badge>Badge</Badge>
```

### [Full Width Badge](/storybook/?path=/story/core-badge--full-width-badge)

```tsx
<Badge fullWidth>Badge</Badge>
```

### [User Color Badge](/storybook/?path=/story/core-badge--user-color-badge)

```tsx
<Badge color="#0100fa" textColor="lightblue">
  Badge
</Badge>
```

## CSS

The following class names are useful for styling with CSS.

| Class                  | Description                                    |
| ---------------------- | ---------------------------------------------- |
| **easy_badge**         | Styles applied to the root element.            |
| **easy_badge-content** | Styles applied to the content part of element. |
