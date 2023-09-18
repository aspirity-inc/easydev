import { StyledTableHead } from '../styled';
import type { TableHeadProps } from '../types';

export const TableHead = (props: TableHeadProps) => {
  return <StyledTableHead>{props.children}</StyledTableHead>;
};
