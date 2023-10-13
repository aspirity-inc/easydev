import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { StyledIcon, getCommonMenuItemStyles } from '../../styles';
import type { StyledMenuItemProps } from '../../types';

export const StyledMenuItem = styled(Box)<StyledMenuItemProps>`
  ${({ $disabled, $collapsed, $hovered }) =>
    getCommonMenuItemStyles($disabled || false, $collapsed || false, $hovered || false)};

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
