import { StyledPaginationItem } from './styles';
import type { PaginationItemProps } from '../types';

export const PaginationItem = ({ page, active, onClick }: PaginationItemProps) => {
  return (
    <StyledPaginationItem justify="center" $active={active} onClick={onClick}>
      {page}
    </StyledPaginationItem>
  );
};
