---
title: Toast
---

Toast provides brief notifications.

Toast informs users of a process that an app has performed or will perform. They appear temporarily, towards the bottom of the screen. They shouldn't interrupt the user experience, and they don't require user input to disappear.

Toast contains a single line of text directly related to the operation performed. You can use them to display notifications.

The Toggle has the next props: title, description, status, autoClose, onDelete, toastId, icon, colorful, statusBackground, closeBtnIcon, closeBtn, autoCloseDelay, className, style. [See there](/?path=/docs/core-toasts-toast--docs) to get more information.

[Default Toast](/?path=/story/core-toasts-toast--default-toast)

Code:

```tsx
<Toast description="Description text" onDelete={function Zo() {}} status="info" title="Notification" />
```

[List Of Auto Closed Toasts](/?path=/story/core-toasts-toast--list-of-auto-closed-toasts)

Code:

```tsx
<Space direction="column">
  <Toast description="Text" onDelete={function Zo() {}} status="info" title="Info notification" />
  <Toast
    autoCloseDelay={6000}
    description="Text"
    onDelete={function Zo() {}}
    status="success"
    title="Success notification"
  />
  <Toast
    autoCloseDelay={10000}
    description="Text"
    onDelete={function Zo() {}}
    status="warning"
    title="Warning notification"
  />
</Space>
```

[List Of Colorful Toasts](/?path=/story/core-toasts-toast--list-of-colorful-toasts)

Code:

```tsx
<Space direction="column">
  <Toast colorful description="Text" onDelete={function Zo() {}} status="info" title="Info notification" />
  <Toast colorful description="Text" onDelete={function Zo() {}} status="success" title="Success notification" />
  <Toast colorful description="Text" onDelete={function Zo() {}} status="warning" title="Warning notification" />
  <Toast colorful description="Text" onDelete={function Zo() {}} status="error" title="Error notification" />
</Space>
```
