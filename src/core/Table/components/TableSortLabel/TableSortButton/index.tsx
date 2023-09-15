import 'material-symbols';

import { StyledIcon, StyledSortButton } from './styles';
import type { TableSortButtonProps } from '../../../types';

export const TableSortButton = ({ order, sortIcon, onClick }: TableSortButtonProps) => (
  <StyledSortButton type="button" onClick={onClick}>
    {sortIcon || (
      <StyledIcon $order={order} className="material-symbols-rounded">
        north
      </StyledIcon>
    )}
  </StyledSortButton>
);
