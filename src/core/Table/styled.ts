import { css, styled } from 'styled-components';

import type { StyledTableProps, TableBodyProps, TableRowProps } from '.';

export const StyledTableBody = styled('tbody')<TableBodyProps>``;

export const StyledTableHead = styled('thead')``;

export const StyledTableRow = styled('tr')<TableRowProps>``;

export const StyledTable = styled('table')<StyledTableProps>`
  display: table;
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;

  border-radius: 8px;

  ${({ $striped }) => {
    return (
      $striped &&
      css`
        & ${StyledTableBody} ${StyledTableRow}:nth-of-type(odd) {
          background-color: ${({ theme }) =>
            theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['800']};
        }
      `
    );
  }}

  ${({ $withRowBorder }) => {
    return (
      $withRowBorder &&
      css`
        & ${StyledTableRow} {
          border-bottom: 1px solid ${({ theme }) => theme.colors.surface['400']};
        }
      `
    );
  }}
`;
