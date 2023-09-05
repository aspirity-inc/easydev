import { InputHTMLAttributes, forwardRef } from 'react';

import {
  StyledDatepickerIcon,
  StyledDatepickerInput,
  StyledDatepickerLabel,
  StyledDatepickerText,
  StyledDatepickerClearIcon,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
  isClearable: boolean | undefined;
};

export const Input = forwardRef<HTMLInputElement | null, InputProps>(
  ({ isClearable, open, label, disabled, value, ...props }, ref) => {
    return (
      <StyledDatepickerLabel $open={open}>
        <StyledDatepickerInput $open={open} {...props} value={value} disabled={disabled} ref={ref} />
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
