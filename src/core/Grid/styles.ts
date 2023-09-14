import { css, styled } from 'styled-components';

import { StyledCol } from './Col/styles';
import type { StyledRowProps } from './types';

export const StyledRow = styled('div')<StyledRowProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  flex-wrap: ${({ $wrap }) => $wrap || 'wrap'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};
  box-sizing: border-box;

  ${({ $columnSpacing, $rowSpacing }) => css`
    ${StyledCol} {
      padding-top: ${$rowSpacing || 0}px;
      padding-left: ${$columnSpacing || 0}px;
    }
  `};
`;

export const ItemExample = styled('div')`
  --defaultBorderColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['700']};
  border: 1px solid var(--defaultBorderColor);
  padding: 14px 24px;
`;
