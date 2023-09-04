---
title: Toast
---

Toast is used to notify users. It serves as a means of updating users on an app's actions or upcoming actions, appearing briefly at the bottom of the screen without disrupting the user experience or requiring any input to disappear. Toast messages consist of a single line of text that is relevant to the specific operation being performed, making them ideal for displaying notifications.

The Toast has the next props: title, description, status, autoClose, onDelete, toastId, icon, colorful, statusBackground, closeBtnIcon, closeBtn, autoCloseDelay, className, style. [See there](/?path=/docs/core-toasts-toast--docs) to get more information.

[Default Toast](/?path=/story/core-toasts-toast--default-toast)

Code:

```tsx
<Toast description="Description text" onDelete={() => {}} status="info" title="Notification" />
```

[List Of Auto Closed Toasts](/?path=/story/core-toasts-toast--list-of-auto-closed-toasts)

Code:

```tsx
<Space direction="column">
  <Toast description="Text" onDelete={() => {}} status="info" title="Info notification" />
  <Toast autoCloseDelay={6000} description="Text" onDelete={() => {}} status="success" title="Success notification" />
  <Toast autoCloseDelay={10000} description="Text" onDelete={() => {}} status="warning" title="Warning notification" />
</Space>
```

[List Of Colorful Toasts](/?path=/story/core-toasts-toast--list-of-colorful-toasts)

Code:

```tsx
<Space direction="column">
  <Toast colorful description="Text" onDelete={() => {}} status="info" title="Info notification" />
  <Toast colorful description="Text" onDelete={() => {}} status="success" title="Success notification" />
  <Toast colorful description="Text" onDelete={() => {}} status="warning" title="Warning notification" />
  <Toast colorful description="Text" onDelete={() => {}} status="error" title="Error notification" />
</Space>
```
