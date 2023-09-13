import { TableBodyProps } from '..';
import { StyledTableBody } from '../styled';

export const TableBody = (props: TableBodyProps) => {
  return <StyledTableBody>{props.children}</StyledTableBody>;
};
