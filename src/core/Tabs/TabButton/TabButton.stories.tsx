import { Meta, StoryFn } from '@storybook/react';

import { TabButton } from '.';

const metaTabs: Meta<typeof TabButton> = {
  title: 'Core/Tabs/TabButton',
  component: TabButton,
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

const Template: StoryFn<typeof TabButton> = ({ ...args }) => {
  return <TabButton {...args} />;
};

export const DefaultTabButton: StoryFn<typeof TabButton> = Template.bind({});
DefaultTabButton.args = {
  title: 'Tab',
  onClick: (k) => k,
};
