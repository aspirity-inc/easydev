import { fireEvent, render, renderHook, screen } from '@testing-library/react';
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
  render(
    <EasydevProvider>
      <Pagination total={10} page={10} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  const nextPageButtonText = screen.getByText('keyboard_arrow_right');
  expect(nextPageButtonText.parentNode?.parentNode).toHaveAttribute('disabled');

  const lastPageButtonText = screen.getByText('keyboard_double_arrow_right');
  expect(lastPageButtonText.parentNode?.parentNode).toHaveAttribute('disabled');
});

test('first page, withEdges', () => {
  render(
    <EasydevProvider>
      <Pagination total={10} page={1} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  const prevPageButtonText = screen.getByText('keyboard_arrow_left');
  expect(prevPageButtonText.parentNode?.parentNode).toHaveAttribute('disabled');

  const firstPageButtonText = screen.getByText('keyboard_double_arrow_left');
  expect(firstPageButtonText.parentNode?.parentNode).toHaveAttribute('disabled');
});

test('check fn calls', () => {
  const mockFn = vi.fn();
  render(
    <EasydevProvider>
      <Pagination total={10} page={5} onChange={mockFn} withEdges />
    </EasydevProvider>
  );

  const nextPageButtonText = screen.getByText('keyboard_arrow_right');
  const nextPageButton = nextPageButtonText.parentNode?.parentNode;

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
    prev: <div className="material-symbols-rounded">undo</div>,
    next: <div className="material-symbols-rounded">redo</div>,
    first: <div className="material-symbols-rounded">skip_previous</div>,
    last: <div className="material-symbols-rounded">next_plan</div>,
  };

  const { container } = render(
    <EasydevProvider>
      <Pagination icons={icons} total={10} page={1} onChange={mockGlobalFn} withEdges />
    </EasydevProvider>
  );

  expect(container.querySelectorAll('.material-symbols-rounded').length).toBe(4);

  expect(screen.getByText('undo')).toBeInTheDocument();
  expect(screen.getByText('redo')).toBeInTheDocument();
  expect(screen.getByText('skip_previous')).toBeInTheDocument();
  expect(screen.getByText('next_plan')).toBeInTheDocument();
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
