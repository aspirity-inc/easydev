import { AvatarGroup } from '.';
import { Avatar } from '..';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Avatar/Group',
  component: AvatarGroup,
} satisfies Meta<typeof AvatarGroup>;

const Template: StoryFn<typeof AvatarGroup> = ({ ...args }) => {
  return (
    <AvatarGroup {...args}>
      <Avatar>A</Avatar>
      <Avatar size={'xxl'}>B</Avatar>
      <Avatar>C</Avatar>
      <Avatar size={'xxs'}>D</Avatar>
      <Avatar>E</Avatar>
      <Avatar size={'xs'}>F</Avatar>
      <Avatar>G</Avatar>
    </AvatarGroup>
  );
};

export const DefaultAvatarGroup: StoryFn<typeof AvatarGroup> = Template.bind({});
DefaultAvatarGroup.args = {};

export const UserSpacingAvatarGroup: StoryFn<typeof AvatarGroup> = Template.bind({});
UserSpacingAvatarGroup.args = {
  spacing: 20,
};
