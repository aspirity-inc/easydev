import { useState } from 'react';

import { Button } from '@core/Button';
import { Flex } from '@core/Flex';

import { Dropdown, MenuItem, MenuLabel, MenuDivider } from '.';
import type { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'Core/Dropdown',
  component: Dropdown,
} satisfies Meta<typeof Dropdown>;

const DefaultAvatarIcon = () => <div className="material-symbols-outlined">person</div>;
const DefaultArrow = () => <div className="material-symbols-outlined">keyboard_arrow_right</div>;

const TemplateDefault: StoryFn<typeof Dropdown> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <Flex
      align="center"
      justify="center"
      style={{
        width: '100%',
        height: '800px',
      }}
    >
      <Dropdown
        {...args}
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>

            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </Flex>
  );
};

export const DefaultDropdown: StoryFn<typeof Dropdown> = TemplateDefault.bind({});
DefaultDropdown.args = {};

const TemplateUserButtonDropdown: StoryFn<typeof Dropdown> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Dropdown
        {...args}
        open={open}
        onChangeOpen={setOpen}
        target={<Button>Dropdown</Button>}
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>

            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </div>
  );
};

export const UserButtonDropdown: StoryFn<typeof Dropdown> = TemplateUserButtonDropdown.bind({});
UserButtonDropdown.args = {};

const TemplateComplexDropdown: StoryFn<typeof Dropdown> = ({ ...args }) => {
  const [open, setOpen] = useState(false);

  const innerMenu = () => {
    return (
      <Dropdown
        position="right-top"
        trigger={args.trigger}
        style={{ width: '100%' }}
        target={
          <MenuItem>
            <Flex justify="space-between" style={{ width: '100%' }}>
              <span>Second menu</span>
              <DefaultArrow />
            </Flex>
          </MenuItem>
        }
        content={
          <>
            <MenuItem>Second menu item</MenuItem>
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Second menu item</span>
            </MenuItem>
          </>
        }
      />
    );
  };

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
      }}
    >
      <Dropdown
        {...args}
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuItem>Menu item</MenuItem>
            {innerMenu()}
            <MenuItem>
              <DefaultAvatarIcon />
              <span>Menu item with icon</span>
            </MenuItem>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    </div>
  );
};

export const ComplexDropdownWithHover: StoryFn<typeof Dropdown> = TemplateComplexDropdown.bind({});
ComplexDropdownWithHover.args = {
  trigger: 'hover',
};
