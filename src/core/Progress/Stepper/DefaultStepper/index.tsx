import { Step } from './styles.ts';
import { StyledStepper } from '../styles.ts';
import { StepperPropsType } from '../types.ts';

export const DefaultStepper = ({ count, currentStep, secondaryColor, activeColor }: StepperPropsType) => {
  return (
    <StyledStepper $activeColor={activeColor} $secondaryColor={secondaryColor}>
      {Array.from(Array(count).keys()).map((step) => (
        <Step key={step} className={step < currentStep ? 'active' : ''} />
      ))}
    </StyledStepper>
  );
};
