import { forwardRef, type InputHTMLAttributes } from 'react';

import {
  StyledDatepickerClearIcon,
  StyledDatepickerIcon,
  StyledDatepickerInput,
  StyledDatepickerLabel,
  StyledDatepickerText,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
  isClearable: boolean | undefined;
};

export const Input = forwardRef<HTMLInputElement | null, InputProps>(
  ({ isClearable, open, label, disabled, value, ...props }, ref) => {
    return (
      <StyledDatepickerLabel className="easy_datepicker-label" $open={open}>
        <StyledDatepickerInput
          className="easy_datepicker-input"
          $open={open}
          {...props}
          value={value}
          disabled={disabled}
          ref={ref}
        />
        <StyledDatepickerText>{label}</StyledDatepickerText>
        <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>

        {isClearable && value && (
          <StyledDatepickerClearIcon $disabled={disabled || false} className="material-symbols-rounded">
            cancel
          </StyledDatepickerClearIcon>
        )}
      </StyledDatepickerLabel>
    );
  }
);
