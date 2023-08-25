import { styled } from 'styled-components';

import { StyledColProps } from './types';

export const StyledCol = styled('div')<StyledColProps>`
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  flex-basis: ${({ basis }) => basis};
  flex-grow: ${({ grow }) => grow};
  flex-shrink: ${({ shrink }) => shrink};
  align-self: ${({ alignSelf }) => alignSelf};
  align-content: ${({ alignContent }) => alignContent};
`;
