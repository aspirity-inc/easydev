import React, { CSSProperties, useState } from 'react';

import { Text } from '@core/Typography';

import { InputIcon } from './InputIcon';
import {
  StyledExtraMessage,
  StyledInput,
  StyledInputWrapper,
  StyledLabel,
  StyledLabelText,
  StyledMessageWrapper,
  StyledStatus,
  StyledWrapper,
} from '../styles';
import { IconsProps } from '../types';

export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  className?: string;
  style?: CSSProperties;
  label: string;
  id: string;
  error?: string;
  warning?: string;
  message?: string;
  isLoading?: boolean;
  icons?: IconsProps;
  renderExtraMessage?: () => React.ReactNode;
};

export const Input = ({
  type = 'text',
  id,
  label,
  value,
  error,
  warning,
  message,
  isLoading,
  icons,
  disabled,
  onBlur,
  onFocus,
  renderExtraMessage,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHidePassword, setIsHidePassword] = useState(true);
  const filled = Boolean(value);
  const showAsLabel = Boolean(label) && (isFocused || filled);

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  };

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
    <StyledWrapper $disabled={disabled || false}>
      <StyledInputWrapper>
        <StyledLabel $showAsLabel={showAsLabel} htmlFor={id}>
          <StyledLabelText $showAsLabel={showAsLabel} variant="caption">
            {label}
          </StyledLabelText>
        </StyledLabel>
        <StyledInput
          id={id}
          type={getInputType()}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          {...props}
          $filled={filled}
          $showLabel={showAsLabel}
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
      </StyledInputWrapper>

      <StyledMessageWrapper>
        <StyledStatus $status={getInputStatus()}>
          <Text tag="p" variant="caption">
            {getInputMessage()}
          </Text>
        </StyledStatus>
        <StyledExtraMessage>{renderExtraMessage && renderExtraMessage()}</StyledExtraMessage>
      </StyledMessageWrapper>
    </StyledWrapper>
  );
};
