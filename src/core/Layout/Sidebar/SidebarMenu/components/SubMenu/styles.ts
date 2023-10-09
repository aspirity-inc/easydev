import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import { defaultHoverStyles, getCommonMenuItemStyles } from '../../styles';
import type { StyledMenuItemProps } from '../../types';
import { AnimationWrapper } from '../ChevronArrow/styles';

export const StyledBox = styled(Box)`
  position: relative;
`;

export const StyledSubMenuItem = styled(Box)<StyledMenuItemProps>`
  ${({ $disabled, $collapsed, $hovered }) =>
    getCommonMenuItemStyles($disabled || false, $collapsed || false, $hovered || false)};

  border-radius: 8px 8px 0px 8px;

  ${({ $collapsed, $hovered }) => {
    if ($collapsed && $hovered) {
      return css`
        ${defaultHoverStyles};
      `;
    }
  }}

  ${({ $opened }) =>
    $opened &&
    css`
      & ${AnimationWrapper} {
        transform: rotateX(180deg);
      }
    `}
`;
