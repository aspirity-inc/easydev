---
title: Breadcrumbs
---

A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.

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
