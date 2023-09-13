import { StyledTableCell } from './styles';
import { TableCellProps } from '../../types';

export const TableCell = ({ variant = 'td', align = 'left', children, ...props }: TableCellProps) => {
  return (
    <StyledTableCell tag={variant} $variant={variant} $align={align} {...props}>
      {children}
    </StyledTableCell>
  );
};
