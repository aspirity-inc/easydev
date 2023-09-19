import { useRef, ChangeEvent, KeyboardEvent, useState, FocusEvent } from 'react';

import { StyledCodeInput, StyledCodeInputWrapper } from './styles';
import type { CodeInputProps } from '../types';

export const CodeInput = ({ length = 6, value, onChange, error, ...props }: CodeInputProps) => {
  const [focusedInput, setFocusedInput] = useState(-1);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Replace undefined values with empty strings
  const code = Array.from({ length }, (_, i) => (value && value.toString()[i]) || '');

  const setCodeInputFocus = (index: number) => {
    inputRefs.current[index]?.focus();
    setFocusedInput(index);
  };

  const setCodeValueByIndex = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    onChange && onChange(newCode.join(''));
  };

  // Always set focus on first empty input or last full index
  const handleWrapperClick = () => {
    const firstEmptyIndex = code.findIndex((element) => !element);
    firstEmptyIndex !== -1 ? setCodeInputFocus(firstEmptyIndex) : setCodeInputFocus(code.length - 1);
  };

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 1) {
      setCodeValueByIndex(index, value);
      if (index < code.length - 1) {
        setCodeInputFocus(index + 1);
      }
    }
  };

  const handleInputKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      let clearIndex = index;

      if (!code[index] && index > 0) {
        clearIndex = index - 1;
        setCodeInputFocus(clearIndex);
      }
      setCodeValueByIndex(clearIndex, '');
    }
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
    setFocusedInput(-1);
    props.onBlur && props.onBlur(event);
  };

  return (
    <StyledCodeInputWrapper
      gap={4}
      onClick={handleWrapperClick}
      $focused={focusedInput > -1}
      $filled={Boolean(value)}
      $error={error}
    >
      {code.map((value, index) => {
        return (
          <StyledCodeInput
            key={index}
            value={value}
            maxLength={1}
            ref={(ref: HTMLInputElement) => {
              inputRefs.current[index] = ref as HTMLInputElement;
            }}
            onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
            onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleInputKeyDown(index, event)}
            onBlur={handleBlur}
            placeholder=""
            $filled={Boolean(value)}
            $focused={focusedInput === index}
            {...props}
          />
        );
      })}
    </StyledCodeInputWrapper>
  );
};
