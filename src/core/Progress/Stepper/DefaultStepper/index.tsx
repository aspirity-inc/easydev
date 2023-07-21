import { Step } from './styles.ts';
import { StyledStepper } from '../styles.ts';
import { StepperPropsType } from '../types.ts';

export const DefaultStepper = ({ count, currentStep }: StepperPropsType) => {
  const maxStep = currentStep > count ? count : currentStep;
  const formattedCurrenStep = currentStep < 1 ? 1 : maxStep;

  return (
    <StyledStepper>
      {Array.from(Array(count).keys()).map((step) => (
        <Step key={step} className={step < formattedCurrenStep ? 'active' : ''} />
      ))}
    </StyledStepper>
  );
};
