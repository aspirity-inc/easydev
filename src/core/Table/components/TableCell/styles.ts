import { styled, css } from 'styled-components';

import { Box } from '@core/Box';
import { StyledTableCellProps } from '@core/Table/types';
import { getSubtitleLevelStyles } from '@core/Typography/Subtitle/styles';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledTableCell = styled(Box)<StyledTableCellProps>`
  display: table-cell;
  vertical-align: 'middle';
  text-align: ${({ $align }) => $align};
  padding: 0 16px;
  font-family: inherit;
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};

  ${({ $variant }) => {
    switch ($variant) {
      case 'td': {
        return css`
          height: 64px;

          ${getTextVariants('body2')};
        `;
      }
      case 'th': {
        return css`
          height: 48px;

          ${getSubtitleLevelStyles(4)};
        `;
      }
    }
  }}
`;
