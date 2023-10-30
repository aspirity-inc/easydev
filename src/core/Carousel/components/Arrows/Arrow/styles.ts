import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import type { StyledArrowProps } from '@core/Carousel';

export const StyledIcon = styled(Box)<StyledArrowProps>`
  display: block;
  ${({ $type }) => ($type === 'withDots' ? getStyleWithDotsArrowButtons() : getStyleCenterArrowButtons())};
`;

export const StyledArrow = styled('button')<StyledArrowProps>`
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:focus-visible,
  &:active,
  &:focus {
    outline: none;
  }

  ${({ $type, $left }) => {
    switch ($type) {
      case 'withDots': {
        return (
          !$left &&
          css`
            transform: rotateY(180deg);
          `
        );
      }
      case 'center': {
        return css`
          position: absolute;
          top: 50%;
          z-index: 1;

          ${$left
            ? css`
                left: 16px;
                transform: translateY(-50%);
              `
            : css`
                right: 16px;
                transform: rotateY(180deg) translateY(-50%);
              `}
        `;
      }
      case 'onTop': {
        return css`
          ${$left
            ? css`
                left: 16px;
              `
            : css`
                right: 16px;
                transform: rotateY(180deg);
              `}
        `;
      }
    }
  }}
`;

const getStyleCenterArrowButtons = () => {
  return css`
    display: flex;
    width: 40px;
    height: 40px;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    transition: background-color ${({ theme }) => theme.transition.default},
      color ${({ theme }) => theme.transition.default};

    background-color: ${({ theme }) => theme.colors.surface['200']};
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['700'])};

    &:hover:not(:disabled) {
      background-color: ${({ theme }) => theme.colors.surface['50']};
      color: ${({ theme }) => theme.colors.surface['900']};
    }
  `;
};

const getStyleWithDotsArrowButtons = () => {
  return css`
    background-color: transparent;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['600'] : theme.colors.surface['400'])};
    transition: color ${({ theme }) => theme.transition.default};

    &:hover {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    }

    &:disabled {
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['700'])};
      cursor: default;
    }
  `;
};
