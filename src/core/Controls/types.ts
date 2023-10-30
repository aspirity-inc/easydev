import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type ControlColorType = 'success' | 'warning' | 'error';

export type ControlContainerProps = {
  $reversed?: boolean;
};

export type ControlBasePropsType = ComponentPropsWithoutRef<'input'> & {
  disabled?: boolean;
  color?: ControlColorType;
  defaultChecked?: boolean;
  label?: ReactNode;
  reversed?: boolean;
};

export type ControlWrapperType = BaseComponentType & {
  label?: boolean;
};

export type ControlProps = {
  disabled?: boolean;
  $color?: ControlColorType;
};

export type ToggleValue = boolean;

export type TogglePropsType = ControlBasePropsType & {
  checked?: ToggleValue;
  defaultChecked?: ToggleValue;
  onChange?: (value: ToggleValue) => void;
  isDayNightMode?: boolean;
};

export type ToggleWrapProps = {
  $isDayNightMode: boolean;
  $isChecked?: boolean;
};
