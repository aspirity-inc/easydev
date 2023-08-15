import { useState } from 'react';

import { Meta, StoryFn, StoryObj } from '@storybook/react';
import { styled } from 'styled-components';

import { Datepicker } from '.';
import { StyledDatepickerInput } from './Components/Input/styles';

const metaDatepicker: Meta<typeof Datepicker> = {
  title: 'Core/Datepicker',
  component: Datepicker,
  argTypes: {},
};
export default metaDatepicker;

const StyledWrapper = styled('div')`
  height: 500px;
  display: flex;
  gap: 24px;

  ${StyledDatepickerInput} {
    width: 148px;
  }
`;

const TemplateDatepickerRangeTwoInputs: StoryFn<typeof Datepicker> = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <StyledWrapper>
      <Datepicker
        {...args}
        label="Start date"
        selected={startDate}
        onChange={(date: Date | null) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
      />
      <Datepicker
        {...args}
        label="End date"
        selected={endDate}
        onChange={(date: Date | null) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
      />
    </StyledWrapper>
  );
};

export const DefaultDatepickerRangeTwoInputs: StoryFn<typeof Datepicker> = TemplateDatepickerRangeTwoInputs.bind({});
DefaultDatepickerRangeTwoInputs.args = {};

const TemplateDatepickerRange: StoryFn<typeof Datepicker> = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const onChange = (dates: [Date, Date]) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div style={{ height: '500px' }}>
      <Datepicker
        {...args}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
      />
    </div>
  );
};

export const DefaultDatepickerRange: StoryFn<typeof Datepicker> = TemplateDatepickerRange.bind({});
DefaultDatepickerRange.args = {
  label: 'Select range',
};

const TemplateDatepicker: StoryFn<typeof Datepicker> = ({ ...args }) => {
  const [startDate, setStartDate] = useState<Date | null>(null);

  return (
    <div style={{ height: '500px' }}>
      <Datepicker {...args} selected={startDate} onChange={(date: Date | null) => setStartDate(date)} />
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
