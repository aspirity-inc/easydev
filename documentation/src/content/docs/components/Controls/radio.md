---
title: Radio
---

The Radio uses to select one option from the suggested set. It is a list of options where only one option can be selected. It is often used to create surveys, forms and other interactive elements on web pages.

If you want the user to choose only one option from a list, use the radio button component. It's perfect for surveys, forms, and other interactive elements on web pages. However, if you have a long list of options, consider using a select component to save space.

By default, the most commonly used option should be selected in radio buttons.

The Radio can have the next props: label, reversed. [See there](/storybook/?path=/docs/core-controls-radio--docs) to get more information.

## Radio variants

### [Default Radio](/storybook/?path=/story/core-controls-radio--default-radio)

```tsx
<Radio />
```

### [Controlled Radio](/storybook/?path=/story/core-controls-radio--controlled-radio)

```tsx
const ControlledRadio = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Radio checked={checked} onChange={onChange} />;
};
```

### [With Label](/storybook/?path=/story/core-controls-radio--with-label)

```tsx
<Radio label="Pick me 🌵" />
```

### [With JSX Label](/storybook/?path=/story/core-controls-radio--with-jsx-label)

```tsx
<Radio label={<strong>Pick me 🌵</strong>} />
```

## CSS

The following class names are useful for styling with CSS.

Common classes for all controls.

| Class                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| **easy_control-label**     | Styles applied to the root element.                           |
| **easy_control-container** | Styles applied to the container with input and label content. |

Classes for radio.

| Class                      | Description                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| **easy_radio-label**       | Styles applied to the root element.                                                       |
| **easy_radio-container**   | Styles applied to the container with radio input and label content.                       |
| **easy_radio-wrap**        | Styles applied to the container, which responsible for customization radio and radio icon |
| **easy_radio-item**        | Styles applied to the radio input.                                                        |
| **easy_radio-item--inner** | Styles applied to the radio input icon.                                                   |
