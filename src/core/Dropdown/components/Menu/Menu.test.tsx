import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Menu } from '.';

const menuText = 'Menu Text';

test('open position', () => {
  const { container } = render(
    <EasydevProvider>
      <Menu open position="left-bottom">
        {menuText}
      </Menu>
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_dropdown-menu-position')).toHaveStyleRule('transform', 'translateX(-100%)');
  expect(container.querySelector('.easy_dropdown-menu-position')).toHaveStyleRule('padding-right', '8px');
});

test('open=false', () => {
  render(
    <EasydevProvider>
      <Menu open={false}>{menuText}</Menu>
    </EasydevProvider>
  );

  expect(screen.queryByText(menuText)).not.toBeInTheDocument();
});
