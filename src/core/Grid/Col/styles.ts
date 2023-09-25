import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledColProps } from './types';

export const StyledCol = styled(Box)<StyledColProps>`
  flex-basis: ${({ $basis }) => $basis};
  align-self: ${({ $alignSelf }) => $alignSelf};
  align-content: ${({ $alignContent }) => $alignContent};
  flex-grow: ${({ $grow }) => $grow};
  flex-shrink: ${({ $shrink }) => $shrink};
`;
