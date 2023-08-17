import { useState } from 'react';

import { InputIcon } from './InputIcon';
import {
  StyledExtraMessage,
  StyledInput,
  StyledInputLabel,
  StyledMessageWrapper,
  StyledStatus,
  StyledInputWrapper,
} from './styles';
import { StyledLabelText } from '../styles';
import { InputProps } from '../types';

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
  placeholder = ' ',
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

  // TODO: remove prop "$filled" and do it on css
  return (
    <StyledInputWrapper $disabled={disabled || false} $isLoading={isLoading || false}>
      <StyledInputLabel>
        <StyledLabelText>{label}</StyledLabelText>
        <StyledInput
          type={getInputType()}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
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
        <StyledStatus $status={getInputStatus()} variant="caption">
          {getInputMessage()}
        </StyledStatus>
        <StyledExtraMessage variant="caption">{renderExtraMessage && renderExtraMessage()}</StyledExtraMessage>
      </StyledMessageWrapper>
    </StyledInputWrapper>
  );
};
