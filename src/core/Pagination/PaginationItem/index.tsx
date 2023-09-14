import { PaginationItemProps } from '../types';
import { StyledPaginationItem } from './styles';

export const PaginationItem = ({ page, active, onClick }: PaginationItemProps) => {
  return (
    <StyledPaginationItem justify="center" $active={active} onClick={onClick}>
      {page}
    </StyledPaginationItem>
  );
};
