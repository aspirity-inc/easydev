import 'material-symbols';

import { StyledIcon } from './styles';
import type { TableSortIconProps } from '../../../types';

export const TableSortIcon = ({ order, sortIcon }: TableSortIconProps) => (
  <>
    {sortIcon || (
      <StyledIcon $order={order} className="material-symbols-rounded">
        north
      </StyledIcon>
    )}
  </>
);
