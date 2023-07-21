import { Meta, StoryFn } from '@storybook/react';

import { Breadcrumb } from '.';

const metaBreadcrumb: Meta<typeof Breadcrumb> = {
  title: 'Core/Breadcrumbs/Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    disabled: {
      type: 'boolean',
      control: 'boolean',
    },
  },
};
export default metaBreadcrumb;

const Template: StoryFn<typeof Breadcrumb> = ({ ...args }) => {
  return <Breadcrumb {...args}>Home</Breadcrumb>;
};

export const DefaultBreadcrumb: StoryFn<typeof Breadcrumb> = Template.bind({});
