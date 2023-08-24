import { styled } from 'styled-components';

import { StyledGridItemProps } from './types';

export const StyledGridItem = styled('div')<StyledGridItemProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;
