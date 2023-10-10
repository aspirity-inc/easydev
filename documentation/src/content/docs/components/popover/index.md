---
title: Popover
---

Popover can be used to display some content on top of another.

The Popover can have the next props: placement, title, body. [See there](/storybook/?path=/docs/core-popover--docs) to get more information.

## [Default Popover](/storybook/?path=/story/core-popover--default-popover)

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

## [Default Popover No Title](/storybook/?path=/story/core-popover--default-popover-no-title)

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
