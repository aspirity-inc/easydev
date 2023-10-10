---
title: Toggle
---

The Toggle button allows the user to select one option of two.

The Toggle can have the next props: label, checked, onChange. [See there](/storybook/?path=/docs/core-controls-toggle--docs) to get more information.

## [Default Toggle](/storybook/?path=/story/core-controls-toggle--default-toggle)

```tsx
<Toggle />
```

## [Controlled Toggle](/storybook/?path=/story/core-controls-toggle--controlled-toggle)

```tsx
const ControlledToggle = () => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);

  return <Toggle checked={checked} onChange={onChange} />;
};
```

## [With Label](/storybook/?path=/story/core-controls-toggle--with-label)

```tsx
<Toggle label="Toggle me ☀️" />
```

## [With JSX Label](/storybook/?path=/story/core-controls-toggle--with-jsx-label)

```tsx
<Toggle label={<strong>Toggle me ☀️</strong>} />
```
