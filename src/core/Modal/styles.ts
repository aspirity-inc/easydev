import { css, styled } from 'styled-components';

type StyledModalWrapperProps = {
  open: boolean;
  $isPortal: boolean;
};

export type StyledModalContentProps = {
  $colorful?: boolean;
};

export const ModalWrapper = styled.div<StyledModalWrapperProps>`
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

export const ModalContent = styled.div<StyledModalContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800'])};
  --colorful: ${({ theme }) => (theme.type === 'light' ? theme.colors.tretiary['50'] : theme.colors.tretiary['200'])};

  max-width: 460px;
  display: flex;
  flex-direction: column;

  padding: 40px 24px;
  margin: 32px;

  ${({ $colorful }) =>
    $colorful
      ? css`
          background-color: var(--colorful);
        `
      : css`
          background-color: var(--monochrome);
        `};

  border-radius: 20px;
  ${({ theme }) => (theme.type === 'light' ? theme.shadows.gray : theme.shadows.violet_light)};
`;

export const StyledCloseButton = styled('button')<StyledModalContentProps>`
  --monochrome: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['100'])};
  --colorful: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['800'])};

  display: block;
  padding: 0;
  margin: 0;
  margin-left: auto;

  background-color: transparent;
  border: 0;
  cursor: pointer;

  ${({ $colorful }) =>
    $colorful
      ? css`
          color: var(--colorful);
        `
      : css`
          color: var(--monochrome);
        `};

  & > div {
    display: block;
  }
`;
