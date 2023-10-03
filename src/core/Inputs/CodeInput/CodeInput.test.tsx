import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';
import { lightPalette } from '@core/Theme/themePalette';

import { CodeInput } from '.';

test('length, value', () => {
  const value = 'abcdef';
  const length = 4;
  const { container } = render(
    <EasydevProvider>
      <CodeInput length={length} value={value} />
    </EasydevProvider>
  );

  value.split('').forEach((char: string, index: number) => {
    if (index < length) {
      expect(container.querySelector(`input[value="${char}"]`)).toBeInTheDocument();
    } else {
      expect(container.querySelector(`input[value="${char}"]`)).not.toBeInTheDocument();
    }
  });

  expect(container.querySelectorAll('input').length).toBe(length);
});

test('error', () => {
  const { container } = render(
    <EasydevProvider>
      <CodeInput length={4} value="value" error />
    </EasydevProvider>
  );

  expect(container.querySelector('div')).toHaveStyleRule('color', lightPalette.error['500']);
});

test('onChange', async () => {
  const mockFn = vi.fn();
  const length = 4;
  const { container } = render(
    <EasydevProvider>
      <CodeInput length={length} onChange={mockFn} />
    </EasydevProvider>
  );

  const inputs = container.querySelectorAll('input');
  for (let i = 0; i < inputs.length; i++) {
    await userEvent.type(inputs[i], i.toString());
  }

  expect(mockFn).toBeCalledTimes(length);
});
