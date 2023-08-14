import { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Datepicker } from '.';

const metaDatepicker: Meta<typeof Datepicker> = {
  title: 'Core/Datepicker',
  component: Datepicker,
  argTypes: {},
};
export default metaDatepicker;

const TemplateDatepicker: StoryFn<typeof Datepicker> = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div style={{ height: '500px' }}>
      <Datepicker {...args} selected={startDate} onChange={setStartDate} />
    </div>
  );
};

export const DefaultDatepicker: StoryFn<typeof Datepicker> = TemplateDatepicker.bind({});
DefaultDatepicker.args = {
  label: 'Birth date',
};

type Story = StoryObj<typeof Datepicker>;
export const DisabledDatepicker = {
  args: {
    value: '24.12.1993',
    label: 'Birth date',
    disabled: true,
  },
} satisfies Story;

export const DisabledEmptyDatepicker = {
  args: {
    label: 'Birth date',
    disabled: true,
  },
} satisfies Story;
