import { useRef, FocusEvent, useState } from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'material-symbols';

import { Content, Header, Input } from './Components';
import { DatepickerWrapper } from './styles';

type DatepickerType<T extends boolean | undefined = undefined> = ReactDatePickerProps<never, T> & {
  label: string;
};

type DateType<T> = T extends false | undefined ? Date | null : [Date | null, Date | null];

export type DatePickerMode = 'date' | 'year' | 'month';

export const Datepicker = <T extends boolean | undefined>({
  onChange,
  dateFormat = 'dd.MM.yyyy',
  yearItemNumber = 8,
  placeholderText = ' ',
  label,
  ...props
}: DatepickerType<T>) => {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<DatePickerMode>('date');

  const refInput = useRef<HTMLInputElement>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setOpen(true);
    props.onFocus && props.onFocus(event);
  };

  const handleChange = (date: DateType<T>, event: React.SyntheticEvent<HTMLInputElement, Event> | undefined) => {
    if (mode === 'year') setMode('month');
    if (mode === 'month') setMode('date');
    if (mode === 'date') onChange(date, event);
  };

  const handleCancel = (event: React.SyntheticEvent<HTMLInputElement | HTMLButtonElement, Event> | undefined) => {
    props.selectsRange ? onChange([null, null] as DateType<T>, event) : onChange(null as DateType<T>, event);
    setOpen(false);
  };

  const handleApply = () => {
    setOpen(false);
  };

  return (
    <DatepickerWrapper>
      <DatePicker
        open={open}
        onFocus={handleFocus}
        onChange={handleChange}
        onClickOutside={() => setOpen(false)}
        dateFormat={dateFormat}
        showYearPicker={mode === 'year'}
        showMonthYearPicker={mode === 'month'}
        formatWeekDay={(nameOfDay) => nameOfDay.slice(0, 3)}
        yearItemNumber={yearItemNumber}
        placeholderText={placeholderText}
        {...props}
        customInput={<Input open={open} label={label} ref={refInput} />}
        renderCustomHeader={Header(mode, setMode)}
      >
        {mode === 'date' && <Content handleApply={handleApply} handleCancel={handleCancel} />}
      </DatePicker>
    </DatepickerWrapper>
  );
};
