import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';

import { EasydevProvider, THEMES } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Toggle } from '.';
import { StyledToggle } from './styles';
import { getControlColor } from '../styles';

test('toggle', async () => {
  const mockFn = vi.fn();
  const label = 'toggle';
  const { container } = render(
    <EasydevProvider>
      <Toggle defaultChecked onChange={mockFn} color="error" label={label} />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;
  expect(inputElement).toHaveAttribute('checked');

  await userEvent.click(inputElement);
  expect(mockFn).toBeCalledTimes(1);

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('background-color', getControlColor(THEMES.light, 'error'), {
    modifier: `&:has(${StyledToggle.toString()}:checked)`,
  });

  expect(screen.getByText(label)).toBeInTheDocument();
});

test('disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Toggle disabled />
    </EasydevProvider>
  );

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('cursor', 'default');
  expect(spanContainer).toHaveStyleRule('pointer-events', 'none');
  expect(spanContainer).toHaveStyleRule('border-color', lightPalette.surface['400']);
  expect(spanContainer).toHaveStyleRule('color', lightPalette.surface['400']);

  expect(spanContainer).toHaveStyleRule('background-color', lightPalette.surface['400'], {
    modifier: `&:has(${StyledToggle.toString()}:checked)`,
  });
});

test('isDayNightMode', async () => {
  const { container } = render(
    <EasydevProvider>
      <Toggle isDayNightMode defaultChecked={false} />
    </EasydevProvider>
  );

  const toggleWrapContainer = container.querySelector('.easy_toggle-wrap');
  expect(toggleWrapContainer).toHaveStyleRule('width', '48px');
  expect(toggleWrapContainer).toHaveStyleRule('background', "url('/assets/toggle/night.svg')");
  screen.debug();

  await userEvent.click(container.querySelector('input') as Element);
  expect(toggleWrapContainer).toHaveStyleRule('background', "url('/assets/toggle/day.svg')");
});
