import { DoneIcon } from '@icons';

import { cx } from '@helpers/cx';

import { StyledNumericStepper, StyledStep } from './styles.ts';
import type { StepperPropsType } from '../types.ts';

export const NumericStepper = ({
  count,
  currentStep,
  numericStepperProps,
  numericStepProps,
  numericDoneIconProps,
}: StepperPropsType) => {
  return (
    <StyledNumericStepper className="easy_numericStepper" {...numericStepperProps}>
      {Array.from(Array(count).keys()).map((step) => {
        const formattedStep = step + 1;
        return (
          <StyledStep
            key={step}
            className={cx(
              formattedStep === currentStep && 'active',
              formattedStep < currentStep && 'done',
              'easy_numericStep'
            )}
            {...numericStepProps}
          >
            <span>{formattedStep < currentStep ? <DoneIcon {...numericDoneIconProps} /> : formattedStep}</span>
          </StyledStep>
        );
      })}
    </StyledNumericStepper>
  );
};
