import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const Step = styled(Box)`
  background-color: var(--secondaryColor);
  height: 10px;
  width: 100%;
  border-radius: 10px;
  transition: background-color ${({ theme }) => theme.transition.default};

  &.active {
    background-color: var(--mainColor);
  }
`;
