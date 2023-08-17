---
title: Info modal
---

The Info Modal component provides a solid foundation for creating dialogs, popovers, or whatever else with the ability to make a decision. Example:

```ts
const Example = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  const ModalImage = (
    <div className="material-symbols-rounded" style={{ fontSize: '100px' }}>
      rocket_launch
    </div>
  );

  const portal = document.getElementById('portalElement');

  return (
    <>
      <Button onClick={handleOpen}>Open portal modal window</Button>
      <InfoModal {...args} open={open} onClose={handleClose} portal={portal}>
        <ModalHeader />
        <ModalBody
          image={ModalImage}
          title="Window"
          text="This information could be helpful for streamlining the rest of the process, preventing the user having to fill
        out a whole chunk of information relating to their mortgage, for example."
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
        style={{ position: 'relative', border: '1px solid #aaa', padding: '12px', width: '800px', height: '600px' }}
      >
        Portal field
      </div>
    </>
  );
};
```
