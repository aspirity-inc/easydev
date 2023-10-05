import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { StyledMenuItemProps } from '../../types';

export const AnimationWrapper = styled(Box)<StyledMenuItemProps>`
  transition: transform ${({ theme }) => theme.transition.default};
`;
