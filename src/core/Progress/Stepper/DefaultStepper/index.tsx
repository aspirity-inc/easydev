import { Step, StyledDefaultStepper } from './styles.ts';
import { StepperPropsType } from '../types.ts';

export const DefaultStepper = ({ count, currentStep }: StepperPropsType) => {
  return (
    <StyledDefaultStepper>
      {Array.from(Array(count).keys()).map((step) => (
        <Step key={step} className={step < currentStep ? 'active' : ''} />
      ))}
    </StyledDefaultStepper>
  );
};
