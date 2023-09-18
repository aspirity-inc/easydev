import type { PaginationHookParams } from '../types';

function createArray(start: number, end: number) {
  const length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
}

export function usePagination({ total, siblings, page, onChange }: PaginationHookParams) {
  const totalPages = Math.max(total, 0);

  const setPage = (page: number) => {
    if (page <= 0) {
      onChange(1);
    } else if (page > totalPages) {
      onChange(totalPages);
    } else {
      onChange(page);
    }
  };

  const gotToNextPage = () => setPage(page + 1);
  const gotToPrevPage = () => setPage(page - 1);
  const gotToFirstPage = () => setPage(1);
  const gotToLastPage = () => setPage(totalPages);

  const getVisiblePageRange = () => {
    const totalPageNumbers = siblings * 2 + 1;

    if (totalPageNumbers >= totalPages) {
      return createArray(1, totalPages);
    }

    let leftSiblingIndex = Math.max(page - siblings, 1);
    const rightSiblingIndex = Math.min(leftSiblingIndex + totalPageNumbers - 1, totalPages);
    if (rightSiblingIndex === totalPages) {
      leftSiblingIndex = rightSiblingIndex - totalPageNumbers + 1;
    }

    return createArray(leftSiblingIndex, rightSiblingIndex);
  };

  return {
    visiblePageRange: getVisiblePageRange(),
    setPage,
    gotToNextPage,
    gotToPrevPage,
    gotToFirstPage,
    gotToLastPage,
  };
}
