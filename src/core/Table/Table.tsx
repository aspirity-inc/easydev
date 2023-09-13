import { StyledTable } from './styled';
import { TableProps } from './types';

export const Table = ({ striped = false, withRowBorder = false, children, ...props }: TableProps) => {
  return (
    <StyledTable $striped={striped} $withRowBorder={withRowBorder} {...props}>
      {children}
    </StyledTable>
  );
};
