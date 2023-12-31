import { KeyboardDoubleArrowRightIcon } from '@icons';

import { Breadcrumbs } from '.';
import { StyledUserLink } from './styles';
import type { BreadcrumbsItem } from './types';
import type { Meta, StoryFn } from '@storybook/react';

const metaBreadcrumbs: Meta<typeof Breadcrumbs> = {
  title: 'Core/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      type: 'string',
      control: 'text',
      description: 'Divider',
    },
    itemRender: {
      type: 'function',
      description: 'Function for custom item render',
    },
    items: {
      description: 'Array of breadcrumb elements',
    },
  },
};
export default metaBreadcrumbs;

const Template: StoryFn<typeof Breadcrumbs> = ({ ...args }) => {
  return <Breadcrumbs {...args} />;
};

const exampleItems = [
  {
    title: 'Home',
  },
  {
    title: 'Application Center',
    href: '',
  },
];

export const DefaultBreadcrumbs: StoryFn<typeof Breadcrumbs> = Template.bind({});
DefaultBreadcrumbs.args = {
  items: exampleItems,
};

export const BreadcrumbsUserIconSeparator: StoryFn<typeof Breadcrumbs> = Template.bind({});
BreadcrumbsUserIconSeparator.args = {
  separator: <KeyboardDoubleArrowRightIcon />,
  items: exampleItems,
};

const userItemRender = (item: BreadcrumbsItem) => {
  return <StyledUserLink>{item.title}</StyledUserLink>;
};

export const BreadcrumbsUserItem: StoryFn<typeof Breadcrumbs> = Template.bind({});
BreadcrumbsUserItem.args = {
  items: exampleItems,
  itemRender: userItemRender,
};
