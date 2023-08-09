import { useRef, FocusEvent, useState } from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'material-symbols';

import { CustomContainer } from './CustomContainer';
import { CustomHeader } from './CustomHeader';
import { CustomInput } from './CustomInput';
import { DatepickerWrapper } from './styles';

type DatepickerType = ReactDatePickerProps & {
  label: string;
};

export type DatePickerMode = 'date' | 'year' | 'month';

export const Datepicker = ({
  onChange,
  dateFormat = 'dd.MM.yyyy',
  yearItemNumber = 8,
  placeholderText = ' ',
  label,
  ...props
}: DatepickerType) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<DatePickerMode>('date');

  const refCustomInput = useRef<HTMLInputElement>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setOpen(true);
    props.onFocus && props.onFocus(event);
  };

  const handleChange = (date: Date, event: React.SyntheticEvent<HTMLInputElement, Event> | undefined) => {
    if (mode === 'year') setMode('month');
    if (mode === 'month') setMode('date');
    onChange(date, event);
  };

  return (
    <DatepickerWrapper>
      <DatePicker
        open={open}
        onFocus={handleFocus}
        onChange={handleChange}
        dateFormat={dateFormat}
        showYearPicker={mode === 'year'}
        showMonthYearPicker={mode === 'month'}
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
        yearItemNumber={yearItemNumber}
        placeholderText={placeholderText}
        {...props}
        customInput={<CustomInput open={open} label={label} ref={refCustomInput} />}
        calendarContainer={CustomContainer(mode, onChange, setOpen)}
        renderCustomHeader={CustomHeader(mode, setMode)}
      />
    </DatepickerWrapper>
  );
};
