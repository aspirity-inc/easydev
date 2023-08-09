import { InputHTMLAttributes, forwardRef } from 'react';

import { StyledDatepickerIcon, StyledDatepickerInput, StyledDatepickerLabel, StyledDatepickerText } from './styles';

type CustomInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
};

export const CustomInput = forwardRef<HTMLInputElement | null, CustomInputProps>((props, ref) => {
  return (
    <StyledDatepickerLabel $open={props.open}>
      <StyledDatepickerText>{props.label}</StyledDatepickerText>
      <StyledDatepickerInput $open={props.open} {...props} ref={ref} />
      <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>
    </StyledDatepickerLabel>
  );
});
