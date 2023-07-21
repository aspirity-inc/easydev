import { DefaultStepper } from './DefaultStepper';
import { NumericStepper } from './NumericStepper';
import type { StepperPropsType } from './types.ts';

type StepperType = StepperPropsType & {
  numeric?: boolean;
};

export const Stepper = ({ numeric, ...props }: StepperType) => {
  return numeric ? <NumericStepper {...props} /> : <DefaultStepper {...props} />;
};
