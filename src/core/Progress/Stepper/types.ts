import type { BaseComponentType } from '@core/Box/types';

export type StepperPropsType = Omit<BaseComponentType, 'children'> & {
  count: number;
  currentStep: number;

  stepperProps?: Pick<BaseComponentType, 'style'>;
  stepProps?: Pick<BaseComponentType, 'style'>;

  numericStepperProps?: Pick<BaseComponentType, 'style'>;
  numericStepProps?: Pick<BaseComponentType, 'style'>;
  numericDoneIconProps?: Pick<BaseComponentType, 'style'>;
};

export type StepperType = StepperPropsType & {
  numeric?: boolean;
};
