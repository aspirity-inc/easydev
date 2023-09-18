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
    <StyledInputWrapper className="easy_input-wrapp" $disabled={disabled || false} $isLoading={isLoading || false}>
      <StyledInputLabel className="easy_input-label">
        <StyledInput
          className="easy_input-item"
          type={getInputType()}
          value={value}
          disabled={disabled}
          placeholder={placeholder}
          {...props}
          $filled={Boolean(value)}
          $status={getInputStatus()}
        />
        <StyledLabelText>{label}</StyledLabelText>
        <InputIcon
          type={type}
          icons={icons}
          status={getInputStatus()}
          disabled={disabled || false}
          isHidePassword={isHidePassword}
          onToggle={onToggle}
        />
      </StyledInputLabel>

      {(getInputMessage() || renderExtraMessage) && (
        <StyledMessageWrapper className="easy_input-messageContainer">
          <StyledStatus className="easy_input-statusMessageText" $status={getInputStatus()} variant="caption">
            {getInputMessage()}
          </StyledStatus>
          <StyledExtraMessage className="easy_input-extraMessageText" variant="caption">
            {renderExtraMessage && renderExtraMessage()}
          </StyledExtraMessage>
        </StyledMessageWrapper>
      )}
    </StyledInputWrapper>
  );
};
