import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledDropdown = styled(Box)<{ $width?: string }>`
  position: relative;
  width: fit-content;

  ${({ $width }) =>
    $width === 'full' &&
    css`
      width: 100%;
    `}
`;
