import { Text } from '.';
import { textTagVariants, textVariants } from '../constants.ts';
import type { Meta, StoryFn } from '@storybook/react';

const metaText: Meta<typeof Text> = {
  title: 'Core/Typography/Text',
  component: Text,
  argTypes: {
    as: {
      type: 'string',
      description: 'HTML tag',
      control: {
        type: 'select',
      },
      options: textTagVariants,
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    variant: {
      type: 'string',
      control: 'select',
      options: textVariants,
      table: { defaultValue: { summary: 'body1' } },
    },
    ellipsis: {
      type: { name: 'object', value: { rows: { name: 'number' } } },
      description: '{ rows: number }',
    },
    className: {},
    style: {},
  },
};
export default metaText;

const Template: StoryFn<typeof Text> = ({ children, ...args }) => {
  return <Text {...args}>{children}</Text>;
};

export const DefaultText: StoryFn<typeof Text> = Template.bind({});
DefaultText.args = {
  children: 'EasyDev the greatest',
};

export const TextWithStyle: StoryFn<typeof Text> = Template.bind({});
TextWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { fontStyle: 'italic' },
};

export const EllipsisText: StoryFn<typeof Text> = Template.bind({});
EllipsisText.args = {
  children:
    "Hello, everyone! This is the LONGEST TEXT EVER! I was inspired by the various other \"longest texts ever\" on the internet, and I wanted to make my own. So here it is! This is going to be a WORLD RECORD! This is actually my third attempt at doing this. The first time, I didn't save it. The second time, the Neocities editor crashed. Now I'm writing this in Notepad, then copying it into the Neocities editor instead of typing it directly in the Neocities editor to avoid crashing. It sucks that my past two attempts are gone now. Those actually got pretty long. Not the longest, but still pretty long. I hope this one won't get lost somehow. Anyways, let's talk about WAFFLES! I like waffles. Waffles are cool. Waffles is a funny word.",
  ellipsis: { rows: 2 },
};
