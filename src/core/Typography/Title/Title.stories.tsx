import { Title } from '.';
import { titleTagVariants } from '../constants.ts';
import type { Meta, StoryFn } from '@storybook/react';

const metaTitle: Meta<typeof Title> = {
  title: 'Core/Typography/Title',
  component: Title,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Title variants. h1-h6',
      defaultValue: 'h1',
      control: {
        type: 'select',
      },
      options: titleTagVariants,
      table: {
        defaultValue: { summary: 'h1' },
      },
    },
    className: {
      description: 'CSS class for additional styling',
    },
    style: {
      description: 'Additional styles',
    },
  },
};
export default metaTitle;

const Template: StoryFn<typeof Title> = ({ children, ...args }) => {
  return <Title {...args}>{children}</Title>;
};

export const DefaultTitle: StoryFn<typeof Title> = Template.bind({});
DefaultTitle.args = {
  children: 'EasyDev the greatest',
};

export const TitleWithStyle: StoryFn<typeof Title> = Template.bind({});
TitleWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { fontStyle: 'italic' },
};
