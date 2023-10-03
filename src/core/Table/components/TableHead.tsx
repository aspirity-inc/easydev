import { StyledTableHead } from '../styled';
import type { TableHeadProps } from '../types';

export const TableHead = ({ children, ...props }: TableHeadProps) => {
  return (
    <StyledTableHead className="easy_table-head" {...props}>
      {children}
    </StyledTableHead>
  );
};
