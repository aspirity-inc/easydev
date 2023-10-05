import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledSubMenu = styled(Box)`
  display: flex;
  flex-direction: column;
`;

export const WrapperMenu = styled(Box)<{ $opened: boolean; $height: number }>`
  transition: height 0.3s cubic-bezier(0, 0.91, 1, 1), opacity 0.2s ease-out;

  ${({ $opened, $height }) => {
    if ($opened) {
      return css`
        height: ${$height}px;
        opacity: 1;
      `;
    } else {
      return css`
        height: 0;
        opacity: 0;
        overflow: hidden;
      `;
    }
  }};
`;
