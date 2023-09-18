import { CSSProperties } from 'react';

export type StepperPropsType = {
  count: number;
  currentStep: number;
  activeColor?: CSSProperties['color'];
  secondaryColor?: CSSProperties['color'];
};

export type StepperPropsStyledType = {
  $activeColor?: CSSProperties['color'];
  $secondaryColor?: CSSProperties['color'];
};

export type StepperType = StepperPropsType & {
  numeric?: boolean;
};