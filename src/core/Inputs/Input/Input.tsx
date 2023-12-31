import { forwardRef, useState } from 'react';

import { InputIcon } from './InputIcon';
import {
  StyledExtraMessage,
  StyledInput,
  StyledInputLabel,
  StyledMessageWrapper,
  StyledStatus,
  StyledInputWrapper,
} from './styles';
import { Asterisk, StyledLabelText } from '../styles';
import type { InputProps } from '../types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
      required,
      renderExtraMessage,
      inputWrapProps,
      inputLabelProps,
      inputLabelTextProps,
      inputAsteriskProps,
      inputMessageContainerProps,
      inputStatusMessageTextProps,
      inputExtraMessageTextProps,
      ...props
    },
    ref
  ) => {
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
      <StyledInputWrapper
        className="easy_input-wrap"
        $disabled={disabled || false}
        $isLoading={isLoading || false}
        {...inputWrapProps}
      >
        <StyledInputLabel className="easy_input-label" $disabled={disabled || false} {...inputLabelProps}>
          <StyledInput
            $hasIcon={Boolean(type === 'password' || error || warning || isLoading)}
            className="easy_input-item"
            type={getInputType()}
            value={value}
            disabled={disabled}
            placeholder={placeholder}
            required={required}
            ref={ref}
            {...props}
            $filled={Boolean(value)}
            $status={getInputStatus()}
          />
          <StyledLabelText {...inputLabelTextProps}>
            {label}{' '}
            {required && (
              <Asterisk className="easy_input-asterisk" {...inputAsteriskProps}>
                *
              </Asterisk>
            )}
          </StyledLabelText>
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
          <StyledMessageWrapper className="easy_input-messageContainer" {...inputMessageContainerProps}>
            <StyledStatus
              className="easy_input-statusMessageText"
              $status={getInputStatus()}
              variant="caption"
              {...inputStatusMessageTextProps}
            >
              {getInputMessage()}
            </StyledStatus>
            <StyledExtraMessage
              className="easy_input-extraMessageText"
              variant="caption"
              {...inputExtraMessageTextProps}
            >
              {renderExtraMessage && renderExtraMessage()}
            </StyledExtraMessage>
          </StyledMessageWrapper>
        )}
      </StyledInputWrapper>
    );
  }
);
