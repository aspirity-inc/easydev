import { DefaultStepper } from './DefaultStepper';
import { NumericStepper } from './NumericStepper';
import type { StepperType } from './types.ts';

export const Stepper = ({ numeric, count, currentStep, ...props }: StepperType) => {
  const formattedCount = Math.abs(count);
  const formattedStepStep = Math.abs(currentStep) > formattedCount ? formattedCount : Math.abs(currentStep);

  return numeric ? (
    <NumericStepper count={formattedCount} currentStep={formattedStepStep} {...props} />
  ) : (
    <DefaultStepper count={formattedCount} currentStep={formattedStepStep} {...props} />
  );
};
