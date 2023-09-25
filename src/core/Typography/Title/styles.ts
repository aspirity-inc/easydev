import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledTitleProps } from './types.ts';
import { getTitleVariant } from '../styles.ts';

export const StyledTitle = styled(Box)<StyledTitleProps>`
  ${({ $variant }) => getTitleVariant($variant)};
`;
