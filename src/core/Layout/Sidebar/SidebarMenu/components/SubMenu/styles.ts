import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { getCommonMenuItemStyles } from '../../styles';
import type { StyledMenuItemProps } from '../../types';
import { AnimationWrapper } from '../ChevronArrow/styles';
import { WrapperMenu } from '../SubMenuList/styles';

export const Wrapper = styled(Box)<{ $collapsed: boolean }>`
  ${({ $collapsed }) => {
    return (
      $collapsed &&
      css`
        position: relative;

        & ${WrapperMenu} {
          position: absolute;
          z-index: 10;
        }
      `
    );
  }};
`;

export const StyledSubMenuItem = styled(Box)<StyledMenuItemProps>`
  ${({ $disabled }) => getCommonMenuItemStyles($disabled || false)};

  &:hover:not([disabled]) {
    cursor: pointer;
    color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['900'] : theme.colors.surface['100'])};
    background-color: ${({ theme }) =>
      theme.type === 'light' ? theme.colors.surface['200'] : theme.colors.surface['900']};
  }

  ${({ $opened }) =>
    $opened &&
    css`
      & ${AnimationWrapper} {
        transform: rotateX(180deg);
      }
    `}
`;
