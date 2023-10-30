import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledCarouselArrow } from '../../types';

export const StyledArrows = styled(Box)<StyledCarouselArrow>`
  ${({ $type }) =>
    $type === 'onTop' &&
    css`
      width: 100%;
      margin-bottom: 48px;
      display: flex;
      justify-content: flex-end;
      gap: 16px;
    `}
`;
