import { ReactNode } from 'react';

export type InputBaseStatus = 'warning' | 'error' | 'loading' | 'success';

export type LabelProps = {
  $showAsLabel: boolean;
};

export type StatusProps = {
  $status?: InputBaseStatus;
};

export type InputsBaseProps = {
  $filled: boolean;
  $showLabel: boolean;
};

export type InputProps = InputsBaseProps & StatusProps;

export type IconsProps = {
  warningIcon?: ReactNode;
  errorIcon?: ReactNode;
  loadingIcon?: ReactNode;
  passwordShowIcon?: ReactNode;
  passwordHideIcon?: ReactNode;
};

export type IconProps = {
  icon?: ReactNode;
};
