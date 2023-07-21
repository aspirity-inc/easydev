import { Meta, StoryObj } from '@storybook/react';

import { Stepper } from '.';

export default {
  title: 'Core/Progress/Stepper',
  component: Stepper,
} as Meta<typeof Stepper>;

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
