import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const AnimationWrapper = styled(Box)`
  transition: transform ${({ theme }) => theme.transition.default};
`;
