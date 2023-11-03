import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider, THEMES } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Radio } from '.';
import { getControlColor } from '../styles';

test('radio', () => {
  const label = 'radio';
  const { container } = render(
    <EasydevProvider>
      <Radio defaultChecked color="error" label={label} />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;
  expect(inputElement).toHaveAttribute('checked');

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('color', getControlColor(THEMES.light, 'error'));
  expect(spanContainer).toHaveStyleRule('border', `2px solid ${getControlColor(THEMES.light, 'error')}`);

  expect(screen.getByText(label)).toBeInTheDocument();
});

test('disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Radio disabled />
    </EasydevProvider>
  );

  const spanContainer = container.querySelector('span');
  expect(spanContainer).toHaveStyleRule('cursor', 'default');
  expect(spanContainer).toHaveStyleRule('pointer-events', 'none');
  expect(spanContainer).toHaveStyleRule('border-color', lightPalette.surface['400']);
  expect(spanContainer).toHaveStyleRule('color', lightPalette.surface['400']);
});
