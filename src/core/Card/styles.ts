import { css, styled } from 'styled-components';

import { CardDirectionType, StyledCardProps, StyledMediaProps } from '.';
import { Flex } from '@core/Flex';

export const StyledMedia = styled('div')<StyledMediaProps>`
  width: 100%;

  & img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;

    ${({ $direction }) => {
      return getCommonMediaStyles($direction);
    }}

    ${({ $direction, $borderedMedia }) => {
      return $borderedMedia ? getBorderedMediaStyles() : getDefaultMediaStyles($direction);
    }}
  }
`;

export const StyledCard = styled(Flex)<StyledCardProps>`
  width: ${({ $direction }) => ($direction == 'column' ? '360px' : '600px')};
  flex-wrap: ${({ $direction }) => ($direction == 'column' ? 'wrap' : 'nowrap')};
  align-items: ${({ $direction }) => $direction == 'row' && 'stretch'};
  padding: 16px;

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
        width: 260px;
      `;
    }
  }
};

const getDefaultMediaStyles = ($direction: CardDirectionType) => {
  switch ($direction) {
    case 'column': {
      return css`
        width: calc(100% + 32px);
        margin: -16px -16px 0 -16px;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
      `;
    }
    case 'row': {
      return css`
        height: calc(100% + 32px);
        margin: -16px 0 -16px -16px;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      `;
    }
  }
};

const getBorderedMediaStyles = () => {
  return css`
    border-radius: 4px;
  `;
};
