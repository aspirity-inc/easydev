---
title: Space
---

Space is a container in which the elements are located at the specified margins, have a certain order and display.

The Space has the next props: size, alignItems, justifyContent, direction, children. [See there](/storybook/?path=/docs/core-space--docs) to get more information.

[Space](/storybook/?path=/story/core-space--default-space)

Code:

```tsx
<Space>
  <ControlWithLabel control={<Radio name="name" />} label="Radio 1" />
  <ControlWithLabel control={<Radio defaultChecked name="name" />} label="Radio 2" />
  <ControlWithLabel control={<Radio name="name" />} label="Radio 3" />
  <ControlWithLabel control={<Radio name="name" />} label="Radio 4" />
</Space>
```
