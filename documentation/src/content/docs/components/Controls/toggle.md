---
title: Toggle
---

The Toggle button allows the user to select one option of two.

The Toggle has the next props: disabled, defaultChecked, color. [See there](/?path=/docs/core-controls-toggle--docs) to get more information.

[Default Toggle](/?path=/story/core-controls-toggle--default-toggle)

Code:

```tsx
<Toggle />
```

[Controlled Toggle](/?path=/story/core-controls-toggle--controlled-toggle)

Code:

```tsx
({ ...args }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prevState) => !prevState);
  };
  return <Toggle checked={checked} onChange={handleChange} {...args} />;
};
```
