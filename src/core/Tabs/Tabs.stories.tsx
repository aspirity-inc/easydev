import { Meta, StoryFn } from '@storybook/react';

import { Tab, Tabs } from '.';

const metaTabs: Meta<typeof Tabs> = {
  title: 'Core/Tabs/Tabs',
  component: Tabs,
  argTypes: {},
};
export default metaTabs;

const Template: StoryFn<typeof Tabs> = ({ ...args }) => {
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

export const DefaultTabs: StoryFn<typeof Tabs> = Template.bind({});
