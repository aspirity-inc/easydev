import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import type { StyledArrowProps } from '@core/Carousel';

export const StyledIcon = styled(Box)`
  display: block;
`;

export const StyledArrow = styled('button')<StyledArrowProps>`
  ${({ $type, $left }) =>
    $type === 'withDots' ? getStyleWithDotsArrowButtons($left) : getStyleCenterArrowButtons($left, $type)};
`;

const getStyleCenterArrowButtons = ($left: boolean, $type: string) => {
  return css`
    ${$type === 'center' &&
    css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
    `}

    ${$left
      ? css`
          left: 16px;
        `
      : css`
          right: 16px;

          & ${StyledIcon} {
            transform: rotateY(180deg);
          }
        `}

    padding: 0;
    border: none;

    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    cursor: pointer;
    transition: background-color ${({ theme }) => theme.transition.default},
      color ${({ theme }) => theme.transition.default};

    background-color: ${({ theme }) => theme.colors.surface['200']};
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['700'])};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface['50']};
      color: ${({ theme }) => theme.colors.surface['900']};
    }

    &:focus-visible,
    &:active,
    &:focus {
      outline: none;
    }
  `;
};

const getStyleWithDotsArrowButtons = ($left: boolean) => {
  return css`
    ${!$left &&
    css`
      & ${StyledIcon} {
        transform: rotateY(180deg);
      }
    `}

    padding: 0;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['400'])};
    cursor: pointer;
    transition: color ${({ theme }) => theme.transition.default};

    &:hover {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    }
    &:focus-visible,
    &:active,
    &:focus {
      outline: none;
    }
    &:disabled {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['700'])};
      cursor: default;
    }
  `;
};
