import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Breadcrumbs } from '.';

const breadcrumbsItems = [
  { title: 'first item' },
  { title: 'second item', href: '/second-href' },
  { title: 'third item', href: '/second-href/third-href' },
];

test('count of links should be equal to 3 and count of separators - 2, last link should be disabled', () => {
  const { container } = render(
    <EasydevProvider>
      <Breadcrumbs items={breadcrumbsItems} />
    </EasydevProvider>
  );

  expect(screen.queryAllByText('keyboard_arrow_right').length).toBe(2);
  expect(container.querySelectorAll('a').length).toBe(3);
  expect(container.querySelectorAll('a')[0]).not.toHaveAttribute('disabled');
  expect(container.querySelectorAll('a')[1]).not.toHaveAttribute('disabled');
  expect(container.querySelectorAll('a')[2]).toHaveAttribute('disabled');
});

test('custom separator', () => {
  render(
    <EasydevProvider>
      <Breadcrumbs items={breadcrumbsItems} separator=":" />
    </EasydevProvider>
  );

  expect(screen.queryAllByText(':').length).toBe(2);
});
