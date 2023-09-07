import { css, styled } from 'styled-components';

import { CardDirectionType, StyledCardProps, StyledMediaProps } from '.';
import { Flex } from '@core/Flex';

export const StyledMedia = styled('div')<StyledMediaProps>`
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

export const StyledContent = styled('div')<StyledCardProps>`
  width: 100%;
  padding: 16px;
`;

export const StyledCard = styled(Flex)<StyledCardProps>`
  width: 100%;
  max-width: ${({ $maxWidth }) => $maxWidth && getMaxWidth($maxWidth)};
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

const getMaxWidth = ($maxWidth: string | number) => (typeof $maxWidth === 'number' ? `${$maxWidth}px` : $maxWidth);

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
