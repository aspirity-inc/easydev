import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Box } from '.';

const mockBoxText = 'Box text';

test('as', () => {
  render(
    <EasydevProvider>
      <Box as="h4">{mockBoxText}</Box>
    </EasydevProvider>
  );

  expect(screen.getByText(mockBoxText).tagName).toBe('H4');
});

test('className', () => {
  const { container } = render(
    <EasydevProvider>
      <Box className="box">{mockBoxText}</Box>
    </EasydevProvider>
  );

  expect(container.querySelector('.box')).toBeInTheDocument();
});

test('style', () => {
  render(
    <EasydevProvider>
      <Box style={{ fontSize: 50 }}>{mockBoxText}</Box>
    </EasydevProvider>
  );

  expect(screen.getByText(mockBoxText)).toHaveStyle({ fontSize: 50 });
});
