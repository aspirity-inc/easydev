import { styled } from 'styled-components';

import { Box } from '@core/Box';

export const StyledMenuDivider = styled(Box)`
  border-bottom: 1px solid
    ${({ theme }) => (theme.type === 'light' ? theme.colors.surface['300'] : theme.colors.surface['200'])};
`;
