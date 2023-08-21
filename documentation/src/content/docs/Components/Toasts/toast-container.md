---
title: Toast Container
---

The container in which toasts are displayed on the page.
You can set limit of toasts displayed on the page.

The Toast Container has the next props: limit. [See there](/?path=/docs/core-toasts-toastcontainer--docs) to get more information.

[Toast Container](/?path=/story/core-controls-toggle--default-toggle)

Code:

```tsx
<>
  <ToastContainer />
  <Space direction="row">
    <Button onClick={() => alert('clicked')}>top-left toast</Button>
    <Button onClick={() => alert('clicked')}>top-center toast</Button>
    <Button onClick={() => alert('clicked')}>top-right toast</Button>
    <Button onClick={() => alert('clicked')}>bottom-left toast</Button>
    <Button onClick={() => alert('clicked')}>bottom-center toast</Button>
    <Button onClick={() => alert('clicked')}>bottom-right toast</Button>
    <Button onClick={() => alert('clicked')}>center-center toast</Button>
  </Space>
</>
```
