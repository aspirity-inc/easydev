import { Meta, StoryFn } from '@storybook/react';

import { Avatar } from '.';
import { Space } from '@core/Space';

export default {
  title: 'Core/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

const Template: StoryFn<typeof Avatar> = ({ ...args }) => {
  return <Avatar {...args}>{args.children}</Avatar>;
};

export const DefaultAvatar: StoryFn<typeof Avatar> = Template.bind({});
DefaultAvatar.args = {};

export const ImageAvatar: StoryFn<typeof Avatar> = Template.bind({});
ImageAvatar.args = {
  alt: 'photo',
  src: 'https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=826&t=st=1693801961~exp=1693802561~hmac=7555601ef0121b3c969f8485d8595331e3e576d084f4fe459c9c65862ddb422b',
};

export const LetterAvatar: StoryFn<typeof Avatar> = Template.bind({});
LetterAvatar.args = {
  children: 'AB',
};

const CustomIcon = () => <span className="material-symbols-outlined">sentiment_very_satisfied</span>;
export const CustomIconAvatar: StoryFn<typeof Avatar> = Template.bind({});
CustomIconAvatar.args = {
  children: <CustomIcon />,
};

export const DifferentSizesAvatars = ({ ...args }) => {
  return (
    <Space direction="row">
      <Avatar {...args} size={'xxl'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'}>
        AB
      </Avatar>
      <Avatar {...args} size={'lg'}>
        AB
      </Avatar>
      <Avatar {...args} size={'md'}>
        AB
      </Avatar>
      <Avatar {...args} size={'sm'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xs'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xxs'}>
        AB
      </Avatar>
    </Space>
  );
};

export const DifferentRadiusesAvatars = ({ ...args }) => {
  return (
    <Space direction="row">
      <Avatar {...args} size={'xl'} radius={'xxl'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'xl'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'lg'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'md'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'sm'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'xs'}>
        AB
      </Avatar>
      <Avatar {...args} size={'xl'} radius={'xxs'}>
        AB
      </Avatar>
    </Space>
  );
};
