---
title: Control With Label
---

Control With Label is based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return (
    <Space>
      <ControlWithLabel label="Toggle 1" {...args} control={<Toggle />} />
    </Space>
  );
};
```
