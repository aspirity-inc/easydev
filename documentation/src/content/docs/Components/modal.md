---
title: Modal
---

The Modal component provides a solid foundation for creating dialogs. Example:
The Modal has the next props: children, closeBtn, open, onClose, portal, className, style. [See there](/?path=/docs/core-modal-basemodal--docs) to get more information.

[No Portal Modal Window](/?path=/story/core-modal-modal--no-portal-modal-window)

Code:

```tsx
<>
  <Button onClick={() => {}}>Open no portal modal window</Button>
  <Modal closeBtn onClose={() => {}}>
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
  <Modal closeBtn onClose={() => {}} portal={null}>
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
    closeBtn
    onClose={() => {}}
    portal={null}
  >
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
      <React.Fragment key=".0">
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
      </React.Fragment>
    </ModalFooter>
  </Modal>
</>
```

[No Portal Modal Window With Custom Bg Color](/?path=/story/core-modal-modal--no-portal-modal-window-with-custom-bg-color)

Code:

```tsx
<>
  <Button onClick={() => {}}>
    Open no portal modal window
  </Button>
  <Modal
    bgColor="lightblue"
    onClose={() => {}}
    portal={null}
  >
    <ModalHeader onClose={() => {}} />
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
      <Styled(Text)
        centered
        variant="body3"
      >
        This information could be helpful for streamlining the rest of the process, preventing the user having to fill out a whole chunk of information relating to their mortgage, for example.
      </Styled(Text)>
    </ModalBody>
    <ModalFooter>
      <React.Fragment key=".0">
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
      </React.Fragment>
    </ModalFooter>
  </Modal>
</>
```
