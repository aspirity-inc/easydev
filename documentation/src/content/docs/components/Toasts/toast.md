---
title: Toast
---

Toast provides brief notifications.

Toast informs users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.

Toast contains a single line of text directly related to the operation performed. You can use them to display notifications.

Example:

```ts
export const Example = ({ ...args }) => {
  const toastArgs = { ...args, onDelete: () => null };
  return (
    <Space direction="column">
      <Toast {...toastArgs} title={'Info notification'} description={'Text'} status="info" />
      <Toast
        {...toastArgs}
        title={'Success notification'}
        description={'Text'}
        status="success"
        autoCloseDelay={6000}
      />
      <Toast
        {...toastArgs}
        title={'Warning notification'}
        description={'Text'}
        status="warning"
        autoCloseDelay={10000}
      />
    </Space>
  );
};
```
