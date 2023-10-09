import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { AnimationIconProps } from '../../types';

export const StyledChevronIcon = styled('span')`
  display: block;
  transition: color ${({ theme }) => theme.transition.default};
  color: ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['700'] : theme.colors.surface['300'])};
`;

export const AnimationWrapper = styled(Box)<AnimationIconProps>`
  transition: transform ${({ theme }) => theme.transition.default};

  ${({ $opened }) =>
    $opened &&
    css`
      transform: rotate(180deg);
    `}
`;
