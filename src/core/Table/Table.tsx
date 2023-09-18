import { StyledTable } from './styled';
import type { TableProps } from './types';

export const Table = ({ striped = false, withRowBorder = false, children, ...props }: TableProps) => {
  return (
    <StyledTable className="easy_table" $striped={striped} $withRowBorder={withRowBorder} {...props}>
      {children}
    </StyledTable>
  );
};
