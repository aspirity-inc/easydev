import { Meta, StoryFn } from '@storybook/react';

import {  Breadcrumbs } from '.';

const metaBreadcrumbs: Meta<typeof Breadcrumbs> = {
  title: 'Core/Breadcrumbs/Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {
    separator: {
      type: 'string',
      control: 'text',
      description: 'Divider',
    },
    
  },
};
export default metaBreadcrumbs;

const Template: StoryFn<typeof Breadcrumbs> = ({ ...args }) => {

  return (
    <Breadcrumbs {...args}/>
  );
};



export const DefaultBreadcrumbs: StoryFn<typeof Breadcrumbs> = Template.bind({});
DefaultBreadcrumbs.args = {
  items: [
    {
      title: 'Home',
    },
    {
      title: 'Application Center',
      href: '',
    },
  ],
};

const UserSeparator = () => <div className="material-symbols-outlined">keyboard_double_arrow_right</div>;

export const BreadcrumbsUserIconSeparator: StoryFn<typeof Breadcrumbs> = Template.bind({});
BreadcrumbsUserIconSeparator.args = {
  separator: <UserSeparator />,
  items: [
    {
      title: 'Home',
    },
    {
      title: 'Application Center',
      href: '',
    },
  ],
};
