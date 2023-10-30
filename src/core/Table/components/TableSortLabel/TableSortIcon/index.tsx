import { NorthIcon } from '@icons';

import { StyledIcon } from './styles';
import type { TableSortIconProps } from '../../../types';

export const TableSortIcon = ({ order, sortIcon }: TableSortIconProps) => (
  <>
    {sortIcon || (
      <StyledIcon $order={order}>
        <NorthIcon />
      </StyledIcon>
    )}
  </>
);
