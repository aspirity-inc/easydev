import { Tab } from '@aspirity/easydev';

import { TabButtonsList } from './styles';
import { useState } from 'react';
import { tabs } from '@src/assets/data/tabs';

export const Tabs = () => {
  const [activeKey, setActiveKey] = useState<number>(0);

  return (
    <TabButtonsList style={{ marginBottom: 40 }}>
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
