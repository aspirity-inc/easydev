import { Meta, StoryFn } from '@storybook/react';

import { Title } from './Title.tsx';

export default {
  title: 'core/Title',
  component: Title,
} as Meta<typeof Title>;

const Template: StoryFn<typeof Title> = ({ children, ...args }) => {
  return <Title {...args}>{children}</Title>;
};

export const Title1 = Template.bind({});
Title1.args = {
  children: 'EasyDev',
  order: 1,
};

export const Title2 = Template.bind({});
Title2.args = {
  children: 'EasyDev',
  order: 1,
};

export const Title3 = Template.bind({});
Title3.args = {
  children: 'EasyDev',
  order: 3,
};

export const Title4 = Template.bind({});
Title4.args = {
  children: 'EasyDev',
  order: 4,
};

export const Title5 = Template.bind({});
Title5.args = {
  children: 'EasyDev',
  order: 5,
};

export const Title6 = Template.bind({});
Title6.args = {
  children: 'EasyDev',
  order: 6,
};
