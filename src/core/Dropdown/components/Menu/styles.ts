import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledMenuProps } from '../../types';

export const StyledMenu = styled(Box)<StyledMenuProps>`
  position: absolute;
  min-width: 250px;

  border: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.secondary['100'] : theme.colors.surface['600'])};
  border-radius: ${({ theme }) => theme.spacing.borderRadius.medium}px;
  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['50'])};

  ${({ $position }) => getMenuPositionStyle($position)};
`;

const getMenuPositionStyle = ($position: string) => {
  switch ($position) {
    case 'bottom-left': {
      return css`
        bottom: 0;
        left: 0;
        transform: translateY(100%);
      `;
    }
    case 'bottom-center': {
      return css`
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 100%);
      `;
    }
    case 'bottom-right': {
      return css`
        bottom: 0;
        right: 0;
        transform: translateY(100%);
      `;
    }
    case 'top-left': {
      return css`
        top: 0;
        left: 0;
        transform: translateY(-100%);
      `;
    }
    case 'top-center': {
      return css`
        top: 0;
        left: 50%;
        transform: translate(-50%, -100%);
      `;
    }
    case 'top-right': {
      return css`
        top: 0;
        right: 0;
        transform: translateY(-100%);
      `;
    }
    case 'left-top': {
      return css`
        top: 0;
        left: 0;
        transform: translateX(-100%);
      `;
    }
    case 'left-center': {
      return css`
        top: 50%;
        left: 0;
        transform: translate(-100%, -50%);
      `;
    }
    case 'left-bottom': {
      return css`
        bottom: 0;
        left: 0;
        transform: translateX(-100%);
      `;
    }
    case 'right-top': {
      return css`
        top: 0;
        right: 0;
        transform: translateX(100%);
      `;
    }
    case 'right-center': {
      return css`
        top: 50%;
        right: 0;
        transform: translate(100%, -50%);
      `;
    }
    case 'right-bottom': {
      return css`
        bottom: 0;
        right: 0;
        transform: translateX(100%);
      `;
    }
  }
};
