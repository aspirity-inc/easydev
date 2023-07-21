import { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from '.';

export default {
  title: 'Core/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
} satisfies Meta<typeof Breadcrumb>;

type Story = StoryObj<typeof Breadcrumb>;

export const Default = {
  args: {
    children: 'Home',
  },
} satisfies Story;
