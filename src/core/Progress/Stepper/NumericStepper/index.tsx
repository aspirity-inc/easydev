import 'material-symbols';

import { cx } from '@helpers/cx';

import { StyledNumericStepper, StyledStep } from './styles.ts';
import type { StepperPropsType } from '../types.ts';

export const NumericStepper = ({ count, currentStep, secondaryColor, activeColor }: StepperPropsType) => {
  return (
    <StyledNumericStepper $activeColor={activeColor} $secondaryColor={secondaryColor} className="easy_numericStepper">
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
          >
            <span>
              {formattedStep < currentStep ? <span className="material-symbols-rounded">done</span> : formattedStep}
            </span>
          </StyledStep>
        );
      })}
    </StyledNumericStepper>
  );
};
