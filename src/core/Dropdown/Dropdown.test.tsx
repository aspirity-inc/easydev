import { useState } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Dropdown, MenuDivider, MenuItem, MenuLabel } from '.';

test('open onChangeOpen targetTitle content position', async () => {
  const DropdownDefault = () => {
    const [open, setOpen] = useState(false);

    return (
      <Dropdown
        position="left-bottom"
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    );
  };

  const { container } = render(
    <EasydevProvider>
      <DropdownDefault />
    </EasydevProvider>
  );

  expect(screen.queryByText('First menu label')).not.toBeInTheDocument();

  await userEvent.click(container.querySelector('button') as Element);

  expect(container.querySelector('.easy_dropdown-menu-position')).toHaveStyleRule('transform', 'translateX(-100%)');
  expect(container.querySelector('.easy_dropdown-menu-position')).toHaveStyleRule('padding-right', '8px');

  expect(screen.queryByText('First menu label')).toBeInTheDocument();
});

test('target disabled', async () => {
  const DropdownDisabled = () => {
    const [open, setOpen] = useState(false);

    return (
      <Dropdown
        target={<button>Dropdown button</button>}
        disabled
        open={open}
        onChangeOpen={setOpen}
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    );
  };

  const { container } = render(
    <EasydevProvider>
      <DropdownDisabled />
    </EasydevProvider>
  );

  expect(screen.getByText('Dropdown button')).toBeInTheDocument();
  expect(screen.queryByText('First menu label')).not.toBeInTheDocument();

  await userEvent.click(container.querySelector('button') as Element);

  expect(screen.queryByText('First menu label')).not.toBeInTheDocument();
});

test('trigger', async () => {
  const DropdownTrigger = () => {
    const [open, setOpen] = useState(false);

    return (
      <Dropdown
        trigger="hover"
        open={open}
        onChangeOpen={setOpen}
        targetTitle="Dropdown"
        content={
          <>
            <MenuLabel>First menu label</MenuLabel>
            <MenuItem>Menu item</MenuItem>
            <MenuDivider />
            <MenuLabel>Second menu label</MenuLabel>
            <MenuItem disabled>Menu item (disabled)</MenuItem>
          </>
        }
      />
    );
  };

  const { container } = render(
    <EasydevProvider>
      <DropdownTrigger />
    </EasydevProvider>
  );

  expect(screen.queryByText('First menu label')).not.toBeInTheDocument();

  await userEvent.hover(container.querySelector('button') as Element);
  expect(screen.queryByText('First menu label')).toBeInTheDocument();
});
