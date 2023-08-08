import { InputHTMLAttributes, forwardRef, useRef, ChangeEvent } from 'react';

import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import 'material-symbols';

import { StyledDatepickerIcon, StyledDatepickerLabel, StyledDatepickerText, StyledDatepickerInput } from './styles';

type DatepickerType = ReactDatePickerProps & {
  label: string;
};

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

const CustomInput = forwardRef<HTMLInputElement | null, CustomInputProps>((props, ref) => {
  return (
    <StyledDatepickerLabel>
      <StyledDatepickerText>{props.label}</StyledDatepickerText>
      <StyledDatepickerInput {...props} ref={ref} />
      <StyledDatepickerIcon className="material-symbols-rounded" onClick={props.onClick}>
        calendar_today
      </StyledDatepickerIcon>
    </StyledDatepickerLabel>
  );
});

export const Datepicker = ({
  selected,
  onChange,
  dateFormat = 'dd.MM.yyyy',
  placeholderText = ' ',
  label,
  ...props
}: DatepickerType) => {
  const refCustomInput = useRef<HTMLInputElement>(null);

  const handleChange = (date: Date | null, e: ChangeEvent<HTMLInputElement>) => {
    onChange(date, e);
  };

  return (
    <DatePicker
      selected={selected}
      onChange={handleChange}
      dateFormat={dateFormat}
      placeholderText={placeholderText}
      {...props}
      customInput={<CustomInput label={label} ref={refCustomInput} />}
    />
  );
};
