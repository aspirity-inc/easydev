import { Meta, StoryObj } from '@storybook/react';

import { ProgressBar } from '.';

export default {
  title: 'Core/Progress/ProgressBar',
  component: ProgressBar,
} satisfies Meta<typeof ProgressBar>;

type Story = StoryObj<typeof ProgressBar>;

export const Default = {
  args: {
    value: 25,
  },
} satisfies Story;
