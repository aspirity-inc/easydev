---
title: Masked Input
---

The Input wrapper component is a complete form control including a label, input, and help text. Instead of Input you need to set mask for need input. You can use it to mask phone number, tickets, etc. inputs. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return <MaskedInput value={value} onChange={onChange} {...args} />;
};
```
