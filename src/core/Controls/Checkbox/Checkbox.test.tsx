import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { EasydevProvider, THEMES } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Checkbox } from '.';
import { getControlColor } from '../styles';

test('checkbox', async () => {
  const mockFn = vi.fn();
  const label = 'checkbox';
  const { container } = render(
    <EasydevProvider>
      <Checkbox defaultChecked onChange={mockFn} color="error" label={label} />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;
  expect(inputElement).toHaveAttribute('checked');

  await userEvent.click(inputElement);
  expect(mockFn).toBeCalledTimes(1);

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('color', getControlColor(THEMES.light, 'error'));
  expect(spanContainer).toHaveStyleRule('border', `2px solid ${getControlColor(THEMES.light, 'error')}`);

  expect(screen.getByText(label)).toBeInTheDocument();
});

test('disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Checkbox disabled />
    </EasydevProvider>
  );

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('cursor', 'default');
  expect(spanContainer).toHaveStyleRule('pointer-events', 'none');
  expect(spanContainer).toHaveStyleRule('border-color', lightPalette.surface['400']);
  expect(spanContainer).toHaveStyleRule('color', lightPalette.surface['400']);
});
