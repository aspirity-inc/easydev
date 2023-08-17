---
title: Radio
---

The Radio Group allows the user to select one option from a set.

Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

Radio buttons should have the most commonly used option selected by default.

Radio is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);

  const handleButtonClick = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <div>
      <Radio checked={checked} readOnly {...args} />
      <Button size="sm" rounded="sm" onClick={handleButtonClick}>
        Change Radio
      </Button>
    </div>
  );
};
```
