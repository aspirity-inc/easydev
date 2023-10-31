---
title: Button
---

The Button uses to user could to take actions, make choices with a single click. You can use either a regular text button or add an icon.

The Button component can have the next props: icon, size, reversed, rounded, loading, loadingIcon, variant. [See there](/storybook/?path=/docs/core-button--docs) to get more information.

## Button variants

### [Icon Text Button](/storybook/?path=/story/core-button--icon-text-button)

```tsx
const AddIcon = () => <div className="material-symbols-rounded">add</div>;

const IconTextButton = () => {
  return <Button icon={<AddIcon />}>Button</Button>;
};
```

### [Secondary Icon Text Button](/storybook/?path=/story/core-button--secondary-icon-text-button)

```tsx
const AddIcon = () => <div className="material-symbols-rounded">add</div>;

const SecondaryIconTextButton = () => {
  return (
    <Button icon={<AddIcon />} variant="secondary">
      Button
    </Button>
  );
};
```

### [Icon Button](/storybook/?path=/story/core-button--icon-button)

```tsx
const AddIcon = () => <div className="material-symbols-rounded">add</div>;

const IconButton = () => {
  return <Button icon={<AddIcon />} />;
};
```

### [Text Button](/storybook/?path=/story/core-button--text-button)

```tsx
<Button>Button</Button>
```

### [Rounded Button](/storybook/?path=/story/core-button--rounded-button)

```tsx
<Button rounded="lg">Button</Button>
```

### [Progress Default Icon Button](/storybook/?path=/story/core-button--progress-default-icon-button)

```tsx
<Button loading>Button</Button>
```

### [Progress User Icon Button](/storybook/?path=/story/core-button--progress-user-icon-button)

```tsx
const LoaderIcon = () => <div className="material-symbols-rounded">refresh</div>;

const ProgressUserIconButton = () => {
  return (
    <Button loading loadingIcon={<LoaderIcon />}>
      Button
    </Button>
  );
};
```

### [Link Like Button](/storybook/?path=/story/core-button--link-like-button)

```tsx
<Button as="a" href="https://google.com">
  This is a link
</Button>
```

## CSS

The following class names are useful for styling with CSS.

| Class           | Description                         |
| --------------- | ----------------------------------- |
| **easy_button** | Styles applied to the root element. |
