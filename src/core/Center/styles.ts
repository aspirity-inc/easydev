import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledCenterProps } from './types';

export const StyledCenter = styled(Box)<StyledCenterProps>`
  display: ${({ $inline }) => ($inline ? 'inline-flex' : 'flex')};
  align-items: center;
  justify-content: center;
  gap: ${({ $gap }) => $gap || 0}px;
  height: 100%;
  width: 100%;
`;
