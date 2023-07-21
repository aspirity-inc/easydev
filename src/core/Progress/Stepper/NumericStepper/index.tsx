import { cx } from '@linaria/core';

import 'material-symbols';

import { StyledNumericStepper, StyledStep } from './styles.ts';
import type { StepperPropsType } from '../types.ts';

export const NumericStepper = ({ count, currentStep }: StepperPropsType) => {
  const maxStep = currentStep > count ? count : currentStep;
  const formattedCurrenStep = currentStep < 1 ? 1 : maxStep;

  return (
    <StyledNumericStepper>
      {Array.from(Array(count).keys()).map((step) => {
        const formattedStep = step + 1;
        return (
          <StyledStep
            key={step}
            className={cx(
              formattedStep === formattedCurrenStep && 'active',
              formattedStep < formattedCurrenStep && 'done'
            )}
          >
            <span>
              {formattedStep < formattedCurrenStep ? (
                <span className="material-symbols-rounded">done</span>
              ) : (
                formattedStep
              )}
            </span>
          </StyledStep>
        );
      })}
    </StyledNumericStepper>
  );
};
