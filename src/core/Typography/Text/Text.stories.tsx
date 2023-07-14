import { Meta, StoryFn } from '@storybook/react';

import { Text } from '.';

export default {
  title: 'Core/Typography/Text',
  component: Text,
  argTypes: {
    tag: {
      type: 'string',
      description: 'HTML tag',
      control: {
        type: 'select',
      },
      options: ['p', 'span'],
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    variant: {
      type: 'string',
      control: 'select',
      options: ['body1', 'body2', 'body3', 'body4', 'caption', 'tooltip'],
      table: { defaultValue: { summary: 'body1' } },
    },
    ellipsis: {
      type: { name: 'object', value: { raw: Object } },
      description: '{ rows: number }',
    },
    color: {
      type: 'string',
      control: { type: 'color' },
    },
    bgColor: {
      type: 'string',
      control: { type: 'color' },
    },
    className: {},
    style: {},
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = ({ children, ...args }) => {
  return <Text {...args}>{children}</Text>;
};

export const DefaultText = Template.bind({});
DefaultText.args = {
  children: 'EasyDev the greatest',
};

export const TextWithStyle = Template.bind({});
TextWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { fontStyle: 'italic' },
};

export const EllipsisText = Template.bind({});
EllipsisText.args = {
  children:
    "Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other \"longest texts ever\" on the internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty long. Not the longest, but still pretty long. I hope this one won't get lost somehow. Anyways, let's talk about WAFFLES! I like waffles. Waffles are cool. Waffles is a funny word.",
  ellipsis: { rows: 2 },
};
