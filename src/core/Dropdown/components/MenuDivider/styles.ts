import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledMenuDivider = styled(Box)`
  margin: 4px 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.surface['400']};
`;
