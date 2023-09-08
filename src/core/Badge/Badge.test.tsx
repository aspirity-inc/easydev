import { render, screen } from '@testing-library/react';
import { darken } from 'polished';
import { describe, beforeEach, expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Badge } from '.';
import { defaultColorShades } from './styles';

const mockBadgeText = 'Badge text';

describe('Badge default', () => {
  beforeEach(() => {
    render(
      <EasydevProvider>
        <Badge>{mockBadgeText}</Badge>
      </EasydevProvider>
    );
  });

  test('Should be in document', () => {
    expect(screen.getByText(mockBadgeText).parentNode).toBeInTheDocument();
  });

  test('width should be auto', () => {
    expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('width', 'auto');
  });

  test('background color should be success lightPalette.success', () => {
    expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule(
      'background-color',
      lightPalette.success[defaultColorShades.bgColor]
    );
  });

  test('color should be success lightPalette.success', () => {
    expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule(
      'color',
      lightPalette.success[defaultColorShades.textColor]
    );
  });
});

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

test('color should be custom', () => {
  render(
    <EasydevProvider>
      <Badge color="#efefef">{mockBadgeText}</Badge>
    </EasydevProvider>
  );
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('color', darken(0.3, '#efefef'));
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('background-color', '#efefef');
});

test('color and textColor should be custom', () => {
  render(
    <EasydevProvider>
      <Badge color="#efefef" textColor="#ededed">
        {mockBadgeText}
      </Badge>
    </EasydevProvider>
  );

  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('color', '#ededed');
  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('background-color', '#efefef');
});

test('Should be in the document with chosen size', () => {
  render(
    <EasydevProvider>
      <Badge size="lg">{mockBadgeText}</Badge>
    </EasydevProvider>
  );

  expect(screen.getByText(mockBadgeText).parentNode).toBeInTheDocument();
});

test('width should be 100%', () => {
  render(
    <EasydevProvider>
      <Badge fullWidth>{mockBadgeText}</Badge>
    </EasydevProvider>
  );

  expect(screen.getByText(mockBadgeText).parentNode).toHaveStyleRule('width', '100%');
});
