import { CSSProperties, useEffect, useRef, useState } from 'react';

import {
  StyledCounterText,
  StyledCharactersNumber,
  StyledTextarea,
  StyledTextareaLabel,
  StyledTextareaLabelText,
  StyledTextareaWrapper,
} from '@core/Inputs/Textarea/styles';

type TextareaProps = React.ComponentPropsWithoutRef<'textarea'> & {
  className?: string;
  style?: CSSProperties;
  placeholder?: string;
  label: string;
  showLimit?: boolean;
  autoresized?: boolean;
  softLimit?: boolean;
};

export const Textarea = ({
  label,
  value,
  maxLength = 1000,
  disabled,
  showLimit = true,
  autoresized = true,
  softLimit = false,
  onChange,
  ...props
}: TextareaProps) => {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);
  const [charactersNumber, setCharactersNumber] = useState(0);

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

  return (
    <StyledTextareaWrapper $disabled={disabled || false}>
      <StyledTextareaLabel $filled={Boolean(value)}>
        <StyledTextareaLabelText tag="p" variant="inputLabel">
          {label}
        </StyledTextareaLabelText>
        <StyledTextarea
          ref={ref}
          value={value}
          onChange={handleChange}
          disabled={disabled}
          maxLength={!softLimit ? maxLength : undefined}
          {...props}
          $filled={Boolean(value)}
          $autoresized={autoresized}
        />
      </StyledTextareaLabel>
      {showLimit && (
        <StyledCounterText tag="p" variant="caption">
          <StyledCharactersNumber $isOverflow={isOverflow}>{charactersNumber}</StyledCharactersNumber>/{maxLength}
        </StyledCounterText>
      )}
    </StyledTextareaWrapper>
  );
};
