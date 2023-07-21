import { ChangeEvent, useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { RangeSlider } from '.';

export default {
  title: 'Core/Progress/RangeSlider',
  component: RangeSlider,
} satisfies Meta<typeof RangeSlider>;

const Template: StoryFn<typeof RangeSlider> = ({ ...args }) => {
  const [value, setValue] = useState('25');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

  return <RangeSlider value={value} onChange={onChange} min="0" max="100" {...args} />;
};

export const DefaultProgress: StoryFn<typeof RangeSlider> = Template.bind({});
