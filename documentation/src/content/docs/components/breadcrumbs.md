---
title: Breadcrumbs
---

A breadcrumbs is a list of links that help visualize a page's location within a site's hierarchical structure, it allows navigation up to any of the ancestors.

Breadcrumbs are based on React and Styled Components.

Example:

```ts
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
