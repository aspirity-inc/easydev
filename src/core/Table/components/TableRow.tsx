import type { TableRowProps } from '..';
import { StyledTableRow } from '../styled';

export const TableRow = (props: TableRowProps) => {
  return <StyledTableRow className="easy_table-row">{props.children}</StyledTableRow>;
};
