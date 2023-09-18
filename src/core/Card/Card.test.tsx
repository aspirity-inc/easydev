import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider, THEMES } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { Card } from '.';

const mockCardText = 'Card text';

test('variant shadow', () => {
  const { container } = render(
    <EasydevProvider>
      <Card variant="shadow">{mockCardText}</Card>
    </EasydevProvider>
  );

  expect(container.querySelector('div')).toHaveStyleRule(
    'box-shadow',
    (THEMES.light.shadows.gray as string).split(':')[1].trim()
  );
});

test('variant outline', () => {
  const { container } = render(
    <EasydevProvider>
      <Card variant="outline">{mockCardText}</Card>
    </EasydevProvider>
  );

  expect(container.querySelector('div')).toHaveStyleRule('border', `1px solid ${lightPalette.surface['400']}`);
});

test('direction', () => {
  const { container } = render(
    <EasydevProvider>
      <Card direction="column">{mockCardText}</Card>
    </EasydevProvider>
  );

  expect(container.querySelector('div')).toHaveStyleRule('flex-wrap', 'wrap');
});

test('media and borderMedia', () => {
  render(
    <EasydevProvider>
      <Card direction="column" media={<div>media</div>} borderedMedia>
        {mockCardText}
      </Card>
    </EasydevProvider>
  );
	
  expect(screen.getByText('media')).toBeInTheDocument();
  expect(screen.getByText('media').parentNode).toHaveStyleRule('padding', '16px 16px 0 16px');
});

test('maxWidth', () => {
  const { container } = render(
    <EasydevProvider>
      <Card maxWidth="120px">{mockCardText}</Card>
    </EasydevProvider>
  );

  expect(container.querySelector('div')).toHaveStyleRule('max-width', '120px');
});
