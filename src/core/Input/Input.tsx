import { CSSProperties, useState } from 'react';
import { StyledInput, StyledLabel, StyledWrapper } from './styles';
import React from 'react';
import { Text } from './../Typography/Text/index';

export type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  label?: string;
};

export const Input = ({ className, placeholder = '', type = 'text', label, value, ...props }: InputProps) => {
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
      />
      {showLabel ? (
        <StyledLabel $filled={filled}>
          <Text variant="caption">{label}</Text>
        </StyledLabel>
      ) : null}
    </StyledWrapper>
  );
};
