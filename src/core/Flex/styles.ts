import { styled } from 'styled-components';

import type { StyledFlexProps } from './types';

export const StyledFlex = styled('div')<StyledFlexProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  flex-wrap: ${({ $wrap }) => $wrap || 'wrap'};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
`;
