import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from 'react';

import type { BaseComponentType } from '@core/Box/types.ts';

import type { Props } from 'react-input-mask';

export type InputBaseStatus = 'warning' | 'error' | 'loading';

export type StatusProps = {
  $status?: InputBaseStatus;
};

export type StyledInputLabelProps = { $disabled: boolean };

export type InputsBaseProps = {
  $filled: boolean;
};

export type StyledInputProps = InputsBaseProps & StatusProps & { $hasIcon: boolean };

export type InputProps = ComponentPropsWithoutRef<'input'> & {
  className?: string;
  style?: CSSProperties;
  label: string;
  error?: string;
  warning?: string;
  message?: string;
  isLoading?: boolean;
  icons?: IconsProps;
  renderExtraMessage?: () => ReactNode;

  inputWrapProps?: Pick<BaseComponentType, 'style'>;
  inputLabelProps?: Pick<BaseComponentType, 'style'>;
  inputLabelTextProps?: Pick<BaseComponentType, 'style'>;
  inputAsteriskProps?: Pick<BaseComponentType, 'style'>;
  inputMessageContainerProps?: Pick<BaseComponentType, 'style'>;
  inputStatusMessageTextProps?: Pick<BaseComponentType, 'style'>;
  inputExtraMessageTextProps?: Pick<BaseComponentType, 'style'>;
};

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  label: string;
  showLimit?: boolean;
  autoresized?: boolean;
  softLimit?: boolean;
  error?: string;
  warning?: string;

  textareaWrapProps?: Pick<BaseComponentType, 'style'>;
  textareaLabelTextProps?: Pick<BaseComponentType, 'style'>;
  textareaLabelProps?: Pick<BaseComponentType, 'style'>;
  inputAsteriskProps?: Pick<BaseComponentType, 'style'>;
  textareaMessageContainerProps?: Pick<BaseComponentType, 'style'>;
  textareaStatusMessageTextProps?: Pick<BaseComponentType, 'style'>;
  inputStatusMessageTextProps?: Pick<BaseComponentType, 'style'>;
  textareaCounterProps?: Pick<BaseComponentType, 'style'>;
  charactersNumberProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledTextareaProps = InputsBaseProps & { $autoresized: boolean };
export type StyledTextareaWrapperProps = StatusProps & {
  $filled: boolean;
  $disabled: boolean;
  $focused: boolean;
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

export type MaskedInputProps = Props & InputProps;

export type CodeInputProps = BaseComponentType & {
  length?: number;
  error?: boolean;
  value?: string;
  onChange?: (value: string) => void;

  codeInputWrapProps?: Pick<BaseComponentType, 'style'>;
};

export type StyledCodeInputProps = { $filled: boolean; $focused: boolean; $error?: boolean };
