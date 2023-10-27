import type { BaseComponentType } from '@core/Box/types';

export type StepperPropsType = Omit<BaseComponentType, 'children'> & {
  count: number;
  currentStep: number;
};

export type StepperType = StepperPropsType & {
  numeric?: boolean;
};
