---
title: Space
---

Space is a container in which the elements are located at the specified margins, have a certain order and display (justify-content, align-items)

Example:

```ts
const Example = ({ ...args }) => {
  return (
    <Space {...args}>
      <ControlWithLabel label="Radio 1" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 2" control={<Radio name="name" defaultChecked />} />
      <ControlWithLabel label="Radio 3" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 4" control={<Radio name="name" />} />
    </Space>
  );
};
```
