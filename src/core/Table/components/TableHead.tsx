import { StyledTableHead } from '../styled';
import { TableHeadProps } from '../types';

export const TableHead = (props: TableHeadProps) => {
  return <StyledTableHead>{props.children}</StyledTableHead>;
};
