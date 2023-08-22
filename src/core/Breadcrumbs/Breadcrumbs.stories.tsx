import { Meta, StoryFn } from '@storybook/react';

import { Breadcrumbs } from '.';
import { StyledUserLink } from './styles';
import { BreadcrumbsItem } from './types';

const metaBreadcrumbs: Meta<typeof Breadcrumbs> = {
  title: 'Core/Breadcrumbs/Breadcrumbs',
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

const UserSeparator = () => <div className="material-symbols-outlined">keyboard_double_arrow_right</div>;

export const BreadcrumbsUserIconSeparator: StoryFn<typeof Breadcrumbs> = Template.bind({});
BreadcrumbsUserIconSeparator.args = {
  separator: <UserSeparator />,
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
