import { DefaultStepper } from './DefaultStepper';
import type { StepperPropsType } from './types.ts';

type StepperType = StepperPropsType & {
  numeric?: boolean;
};

export const Stepper = ({ numeric, ...props }: StepperType) => {
  console.log(numeric);
  return <DefaultStepper {...props} />;
};
