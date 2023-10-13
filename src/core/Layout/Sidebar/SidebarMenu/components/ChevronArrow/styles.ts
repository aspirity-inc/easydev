import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledChevronArrowProps } from '../../types';

export const ChevronAnimationWrapper = styled(Box)<StyledChevronArrowProps>`
  transition: transform ${({ theme }) => theme.transition.default} ease;

  ${({ $opened }) =>
    $opened &&
    css`
      transform: rotateX(180deg);
    `}
`;
