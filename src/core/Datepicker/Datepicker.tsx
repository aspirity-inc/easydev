import { useRef, FocusEvent, useState } from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'material-symbols';

import { Header, Input } from './Components';
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
  isClearable,
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
    if (mode === 'date') {
      onChange(date, event);

      //Close calendar if it's simple datepicker or range datepicker sets second date
      if (!Array.isArray(date) || (Array.isArray(date) && date[1] !== null)) {
        setOpen(false);
      }
    }
  };

  return (
    <DatepickerWrapper className="easy_datepicker">
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
        isClearable={isClearable}
        customInput={<Input open={open} label={label} ref={refInput} isClearable={isClearable} />}
        renderCustomHeader={Header(mode, setMode)}
      />
    </DatepickerWrapper>
  );
};
