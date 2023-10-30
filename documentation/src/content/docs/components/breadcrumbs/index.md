---
title: Breadcrumbs
---

The Breadcrumbs are a series of links that provide a visual representation of a page's position within a website's hierarchical structure, enabling users to navigate back to any of its ancestors.

The Breadcrumbs component can have the next props: separator. [See there](/storybook/?path=/docs/core-breadcrumbs--docs) to get more information.

## Breadcrumbs variants

### [Default Breadcrumbs](/storybook/?path=/story/core-breadcrumbs--default-breadcrumbs)

```tsx
<Breadcrumbs
  items={[
    {
      title: 'Home',
    },
    {
      href: '',
      title: 'Application Center',
    },
  ]}
/>
```

### [Breadcrumbs User Icon Separator](/storybook/?path=/story/core-breadcrumbs--breadcrumbs-user-icon-separator)

```tsx
<Breadcrumbs
  items={[
    {
      title: 'Home',
    },
    {
      href: '',
      title: 'Application Center',
    },
  ]}
  separator=">>"
/>
```

### [Breadcrumbs User Item](/storybook/?path=/story/core-breadcrumbs--breadcrumbs-user-item)

If you want to customize an item or use your own component to display an item, you can use prop itemRender, which accepts a function with the following arguments: item, index, items.

```tsx
const userItemRender = (item: BreadcrumbsItem) => {
  return <StyledUserLink>{item.title}</StyledUserLink>;
};

const BreadcrumbsUserItem = () => {
  return (
    <Breadcrumbs
      items={[
        {
          title: 'Home',
        },
        {
          href: './center',
          title: 'Application Center',
        },
      ]}
      itemRender={userItemRender}
    />
  );
};
```
