import { PaginationProps } from './types';
import { PaginationButton } from './PaginationButton';
import { StyledPagination } from './styles';
import { usePagination } from './hooks/usePagination';
import { PaginationItem } from './PaginationItem';

export const Pagination = ({
  total,
  onChange,
  page,
  icons,
  hidePages = false,
  withEdges = false,
  siblings = 2,
}: PaginationProps) => {
  const { visiblePageRange, gotToNextPage, gotToPrevPage, gotToFirstPage, gotToLastPage } = usePagination({
    page,
    onChange,
    total,
    siblings,
  });

  return (
    <StyledPagination wrap="nowrap">
      {withEdges && <PaginationButton icons={icons} variant="first" disabled={page === 1} onClick={gotToFirstPage} />}
      <PaginationButton icons={icons} variant="prev" disabled={page === 1} onClick={gotToPrevPage} />
      {!hidePages &&
        visiblePageRange.map((pageNumber, index) => (
          <PaginationItem
            key={index}
            page={pageNumber}
            active={pageNumber === page}
            onClick={() => onChange(pageNumber)}
          />
        ))}
      <PaginationButton icons={icons} variant="next" disabled={page === total} onClick={gotToNextPage} />
      {withEdges && <PaginationButton icons={icons} variant="last" disabled={page === total} onClick={gotToLastPage} />}
    </StyledPagination>
  );
};
