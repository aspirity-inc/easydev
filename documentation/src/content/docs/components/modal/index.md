---
title: Modal
---

The Modal component provides a solid foundation for creating dialogs.

The Modal can have the next props: open, onClose, portal. [See there](/storybook/?path=/docs/core-modal--docs) to get more information.

## Modal variants

### [No Portal Modal Window](/storybook/?path=/story/core-modal--no-portal-modal-window)

```tsx
const NoPortalModalWindow = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <div style={{ height: '250px' }}>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal portal={null} open={open} onClose={handleClose}>
        <CloseButton onClick={handleClose} />
        This information could be helpful for streamlining the rest of the process, preventing the user having to fill out
        a whole chunk of information relating to their mortgage, for example.
      </Modal>
    </div>
  );
};
```

### [Portal Modal Window](/storybook/?path=/story/core-modal--portal-modal-window)

```tsx
const PortalModalWindow = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <Modal open={open} onClose={handleClose} portal={portal}>
        <CloseButton onClick={handleClose} />
        This information could be helpful for streamlining the rest of the process, preventing the user having to fill out
        a whole chunk of information relating to their mortgage, for example.
      </Modal>
      <div
        id="portalElement"
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '600px', height: '300px' }}
      >
        Portal field
      </div>
    </>
  );
};
```

### [No Portal Modal Window With Modal Elements](/storybook/?path=/story/core-modal--no-portal-modal-window-with-modal-elements)

```tsx
const NoPortalModalWindowWithModalElements = () => {
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  return (
    <div style={{ height: '450px' }}>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal portal={null} open={open} onClose={handleClose}>
        <CloseButton onClick={handleClose} />
        <ModalBody>
          <StyledImage>{ModalImage}</StyledImage>
          <StyledTitle variant="h3">Window</StyledTitle>
          <StyledText variant="body3">
            This information could be helpful for streamlining the rest of the process, preventing the user having to
            fill out a whole chunk of information relating to their mortgage, for example.
          </StyledText>
        </ModalBody>
        <ModalFooter>
          <Button size="sm" rounded="sm">
            learn more
          </Button>
          <Button variant="secondary" size="sm" rounded="sm">
            got it
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
```
