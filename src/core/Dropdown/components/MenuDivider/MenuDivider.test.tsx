import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { MenuDivider } from '.';

test('default MenuDivider', () => {
  const menuDividerText = 'Menu Divider Text';

  render(
    <EasydevProvider>
      <MenuDivider>{menuDividerText}</MenuDivider>
    </EasydevProvider>
  );

  expect(screen.getByText(menuDividerText)).toBeInTheDocument();
});
