import { Meta, StoryFn } from '@storybook/react';

import { Text } from './Text.tsx';

export default {
  title: 'core/Text',
  component: Text,
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = ({ children, ...args }) => {
  return <Text {...args}>{children}</Text>;
};

export const RedText = Template.bind({});
RedText.args = {
  children: 'EasyDev is red',
  color: 'red',
};

export const BlueText = Template.bind({});
BlueText.args = {
  children: 'EasyDev is blue',
  color: '#421934',
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  children: 'EasyDev is default',
};
