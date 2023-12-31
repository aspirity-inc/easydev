import { Radio } from '@core/Controls';

import { Space } from '.';
import type { Meta, StoryFn } from '@storybook/react';

const metaSpace: Meta<typeof Space> = {
  title: 'Core/Space',
  component: Space,
  argTypes: {
    children: {
      description: 'ReactNode | ReactNode[]',
    },
    size: {
      type: 'number',
      control: 'number',
      description: 'Size of spacing in pixels. Only positive value. Based on "gap" property.',
    },
    alignItems: {
      type: 'string',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline'],
    },
    justifyContent: {
      type: 'string',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'space-evenly'],
    },
    direction: {
      type: 'string',
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
  },
};
export default metaSpace;

const Template: StoryFn<typeof Space> = ({ ...args }) => {
  return (
    <Space {...args}>
      <Radio label="Radio 1" name="radio" />
      <Radio label="Radio 2" name="radio" />
      <Radio label="Radio 3" name="radio" />
      <Radio label="Radio 4" name="radio" />
    </Space>
  );
};

export const DefaultSpace: StoryFn<typeof Space> = Template.bind({});
DefaultSpace.args = {};
