---
title: Toast Container
---

The container in which toasts are displayed on the page.
You can set limit of toasts displayed on the page.

Example:

```ts
const Example = ({ ...args }) => {
  const toastArgs: ToastItemType = {
    title: 'Notification',
    description: 'Description text',
    colorful: false,
    autoClose: true,
  };

  return (
    <>
      <ToastContainer {...args} />
      <Space direction="row">
        <Button onClick={() => toast({ ...toastArgs, position: 'top-left' })}>top-left toast</Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'top-center' })}>
          top-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'top-right' })}>
          top-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'warning', position: 'bottom-left' })}>
          bottom-left toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'error', position: 'bottom-center' })}>
          bottom-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'bottom-right' })}>
          bottom-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'center-center' })}>
          center-center toast
        </Button>
      </Space>
    </>
  );
};
```

with limit

```ts
const Example = ({ ...args }) => {
  const toastArgs: ToastItemType = {
    title: 'Notification',
    description: 'Description text',
    colorful: false,
    autoClose: true,
  };

  return (
    <>
      <ToastContainer {...args} limit={3} />
      <Space direction="row">
        <Button onClick={() => toast({ ...toastArgs, position: 'top-left' })}>top-left toast</Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'top-center' })}>
          top-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'top-right' })}>
          top-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'warning', position: 'bottom-left' })}>
          bottom-left toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'error', position: 'bottom-center' })}>
          bottom-center toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'bottom-right' })}>
          bottom-right toast
        </Button>
        <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'center-center' })}>
          center-center toast
        </Button>
      </Space>
    </>
  );
};
```
