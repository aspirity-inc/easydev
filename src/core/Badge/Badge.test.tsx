import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Badge } from '.';
import { defaultColorShades } from './styles';

const mockBadgeText = 'Badge text';

test('background-color and color should be error lightPalette.error', () => {
  render(
    <EasydevProvider>
      <Badge color="error">{mockBadgeText}</Badge>
    </EasydevProvider>
  );
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule(
    'background-color',
    lightPalette.error[defaultColorShades.bgColor]
  );
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule(
    'color',
    lightPalette.error[defaultColorShades.textColor]
  );
});

test('color and textColor should be custom', () => {
  render(
    <EasydevProvider>
      <Badge color="#efefef" textColor="#ededed">{mockBadgeText}</Badge>
    </EasydevProvider>
  );
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('color',  '#ededed');
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('background-color', '#efefef');
});

test('width should be 100%', () => {
  render(
    <EasydevProvider>
      <Badge fullWidth>{mockBadgeText}</Badge>
    </EasydevProvider>
  );
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('width', '100%');
});
