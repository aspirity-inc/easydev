import { DefaultStepper } from './DefaultStepper';
import { NumericStepper } from './NumericStepper';
import type { StepperType } from './types.ts';

export const Stepper = ({
  numeric,
  count,
  currentStep,
  numericStepperProps,
  numericStepProps,
  numericDoneIconProps,
  stepperProps,
  stepProps,
  ...props
}: StepperType) => {
  const formattedCount = Math.abs(count);
  const formattedStepStep = Math.abs(currentStep) > formattedCount ? formattedCount : Math.abs(currentStep);

  return numeric ? (
    <NumericStepper
      count={formattedCount}
      currentStep={formattedStepStep}
      {...props}
      numericStepperProps={numericStepperProps}
      numericStepProps={numericStepProps}
      numericDoneIconProps={numericDoneIconProps}
    />
  ) : (
    <DefaultStepper
      count={formattedCount}
      currentStep={formattedStepStep}
      stepperProps={stepperProps}
      stepProps={stepProps}
      {...props}
    />
  );
};
