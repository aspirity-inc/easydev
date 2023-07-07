import { ComponentPropsWithoutRef } from 'react';

export type ControlColorType = 'success' | 'warning' | 'error' | string;

export type ControlBasePropsType = ComponentPropsWithoutRef<'input'> & {
  disabled?: boolean;
  color?: ControlColorType;
  defaultChecked?: boolean;
};
