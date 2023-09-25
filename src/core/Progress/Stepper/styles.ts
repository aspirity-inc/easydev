import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledStepper = styled(Box)`
  --mainColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['500'] : theme.colors.secondary['400']};
  --secondaryColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.secondary['200'] : theme.colors.surface['700']};
  --secondaryNumericColor: ${({ theme }) =>
    theme.type === 'light' ? theme.colors.surface['50'] : theme.colors.surface['800']};

  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4px;
  z-index: 1;
`;
