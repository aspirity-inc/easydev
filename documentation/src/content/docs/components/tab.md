---
title: Tab
---

Tabs facilitate effortless exploration and transition between distinct perspectives. They structure and permit movement between clusters of content that are associated and situated at an equivalent level of hierarchy.

The Tabs component has the next props: title, onClick, tabKey, active, disabled. [See there](/storybook/?path=/docs/core-tab--docs) to get more information.

[Tab](/storybook/?path=/story/core-tab--default-tab)

Code:

```tsx
<Tab onClick={() => {}} title="Tab" />
```

[Tabs](/storybook/?path=/story/core-tab--default-tabs)

Code:

```tsx
() => {
  const [activeKey, setActiveKey] = useState<number>(0);
  const tabs = [
    {
      tabKey: 0,
      title: 'Tab1',
    },
    {
      tabKey: 1,
      title: 'Tab2',
    },
    {
      tabKey: 2,
      title: 'Tab3',
    },
    {
      tabKey: 3,
      title: 'Tab4',
    },
  ];
  return (
    <TabButtonsList>
      {tabs.map((tab) => (
        <Tab
          key={tab.tabKey}
          tabKey={tab.tabKey}
          title={tab.title}
          active={tab.tabKey === activeKey}
          onClick={() => setActiveKey(tab.tabKey)}
        />
      ))}
    </TabButtonsList>
  );
};
```
