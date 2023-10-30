import { RocketLaunchIcon } from '@icons';
import { fireEvent, render, renderHook } from '@testing-library/react';
import { expect, test, vi } from 'vitest';

import { EasydevProvider } from '@core/Theme';

import { Pagination } from '.';
import { usePagination } from './hooks/usePagination';

const mockGlobalFn = vi.fn();

test('easy_pagination-item with total', () => {
  const { container } = render(
    <EasydevProvider>
      <Pagination total={3} page={1} onChange={mockGlobalFn} />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_pagination-item').length).toBe(3);
});

test('check count easy_pagination-item with siblings', () => {
  const total = 10;
  const siblings = 3;
  const totalPageNumbers = siblings * 2 + 1;
  const countOfItems = total >= totalPageNumbers ? totalPageNumbers : total;
  const { container } = render(
    <EasydevProvider>
      <Pagination total={total} page={5} siblings={siblings} onChange={mockGlobalFn} />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_pagination-item').length).toBe(countOfItems);
});

test('last page, withEdges', () => {
  const { container } = render(
    <EasydevProvider>
      <Pagination total={10} page={10} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  const arrows = container.getElementsByClassName('easy-icon');
  expect(arrows.length).toBe(4);
  expect(arrows[2].parentNode?.parentNode).toHaveAttribute('disabled');
  expect(arrows[3].parentNode?.parentNode).toHaveAttribute('disabled');
});

test('first page, withEdges', () => {
  const { container } = render(
    <EasydevProvider>
      <Pagination total={10} page={1} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  const arrows = container.getElementsByClassName('easy-icon');
  expect(arrows[0].parentNode?.parentNode).toHaveAttribute('disabled');
  expect(arrows[1].parentNode?.parentNode).toHaveAttribute('disabled');
});

test('check fn calls', () => {
  const mockFn = vi.fn();
  const { container } = render(
    <EasydevProvider>
      <Pagination total={10} page={5} onChange={mockFn} withEdges />
    </EasydevProvider>
  );

  const arrows = container.getElementsByClassName('easy-icon');
  const nextPageButtonIcon = arrows[2];

  const nextPageButton = nextPageButtonIcon.parentNode?.parentNode;

  fireEvent.click(nextPageButton as Element);

  expect(mockFn.call.length).toBe(1);
});

test('hidePages', () => {
  const { container } = render(
    <EasydevProvider>
      <Pagination total={10} page={1} onChange={mockGlobalFn} hidePages />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.easy_pagination-item').length).toBe(0);
});

test('custom icons', () => {
  const icons = {
    prev: <RocketLaunchIcon className="custom-icons prev-icon" />,
    next: <RocketLaunchIcon className="custom-icons next-icon" />,
    first: <RocketLaunchIcon className="custom-icons first-icon" />,
    last: <RocketLaunchIcon className="custom-icons last-icon" />,
  };

  const { container } = render(
    <EasydevProvider>
      <Pagination icons={icons} total={10} page={1} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.custom-icons').length).toBe(4);

  expect(container.querySelectorAll('.prev-icon').length).toBe(1);
  expect(container.querySelectorAll('.next-icon').length).toBe(1);
  expect(container.querySelectorAll('.first-icon').length).toBe(1);
  expect(container.querySelectorAll('.last-icon').length).toBe(1);
});

test('usePagination hook', () => {
  const total = 10;
  let page = 5;
  const onChange = (value: number) => {
    page = value;
  };

  const { result } = renderHook(() => usePagination({ total, siblings: 2, page, onChange }));

  expect(JSON.stringify(result.current)).toEqual(
    JSON.stringify({
      visiblePageRange: [3, 4, 5, 6, 7],
      setPage: () => onChange(page),
      gotToNextPage: () => onChange(page + 1),
      gotToPrevPage: () => onChange(page - 1),
      gotToFirstPage: () => onChange(1),
      gotToLastPage: () => onChange(total),
    })
  );
});
