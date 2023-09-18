import type { TableRowProps } from '..';
import { StyledTableRow } from '../styled';

export const TableRow = (props: TableRowProps) => {
  return <StyledTableRow>{props.children}</StyledTableRow>;
};
