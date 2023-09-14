import 'material-symbols';

import { StyledTableSortLabel } from './styles';
import { TableSortButton } from './TableSortButton';
import { TableSortLabelProps } from '../../types';

export const TableSortLabel = ({
  order = 'asc',
  hideSortButton = false,
  IconComponent,
  onClick,
  children,
  ...props
}: TableSortLabelProps) => (
  <StyledTableSortLabel gap={4} wrap="nowrap" {...props}>
    {children}
    {!hideSortButton && <TableSortButton onClick={onClick} order={order} IconComponent={IconComponent} />}
  </StyledTableSortLabel>
);
