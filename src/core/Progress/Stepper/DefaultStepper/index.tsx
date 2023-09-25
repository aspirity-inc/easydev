import { cx } from '@helpers/cx.ts';

import { Step } from './styles.ts';
import { StyledStepper } from '../styles.ts';
import type { StepperPropsType } from '../types.ts';

export const DefaultStepper = ({ count, currentStep }: StepperPropsType) => {
  return (
    <StyledStepper className="easy_stepper">
      {Array.from(Array(count).keys()).map((step) => (
        <Step key={step} className={cx('easy_step', step < currentStep ? 'active' : '')} />
      ))}
    </StyledStepper>
  );
};
