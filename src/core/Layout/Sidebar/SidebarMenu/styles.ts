import { css, styled } from 'styled-components';

import { Box } from '@core/Box';
import { Flex } from '@core/Flex';
import { getTextVariants } from '@core/Typography/Text/styles';

export const StyledMenu = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledIcon = styled(Box)`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['500'] : theme.colors.surface['200'])};
  transition: color ${({ theme }) => theme.transition.default};
`;

export const StyledMenuItemContent = styled(Flex)`
  width: 100%;
`;

export const defaultHoverStyles = css`
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};

  background-color: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['700']};

  & ${StyledIcon} {
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
  }
`;

export const getCommonMenuItemStyles = ($disabled: boolean, $collapsed: boolean, $hovered: boolean) => {
  return css`
    --transition: ${({ theme }) => theme.transition.default};

    width: 100%;
    min-height: 40px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${getTextVariants('body2')};
    font-weight: 175;
    border-radius: 8px;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['200'])};
    white-space: nowrap;
    transition: background-color var(--transition), color var(--transition);

    ${$collapsed &&
    $hovered &&
    css`
      cursor: pointer;
    `}

    ${!$collapsed &&
    css`
      cursor: pointer;
    `}

    ${!$collapsed
      ? css`
          &:hover:not([disabled]) {
            ${defaultHoverStyles};
          }
        `
      : $hovered &&
        css`
          &:hover:not([disabled]) {
            ${defaultHoverStyles};
          }
          & ${StyledMenuItemContent} {
            gap: 24px;
          }
        `}

      ${$disabled &&
    css`
      cursor: default;
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      pointer-events: none;
      & ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['400'] : theme.colors.surface['500'])};
      }
    `};
  `;
};

export const StyledLabel = styled(Box)`
  --transition: ${({ theme }) => theme.transition.default};
  transition: transform var(--transition) ease, opacity var(--transition) ease;
  transform-origin: left;

  ${({ $collapsedAnimation }) =>
    $collapsedAnimation
      ? css`
          transform: scale(0);
          opacity: 0;
        `
      : css`
          transform: scale(1);
          opacity: 1;
        `}
`;
