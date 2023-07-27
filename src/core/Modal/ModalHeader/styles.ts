import { css, styled } from 'styled-components';

import { StyledModalContentProps } from '../styles';

export const StyledModalHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
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
