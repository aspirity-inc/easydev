---
title: Popover
---

Popover can be used to display some content on top of another.

The Popover has the next props: placement, title, body. [See there](/?path=/docs/core-popover--docs) to get more information.

[Default Popover](/?path=/story/core-popover--default-popover)

Code:

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

[Default Popover No Title](/?path=/story/core-popover--default-popover-no-title)

Code:

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
