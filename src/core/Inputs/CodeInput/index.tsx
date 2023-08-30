import { ComponentPropsWithoutRef, useRef, ChangeEvent, KeyboardEvent } from 'react';

import { Center } from '@core/Center';

import { StyledCodeInput } from './styles';

type CodeInputProps = ComponentPropsWithoutRef<'div'> & {
  number: number;
  code: string[];
  onChangeCode: (code: string[]) => void;
  disabled: boolean;
};

export const CodeInput = ({ number, onChangeCode, disabled, ...props }: CodeInputProps) => {
  const inputRefs = useRef<HTMLInputElement[]>([]);

  // Replace undefined values with empty strings
  const code = Array.from({ length: number }, (_, i) => props.code[i] || '');

  // Always set focus on first empty input
  const handleInputClick = () => {
    const firstEmptyIndex = code.findIndex((element) => !element);
    inputRefs.current[firstEmptyIndex]?.focus();
  };

  const setCodeByIndex = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    onChangeCode(newCode);
  };

  const handleInputChange = (index: number, event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (value.length === 1) {
      setCodeByIndex(index, value);

      if (index < code.length - 1) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleInputKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' || event.key === 'Delete') {
      let clearIndex = index;

      if (!code[index] && index > 0) {
        clearIndex = index - 1;
        inputRefs.current[clearIndex]?.focus();
      }

      setCodeByIndex(clearIndex, '');
    }
  };

  return (
    <Center gap={8} {...props}>
      {code.map((value, index) => (
        <StyledCodeInput
          key={index}
          label=""
          value={value}
          maxLength={1}
          ref={(ref: HTMLInputElement) => {
            inputRefs.current[index] = ref as HTMLInputElement;
          }}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleInputChange(index, event)}
          onKeyDown={(event: KeyboardEvent<HTMLInputElement>) => handleInputKeyDown(index, event)}
          onClick={handleInputClick}
          disabled={disabled}
        />
      ))}
    </Center>
  );
};
