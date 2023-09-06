import { styled } from 'styled-components';

import type { StyledWrapperProps } from './types';

export const StyledWrapper = styled('div')<StyledWrapperProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => $gap || 0}px;
  height: 100%;
  width: 100%;
`;
