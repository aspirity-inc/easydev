import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Target } from '.';

const targetText = 'Target value';

test('Target default', () => {
  render(
    <EasydevProvider>
      <Target>{targetText}</Target>
    </EasydevProvider>
  );

  expect(screen.getByText(targetText)).toBeInTheDocument();
});

test('Target with title', () => {
  const titleText = 'Title';

  render(
    <EasydevProvider>
      <Target title={titleText}>{targetText}</Target>
    </EasydevProvider>
  );

  expect(screen.getByText(titleText).tagName).toBe('BUTTON');
});
