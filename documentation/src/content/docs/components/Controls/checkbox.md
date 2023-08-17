---
title: Checkbox
---

Checkbox is used to select one or more options from the suggested set. It can be used to filter, sort, or select options when filling out a form.

If you have a list of multiple options, checkboxes can be used instead of on/off switches to save space. However, if there is only one option, it is recommended to use an on/off switch instead of a checkbox.

The Checkbox has the next props: disabled, defaultChecked, color. [See there](/?path=/docs/core-controls-checkbox--docs) to get more information.

[Default Checkbox](/?path=/story/core-controls-checkbox--default-checkbox)

Code:

```tsx
<Checkbox />
```

[Controlled Checkbox](/?path=/story/core-controls-checkbox--controlled-checkbox)

Code:

```tsx
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
