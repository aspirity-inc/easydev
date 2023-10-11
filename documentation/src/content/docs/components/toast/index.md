---
title: Toast
---

The Toast is used to notify users. It serves as a means of updating users on an app's actions or upcoming actions, appearing briefly at the bottom of the screen without disrupting the user experience or requiring any input to disappear. Toast messages consist of a single line of text that is relevant to the specific operation being performed, making them ideal for displaying notifications.

The Toast can have the next props: title, description, status, autoClose, onDelete, toastId, icon, colorful, statusBackground, closeBtnIcon, closeBtn, autoCloseDelay, className, position, style. [See there](/storybook/?path=/docs/core-toasts-toast--docs) to get more information.

## Toast variants

### [Default Toast](/storybook/?path=/story/core-toasts-toast--default-toast)

```tsx
<Toast description="Description text" onDelete={() => null} status="info" title="Notification" />
```

### [List Of Colorful Toasts](/storybook/?path=/story/core-toasts-toast--list-of-colorful-toasts)

```tsx
<Space direction="column">
  <Toast colorful description="Text" onDelete={() => null} status="info" title="Info notification" />
  <Toast colorful description="Text" onDelete={() => null} status="success" title="Success notification" />
  <Toast colorful description="Text" onDelete={() => null} status="warning" title="Warning notification" />
  <Toast colorful description="Text" onDelete={() => null} status="error" title="Error notification" />
</Space>
```

The container in which toasts are displayed on the page.
You can set limit of toasts displayed on the page.

The Toast Container can have the next props: limit. [See there](/storybook/?path=/docs/core-toasts-toastcontainer--docs) to get more information.

### [Toast Container](/storybook/?path=/docs/core-toasts-toastcontainer--docs)

```tsx
const ToastContainerElement = () => {
  const toastArgs: ToastItemType = {
    title: 'Notification',
    description: 'Description text',
    colorful: false,
    autoClose: true,
    position: 'top-right',
  };
};

return (
  <>
    <ToastContainer />
    <Space direction="row">
      <Button onClick={() => toast({ ...toastArgs, position: 'top-left' })}>top-left toast</Button>
      <Button onClick={() => toast({ ...toastArgs, status: 'info', position: 'top-center' })}>top-center toast</Button>
      <Button onClick={() => toast({ ...toastArgs, status: 'success', position: 'top-right' })}>top-right toast</Button>
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
```
