import { ReactNode } from 'react';

export type InputBaseStatus = 'warning' | 'error' | 'loading' | 'success';

export type InputProps = {
  $filled: boolean;
  $showLabel: boolean;
  $status?: InputBaseStatus;
};

export type LabelProps = {
  $showAsLabel: boolean;
};

export type StatusProps = {
  $status?: InputBaseStatus;
};

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
