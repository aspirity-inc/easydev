---
title: Tabs
---

Tabs make it easy to explore and switch between different views.
Tabs organize and allow navigation between groups of content that are related and at the same level of hierarchy.

Example:

```ts
const Example = ({ ...args }) => {
  return (
    <Tabs {...args}>
      <Tab eventKey={0} title="Tab1">
        Tab 1 content
      </Tab>
      <Tab eventKey={1} title="Tab2">
        Tab 2 content
      </Tab>
      <Tab eventKey={2} title="Tab3">
        Tab 3 content
      </Tab>
      <Tab eventKey={3} title="Tab4" disabled>
        Tab 4 content
      </Tab>
    </Tabs>
  );
};
```
