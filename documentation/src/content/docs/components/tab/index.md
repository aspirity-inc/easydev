---
title: Tab
---

The Tabs facilitate effortless exploration and transition between distinct perspectives. They structure and permit movement between clusters of content that are associated and situated at an equivalent level of hierarchy.

The Tabs component can have the next props: title, onClick, active, disabled. [See there](/storybook/?path=/docs/core-tab--docs) to get more information.

## Tab variants

### [Default Tab](/storybook/?path=/story/core-tab--default-tab)

```tsx
<Tab title="Tab" />
```

### [Default Tabs](/storybook/?path=/story/core-tab--default-tabs)

```tsx
const Tabs = () => {
  const [activeKey, setActiveKey] = useState(0);

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
          title={tab.title}
          active={tab.tabKey === activeKey}
          onClick={() => setActiveKey(tab.tabKey)}
        />
      ))}
    </TabButtonsList>
  );
};
```

## CSS

The following class names are useful for styling with CSS.

| Class        | Description                         |
| ------------ | ----------------------------------- |
| **easy_tab** | Styles applied to the root element. |
