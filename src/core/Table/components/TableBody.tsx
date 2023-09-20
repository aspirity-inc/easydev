import type { TableBodyProps } from '..';
import { StyledTableBody } from '../styled';

export const TableBody = (props: TableBodyProps) => {
  return <StyledTableBody className="easy_table-body">{props.children}</StyledTableBody>;
};
