---
title: Components
---

Range Slider is designed to select a value from a certain interval.

Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('25');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <RangeSlider {...args} value={value} onChange={onChange} min="0" max="100" {...args} />;
};
```
