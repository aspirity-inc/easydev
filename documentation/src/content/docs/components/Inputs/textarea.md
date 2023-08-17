---
title: Textarea
---

The Textarea is a form element for creating an area in which several lines of text can be entered. Unlike the Input, line breaks are allowed in the text field, they are saved when sending data to the server. Example:

```ts
const Example = ({ ...args }) => {
  const [value, setValue] = useState('');

  const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return <Textarea value={value} onChange={onChange} {...args} />;
};
```
