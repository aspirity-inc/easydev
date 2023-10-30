import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { MenuItem } from '.';

test('disabled', () => {
  const menuItemText = 'Menu Item Text';

  render(
    <EasydevProvider>
      <MenuItem disabled>{menuItemText}</MenuItem>
    </EasydevProvider>
  );

  expect(screen.getByText(menuItemText)).toHaveStyleRule('pointer-events', 'none');
  expect(screen.getByText(menuItemText)).toHaveStyleRule('color', lightPalette.surface['400']);
});
