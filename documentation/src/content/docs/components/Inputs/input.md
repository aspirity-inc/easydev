---
title: Input
---

The Input wrapper component is a complete form control including a label, input, and help text. It comes with the next variants: ...

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <Input value={value} onChange={onChange} {...args} />;
};
```
