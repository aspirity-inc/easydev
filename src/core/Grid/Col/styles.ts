import { styled } from 'styled-components';

import type { StyledColProps } from './types';

export const StyledCol = styled('div')<StyledColProps>`
  flex-basis: ${({ $basis }) => $basis};
  align-self: ${({ $alignSelf }) => $alignSelf};
  align-content: ${({ $alignContent }) => $alignContent};
`;
