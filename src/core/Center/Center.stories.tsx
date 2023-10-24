import { RocketLaunchIcon } from '@icons';

import { Text } from '@core/Typography';

import { Center } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Center',
  component: Center,
} satisfies Meta<typeof Center>;

const Template: StoryFn<typeof Center> = ({ ...args }) => {
  return <Center {...args}>{args.children}</Center>;
};

export const DefaultCenter: StoryFn<typeof Center> = Template.bind({});
DefaultCenter.args = {
  children: (
    <>
      <Text>Some text for demonstration</Text>
      <RocketLaunchIcon />
    </>
  ),
};

export const InlineCenter: StoryFn<typeof Center> = Template.bind({});
InlineCenter.args = {
  inline: true,
  children: (
    <>
      <Text>Some text for demonstration</Text>
      <RocketLaunchIcon />
    </>
  ),
};
