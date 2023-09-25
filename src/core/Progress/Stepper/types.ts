export type StepperPropsType = {
  count: number;
  currentStep: number;
};

export type StepperType = StepperPropsType & {
  numeric?: boolean;
};
