import 'material-symbols';

import { StyledIcon, StyledSortButton } from './styles';
import { TableSortButtonProps } from '../../../types';

export const TableSortButton = ({ order, IconComponent, onClick }: TableSortButtonProps) => (
  <StyledSortButton type="button" onClick={onClick}>
    {IconComponent || (
      <StyledIcon $order={order} className="material-symbols-rounded">
        north
      </StyledIcon>
    )}
  </StyledSortButton>
);
