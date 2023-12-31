import { SentimentVerySatisfiedIcon } from '@icons';

import { Avatar } from '.';
import { avatarRadiusVariants, avatarSizeVariants } from './constants';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Avatar',
  component: Avatar,
  argTypes: {
    size: {
      defaultValue: 'lg',
      description: 'Size',
      control: 'select',
      options: avatarSizeVariants,
    },
    radius: {
      defaultValue: 'lg',
      description: 'Radius',
      control: 'select',
      options: avatarRadiusVariants,
    },
  },
} satisfies Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = ({ ...args }) => {
  return <Avatar {...args}>{args.children}</Avatar>;
};

export const DefaultAvatar: StoryFn<typeof Avatar> = Template.bind({});
DefaultAvatar.args = {};

export const OnlineAvatar: StoryFn<typeof Avatar> = Template.bind({});
OnlineAvatar.args = {
  online: true,
};

export const OfflineAvatar: StoryFn<typeof Avatar> = Template.bind({});
OfflineAvatar.args = {
  online: false,
};

export const ImageAvatar: StoryFn<typeof Avatar> = Template.bind({});
ImageAvatar.args = {
  online: true,
  alt: 'photo',
  src: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b',
};

export const LetterAvatar: StoryFn<typeof Avatar> = Template.bind({});
LetterAvatar.args = {
  online: true,
  children: 'AB',
};

export const CustomIconAvatar: StoryFn<typeof Avatar> = Template.bind({});
CustomIconAvatar.args = {
  online: true,
  children: <SentimentVerySatisfiedIcon />,
};
