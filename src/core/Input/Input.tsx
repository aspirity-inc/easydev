import { CSSProperties, useState } from 'react';
import {
  IconWrapper,
  InputStatus,
  StyledInput,
  StyledLabel,
  StyledStatus,
  StyledInputWrapper,
  StyledWrapper,
} from './styles';
import React from 'react';
import { Text } from './../Typography/Text/index';
import { InputStatusIcon } from './InputStatusIcon';

export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  label?: string;
  status?: InputStatus;
  statusText?: string;
};

export const Input = ({
  className,
  placeholder = '',
  type = 'text',
  label,
  value,
  status,
  statusText,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const filled = Boolean(value);
  const showLabel = Boolean(label) && (isFocused || filled);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <StyledWrapper>
      <StyledInputWrapper>
        <StyledInput
          type={type}
          className={className}
          placeholder={isFocused ? '' : placeholder}
          value={value}
          onFocus={handleFocus}
          onBlur={handleBlur}
          {...props}
          $filled={filled}
          $showLabel={showLabel}
          $status={status}
        />
        {showLabel ? (
          <StyledLabel $filled={filled}>
            <Text variant="caption">{label}</Text>
          </StyledLabel>
        ) : null}
        {status && (
          <IconWrapper>
            <InputStatusIcon status={status} />
          </IconWrapper>
        )}
      </StyledInputWrapper>
      {statusText && (
        <StyledStatus $status={status}>
          <Text tag="div" variant="caption">
            {statusText}
          </Text>
        </StyledStatus>
      )}
    </StyledWrapper>
  );
};
