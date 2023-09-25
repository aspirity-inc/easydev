import { type ChangeEvent, useState } from 'react';

import { RangeSlider } from '.';
import type { Meta, StoryFn } from '@storybook/react';

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
