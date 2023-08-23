---
title: Modal
---

The Modal component provides a solid foundation for creating dialogs.
The Modal has the next props: children, open, onClose, portal, className, style. [See there](/?path=/docs/core-modal-modal--docs) to get more information.

[No Portal Modal Window](/?path=/story/core-modal-modal--no-portal-modal-window)

Code:

```tsx
<>
  <Button onClick={() => {}}>Open no portal modal window</Button>
  <Modal onClose={() => {}} portal={null}>
    <CloseButton onClick={() => {}} />
    This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a
    whole chunk of information relating to their mortgage, for example.
  </Modal>
</>
```

[Portal Modal Window](/?path=/story/core-modal-modal--portal-modal-window)

Code:

```tsx
<>
  <Button onClick={() => {}}>Open portal modal window</Button>
  <Modal onClose={() => {}} portal={null}>
    <CloseButton onClick={() => {}} />
    This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a
    whole chunk of information relating to their mortgage, for example.
  </Modal>
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

[No Portal Modal Window With Modal Elements](/?path=/story/core-modal-modal--no-portal-modal-window-with-modal-elements)

Code:

```tsx
<>
  <Button onClick={() => {}}>
    Open no portal modal window
  </Button>
  <Modal
    onClose={() => {}}
    portal={null}
  >
    <CloseButton onClick={() => {}} />
    <ModalBody>
      <styled.div>
        <div
          className="material-symbols-rounded"
          style={{
            fontSize: '100px'
          }}
        >
          rocket_launch
        </div>
      </styled.div>
      <Styled(Title) variant="h3">
        Window
      </Styled(Title)>
      <Styled(Text) variant="body3">
        This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.
      </Styled(Text)>
    </ModalBody>
    <ModalFooter>
      <Button
        rounded="sm"
        size="sm"
      >
        learn more
      </Button>
      <Button
        rounded="sm"
        size="sm"
        variant="secondary"
      >
        got it
      </Button>
    </ModalFooter>
  </Modal>
</>
```

[No Portal Modal Window With Custom Bg Color](/?path=/story/core-modal-modal--no-portal-modal-window-with-custom-bg-color)

Code:

```tsx
({ ...args }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const ModalImage = (
    <div
      className="material-symbols-rounded"
      style={{
        fontSize: '100px',
      }}
    >
      rocket_launch
    </div>
  );
  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <Modal {...args} open={open} onClose={handleClose}>
        <ModalHeader onClose={handleClose} />
        <ModalBody>
          <StyledImage>{ModalImage}</StyledImage>
          <StyledTitle variant="h3">Window</StyledTitle>
          <StyledText variant="body3" centered>
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
    </>
  );
};
```
