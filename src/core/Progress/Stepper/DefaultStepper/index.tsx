import { cx } from '@helpers/cx.ts';

import { Step } from './styles.ts';
import { StyledStepper } from '../styles.ts';
import type { StepperPropsType } from '../types.ts';

export const DefaultStepper = ({ count, currentStep, stepperProps, stepProps }: StepperPropsType) => {
  return (
    <StyledStepper className="easy_stepper" {...stepperProps}>
      {Array.from(Array(count).keys()).map((step) => (
        <Step key={step} className={cx('easy_step', step < currentStep ? 'active' : '')} {...stepProps} />
      ))}
    </StyledStepper>
  );
};
