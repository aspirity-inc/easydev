---
title: Radio
---

The Radio uses to select one option from the suggested set. It is a list of options where only one option can be selected. It is often used to create surveys, forms and other interactive elements on web pages.

If you want the user to choose only one option from a list, use the radio button component. It's perfect for surveys, forms, and other interactive elements on web pages. However, if you have a long list of options, consider using a select component to save space.

By default, the most commonly used option should be selected in radio buttons.

The Radio can have the next props: label, checked, onChange. [See there](/storybook/?path=/docs/core-controls-radio--docs) to get more information.

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
