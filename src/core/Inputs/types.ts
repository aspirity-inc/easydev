import { CSSProperties, ReactNode } from 'react';

export type InputBaseStatus = 'warning' | 'error' | 'loading' | 'success';

export type StatusProps = {
  $status?: InputBaseStatus;
};

export type InputsBaseProps = {
  $filled: boolean;
};

export type StyledInputProps = InputsBaseProps & StatusProps;

export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  className?: string;
  style?: CSSProperties;
  label: string;
  error?: string;
  warning?: string;
  message?: string;
  isLoading?: boolean;
  icons?: IconsProps;
  renderExtraMessage?: () => React.ReactNode;
};

export type TextareaProps = InputsBaseProps & { $autoresized: boolean };

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
