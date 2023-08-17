---
title: Checkbox
---

Checkboxes allow the user to select one or more items from a set.

Checkboxes can be used to turn an option on or off.

If you have multiple options appearing in a list, you can preserve space by using checkboxes instead of on/off switches. If you have a single option, avoid using a checkbox and use an on/off switch instead.

Checkbox is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Checkbox checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change checkbox
      </Button>
    </div>
  );
};
```
