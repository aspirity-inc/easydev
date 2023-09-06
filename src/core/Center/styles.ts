import { styled } from 'styled-components';

import type { StyledCenterProps } from './types';

export const StyledCenter = styled('div')<StyledCenterProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => $gap || 0}px;
  height: 100%;
  width: 100%;
`;
