import { useEffect, useRef, useState } from 'react';

import {
  StyledCounterText,
  StyledCharactersNumber,
  StyledTextarea,
  StyledTextareaLabel,
  StyledTextareaLabelText,
  StyledTextareaWrapper,
  StyledTextareaMessageWrapper,
} from './styles';
import { InputStatusIcon } from '../Input/InputIcon/InputStatusIcon';
import { StyledStatus } from '../Input/styles';
import { Asterisk } from '../styles';
import type { TextareaProps } from '../types';

export const Textarea = ({
  label,
  value,
  maxLength = 1000,
  disabled,
  placeholder = ' ',
  showLimit = true,
  autoresized = true,
  softLimit = false,
  error,
  warning,
  onChange,
  required,
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

  const getTextareaMessage = () => error || warning;

  const getTextareaStatus = () => {
    if (error) {
      return 'error';
    } else if (warning) {
      return 'warning';
    }
  };

  return (
    <StyledTextareaWrapper
      className="easy_textarea-wrap"
      $disabled={disabled || false}
      $focused={focused}
      $filled={Boolean(value)}
      $status={getTextareaStatus()}
    >
      <StyledTextareaLabel className="easy_textarea-label" $status={getTextareaStatus()}>
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
          required={required}
          {...props}
          $filled={Boolean(value)}
          $autoresized={autoresized}
        />
        <StyledTextareaLabelText>
          {label} {required && <Asterisk className="easy_input-asterisk">*</Asterisk>}
        </StyledTextareaLabelText>
      </StyledTextareaLabel>

      {getTextareaMessage() && (
        <StyledTextareaMessageWrapper gap={8} className="easy_textarea-messageContainer">
          <InputStatusIcon status={getTextareaStatus()} />
          <StyledStatus className="easy_textarea-statusMessageText" $status={getTextareaStatus()} variant="caption">
            {getTextareaMessage()}
          </StyledStatus>
        </StyledTextareaMessageWrapper>
      )}

      {showLimit && !getTextareaMessage() && (
        <StyledCounterText className="easy_textarea-counter" variant="caption">
          <StyledCharactersNumber $isOverflow={isOverflow}>{charactersNumber}</StyledCharactersNumber>/{maxLength}
        </StyledCounterText>
      )}
    </StyledTextareaWrapper>
  );
};
