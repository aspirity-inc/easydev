import { useEffect, useRef, useState } from 'react';

import {
  StyledCounterText,
  StyledCharactersNumber,
  StyledTextarea,
  StyledTextareaLabel,
  StyledTextareaLabelText,
  StyledTextareaWrapper,
} from './styles';
import { TextareaProps } from '../types';

export const Textarea = ({
  label,
  value,
  maxLength = 1000,
  disabled,
  placeholder = ' ',
  showLimit = true,
  autoresized = true,
  softLimit = false,
  onChange,
  ...props
}: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [charactersNumber, setCharactersNumber] = useState(0);
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    if (autoresized && ref.current) {
      ref.current.style.height = '0px';
      const scrollHeight = ref.current.scrollHeight;
      ref.current.style.height = scrollHeight + 'px';
    }
  }, [autoresized, value]);

  const calcCharactersNumber = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCharactersNumber(e.target.value.length);
    e.target.value.length > maxLength ? setIsOverflow(true) : setIsOverflow(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    calcCharactersNumber(e);
    if (onChange) onChange(e);
  };

  const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(true);
    if (props.onFocus) props.onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    setFocused(false);
    if (props.onBlur) props.onBlur(e);
  };

  return (
    <StyledTextareaWrapper
      className="easy_textarea-wrapp"
      $disabled={disabled || false}
      $focused={focused}
      $filled={Boolean(value)}
    >
      <StyledTextareaLabel className="easy_textarea-label">
        <StyledTextarea
          className="easy_textarea-item"
          ref={ref}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={disabled}
          placeholder={placeholder}
          maxLength={!softLimit ? maxLength : undefined}
          {...props}
          $filled={Boolean(value)}
          $autoresized={autoresized}
        />
        <StyledTextareaLabelText>{label}</StyledTextareaLabelText>
      </StyledTextareaLabel>
      {showLimit && (
        <StyledCounterText className="easy_textarea-counter" variant="caption">
          <StyledCharactersNumber $isOverflow={isOverflow}>{charactersNumber}</StyledCharactersNumber>/{maxLength}
        </StyledCounterText>
      )}
    </StyledTextareaWrapper>
  );
};
