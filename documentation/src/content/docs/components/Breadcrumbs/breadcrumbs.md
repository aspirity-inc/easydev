---
title: Breadcrumbs
---

Breadcrumbs are a series of links that provide a visual representation of a page's position within a website's hierarchical structure, enabling users to navigate back to any of its ancestors.

The Breadcrumbs component has the next props: separator. [See there](/?path=/docs/core-breadcrumbs-breadcrumbs--docs) to get more information.

[Default Breadcrumbs](/?path=/story/core-breadcrumbs-breadcrumbs--default-breadcrumbs)

Code:

```tsx
export const Example = ({ ...args }) => {
  return (
    <Breadcrumbs {...args}>
      <Breadcrumb>Main</Breadcrumb>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Contacts</Breadcrumb>
      <Breadcrumb>About us</Breadcrumb>
    </Breadcrumbs>
  );
};
```

[Breadcrumbs User Icon Separator](/?path=/story/core-breadcrumbs-breadcrumbs--breadcrumbs-user-icon-separator)

Code:

```tsx
export const Example = ({ ...args }) => {
  return (
    <Breadcrumbs separator=">>">
      <Breadcrumb>Main</Breadcrumb>
      <Breadcrumb>Home</Breadcrumb>
      <Breadcrumb>Contacts</Breadcrumb>
      <Breadcrumb>About us</Breadcrumb>
    </Breadcrumbs>
  );
};
```
