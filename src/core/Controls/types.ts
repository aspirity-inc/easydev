import { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

export type ControlColorType = 'success' | 'warning' | 'error' | CSSProperties['color'];

export type ControlBasePropsType = ComponentPropsWithoutRef<'input'> & {
  disabled?: boolean;
  color?: ControlColorType;
  defaultChecked?: boolean;
  label?: ReactNode;
};
