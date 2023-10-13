import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledMenuDividerProps } from '../../types';

export const StyledMenuDivider = styled(Box)<StyledMenuDividerProps>`
  width: 100%;
  transition: width ${({ theme }) => theme.transition.default};

  ${({ $collapsed, $minWidth }) =>
    $collapsed &&
    css`
      width: calc(${$minWidth}px - (8px * 2)); // 56px width of collapsed easy_sidebar, 8px * 2 paddings of easy_sidebar-content
    `}

  border-bottom: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['200'])};
`;
