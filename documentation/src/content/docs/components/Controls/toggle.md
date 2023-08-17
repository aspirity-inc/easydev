---
title: Toggle
---

The Toggle button allows the user to select one option of two.

Toggle is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  const [checked, setChecked] = useState(false);
  я;

  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };

  return <Toggle checked={checked} onChange={handleChange} {...args} />;
};
```
