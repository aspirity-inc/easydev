---
title: Center
---

Center are a series of links that provide a visual representation of a page's position within a website's hierarchical structure, enabling users to navigate back to any of its ancestors.

The Center component can have the next props: gap, inline. [See there](/storybook/?path=/docs/core-center--docs) to get more information.

## Center variants

### [Default Center](/storybook/?path=/story/core-center--default-center)

```tsx
const Icon = () => <div className="material-symbols-rounded">check_circle_outline</div>;

const DefaultCenter = () => {
  return (
    <Center>
      <Text>Some text for demonstration</Text>
      <Icon />
    </Center>
  );
};
```

### [Inline Center](/storybook/?path=/story/core-center--inline-center)

```tsx
const Icon = () => <div className="material-symbols-rounded">check_circle_outline</div>;

const InlineCenter = () => {
  return (
    <Center inline>
      <Text>Some text for demonstration</Text>
      <Icon />
    </Center>
  );
};
```
