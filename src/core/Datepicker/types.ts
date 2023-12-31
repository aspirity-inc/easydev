import type { InputHTMLAttributes } from 'react';

import type { BaseComponentType } from '@core/Box/types';

import type { ReactDatePickerProps } from 'react-datepicker';

export type DatepickerType<T extends boolean | undefined = undefined> = ReactDatePickerProps<never, T> & {
  label: string;
  datepickerWrapProps?: Pick<BaseComponentType, 'style'>;
};

export type DateType<T> = T extends false | undefined ? Date | null : [Date | null, Date | null];

export type DatePickerMode = 'date' | 'year' | 'month';

export type DatepickerInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
  isClearable: boolean | undefined;
};

export type StyleInputProps = BaseComponentType & {
  $open: boolean;
};
