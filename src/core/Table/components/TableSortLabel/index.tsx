import 'material-symbols';

import { StyledTableSortLabel } from './styles';
import { TableSortButton } from './TableSortButton';
import type { TableSortLabelProps } from '../../types';

export const TableSortLabel = ({
  order = 'asc',
  hideSortButton = false,
  sortIcon,
  onClick,
  children,
  ...props
}: TableSortLabelProps) => (
  <StyledTableSortLabel gap={4} wrap="nowrap" {...props}>
    {children}
    {!hideSortButton && <TableSortButton onClick={onClick} order={order} sortIcon={sortIcon} />}
  </StyledTableSortLabel>
);
