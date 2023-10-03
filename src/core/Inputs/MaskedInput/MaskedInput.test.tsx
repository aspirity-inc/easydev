import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { MaskedInput } from '.';

const mask = [/[A-Z]/, /[0-9]/, /[A-Z]/, ' ', /[0-9]/, /[A-Z]/, /[0-9]/];

test('correct mask', async () => {
  const { container } = render(
    <EasydevProvider>
      <MaskedInput mask={mask} label="" />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;

  await userEvent.type(inputElement, 'A3Z5J5');
  expect(inputElement).toHaveValue('A3Z 5J5');
});

test('incorrect mask', async () => {
  const { container } = render(
    <EasydevProvider>
      <MaskedInput mask={mask} label="" />
    </EasydevProvider>
  );

  const inputElement = container.querySelector('input') as Element;

  await userEvent.type(inputElement, 'abcdef');

  expect(inputElement).not.toHaveValue('abc def');
});
