import React, { CSSProperties, useState } from 'react';

import { InputIcon } from '@core/Inputs/Input/InputIcon';
import {
  StyledExtraMessage,
  StyledInput,
  StyledInputLabel,
  StyledMessageWrapper,
  StyledStatus,
  StyledInputWrapper,
} from '@core/Inputs/Input/styles';
import { StyledLabelText } from '@core/Inputs/styles';
import { IconsProps } from '@core/Inputs/types';

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

export const Input = ({
  type = 'text',
  label,
  value,
  error,
  warning,
  message,
  isLoading,
  icons,
  disabled,
  renderExtraMessage,
  ...props
}: InputProps) => {
  const [isHidePassword, setIsHidePassword] = useState(true);
  const onToggle = () => {
    setIsHidePassword((prev) => !prev);
  };

  const getInputStatus = () => {
    if (error) {
      return 'error';
    } else if (warning) {
      return 'warning';
    } else if (isLoading) {
      return 'loading';
    }
  };

  const getInputMessage = () => error || warning || message;

  const getInputType = () => {
    if (type === 'password') return isHidePassword ? 'password' : 'text';

    return type;
  };

  return (
    <StyledInputWrapper $disabled={disabled || false}>
      <StyledInputLabel>
        <StyledLabelText tag="p" variant="inputLabel">
          {label}
        </StyledLabelText>
        <StyledInput
          type={getInputType()}
          value={value}
          disabled={disabled}
          {...props}
          $filled={Boolean(value)}
          $status={getInputStatus()}
        />
        <InputIcon
          type={type}
          icons={icons}
          status={getInputStatus()}
          disabled={disabled || false}
          isHidePassword={isHidePassword}
          onToggle={onToggle}
        />
      </StyledInputLabel>

      <StyledMessageWrapper>
        <StyledStatus $status={getInputStatus()} tag="p" variant="caption">
          {getInputMessage()}
        </StyledStatus>
        <StyledExtraMessage tag="p" variant="caption">
          {renderExtraMessage && renderExtraMessage()}
        </StyledExtraMessage>
      </StyledMessageWrapper>
    </StyledInputWrapper>
  );
};
