import { forwardRef } from 'react';

import {
  StyledDatepickerClearIcon,
  StyledDatepickerIcon,
  StyledDatepickerInput,
  StyledDatepickerLabel,
  StyledDatepickerText,
} from './styles';
import type { DatepickerInputProps } from '../../types.ts';

export const Input = forwardRef<HTMLInputElement | null, DatepickerInputProps>(
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
        <StyledDatepickerIcon />

        {isClearable && value && <StyledDatepickerClearIcon $disabled={disabled || false} />}
      </StyledDatepickerLabel>
    );
  }
);
