import { Meta, StoryObj } from '@storybook/react';

import { Stepper } from '.';

const metaStepper: Meta<typeof Stepper> = {
  title: 'Core/Progress/Stepper',
  component: Stepper,
  argTypes: {
    activeColor: { control: 'color' },
    secondaryColor: { control: 'color' },
  },
};

export default metaStepper;

type Story = StoryObj<typeof Stepper>;

export const Default = {
  args: {
    count: 10,
    currentStep: 3,
  },
} satisfies Story;

export const Numeric = {
  args: {
    count: 10,
    currentStep: 3,
    numeric: true,
  },
} satisfies Story;
