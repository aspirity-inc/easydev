import { styled } from 'styled-components';

import { Box } from '@core/Box';

import type { MainProps } from './types';

const StyledMain = styled(Box)``;

export const Main = ({ children, as = 'main', ...props }: MainProps) => (
  <StyledMain className="easy_main" as={as} {...props}>
    {children}
  </StyledMain>
);
