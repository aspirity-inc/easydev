---
title: Chips
---

Chips are compact elements that represent an input, attribute, or action.

Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.

Chips are based on React and Styled Components. Example:

```ts
export const Example = ({ ...args }) => {
  return (
    <div>
      <Chip {...args} label="Selected chip" defaultChecked onDelete={undefined} />
      <Chip {...args} label="Selected chip with delete button" defaultChecked />
      <Chip {...args} label="Disabled chip" disabled />
    </div>
  );
};
```
