import { CSSProperties, useEffect, useRef, useState } from 'react';

import { StyledLabelText } from '@core/Inputs/styles';
import {
  StyledCounter,
  StyledCharactersNumber,
  StyledTextarea,
  StyledTextareaLabel,
  StyledWrapper,
} from '@core/Inputs/Textarea/styles';
import { Text } from '@core/Typography';

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  className?: string;
  style?: CSSProperties;
  id: string;
  placeholder?: string;
  label: string;
  showLimit?: boolean;
  autoresized?: boolean;
  softLimit?: boolean;
};

export const Textarea = ({
  id,
  label,
  value,
  maxLength = 1000,
  disabled,
  showLimit = true,
  autoresized = true,
  softLimit = false,
  onChange,
  onBlur,
  onFocus,
  ...props
}: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isOverflow, setIsOverflow] = useState(false);
  const [charactersNumber, setCharactersNumber] = useState(0);
  const filled = Boolean(value);
  const showAsLabel = Boolean(label) && (isFocused || filled);

  useEffect(() => {
    if (autoresized && ref.current) {
      ref.current.style.height = '0px';
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  const handleFocus = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    if (onFocus) onFocus(event);
  };

  const handleBlur = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    if (onBlur) onBlur(event);
  };

  const calcCharactersNumber = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharactersNumber(e.target.value.length);
    e.target.value.length > maxLength ? setIsOverflow(true) : setIsOverflow(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    calcCharactersNumber(e);
    if (onChange) onChange(e);
  };

  return (
    <StyledWrapper $disabled={disabled || false}>
      <StyledTextareaLabel $showAsLabel={showAsLabel} htmlFor={id}>
        <StyledLabelText $showAsLabel={showAsLabel} variant="caption">
          {label}
        </StyledLabelText>
      </StyledTextareaLabel>
      <StyledTextarea
        id={id}
        ref={ref}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        disabled={disabled}
        maxLength={!softLimit ? maxLength : undefined}
        {...props}
        $filled={filled}
        $showLabel={showAsLabel}
      />
      {showLimit && (
        <StyledCounter>
          <Text tag="p" variant="caption">
            <StyledCharactersNumber $isOverflow={isOverflow}>{charactersNumber}</StyledCharactersNumber>/{maxLength}
          </Text>
        </StyledCounter>
      )}
    </StyledWrapper>
  );
};
