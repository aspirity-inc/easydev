---
title: Popover
---

Popover can be used to display some content on top of another. Example:

```ts
const Example = ({ ...args }) => {
  return (
    <div
      style={{
        width: '600px',
        height: '300px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Popover {...args}>
        <Button>Open popover</Button>
      </Popover>
    </div>
  );
};
```
