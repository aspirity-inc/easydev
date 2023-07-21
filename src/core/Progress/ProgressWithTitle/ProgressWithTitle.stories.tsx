import { Meta, StoryObj } from '@storybook/react';

import { ProgressWithTitle } from '.';

export default {
  title: 'Core/Progress/ProgressWithTitle',
  component: ProgressWithTitle,
} satisfies Meta<typeof ProgressWithTitle>;

type Story = StoryObj<typeof ProgressWithTitle>;

export const Default = {
  args: {
    value: 25,
    title: 'Update in progress..',
  },
} satisfies Story;
