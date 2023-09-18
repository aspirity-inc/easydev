---
title: Breadcrumbs
---

Breadcrumbs are a series of links that provide a visual representation of a page's position within a website's hierarchical structure, enabling users to navigate back to any of its ancestors.

The Breadcrumbs component has the next props: separator. [See there](/?path=core-breadcrumbs-breadcrumbs--docs) to get more information.

[Default Breadcrumbs](/storybook/?path=/story/core-breadcrumbs-breadcrumbs--default-breadcrumbs)

Code:

```tsx
export const Example = ({ ...args }) => {
  return (
    <Breadcrumbs
      items={[
        {
          title: 'Home'
        },
        {
          href: './center',
          title: 'Application Center'
        }
      ]}
    />
  )
};
```

[Breadcrumbs User Icon Separator](/storybook/?path=/story/core-breadcrumbs-breadcrumbs--breadcrumbs-user-icon-separator)

Code:

```tsx
export const Example = ({ ...args }) => {
  return (
    <Breadcrumbs
      separator=">>"
      items={[
        {
          title: 'Home'
        },
        {
          href: './center',
          title: 'Application Center'
        }
      ]}
    />
  );
};
```
[Breadcrumbs User Item style](/?path=core-breadcrumbs-breadcrumbs--docs#breadcrumbs-user-item)

If you want to customize an item or use your own component to display an item, you can use prop itemRender, which accepts a function with the following arguments: item, index, items.

Code:

```tsx
export const Example = ({ ...args }) => {
  const userItemRender = (item: BreadcrumbsItem) => {
    return <StyledUserLink>{item.title}</StyledUserLink>;
  };
  return (
    <Breadcrumbs
      items={[
        {
          title: 'Home'
        },
        {
          href: './center',
          title: 'Application Center'
        }
      ]}
      itemRender={userItemRender},
    />
  );
};
```
