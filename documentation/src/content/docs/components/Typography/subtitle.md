---
title: Subtitle
---

The Subtitle component makes it easy to apply a default set of sizes in your application.

Example:

```ts
const Example = ({ children, ...args }) => {
  return <Subtitle {...args}>{children}</Subtitle>;
};
```

```tsx
<Subtitle tag="h2">Example</Subtitle>
<Subtitle tag="p">Example</Subtitle>
<Subtitle tag="span">Example</Subtitle>
```
