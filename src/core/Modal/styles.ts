import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import type { StyledModalWrapperProps } from '@core/Modal/types.ts';

export const ModalWrapper = styled(Box)<StyledModalWrapperProps>`
  position: ${({ $isPortal }) => ($isPortal ? 'absolute' : 'fixed')};
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  visibility: hidden;
  pointer-events: none;

  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      visibility: visible;
      transition: opacity 0.3s ease-out;
      pointer-events: auto;
    `}
`;

export const ModalContent = styled(Box)`
  max-width: 460px;
  display: flex;
  flex-direction: column;
  padding: 40px 24px;
  margin: 32px;
  border-radius: 20px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  ${({ theme }) => (theme.type === 'light' ? theme.shadows.gray : theme.shadows.violet_light)};
`;
