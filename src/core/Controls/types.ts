import type { ComponentPropsWithoutRef, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

export type ControlColorType = 'success' | 'warning' | 'error';

export type ControlBasePropsType = ComponentPropsWithoutRef<'input'> & {
  disabled?: boolean;
  color?: ControlColorType;
  defaultChecked?: boolean;
  label?: ReactNode;
};

export type ControlWrapperType = BaseComponentType & {
  label?: boolean;
};

export type ControlProps = {
  disabled?: boolean;
  $color?: ControlColorType;
};
