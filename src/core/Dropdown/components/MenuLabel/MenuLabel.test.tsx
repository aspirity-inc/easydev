import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { MenuLabel } from '.';

test('default MenuLabel', () => {
  const menuLabelText = 'Menu Label Text';
	
  render(
    <EasydevProvider>
      <MenuLabel>{menuLabelText}</MenuLabel>
    </EasydevProvider>
  );

  expect(screen.getByText(menuLabelText)).toBeInTheDocument();
});
