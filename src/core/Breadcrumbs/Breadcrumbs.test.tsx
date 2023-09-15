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

  const linksContainer = container.querySelectorAll('a');
  expect(linksContainer.length).toBe(3);
  expect(linksContainer[0]).not.toHaveAttribute('disabled');
  expect(linksContainer[1]).not.toHaveAttribute('disabled');
  expect(linksContainer[2]).toHaveAttribute('disabled');
});

test('custom separator', () => {
  render(
    <EasydevProvider>
      <Breadcrumbs items={breadcrumbsItems} separator=":" />
    </EasydevProvider>
  );

  expect(screen.queryAllByText(':').length).toBe(2);
});
