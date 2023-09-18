import { fireEvent, render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { RangeSlider } from '.';

test('tooltip shows %', () => {
  render(
    <EasydevProvider>
      <RangeSlider value={20} />
    </EasydevProvider>
  );

  expect(screen.getByText('20%')).toBeInTheDocument();
});

test('onChange works', () => {
  let isChanged = false;
  const { container } = render(
    <EasydevProvider>
      <RangeSlider
        value={20}
        onChange={() => {
          isChanged = !isChanged;
        }}
      />
    </EasydevProvider>
  );

  const input = container.querySelector('input') as Element;
  fireEvent.change(input, { target: { value: '40' } });
  expect(isChanged).toBeTruthy();
});

test('opacity 1 with tooltipShown always', () => {
  const { container } = render(
    <EasydevProvider>
      <RangeSlider value={20} tooltipShown="always" />
    </EasydevProvider>
  );

  expect(container.querySelector('span')).toHaveStyleRule('opacity', '1');
});

test('tooltip false, should not show tooltip', () => {
  render(
    <EasydevProvider>
      <RangeSlider value={20} tooltip={false} />
    </EasydevProvider>
  );

  expect(screen.queryByText('20%')).not.toBeInTheDocument();
});
