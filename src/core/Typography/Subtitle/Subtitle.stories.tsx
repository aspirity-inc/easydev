import { Subtitle } from '.';
import { subtitleLevelVariants, subtitleTagVariants } from '../constants.ts';
import type { Meta, StoryFn } from '@storybook/react';

const metaSubtitle: Meta<typeof Subtitle> = {
  title: 'Core/Typography/Subtitle',
  component: Subtitle,
  argTypes: {
    as: {
      type: 'string',
      description: 'HTML tag',
      control: {
        type: 'select',
      },
      options: subtitleTagVariants,
      table: { defaultValue: { summary: 'h4' } },
    },
    level: {
      type: 'number',
      description: 'Size of subheading element',
      control: 'select',
      options: subtitleLevelVariants,
      table: { defaultValue: { summary: 1 } },
    },
    className: {},
    style: {},
  },
};
export default metaSubtitle;

const Template: StoryFn<typeof Subtitle> = ({ children, ...args }) => {
  return <Subtitle {...args}>{children}</Subtitle>;
};

export const DefaultSubtitle: StoryFn<typeof Subtitle> = Template.bind({});
DefaultSubtitle.args = {
  children: 'EasyDev the greatest',
};

export const SubtitleWithStyle: StoryFn<typeof Subtitle> = Template.bind({});
SubtitleWithStyle.args = {
  children: 'EasyDev the greatest',
  style: { fontStyle: 'italic' },
};
