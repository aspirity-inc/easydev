import 'material-symbols';

import { Flex } from '@core/Flex';

import { StyledTableSortLabel } from './styles';
import { TableSortIcon } from './TableSortIcon';
import type { TableSortLabelProps } from '../../types';

export const TableSortLabel = ({
  order = 'asc',
  hideSortIcon = false,
  sortIcon,
  children,
  ...props
}: TableSortLabelProps) => (
  <StyledTableSortLabel {...props}>
    <Flex gap={4} wrap="nowrap">
      {children}
      {!hideSortIcon && <TableSortIcon order={order} sortIcon={sortIcon} />}
    </Flex>
  </StyledTableSortLabel>
);
