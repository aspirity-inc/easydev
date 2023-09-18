---
title: Checkbox
---

Checkbox is used to select one or more options from the suggested set. It can be used to filter, sort, or select options when filling out a form.

If you have a list of multiple options, checkboxes can be used instead of on/off switches to save space. However, if there is only one option, it is recommended to use an on/off switch instead of a checkbox.

The Checkbox has the next props: disabled, defaultChecked, color, label, checked, onChange. [See there](/?path=core-controls-checkbox--docs) to get more information.

[Default Checkbox](/storybook/?path=/story/core-controls-checkbox--default-checkbox)

Code:

```tsx
<Checkbox onChange={() => {}} />
```

[Controlled Checkbox](/storybook/?path=/story/core-controls-checkbox--controlled-checkbox)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return <Checkbox checked={checked} onChange={onChange} />;
};
```

[With Label](/storybook/?path=/story/core-controls-checkbox--with-label)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return (
    <div>
      <Checkbox checked={checked} onChange={onChange} label="Check me 🌵" />
    </div>
  );
};
```

[With JSX Label](/storybook/?path=/story/core-controls-checkbox--with-jsx-label)

Code:

```tsx
() => {
  const [checked, setChecked] = useState(false);
  const onChange = () => setChecked((prevState) => !prevState);
  return (
    <div>
      <Checkbox checked={checked} onChange={onChange} label={<strong>Check me 🌵</strong>} />
    </div>
  );
};
```
