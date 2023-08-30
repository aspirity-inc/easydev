import { Meta, StoryFn } from '@storybook/react';

import 'material-symbols';

import { Text } from '@core/Typography';

import { Center } from '.';

export default {
  title: 'Core/Center',
  component: Center,
} satisfies Meta<typeof Center>;

const Template: StoryFn<typeof Center> = ({ ...args }) => {
  return <Center {...args}>{args.children}</Center>;
};

const Icon = () => <div className="material-symbols-rounded">check_circle_outline</div>;

export const DefaultCenter: StoryFn<typeof Center> = Template.bind({});
DefaultCenter.args = {
  children: (
    <>
      <Text>Some text for demonstration</Text>
      <Icon />
    </>
  ),
};

export const InlineCenter: StoryFn<typeof Center> = Template.bind({});
InlineCenter.args = {
  inline: true,
  children: (
    <>
      <Text>Some text for demonstration</Text>
      <Icon />
    </>
  ),
};
