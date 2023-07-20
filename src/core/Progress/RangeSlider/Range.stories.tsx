import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { RangeSlider } from '.';

export default {
  title: 'Core/Progress/RangeSlider',
  component: RangeSlider,
  argTypes: {
    tooltip: {
      type: 'boolean',
      control: 'boolean',
      description: 'Is tooltip element exist',
      table: { defaultValue: { summary: true } },
    },
    tooltipShown: {
      type: 'string',
      control: 'radio',
      options: ['onHover', 'always'],
      description: 'Show tooltip on hover or always',
      table: { defaultValue: { summary: 'onHover' } },
    },
  },
} as Meta<typeof RangeSlider>;

const Template: StoryFn<typeof RangeSlider> = ({ ...args }) => {
  const [value, setValue] = useState('50');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <RangeSlider value={value} onChange={onChange} min="0" max="100" {...args} />;
};

export const DefaultProgress = Template.bind({});
DefaultProgress.args = {};
