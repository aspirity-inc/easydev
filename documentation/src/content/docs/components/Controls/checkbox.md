---
title: Checkbox
---

The Checkbox uses to select one or more options from the suggested set. It can be used to filter, sort, or select options when filling out a form.

If you have a list of multiple options, checkboxes can be used instead of on/off switches to save space. However, if there is only one option, it is recommended to use an on/off switch instead of a checkbox.

The Checkbox can have the next props: label, checked, onChange. [See there](/storybook/?path=/docs/core-controls-checkbox--docs) to get more information.

## Checkbox variants

### [Default Checkbox](/storybook/?path=/story/core-controls-checkbox--default-checkbox)

```tsx
<Checkbox />
```

### [Controlled Checkbox](/storybook/?path=/story/core-controls-checkbox--controlled-checkbox)

```tsx
const ControlledCheckbox = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Checkbox checked={checked} onChange={onChange} />;
};
```

### [With Label](/storybook/?path=/story/core-controls-checkbox--with-label)

```tsx
<Checkbox label="Check me 🌵" />
```

### [With JSX Label](/storybook/?path=/story/core-controls-checkbox--with-jsx-label)

```tsx
<Checkbox label={<strong>Check me 🌵</strong>} />
```

## CSS

The following class names are useful for styling with CSS.

Common classes for all controls.

| Class                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| **easy_control-label**     | Styles applied to the root element.                           |
| **easy_control-container** | Styles applied to the container with input and label content. |

Classes for checkbox.

| Class                       | Description                                                                                     |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **easy_checkbox-label**     | Styles applied to the root element.                                                             |
| **easy_checkbox-container** | Styles applied to the container with checkbox input and label content.                          |
| **easy_checkbox-wrap**      | Styles applied to the container, which responsible for customization checkbox and checkbox icon |
| **easy_checkbox-item**      | Styles applied to the checkbox input.                                                           |
