import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { Flex } from '@core/Flex';

import type { CardDirectionType, StyledCardProps, StyledMediaProps } from '.';

export const StyledMedia = styled(Box)<StyledMediaProps>`
  width: ${({ $direction }) => ($direction === 'column' ? '100%' : 'auto')};

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

    ${({ $direction }) => {
      return getCommonMediaStyles($direction);
    }}
  }

  ${({ $direction, $borderedMedia }) => {
    return $borderedMedia ? getBorderedMediaStyles($direction) : getDefaultMediaStyles($direction);
  }}
`;

export const StyledContent = styled(Box)<StyledCardProps>`
  width: 100%;
  padding: 16px;
`;

export const StyledCard = styled(Flex)<StyledCardProps>`
  width: 100%;
  flex-wrap: ${({ $direction }) => ($direction == 'column' ? 'wrap' : 'nowrap')};
  align-items: ${({ $direction }) => $direction == 'row' && 'stretch'};
  border-radius: 8px;
  background: ${({ theme }) => (theme.type == 'light' ? theme.colors.surface['50'] : theme.colors.surface['900'])};

  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'outline': {
        return css`
          border: 1px solid ${theme.colors.surface['400']};
        `;
      }
      case 'shadow': {
        return css`
          ${theme.shadows.gray};
        `;
      }
      default:
        return css``;
    }
  }}
`;

const getCommonMediaStyles = ($direction: CardDirectionType) => {
  switch ($direction) {
    case 'column': {
      return css`
        height: 145px;
      `;
    }
    case 'row': {
      return css`
        max-width: 260px;
      `;
    }
  }
};

const getDefaultMediaStyles = ($direction: CardDirectionType) => {
  switch ($direction) {
    case 'column': {
      return css`
        & img {
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
        }
      `;
    }
    case 'row': {
      return css`
        & img {
          border-top-left-radius: 8px;
          border-bottom-left-radius: 8px;
        }
      `;
    }
  }
};

const getBorderedMediaStyles = ($direction: CardDirectionType) => {
  return css`
    padding: ${$direction === 'column' ? '16px 16px 0 16px' : '16px 0 16px 16px'};

    & img {
      border-radius: 4px;
    }
  `;
};
