import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { ProgressBar } from '.';

test('progress bar shows %', () => {
  render(
    <EasydevProvider>
      <ProgressBar value={25} />
    </EasydevProvider>
  );

  expect(screen.getByText('25%')).toBeInTheDocument();
});

test('border-radius rounded', () => {
  const { container } = render(
    <EasydevProvider>
      <ProgressBar value={25} rounded />
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_progressBar')).toHaveStyleRule('border-radius', '10px');
});

test('% more than 100 shows 100%', () => {
  render(
    <EasydevProvider>
      <ProgressBar value={105} rounded={false} />
    </EasydevProvider>
  );

  expect(screen.queryByText('105%')).not.toBeInTheDocument();
  expect(screen.getByText('100%')).toBeInTheDocument();
});

test('custom title', () => {
  render(
    <EasydevProvider>
      <ProgressBar value={80} customTitle="custom title" />
    </EasydevProvider>
  );

  expect(screen.queryByText('80%')).not.toBeInTheDocument();
  expect(screen.getByText('custom title')).toBeInTheDocument();
});

test('small size', () => {
  const { container } = render(
    <EasydevProvider>
      <ProgressBar value={80} size="small" />
    </EasydevProvider>
  );

  expect(container.querySelector('.easy_progressBar')).toHaveStyleRule('height', '5px');
});
