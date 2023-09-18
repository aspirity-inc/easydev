---
title: Toast Container
---

The container in which toasts are displayed on the page.
You can set limit of toasts displayed on the page.

The Toast Container has the next props: limit. [See there](/?path=core-toasts-toastcontainer--docs) to get more information.

[Toast Container](/storybook/?path=/story/core-controls-toggle--default-toggle)

Code:

```tsx
<>
  <ToastContainer />
  <Space direction="row">
    <Button onClick={() => toast({ status: 'success', position: 'top-left' })>top-left toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'top-center' })}>top-center toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'top-right' })}>top-right toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'bottom-left' })}>bottom-left toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'bottom-center' })}>bottom-center toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'bottom-right' })}>bottom-right toast</Button>
    <Button onClick={() => toast({ status: 'success', position: 'center-center' })}>center-center toast</Button>
  </Space>
</>
```
