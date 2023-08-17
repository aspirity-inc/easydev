---
title: Radio
---

The Radio Group allows the user to select one option from a set.

Use radio buttons when the user needs to see all available options. If available options can be collapsed, consider using a Select component because it uses less space.

Radio buttons should have the most commonly used option selected by default.

The Radio has the next props: disabled, defaultChecked, color. [See there](/?path=/docs/core-controls-radio--docs) to get more information.

[Default Radio](/?path=/story/core-controls-radio--default-radio)

Code:

```tsx
<Radio />
```

[Controlled Radio](/?path=/story/core-controls-radio--controlled-radio)

Code:

```tsx
({ ...args }) => {
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
