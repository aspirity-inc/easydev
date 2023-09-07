import { styled } from 'styled-components';

import type { StyledSpaceProps } from './types';

export const StyledSpace = styled('div')<StyledSpaceProps>`
  display: flex;
  max-width: fit-content;
  flex-wrap: wrap;
  flex-direction: ${({ $direction }) => $direction || 'column'};
  gap: ${({ $size }) => (typeof $size === 'undefined' ? 16 : $size)}px;
  align-items: ${({ $alignItems }) => $alignItems || 'center'};
  justify-content: ${({ $justifyContent }) => $justifyContent || 'flex-start'};
`;
