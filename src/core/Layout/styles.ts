import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledLayout = styled(Box)`
  display: grid;
  box-sizing: border-box;
  min-height: 100svh;
  grid-template-rows: auto 1fr auto;
`;
