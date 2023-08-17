---
title: Progress Bar With Title
---

Progress Bar presents a filled line depending on the specified value from 0 to 100% with the addition of text.

```ts
export const Example = ({ ...args }) => {
  return <ProgressBar {...args} value={25} title="Update in progress.." />;
};
```
