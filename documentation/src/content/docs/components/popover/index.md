---
title: Popover
---

The Popover can be used to display some content on top of another.

The Popover can have the next props: placement, title, body, openOnHover, inline, offset. [See there](/storybook/?path=/docs/core-popover--docs) to get more information.

## Popover variants

### [Default Popover](/storybook/?path=/story/core-popover--default-popover)

```tsx
<div
  style={{
    alignItems: 'center',
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    width: '600px',
  }}
>
  <Popover
    body="No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. "
    placement="top"
    title="Header Popover"
  >
    <Button>Open popover</Button>
  </Popover>
</div>
```

### [Default Popover No Title](/storybook/?path=/story/core-popover--default-popover-no-title)

```tsx
<div
  style={{
    alignItems: 'center',
    display: 'flex',
    height: '300px',
    justifyContent: 'center',
    width: '600px',
  }}
>
  <Popover
    body="No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. "
    placement="top"
  >
    <Button>Open popover</Button>
  </Popover>
</div>
```

### [Inline Popover With Hover Trigger](/storybook/?path=/story/core-popover--inline-popover-with-hover-trigger)

```tsx
<div
  style={{
    width: '600px',
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  }}
>
  <p>
    Lorem ipsum dolor sit.
    <Popover
      style={{ color: 'red', fontWeight: 900 }}
      body="No depending be convinced in unfeeling he. Excellence she unaffected and too sentiments her. "
      placement="top"
      title="Header Popover"
      openOnHover={true}
      inline={true}
    >
      Hover on me
    </Popover>, earum, hic velit?
  </p>
</div>
```

## CSS

The following class names are useful for styling with CSS.

| Class                             | Description                            |
| --------------------------------- | -------------------------------------- |
| **easy_popover**                  | Styles applied to the root element.    |
| **easy_popover-triggerContainer** | Styles applied to the trigger element. |
| **easy_popover-title**            | Styles applied to the popover title.   |
| **easy_popover-body**             | Styles applied to the popover body.    |
