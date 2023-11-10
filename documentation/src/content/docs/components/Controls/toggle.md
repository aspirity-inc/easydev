---
title: Toggle
---

The Toggle button allows the user to select one option of two.

The Toggle can have the next props: label, reversed. [See there](/storybook/?path=/docs/core-controls-toggle--docs) to get more information.

## Toggle variants

### [Default Toggle](/storybook/?path=/story/core-controls-toggle--default-toggle)

```tsx
<Toggle />
```

### [Controlled Toggle](/storybook/?path=/story/core-controls-toggle--controlled-toggle)

```tsx
const ControlledToggle = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} />;
};
```

### [With Label](/storybook/?path=/story/core-controls-toggle--with-label)

```tsx
<Toggle label="Toggle me ☀️" />
```

### [With JSX Label](/storybook/?path=/story/core-controls-toggle--with-jsx-label)

```tsx
<Toggle label={<strong>Toggle me ☀️</strong>} />
```

### [Day Night Toggle](/storybook/?path=/story/core-controls-toggle--day-night-toggle)

```tsx
const DayNightToggle = () => {
  const [checked, setChecked] = useState(false);

  const dayToggleBackground = "url('/assets/toggle/day.svg')";
  const nightToggleBackground = "url('/assets/toggle/night.svg')";

  const dayToggleInnerBackground = '#ffc700';
  const nightToggleInnerBackground = "url('/assets/toggle/night-span.svg')";

  const [toggleBackground, setToggleBackground] = useState(checked ? dayToggleBackground : nightToggleBackground);
  const [toggleInnerBackground, setToggleInnerBackground] = useState(
    checked ? dayToggleInnerBackground : nightToggleInnerBackground
  );

  const onChange = () => setChecked((prevState) => !prevState);

  useEffect(() => {
    if (checked) {
      setToggleBackground(dayToggleBackground);
      setToggleInnerBackground(dayToggleInnerBackground);
    } else {
      setToggleBackground(nightToggleBackground);
      setToggleInnerBackground(nightToggleInnerBackground);
    }
  }, [checked]);

  return (
    <Toggle
      checked={checked}
      onChange={onChange}
      toggleBackground={toggleBackground}
      toggleInnerBackground={toggleInnerBackground}
      toggleWrapProps={{ style: { width: 48 } }}
      toggleInnerProps={{ style: { translate: checked ? '150% -50%' : '' } }}
    />
  );
};
```

## CSS

The following class names are useful for styling with CSS.

Common classes for all controls.

| Class                      | Description                                                   |
| -------------------------- | ------------------------------------------------------------- |
| **easy_control-label**     | Styles applied to the root element.                           |
| **easy_control-container** | Styles applied to the container with input and label content. |

Classes for toggle.

| Class                     | Description                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| **easy_toggle-label**     | Styles applied to the root element.                                                        |
| **easy_toggle-container** | Styles applied to the container with toggle and label content.                             |
| **easy_toggle-wrap**      | Styles applied to the container, which responsible for customization toggle and inner part |
| **easy_toggle-item**      | Styles applied to the toggle input.                                                        |
| **easy_toggle-inner**     | Styles applied to the inner part of toggle.                                                |
