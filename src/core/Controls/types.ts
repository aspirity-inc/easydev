import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';

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

export type CheckboxPropsType = ControlBasePropsType & {
  checkboxLabelWrapProps?: Pick<BaseComponentType, 'style'>;
  checkboxContainerProps?: Pick<BaseComponentType, 'style'>;
  checkboxWrapProps?: Pick<BaseComponentType, 'style'>;
  checkMarkProps?: Pick<BaseComponentType, 'style'>;
  doneIconProps?: Pick<BaseComponentType, 'style'>;
  checkboxLabelProps?: Pick<BaseComponentType, 'style'>;
};

export type RadioPropsType = ControlBasePropsType & {
  radioLabelWrapProps?: Pick<BaseComponentType, 'style'>;
  radioContainerProps?: Pick<BaseComponentType, 'style'>;
  radioWrapProps?: Pick<BaseComponentType, 'style'>;
  radioItemInnerProps?: Pick<BaseComponentType, 'style'>;
  radioLabelProps?: Pick<BaseComponentType, 'style'>;
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
  toggleBackground?: CSSProperties['background'];
  toggleInnerBackground?: CSSProperties['background'];
  toggleWrapProps?: Pick<BaseComponentType, 'style'>;
  toggleInnerProps?: Pick<BaseComponentType, 'style'>;
  toggleLabelWrapProps?: Pick<BaseComponentType, 'style'>;
  toggleContainerProps?: Pick<BaseComponentType, 'style'>;
  toggleLabelProps?: Pick<BaseComponentType, 'style'>;
};

export type ToggleWrapProps = {
  $toggleBackground?: CSSProperties['background'];
  $toggleInnerBackground?: CSSProperties['background'];
  $isChecked?: boolean;
};
