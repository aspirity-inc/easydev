import { css, styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledTitleProps } from './types.ts';
import { getTitleVariant } from '../styles.ts';

export const StyledTitle = styled(Box)<StyledTitleProps>`
  margin: 0;
  padding: 0;

  ${({ variant }) => getTitleVariant(variant)};

  ${({ $color, $bgColor }) => css`
    color: ${$color};
    background-color: ${$bgColor};
  `};
`;
