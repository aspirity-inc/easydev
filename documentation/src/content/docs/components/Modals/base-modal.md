---
title: Base modal
---

The Base Modal component provides a solid foundation for creating dialogs, popovers, or whatever else. Example:

```ts
const Example = ({ children, ...args }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open no portal modal window</Button>
      <BaseModal {...args} open={open} onClose={handleClose}>
        {children}
      </BaseModal>
    </>
  );
};
```
