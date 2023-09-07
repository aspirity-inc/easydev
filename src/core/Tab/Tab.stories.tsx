import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Tab } from '.';
import { TabButtonsList } from './styles';

const metaTabs: Meta<typeof Tab> = {
  title: 'Core/Tab',
  component: Tab,
  argTypes: {
    title: {
      type: 'string',
      control: 'text',
      description: 'Title',
    },
    disabled: {
      type: 'boolean',
      control: 'boolean',
    },
    active: {
      type: 'boolean',
      control: 'boolean',
    },
  },
};
export default metaTabs;

const TemplateTab: StoryFn<typeof Tab> = ({ ...args }) => {
  return <Tab {...args} />;
};

export const DefaultTab: StoryFn<typeof Tab> = TemplateTab.bind({});
DefaultTab.args = {
  title: 'Tab',
};

export const DefaultTabs = () => {
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
          title={tab.title}
          active={tab.tabKey === activeKey}
          onClick={() => setActiveKey(tab.tabKey)}
        />
      ))}
    </TabButtonsList>
  );
};
