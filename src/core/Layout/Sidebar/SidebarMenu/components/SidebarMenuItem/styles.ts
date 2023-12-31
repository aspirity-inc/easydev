import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { StyledIcon, getCommonMenuItemStyles } from '../../styles';
import type { StyledSidebarMenuItemProps } from '../../types';

export const StyledMenuItem = styled(Box)<StyledSidebarMenuItemProps>`
  ${({ $disabled, $collapsed, $hovered }) =>
    getCommonMenuItemStyles($disabled || false, $collapsed || false, $hovered || false)};

  ${({ $hovered, $maxWidth }) =>
    $hovered &&
    css`
      width: ${$maxWidth}px;
    `};

  ${({ $active }) =>
    $active &&
    css`
      color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['900'] : theme.colors.primary['400'])};

      & ${StyledIcon} {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['700'] : theme.colors.primary['400'])};
      }

      &:hover:not([disabled]) {
        color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['900'] : theme.colors.primary['400'])};

        & ${StyledIcon} {
          color: ${({ theme }) => (theme.type === 'light' ? theme.colors.primary['700'] : theme.colors.primary['400'])};
        }
      }
    `}
`;
