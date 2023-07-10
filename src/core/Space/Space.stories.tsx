import { Meta, StoryFn } from '@storybook/react';

import { ControlWithLabel, Radio } from '@core/Controls';

import { Space } from '.';

export default {
  title: 'Core/Space',
  component: Space,
  argTypes: {
    children: {
      description: 'ReactNode | ReactNode[]',
    },
    size: {
      type: 'number',
      control: 'number',
      description: 'size of spacing in pixels',
    },
    alignItems: {
      type: 'string',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'baseline'],
    },
    justifyContent: {
      type: 'string',
      control: 'select',
      options: ['flex-start', 'flex-end', 'center', 'space-between', 'space=around', 'space-evenly'],
    },
    direction: {
      type: 'string',
      control: 'select',
      options: ['row', 'column', 'row-reverse', 'column-reverse'],
    },
  },
} as Meta<typeof Space>;

const Template: StoryFn<typeof Space> = ({ ...args }) => {
  return (
    <Space {...args}>
      <ControlWithLabel label="Radio 1" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 2" control={<Radio name="name" defaultChecked />} />
      <ControlWithLabel label="Radio 3" control={<Radio name="name" />} />
      <ControlWithLabel label="Radio 4" control={<Radio name="name" />} />
    </Space>
  );
};

export const DefaultSpace = Template.bind({});
DefaultSpace.args = {};
