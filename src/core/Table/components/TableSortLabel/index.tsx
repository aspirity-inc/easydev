import 'material-symbols';

import { StyledSortButton, StyledIcon, StyledTableSortLabel } from './styles';
import { TableSortLabelProps } from '../../types';

export const TableSortLabel = ({
  order = 'asc',
  hideSortButton = false,
  IconComponent,
  onClick,
  children,
  ...props
}: TableSortLabelProps) => {
  const SortButton = () => {
    return (
      <StyledSortButton type="button" onClick={onClick}>
        {IconComponent || (
          <StyledIcon $order={order} className="material-symbols-rounded">
            north
          </StyledIcon>
        )}
      </StyledSortButton>
    );
  };

  return (
    <StyledTableSortLabel gap={4} wrap="nowrap" {...props}>
      {children}
      {hideSortButton ? null : <SortButton />}
    </StyledTableSortLabel>
  );
};
