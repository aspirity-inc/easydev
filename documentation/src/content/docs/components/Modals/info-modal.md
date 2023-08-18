---
title: Info modal
---

The Info Modal component provides a solid foundation for creating dialogs, popovers, or whatever else with the ability to make a decision. Example:

The Info Modal has the next props: open, onClose, colorful, portal, className, style. [See there](/?path=/docs/core-modals-infomodal--docs) to get more information.

[No Portal Info Modal](/?path=/story/core-modals-infomodal--no-portal-info-modal)

Code:

```tsx
<>
  <Button onClick={() => alert('clicked')}>
    Open no portal modal window
  </Button>
  <InfoModal onClose={() => alert('closed')}>
    <ModalHeader />
    <ModalBody
      image={
        <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
          rocket_launch
        </div>
      }
      text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
      title="Window"
    />
    <ModalFooter 
      footerContent={() => (
        <>
          <Button size="sm" rounded="sm">
            learn more
          </Button>
          <Button variant="secondary" size="sm" rounded="sm">
            got it
          </Button>
        </>
      )}
    />
  </InfoModal>
</>
```

[Portal Info Modal](/?path=/story/core-modals-infomodal--portal-info-modal)

Code:

```tsx
<>
  <Button onClick={() => alert('clicked')}>
    Open portal modal window
  </Button>
  <InfoModal onClose={() => alert('clicked')} portal={null}>
    <ModalHeader />
    <ModalBody
      image={
        <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
          rocket_launch
        </div>
      }
      text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
      title="Window"
    />
    <ModalFooter 
      footerContent={() => (
        <>
          <Button size="sm" rounded="sm">
            learn more
          </Button>
          <Button variant="secondary" size="sm" rounded="sm">
            got it
          </Button>
        </>
      )}
    />
  </InfoModal>
  <div
    id="portalElement"
    style={{
      border: '1px solid #aaa',
      height: '600px',
      padding: '12px',
      position: 'relative',
      width: '800px',
    }}
  >
    Portal field
  </div>
</>
```
