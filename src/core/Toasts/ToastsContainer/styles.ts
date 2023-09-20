import { css, styled } from 'styled-components';

import type { ToastPosition } from '../types';

export const StyledContainer = styled.div<StyledToastContainerProps>`
  position: fixed;
  z-index: 2;
  padding: 10px;
  display: flex;
  flex-direction: column;
  pointer-events: none;

  ${({ $position }) => {
    switch ($position) {
      case 'top-left':
        return css`
          top: 0;
          left: 0;
        `;
      case 'top-center':
        return css`
          top: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'top-right':
        return css`
          top: 0;
          right: 0;
        `;
      case 'bottom-left':
        return css`
          bottom: 0;
          left: 0;
        `;
      case 'bottom-center':
        return css`
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        `;
      case 'bottom-right':
        return css`
          bottom: 0;
          right: 0;
        `;
      case 'center-center':
        return css`
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        `;
      default:
        return css`
          top: 0;
          left: 0;
        `;
    }
  }}
`;
