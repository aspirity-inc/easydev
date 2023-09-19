import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme/ThemeContext';

import { Toast } from '.';

test('', () => {
  render(
    <EasydevProvider>
      <Toast
        onDelete={() => {
          alert(1);
        }}
        position={'top-right'}
      />
    </EasydevProvider>
  );
  expect(screen.getByText('')).toBeInTheDocument();
});
