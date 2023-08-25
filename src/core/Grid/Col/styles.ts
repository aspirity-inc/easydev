import { styled } from 'styled-components';

import { StyledColProps } from './types';

export const StyledCol = styled('div')<StyledColProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
`;
