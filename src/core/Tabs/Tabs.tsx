import React, { ReactNode, useState, useEffect } from 'react';

import { TabButtonsItem, TabButtonsList, TabContent } from './styles';
import { TabButton } from './TabButton';

type keyType = number | string;

type TabsProps = {
  children: ReactNode | ReactNode[];
  defaultActiveKey?: keyType;
};

export const Tabs = ({ children, defaultActiveKey = 0 }: TabsProps) => {
  const [activeKey, setActiveKey] = useState<keyType>(defaultActiveKey);
  const [content, setContent] = useState<ReactNode>(null);

  const handleChangeKey = (key: keyType) => setActiveKey(key);

  useEffect(() => {
    React.Children.map(children, (child) => {
      if (React.isValidElement(child) && child.props.eventKey === activeKey) setContent(child.props.children);
    });
  }, [activeKey, children]);

  const tabButtons = React.Children.map(
    children,
    (child, index) =>
      React.isValidElement(child) && (
        <TabButtonsItem key={index}>
          <TabButton active={activeKey === child.props.eventKey} handleChangeKey={handleChangeKey} {...child.props} />
        </TabButtonsItem>
      )
  );

  return (
    <>
      <TabButtonsList>{tabButtons}</TabButtonsList>
      <TabContent>{content}</TabContent>
    </>
  );
};
