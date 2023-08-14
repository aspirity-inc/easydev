import { InputHTMLAttributes, forwardRef } from 'react';

import {
  StyledDatepickerIcon,
  StyledDatepickerInput,
  StyledDatepickerLabel,
  StyledDatepickerText,
  StyledInputsWrapper,
} from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  open: boolean;
  $secondLabel?: string;
  $twoInputs?: boolean;
};

export const Input = forwardRef<HTMLInputElement | null, InputProps>(({ $twoInputs = false, ...props }, ref) => {
  return $twoInputs ? <TwoInputs {...props} ref={ref} /> : <DefaultInput {...props} ref={ref} />;
});

export const DefaultInput = forwardRef<HTMLInputElement | null, InputProps>((props, ref) => {
  return (
    <StyledDatepickerLabel $open={props.open}>
      <StyledDatepickerText>{props.label}</StyledDatepickerText>
      <StyledDatepickerInput $open={props.open} {...props} ref={ref} />
      <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>
    </StyledDatepickerLabel>
  );
});

export const TwoInputs = forwardRef<HTMLInputElement | null, InputProps>((props, ref) => {
  const rangeValue = props.value?.toString().split(' - ');
  const startDate = rangeValue && rangeValue[0];
  const endDate = rangeValue && rangeValue[1];

  return (
    <StyledInputsWrapper>
      <StyledDatepickerLabel $open={props.open}>
        <StyledDatepickerText>{props.label}</StyledDatepickerText>
        <StyledDatepickerInput $open={props.open} {...props} ref={ref} value={startDate || ''} />
        <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>
      </StyledDatepickerLabel>
      <StyledDatepickerLabel $open={props.open}>
        <StyledDatepickerText>{props.$secondLabel}</StyledDatepickerText>
        <StyledDatepickerInput $open={props.open} {...props} value={endDate || ''} />
        <StyledDatepickerIcon className="material-symbols-rounded">calendar_today</StyledDatepickerIcon>
      </StyledDatepickerLabel>
    </StyledInputsWrapper>
  );
});
