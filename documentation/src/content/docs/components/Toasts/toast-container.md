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
    <Button onClick={function Zo() {}}>top-left toast</Button>
    <Button onClick={function Zo() {}}>top-center toast</Button>
    <Button onClick={function Zo() {}}>top-right toast</Button>
    <Button onClick={function Zo() {}}>bottom-left toast</Button>
    <Button onClick={function Zo() {}}>bottom-center toast</Button>
    <Button onClick={function Zo() {}}>bottom-right toast</Button>
    <Button onClick={function Zo() {}}>center-center toast</Button>
  </Space>
</>
```
