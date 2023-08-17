---
title: Base modal
---

The Base Modal component provides a solid foundation for creating dialogs, popovers, or whatever else. Example:

The Base Modal has the next props: children, closeBtn, open, onClose, colorful, portal, className, style. [See there](/?path=/docs/core-modals-basemodal--docs) to get more information.

[No Portal Modal Window](/?path=/story/core-modals-basemodal--no-portal-modal-window)

Code:

```tsx
<>
  <Button onClick={function Zo() {}}>Open no portal modal window</Button>
  <BaseModal closeBtn onClose={function Zo() {}}>
    This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a
    whole chunk of information relating to their mortgage, for example.
  </BaseModal>
</>
```

[Portal Modal Window](/?path=/story/core-modals-basemodal--portal-modal-window)

Code:

```tsx
<>
  <Button onClick={function Zo() {}}>Open portal modal window</Button>
  <BaseModal closeBtn onClose={function Zo() {}} portal={null}>
    This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a
    whole chunk of information relating to their mortgage, for example.
  </BaseModal>
  <div
    id="portalElement"
    style={{
      border: '1px solid #aaa',
      height: '300px',
      padding: '12px',
      position: 'relative',
      width: '600px',
    }}
  >
    Portal field
  </div>
</>
```
