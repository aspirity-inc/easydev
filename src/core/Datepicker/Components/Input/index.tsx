import { InputHTMLAttributes, forwardRef } from 'react';

import { StyledDatepickerIcon, StyledDatepickerInput, StyledDatepickerLabel, StyledDatepickerText } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
};

export const Input = forwardRef<HTMLInputElement | null, InputProps>((props, ref) => {
  return (
    <StyledDatepickerLabel $open={props.open}>
      <StyledDatepickerText>{props.label}</StyledDatepickerText>
      <StyledDatepickerInput $open={props.open} {...props} ref={ref} />
      <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>
    </StyledDatepickerLabel>
  );
});
