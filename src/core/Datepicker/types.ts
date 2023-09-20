import type { InputHTMLAttributes } from 'react';

import type { ReactDatePickerProps } from 'react-datepicker';

export type DatepickerType<T extends boolean | undefined = undefined> = ReactDatePickerProps<never, T> & {
  label: string;
};

export type DateType<T> = T extends false | undefined ? Date | null : [Date | null, Date | null];

export type DatePickerMode = 'date' | 'year' | 'month';

export type DatepickerInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
  isClearable: boolean | undefined;
};

export type StyleInputProps = {
  $open: boolean;
};
