---
title: Radio
---

Radio is used to select one option from the suggested set. It is a list of options where only one option can be selected. It is often used to create surveys, forms and other interactive elements on web pages.

If you want the user to choose only one option from a list, use the radio button component. It's perfect for surveys, forms, and other interactive elements on web pages. However, if you have a long list of options, consider using a select component to save space. 

By default, the most commonly used option should be selected in radio buttons.

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
