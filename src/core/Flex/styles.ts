import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledFlexProps } from './types';

export const StyledFlex = styled(Box)<StyledFlexProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'center'};
  flex-wrap: ${({ $wrap }) => $wrap || 'wrap'};
  row-gap: ${({ $rowGap }) => $rowGap && `${$rowGap}px`};
  column-gap: ${({ $columnGap }) => $columnGap && `${$columnGap}px`};
  gap: ${({ $gap }) => $gap && `${$gap}px`};
`;
