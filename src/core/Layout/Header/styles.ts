import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledHeaderProps } from './types';

export const StyledHeader = styled(Box)<StyledHeaderProps>`
  width: 100%;
  z-index: 2;
  ${({ $fixed }) => getFixStyles($fixed)};
`;

export const getFixStyles = (fixed?: boolean) => {
  if (fixed) {
    return css`
      position: sticky;
      top: 0;
    `;
  }
};
