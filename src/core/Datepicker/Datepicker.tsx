import { useRef, FocusEvent, useState } from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'material-symbols';

import { Content } from './Components/Content';
import { Header } from './Components/Header';
import { Input } from './Components/Input';
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

  const refInput = useRef<HTMLInputElement>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setOpen(true);
    props.onFocus && props.onFocus(event);
  };

  const handleChange = (date: Date, event: React.SyntheticEvent<HTMLInputElement, Event> | undefined) => {
    if (mode === 'year') setMode('month');
    if (mode === 'month') setMode('date');
    if (mode === 'date') onChange(date, event);
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
        <Content mode={mode} onChange={onChange} setOpen={setOpen} />
      </DatePicker>
    </DatepickerWrapper>
  );
};
