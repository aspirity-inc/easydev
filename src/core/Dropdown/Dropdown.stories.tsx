import { useState } from 'react';

import { Meta, StoryFn } from '@storybook/react';

import { Button } from '@core/Button';

import { Dropdown, MenuItem } from '.';

export default {
  title: 'Core/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;

const items: MenuItem[] = [
  {
    key: '1',
    label: 'Menu item - string',
  },
  {
    key: '2',
    label: (
      <>
        <DefaultAvatarIcon />
        <span>Menu item with icon</span>
      </>
    ),
  },
  {
    key: '3',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Menu item native tag 'a'
      </a>
    ),
  },
  {
    key: '4',
    label: 'Menu item - string (disabled)',
    disabled: true,
  },
];

const TemplateControlled: StoryFn<typeof Dropdown> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ height: '300px' }}>
      <Dropdown {...args} open={open} onChangeOpen={setOpen}>
        <Button>Dropdown</Button>
      </Dropdown>
    </div>
  );
};

export const DefaultControlledDropdown: StoryFn<typeof Dropdown> = TemplateControlled.bind({});
DefaultControlledDropdown.args = {
  menu: items,
};

const TemplateUncontrolled: StoryFn<typeof Dropdown> = ({ ...args }) => {
  return (
    <div style={{ height: '300px' }}>
      {' '}
      <Dropdown {...args}>
        <Button>Dropdown</Button>
      </Dropdown>
    </div>
  );
};

export const DefaultUncontrolledDropdown: StoryFn<typeof Dropdown> = TemplateUncontrolled.bind({});
DefaultUncontrolledDropdown.args = {
  menu: items,
};
