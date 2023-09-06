---
title: Toggle
---

The Toggle button allows the user to select one option of two.

The Toggle has the next props: disabled, defaultChecked, color, checkedColor, label, innerColor, checked, onChange. [See there](/?path=/docs/core-controls-toggle--docs) to get more information.

[Default Toggle](/?path=/story/core-controls-toggle--default-toggle)

Code:

```tsx
<Toggle onChange={() => {}} />
```

[Controlled Toggle](/?path=/story/core-controls-toggle--controlled-toggle)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return <Toggle checked={checked} onChange={onChange} />;
};
```

[With Label](/?path=/story/core-controls-toggle--with-label)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return <Toggle checked={checked} onChange={onChange} label="Toggle me ☀️" />;
};
```

[With JSX Label](/?path=/story/core-controls-toggle--with-jsx-label)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return <Toggle checked={checked} onChange={onChange} label={<strong>Toggle me ☀️</strong>} />;
};
```
